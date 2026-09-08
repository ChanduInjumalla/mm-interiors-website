<?php

declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    foreach ($_POST['blocks'] ?? [] as $key => $block) {
        $existing = db_row('SELECT id FROM content_blocks WHERE block_key = ?', [$key]);
        save_record('content_blocks', [
            'block_key' => $key,
            'title' => trim($block['title'] ?? ''),
            'content' => trim($block['content'] ?? ''),
            'status' => 'published',
        ], $existing ? (int) $existing['id'] : null);
    }
    flash('success', 'Website content updated.');
    redirect_to('/admin/content.php');
}

$blocks = db_all('SELECT * FROM content_blocks ORDER BY block_key');
admin_render('content', compact('blocks'), 'Website Content');
