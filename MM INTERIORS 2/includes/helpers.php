<?php

declare(strict_types=1);

function env_url(string $path = ''): string
{
    $base = rtrim(APP_URL !== '' ? APP_URL : ((isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost')), '/');
    return $base . '/' . ltrim($path, '/');
}

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function slugify(string $text): string
{
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9]+/i', '-', $text) ?? '';
    return trim($text, '-') ?: 'item';
}

function csrf_token(): string
{
    if (empty($_SESSION['_csrf'])) {
        $_SESSION['_csrf'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['_csrf'];
}

function verify_csrf(): void
{
    $token = $_POST['_csrf'] ?? '';
    if (!hash_equals($_SESSION['_csrf'] ?? '', $token)) {
        http_response_code(419);
        exit('Invalid CSRF token.');
    }
}

function redirect_to(string $path): never
{
    header('Location: ' . $path);
    exit;
}

function flash(string $key, ?string $message = null): ?string
{
    if ($message !== null) {
        $_SESSION['_flash'][$key] = $message;
        return null;
    }

    $value = $_SESSION['_flash'][$key] ?? null;
    unset($_SESSION['_flash'][$key]);
    return $value;
}

function setting(string $key, ?string $fallback = null): ?string
{
    static $settings = null;

    if ($settings === null) {
        $settings = [];
        try {
            $rows = db()->query('SELECT setting_key, setting_value FROM settings')->fetchAll();
            foreach ($rows as $row) {
                $settings[$row['setting_key']] = $row['setting_value'];
            }
        } catch (Throwable $e) {
            $settings = [];
        }
    }

    return $settings[$key] ?? $fallback;
}

function upload_file(array $file, string $subfolder = 'general'): ?string
{
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        return null;
    }

    $allowed = [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'image/gif' => 'gif',
    ];

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
    if (!isset($allowed[$mime]) || ($file['size'] ?? 0) > 5 * 1024 * 1024) {
        return null;
    }

    $targetDir = UPLOAD_DIR . '/' . trim($subfolder, '/');
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0775, true);
    }

    $filename = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
    $targetPath = $targetDir . '/' . $filename;
    move_uploaded_file($file['tmp_name'], $targetPath);

    $gcsUrl = upload_file_to_gcs($targetPath, $mime, trim($subfolder, '/') . '/' . $filename);
    if ($gcsUrl !== null) {
        @unlink($targetPath);
        return $gcsUrl;
    }

    return trim($subfolder, '/') . '/' . $filename;
}

function asset_url(?string $path): string
{
    if (!$path) {
        return '/assets/images/placeholder.svg';
    }

    if (str_starts_with($path, 'http')) {
        return $path;
    }

    if (str_starts_with($path, 'uploads/')) {
        return '/' . $path;
    }

    return '/uploads/' . ltrim($path, '/');
}

function render(string $view, array $data = [], string $layout = 'main'): void
{
    extract($data, EXTR_SKIP);
    $viewFile = __DIR__ . '/../views/' . $view . '.php';
    $layoutFile = __DIR__ . '/../views/layouts/' . $layout . '.php';

    ob_start();
    require $viewFile;
    $content = ob_get_clean();

    require $layoutFile;
}

function db_row(string $sql, array $params = []): ?array
{
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    $row = $stmt->fetch();
    return $row ?: null;
}

function db_all(string $sql, array $params = []): array
{
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll();
}

function save_record(string $table, array $data, ?int $id = null): int
{
    $columns = array_keys($data);
    $payload = array_values($data);

    if ($id) {
        $sets = implode(', ', array_map(static fn ($column) => "{$column} = ?", $columns));
        $payload[] = $id;
        $stmt = db()->prepare("UPDATE {$table} SET {$sets}, updated_at = NOW() WHERE id = ?");
        $stmt->execute($payload);
        return $id;
    }

    $fields = implode(', ', $columns);
    $placeholders = implode(', ', array_fill(0, count($columns), '?'));
    $stmt = db()->prepare("INSERT INTO {$table} ({$fields}, created_at, updated_at) VALUES ({$placeholders}, NOW(), NOW())");
    $stmt->execute($payload);

    return (int) db()->lastInsertId();
}

function delete_record(string $table, int $id): void
{
    $stmt = db()->prepare("DELETE FROM {$table} WHERE id = ?");
    $stmt->execute([$id]);
}

function gcs_service_account_config(): ?array
{
    static $config = null;
    static $loaded = false;

    if ($loaded) {
        return $config;
    }

    $loaded = true;

    if (!defined('GCS_SERVICE_ACCOUNT_JSON') || !is_file(GCS_SERVICE_ACCOUNT_JSON)) {
        return null;
    }

    try {
        $config = json_decode((string) file_get_contents(GCS_SERVICE_ACCOUNT_JSON), true, 512, JSON_THROW_ON_ERROR);
    } catch (Throwable $e) {
        $config = null;
    }

    return $config;
}

function gcs_base64url(string $value): string
{
    return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
}

function gcs_access_token(): ?string
{
    static $token = null;
    static $expiresAt = 0;

    if ($token !== null && $expiresAt > time() + 60) {
        return $token;
    }

    $config = gcs_service_account_config();
    if ($config === null) {
        return null;
    }

    $now = time();
    $header = ['alg' => 'RS256', 'typ' => 'JWT'];
    $claims = [
        'iss' => $config['client_email'],
        'scope' => 'https://www.googleapis.com/auth/devstorage.read_write',
        'aud' => $config['token_uri'],
        'exp' => $now + 3600,
        'iat' => $now,
    ];

    $unsignedJwt = gcs_base64url(json_encode($header, JSON_THROW_ON_ERROR)) . '.' . gcs_base64url(json_encode($claims, JSON_THROW_ON_ERROR));
    $signature = '';

    if (!openssl_sign($unsignedJwt, $signature, $config['private_key'], OPENSSL_ALGO_SHA256)) {
        return null;
    }

    $body = http_build_query([
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion' => $unsignedJwt . '.' . gcs_base64url($signature),
    ]);

    $ch = curl_init($config['token_uri']);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        CURLOPT_TIMEOUT => 30,
    ]);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    if ($response === false || $status < 200 || $status >= 300) {
        return null;
    }

    $payload = json_decode($response, true);
    if (empty($payload['access_token'])) {
        return null;
    }

    $token = $payload['access_token'];
    $expiresAt = $now + (int) ($payload['expires_in'] ?? 3600);

    return $token;
}

