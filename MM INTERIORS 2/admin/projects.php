<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('projects');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    verify_csrf();
    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    $category = trim($_POST['category'] ?? '');
    $categorySlug = slugify($category);
    $thumbnail = upload_file($_FILES['thumbnail'] ?? [], 'projects') ?: ($_POST['existing_thumbnail'] ?? '');

    if ($category === '' || $thumbnail === '') {
        flash('error', 'Please choose a gallery category and upload an image.');
        redirect_to('/admin/projects.php' . ($id ? '?edit=' . $id : ''));
    }

    $title = trim($_POST['title'] ?? '');
    if ($title === '') {
        $title = $category . ' Gallery Image';
    }

    $slug = trim($_POST['slug'] ?? '');
    if ($slug === '') {
        $baseSlug = slugify($title);
        $slug = $baseSlug . ($id ? '-' . $id : '-' . date('YmdHis'));
    }

    save_record('projects', [
        'title' => $title,
        'slug' => $slug,
        'location' => trim($_POST['location'] ?? ''),
        'location_slug' => slugify(trim($_POST['location'] ?? '')),
        'category' => $category,
        'category_slug' => $categorySlug,
        'description' => trim($_POST['description'] ?? ($category . ' gallery image uploaded from admin.')),
        'thumbnail' => $thumbnail,
        'before_image' => '',
        'after_image' => '',
        'featured' => 0,
        'display_order' => (int) ($_POST['display_order'] ?? 0),
        'status' => 'published',
        'seo_title' => $title . ' | MM Interiors Gallery',
        'meta_description' => $category . ' gallery image by MM Interiors.',
        'materials_used' => '',
        'completion_details' => '',
        'related_service_slugs' => '',
        'image_alt' => trim($_POST['image_alt'] ?? ($category . ' gallery image by MM Interiors')),
    ], $id);

    flash('success', 'Gallery image saved successfully.');
    redirect_to('/admin/projects.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM projects WHERE id = ?', [(int) $_GET['edit']]) : null;
$categories = db_all('SELECT * FROM gallery_categories WHERE status = "published" ORDER BY display_order, id');
$items = db_all('SELECT * FROM projects ORDER BY featured DESC, display_order, id');
admin_render('projects', compact('items', 'editItem', 'categories'), 'Gallery Projects');
