<section class="admin-panel">
    <form method="post" class="admin-form">
        <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
        <?php foreach ([
            'site_name' => 'Website Name',
            'primary_phone' => 'Primary Phone',
            'secondary_phone' => 'Secondary Phone',
            'whatsapp_phone' => 'WhatsApp Number',
            'email' => 'Email',
            'address' => 'Address',
            'map_embed' => 'Google Map Embed',
            'facebook_url' => 'Facebook URL',
            'instagram_url' => 'Instagram URL',
            'youtube_url' => 'YouTube URL',
            'google_business_profile' => 'Google Business Profile URL',
            'google_analytics_id' => 'Google Analytics ID',
            'gtm_id' => 'GTM ID',
            'meta_description' => 'Default Meta Description',
            'header_scripts' => 'Header Scripts',
            'footer_scripts' => 'Footer Scripts',
        ] as $key => $label): ?>
            <label><?= e($label); ?>
                <?php if (in_array($key, ['address', 'map_embed', 'meta_description', 'header_scripts', 'footer_scripts'], true)): ?>
                    <textarea name="<?= e($key); ?>" rows="4"><?= e($settings[$key] ?? ''); ?></textarea>
                <?php else: ?>
                    <input type="text" name="<?= e($key); ?>" value="<?= e($settings[$key] ?? ''); ?>">
                <?php endif; ?>
            </label>
        <?php endforeach; ?>
        <button type="submit">Save Settings</button>
    </form>
</section>
