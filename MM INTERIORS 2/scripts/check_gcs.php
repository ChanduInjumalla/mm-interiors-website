<?php

declare(strict_types=1);

if ($argc < 3) {
    fwrite(STDERR, "Usage: php scripts/check_gcs.php <service-account-json> <bucket>\n");
    exit(1);
}

$jsonPath = $argv[1];
$bucket = $argv[2];

$config = json_decode((string) file_get_contents($jsonPath), true, 512, JSON_THROW_ON_ERROR);

$now = time();
$header = ['alg' => 'RS256', 'typ' => 'JWT'];
$claims = [
    'iss' => $config['client_email'],
    'scope' => 'https://www.googleapis.com/auth/devstorage.read_only',
    'aud' => $config['token_uri'],
    'exp' => $now + 3600,
    'iat' => $now,
];

$base64Url = static function (string $value): string {
    return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
};

$jwtHeader = $base64Url(json_encode($header, JSON_THROW_ON_ERROR));
$jwtClaims = $base64Url(json_encode($claims, JSON_THROW_ON_ERROR));
$unsignedJwt = $jwtHeader . '.' . $jwtClaims;

openssl_sign($unsignedJwt, $signature, $config['private_key'], OPENSSL_ALGO_SHA256);
$jwt = $unsignedJwt . '.' . $base64Url($signature);

$tokenRequest = http_build_query([
    'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion' => $jwt,
]);

$tokenContext = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $tokenRequest,
        'ignore_errors' => true,
        'timeout' => 30,
    ],
]);

$tokenResponse = file_get_contents($config['token_uri'], false, $tokenContext);
if ($tokenResponse === false) {
    fwrite(STDERR, "Failed to fetch OAuth token.\n");
    exit(2);
}

$tokenData = json_decode($tokenResponse, true);
if (empty($tokenData['access_token'])) {
    fwrite(STDERR, "OAuth token error: " . $tokenResponse . "\n");
    exit(3);
}

$bucketUrl = sprintf(
    'https://storage.googleapis.com/storage/v1/b/%s/o?prefix=%s&fields=items(name,mediaLink),prefixes',
    rawurlencode($bucket),
    rawurlencode('mminteriors/')
);

$bucketContext = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => "Authorization: Bearer {$tokenData['access_token']}\r\n",
        'ignore_errors' => true,
        'timeout' => 30,
    ],
]);

$bucketResponse = file_get_contents($bucketUrl, false, $bucketContext);
if ($bucketResponse === false) {
    fwrite(STDERR, "Failed to query bucket.\n");
    exit(4);
}

$bucketData = json_decode($bucketResponse, true);
if (isset($bucketData['error'])) {
    fwrite(STDERR, "Bucket API error: " . $bucketResponse . "\n");
    exit(5);
}

$result = [
    'project_id' => $config['project_id'] ?? null,
    'client_email' => $config['client_email'] ?? null,
    'bucket' => $bucket,
    'objects' => array_map(
        static fn (array $item): array => [
            'name' => $item['name'] ?? '',
            'public_url' => 'https://storage.googleapis.com/' . $bucket . '/' . ($item['name'] ?? ''),
        ],
        $bucketData['items'] ?? []
    ),
];

echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
