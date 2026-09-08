<?php $admin = current_admin(); ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($title ?? 'Admin Panel'); ?></title>
    <link rel="stylesheet" href="/assets/css/admin.css">
</head>
<body class="admin-body">
    <aside class="admin-sidebar">
        <div class="admin-brand">MM Interiors Admin</div>
        <nav>
            <a href="/admin/index.php">Dashboard</a>
            <a href="/admin/content.php">Website Content</a>
            <a href="/admin/services.php">Services</a>
            <a href="/admin/projects.php">Gallery</a>
            <a href="/admin/seo-pages.php">SEO Pages</a>
            <a href="/admin/locations.php">Locations</a>
            <a href="/admin/testimonials.php">Testimonials</a>
            <a href="/admin/faqs.php">FAQs</a>
            <a href="/admin/enquiries.php">Leads</a>
            <a href="/admin/settings.php">Settings</a>
            <a href="/admin/logout.php">Logout</a>
        </nav>
    </aside>
    <main class="admin-main">
        <header class="admin-header">
            <div>
                <h1><?= e($title ?? 'Admin Panel'); ?></h1>
                <p>Signed in as <?= e($admin['email'] ?? ''); ?></p>
            </div>
        </header>
        <?php if ($success = flash('success')): ?>
            <div class="notice success"><?= e($success); ?></div>
        <?php endif; ?>
        <?php if ($error = flash('error')): ?>
            <div class="notice error"><?= e($error); ?></div>
        <?php endif; ?>
        <?= $content; ?>
    </main>
</body>
</html>
