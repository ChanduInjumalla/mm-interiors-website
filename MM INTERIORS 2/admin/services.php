<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('services');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    verify_csrf();
    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    $name = trim($_POST['name'] ?? '');
    $slug = trim($_POST['slug'] ?? '') ?: slugify($name);

    save_record('services', [
        'name' => $name,
        'slug' => $slug,
        'short_description' => trim($_POST['short_description'] ?? ''),
        'short_cta' => trim($_POST['short_cta'] ?? ''),
        'hero_description' => trim($_POST['hero_description'] ?? ''),
        'overview' => trim($_POST['overview'] ?? ''),
        'benefits' => trim($_POST['benefits'] ?? ''),
        'styles' => trim($_POST['styles'] ?? ''),
        'usage_areas' => trim($_POST['usage_areas'] ?? ''),
        'why_choose_us' => trim($_POST['why_choose_us'] ?? ''),
        'seo_title' => trim($_POST['seo_title'] ?? ''),
        'meta_description' => trim($_POST['meta_description'] ?? ''),
        'status' => trim($_POST['status'] ?? 'draft'),
        'display_order' => (int) ($_POST['display_order'] ?? 0),
    ], $id);

    flash('success', 'Service saved successfully.');
    redirect_to('/admin/services.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM services WHERE id = ?', [(int) $_GET['edit']]) : null;
$items = db_all('SELECT * FROM services ORDER BY display_order, id');
admin_render('services', compact('items', 'editItem'), 'Services');
