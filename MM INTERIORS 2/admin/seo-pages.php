<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('seo_pages');

function build_seo_page_payload(array $service, array $location, string $pageTitle, string $slug, string $status, bool $allowIndexing): array
{
    $serviceName = $service['name'];
    $locationName = $location['name'];
    $lowerService = strtolower($serviceName);
    $metaTitle = $pageTitle . ' | MM Interiors & Wallpapers';
    $metaDescription = 'Premium ' . $lowerService . ' in ' . $locationName . ' by MM Interiors & Wallpapers for homes, offices and commercial spaces.';

    return [
        'page_title' => $pageTitle,
        'slug' => $slug,
        'service_id' => (int) $service['id'],
        'location_id' => (int) $location['id'],
        'service_slug' => $service['slug'],
        'location_slug' => $location['slug'],
        'h1_title' => $pageTitle,
        'short_heading' => $serviceName . ' in ' . $locationName,
        'hero_description' => 'Premium ' . $lowerService . ' services in ' . $locationName . ' delivered with better finish quality, cleaner execution and design-focused planning by MM Interiors.',
        'introduction' => 'MM Interiors & Wallpapers helps clients in ' . $locationName . ' upgrade homes, apartments, villas, offices and commercial spaces through premium ' . $lowerService . ' services that feel polished, practical and professionally executed.',
        'service_description' => 'Our ' . $lowerService . ' work in ' . $locationName . ' is planned around better aesthetics, smarter material direction and finish standards that improve how the entire space looks and feels.',
        'benefits' => 'Premium finish quality' . "\n" . 'Better space presentation' . "\n" . 'Professional installation and execution' . "\n" . 'Suitable for residential and commercial spaces in ' . $locationName,
        'why_choose_us' => 'Clients in ' . $locationName . ' choose MM Interiors for clean execution, design-led planning, premium materials and practical service coordination that keeps the final result visually strong and reliable.',
        'process_content' => 'We begin with consultation, understand the space and finish requirement, guide material and style selection, execute professionally, inspect quality and complete handover with a polished final presentation.',
        'custom_content' => 'This page was generated from the selected service and location. You can refine it later if needed, but it is ready to publish as a strong first draft.',
        'seo_title' => $metaTitle,
        'meta_description' => $metaDescription,
        'meta_keywords' => strtolower($serviceName . ' in ' . $locationName . ', ' . $serviceName . ' ' . $locationName . ', interior services ' . $locationName),
        'canonical_url' => '',
        'allow_indexing' => $allowIndexing ? 1 : 0,
        'status' => $status,
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    $action = $_POST['action'] ?? 'save';

    if ($action === 'bulk_generate') {
        $serviceIds = array_map('intval', $_POST['service_ids'] ?? []);
        $locationIds = array_map('intval', $_POST['location_ids'] ?? []);
        foreach ($serviceIds as $serviceId) {
            $service = db_row('SELECT * FROM services WHERE id = ?', [$serviceId]);
            foreach ($locationIds as $locationId) {
                $location = db_row('SELECT * FROM locations WHERE id = ?', [$locationId]);
                if (!$service || !$location) {
                    continue;
                }
                $title = $service['name'] . ' in ' . $location['name'];
                save_record('seo_pages', build_seo_page_payload($service, $location, $title, slugify($title), 'draft', false));
            }
        }
        flash('success', 'Bulk draft SEO pages created. Customize them before publishing.');
        redirect_to('/admin/seo-pages.php');
    }

    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    $pageTitle = trim($_POST['page_title'] ?? '');
    $service = db_row('SELECT * FROM services WHERE id = ?', [(int) ($_POST['service_id'] ?? 0)]);
    $location = db_row('SELECT * FROM locations WHERE id = ?', [(int) ($_POST['location_id'] ?? 0)]);

    if (!$service || !$location || $pageTitle === '') {
        flash('error', 'Please fill title, service and location.');
        redirect_to('/admin/seo-pages.php' . ($id ? '?edit=' . $id : ''));
    }

    $status = trim($_POST['status'] ?? 'draft');
    $allowIndexing = !empty($_POST['allow_indexing']) && $status === 'published';
    $slug = trim($_POST['slug'] ?? '') ?: slugify($pageTitle);

    save_record('seo_pages', build_seo_page_payload($service, $location, $pageTitle, $slug, $status, $allowIndexing), $id);

    flash('success', 'SEO page saved successfully with auto-generated content.');
    redirect_to('/admin/seo-pages.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM seo_pages WHERE id = ?', [(int) $_GET['edit']]) : null;
$items = db_all('SELECT sp.*, s.name AS service_name, l.name AS location_name FROM seo_pages sp LEFT JOIN services s ON s.id = sp.service_id LEFT JOIN locations l ON l.id = sp.location_id ORDER BY sp.updated_at DESC');
$services = db_all('SELECT id, name, slug FROM services ORDER BY display_order, name');
$locations = db_all('SELECT id, name, slug FROM locations ORDER BY name');
admin_render('seo-pages', compact('items', 'editItem', 'services', 'locations'), 'SEO Pages');
