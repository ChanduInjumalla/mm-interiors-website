<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();

$keys = [
    'site_name', 'primary_phone', 'secondary_phone', 'whatsapp_phone', 'email', 'address', 'map_embed',
    'facebook_url', 'instagram_url', 'youtube_url', 'google_business_profile', 'google_analytics_id',
    'gtm_id', 'header_scripts', 'footer_scripts', 'meta_description'
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    foreach ($keys as $key) {
        $existing = db_row('SELECT id FROM settings WHERE setting_key = ?', [$key]);
        save_record('settings', [
            'setting_key' => $key,
            'setting_value' => trim($_POST[$key] ?? ''),
        ], $existing ? (int) $existing['id'] : null);
    }
    flash('success', 'Settings updated successfully.');
    redirect_to('/admin/settings.php');
}

$settings = [];
foreach (db_all('SELECT * FROM settings') as $row) {
    $settings[$row['setting_key']] = $row['setting_value'];
}
admin_render('settings', compact('settings'), 'Settings');
