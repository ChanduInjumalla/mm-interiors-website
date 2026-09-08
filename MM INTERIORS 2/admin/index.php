<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();

$stats = [
    'Total Enquiries' => table_count('contact_enquiries'),
    "Today's Enquiries" => table_count('contact_enquiries', 'DATE(created_at) = CURDATE()'),
    'Total Projects' => table_count('projects'),
    'Total Services' => table_count('services'),
    'Total SEO Pages' => table_count('seo_pages'),
    'Total Locations' => table_count('locations'),
    'Published SEO Pages' => table_count('seo_pages', 'status = "published"'),
    'Draft SEO Pages' => table_count('seo_pages', 'status = "draft"'),
];

$recentEnquiries = db_all('SELECT * FROM contact_enquiries ORDER BY created_at DESC LIMIT 8');
$mostRequested = db_all('SELECT service, COUNT(*) AS total FROM contact_enquiries WHERE service != "" GROUP BY service ORDER BY total DESC LIMIT 5');

admin_render('dashboard', compact('stats', 'recentEnquiries', 'mostRequested'), 'Dashboard');
