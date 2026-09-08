<?php

declare(strict_types=1);

require_once __DIR__ . '/config/app.php';

header('Content-Type: application/xml; charset=utf-8');

$staticUrls = ['/', '/about-us', '/services', '/gallery', '/contact-us'];
$services = db_all('SELECT slug, updated_at FROM services WHERE status = "published"');
$projects = db_all('SELECT slug, updated_at FROM projects WHERE status = "published"');
$locations = db_all('SELECT slug, updated_at FROM locations WHERE status = "published"');
$seoPages = db_all('SELECT slug, updated_at FROM seo_pages WHERE status = "published" AND allow_indexing = 1');

echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach ($staticUrls as $path): ?>
        <url>
            <loc><?= e(env_url(ltrim($path, '/'))); ?></loc>
            <changefreq>weekly</changefreq>
        </url>
    <?php endforeach; ?>
    <?php foreach ($services as $service): ?>
        <url><loc><?= e(env_url('services/' . $service['slug'])); ?></loc><lastmod><?= e(date('c', strtotime($service['updated_at']))); ?></lastmod></url>
    <?php endforeach; ?>
    <?php foreach ($projects as $project): ?>
        <url><loc><?= e(env_url('project/' . $project['slug'])); ?></loc><lastmod><?= e(date('c', strtotime($project['updated_at']))); ?></lastmod></url>
    <?php endforeach; ?>
    <?php foreach ($locations as $location): ?>
        <url><loc><?= e(env_url($location['slug'])); ?></loc><lastmod><?= e(date('c', strtotime($location['updated_at']))); ?></lastmod></url>
    <?php endforeach; ?>
    <?php foreach ($seoPages as $page): ?>
        <url><loc><?= e(env_url($page['slug'])); ?></loc><lastmod><?= e(date('c', strtotime($page['updated_at']))); ?></lastmod></url>
    <?php endforeach; ?>
</urlset>
