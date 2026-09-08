<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

if (current_admin()) {
    redirect_to('/admin/index.php');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    if (login_admin(trim($_POST['email'] ?? ''), $_POST['password'] ?? '')) {
        flash('success', 'Welcome back.');
        redirect_to('/admin/index.php');
    }
    flash('error', 'Invalid credentials or too many attempts.');
}

ob_start();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Login</title>
    <link rel="stylesheet" href="/assets/css/admin.css">
</head>
<body class="login-page">
    <form method="post" class="login-card">
        <h1>MM Interiors Admin</h1>
        <?php if ($success = flash('success')): ?><div class="notice success"><?= e($success); ?></div><?php endif; ?>
        <?php if ($error = flash('error')): ?><div class="notice error"><?= e($error); ?></div><?php endif; ?>
        <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
        <label>Email<input type="email" name="email" required></label>
        <label>Password<input type="password" name="password" required></label>
        <button type="submit">Login</button>
    </form>
</body>
</html>
<?php
echo ob_get_clean();
