<?php
$map = [];
foreach ($blocks as $block) {
    $map[$block['block_key']] = $block;
}
?>
<section class="admin-panel">
    <form method="post" class="admin-form">
        <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
        <?php foreach ([
            'hero_title' => 'Hero Title',
            'hero_subtitle' => 'Hero Subtitle',
            'about_preview' => 'About Preview',
            'cta_home' => 'CTA Content',
        ] as $key => $label): ?>
            <label><?= e($label); ?> Title
                <input type="text" name="blocks[<?= e($key); ?>][title]" value="<?= e($map[$key]['title'] ?? ''); ?>">
            </label>
            <label><?= e($label); ?> Content
                <textarea name="blocks[<?= e($key); ?>][content]" rows="4"><?= e($map[$key]['content'] ?? ''); ?></textarea>
            </label>
        <?php endforeach; ?>
        <button type="submit">Save Content</button>
    </form>
</section>
