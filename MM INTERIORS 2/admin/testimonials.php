<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();
handle_delete('testimonials');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    verify_csrf();
    $id = !empty($_POST['id']) ? (int) $_POST['id'] : null;
    save_record('testimonials', [
        'customer_name' => trim($_POST['customer_name'] ?? ''),
        'location' => trim($_POST['location'] ?? ''),
        'rating' => (int) ($_POST['rating'] ?? 5),
        'review' => trim($_POST['review'] ?? ''),
        'service' => trim($_POST['service'] ?? ''),
        'display_order' => (int) ($_POST['display_order'] ?? 0),
        'status' => trim($_POST['status'] ?? 'draft'),
    ], $id);
    flash('success', 'Testimonial saved successfully.');
    redirect_to('/admin/testimonials.php');
}

$editItem = !empty($_GET['edit']) ? db_row('SELECT * FROM testimonials WHERE id = ?', [(int) $_GET['edit']]) : null;
$items = db_all('SELECT * FROM testimonials ORDER BY display_order, id');
admin_render('testimonials', compact('items', 'editItem'), 'Testimonials');
