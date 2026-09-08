<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'update_status') {
    verify_csrf();
    save_record('contact_enquiries', [
        'name' => $_POST['name'],
        'mobile' => $_POST['mobile'],
        'email' => $_POST['email'],
        'location' => $_POST['location'],
        'service' => $_POST['service'],
        'property_type' => $_POST['property_type'],
        'message' => $_POST['message'],
        'source_url' => $_POST['source_url'],
        'source_page' => $_POST['source_page'],
        'utm_source' => $_POST['utm_source'],
        'utm_medium' => $_POST['utm_medium'],
        'utm_campaign' => $_POST['utm_campaign'],
        'status' => $_POST['status'],
        'notes' => $_POST['notes'],
    ], (int) $_POST['id']);
    flash('success', 'Lead updated.');
    redirect_to('/admin/enquiries.php');
}

$items = db_all('SELECT * FROM contact_enquiries ORDER BY created_at DESC');
admin_render('enquiries', compact('items'), 'Leads');