function upload_file_to_gcs(string $localPath, string $mimeType, string $relativePath): ?string
{
    if (!defined('GCS_BUCKET') || !defined('GCS_PREFIX')) {
        return null;
    }

    $token = gcs_access_token();
    if ($token === null || !is_file($localPath)) {
        return null;
    }

    $objectName = trim(GCS_PREFIX, '/') . '/' . ltrim($relativePath, '/');
    $boundary = 'gcs_' . bin2hex(random_bytes(12));
    $metadata = json_encode([
        'name' => $objectName,
        'contentType' => $mimeType,
        'cacheControl' => 'public, max-age=31536000',
    ], JSON_THROW_ON_ERROR);

    $fileBytes = file_get_contents($localPath);
    if ($fileBytes === false) {
        return null;
    }

    $body = '';
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: application/json; charset=UTF-8\r\n\r\n";
    $body .= $metadata . "\r\n";
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: {$mimeType}\r\n\r\n";
    $body .= $fileBytes . "\r\n";
    $body .= "--{$boundary}--\r\n";

    $url = 'https://storage.googleapis.com/upload/storage/v1/b/' . rawurlencode(GCS_BUCKET) . '/o?uploadType=multipart';
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $token,
            'Content-Type: multipart/related; boundary=' . $boundary,
            'Content-Length: ' . strlen($body),
        ],
        CURLOPT_TIMEOUT => 60,
    ]);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    if ($response === false || $status < 200 || $status >= 300) {
        return null;
    }

    return 'https://storage.googleapis.com/' . GCS_BUCKET . '/' . $objectName;
}
