<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('faqs');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    verify_csrf();
    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    save_record('faqs', [
        'question' => trim($_POST['question'] ?? ''),
        'answer' => trim($_POST['answer'] ?? ''),
        'scope' => trim($_POST['scope'] ?? 'global'),
        'service_id' => (int) ($_POST['service_id'] ?? 0),
        'location_id' => (int) ($_POST['location_id'] ?? 0),
        'seo_page_id' => (int) ($_POST['seo_page_id'] ?? 0),
        'display_order' => (int) ($_POST['display_order'] ?? 0),
        'status' => trim($_POST['status'] ?? 'draft'),
    ], $id);
    flash('success', 'FAQ saved successfully.');
    redirect_to('/admin/faqs.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM faqs WHERE id = ?', [(int) $_GET['edit']]) : null;
$items = db_all('SELECT * FROM faqs ORDER BY display_order, id');
$services = db_all('SELECT id, name FROM services ORDER BY name');
$locations = db_all('SELECT id, name FROM locations ORDER BY name');
$seoPages = db_all('SELECT id, page_title FROM seo_pages ORDER BY page_title');
admin_render('faqs', compact('items', 'editItem', 'services', 'locations', 'seoPages'), 'FAQs');
