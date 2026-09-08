<?php

declare(strict_types=1);

function current_admin(): ?array
{
    if (empty($_SESSION['admin_id'])) {
        return null;
    }

    if (!empty($_SESSION['last_activity']) && time() - (int) $_SESSION['last_activity'] > SESSION_TIMEOUT) {
        logout_admin();
        return null;
    }

    $_SESSION['last_activity'] = time();
    return db_row('SELECT * FROM admins WHERE id = ?', [(int) $_SESSION['admin_id']]);
}

function require_admin(): void
{
    if (!current_admin()) {
        flash('error', 'Please sign in to continue.');
        redirect_to('/admin/login.php');
    }
}

function login_admin(string $email, string $password): bool
{
    $_SESSION['login_attempts'] = $_SESSION['login_attempts'] ?? [];
    $_SESSION['login_attempts'] = array_filter(
        $_SESSION['login_attempts'],
        static fn (int $timestamp): bool => $timestamp > time() - 900
    );

    if (count($_SESSION['login_attempts']) >= 5) {
        return false;
    }

    $admin = db_row('SELECT * FROM admins WHERE email = ? LIMIT 1', [$email]);
    if (!$admin || !password_verify($password, $admin['password_hash'])) {
        $_SESSION['login_attempts'][] = time();
        return false;
    }

    session_regenerate_id(true);
    $_SESSION['admin_id'] = (int) $admin['id'];
    $_SESSION['last_activity'] = time();
    $_SESSION['login_attempts'] = [];

    return true;
}

function logout_admin(): void
{
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
    }
    session_destroy();
}
