<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('locations');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    verify_csrf();
    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    $name = trim($_POST['name'] ?? '');
    save_record('locations', [
        'name' => $name,
        'slug' => trim($_POST['slug'] ?? '') ?: slugify($name),
        'district' => trim($_POST['district'] ?? ''),
        'state' => trim($_POST['state'] ?? ''),
        'pincode' => trim($_POST['pincode'] ?? ''),
        'short_description' => trim($_POST['short_description'] ?? ''),
        'full_description' => trim($_POST['full_description'] ?? ''),
        'latitude' => trim($_POST['latitude'] ?? ''),
        'longitude' => trim($_POST['longitude'] ?? ''),
        'is_popular' => !empty($_POST['is_popular']) ? 1 : 0,
        'status' => trim($_POST['status'] ?? 'draft'),
    ], $id);

    flash('success', 'Location saved successfully.');
    redirect_to('/admin/locations.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM locations WHERE id = ?', [(int) $_GET['edit']]) : null;
$items = db_all('SELECT * FROM locations ORDER BY is_popular DESC, name');
admin_render('locations', compact('items', 'editItem'), 'Locations');
