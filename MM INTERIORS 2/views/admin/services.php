<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit Service' : 'Add Service'; ?></h2>
        <form method="post" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <label>Name<input type="text" name="name" value="<?= e($editItem['name'] ?? ''); ?>" required></label>
            <label>Slug<input type="text" name="slug" value="<?= e($editItem['slug'] ?? ''); ?>"></label>
            <label>Short Description<textarea name="short_description" rows="3"><?= e($editItem['short_description'] ?? ''); ?></textarea></label>
            <label>Short CTA<input type="text" name="short_cta" value="<?= e($editItem['short_cta'] ?? ''); ?>"></label>
            <label>Hero Description<textarea name="hero_description" rows="3"><?= e($editItem['hero_description'] ?? ''); ?></textarea></label>
            <label>Overview<textarea name="overview" rows="4"><?= e($editItem['overview'] ?? ''); ?></textarea></label>
            <label>Benefits<textarea name="benefits" rows="4"><?= e($editItem['benefits'] ?? ''); ?></textarea></label>
            <label>Styles<textarea name="styles" rows="4"><?= e($editItem['styles'] ?? ''); ?></textarea></label>
            <label>Usage Areas<textarea name="usage_areas" rows="4"><?= e($editItem['usage_areas'] ?? ''); ?></textarea></label>
            <label>Why Choose Us<textarea name="why_choose_us" rows="4"><?= e($editItem['why_choose_us'] ?? ''); ?></textarea></label>
            <label>SEO Title<input type="text" name="seo_title" value="<?= e($editItem['seo_title'] ?? ''); ?>"></label>
            <label>Meta Description<textarea name="meta_description" rows="3"><?= e($editItem['meta_description'] ?? ''); ?></textarea></label>
            <label>Display Order<input type="number" name="display_order" value="<?= e((string) ($editItem['display_order'] ?? 0)); ?>"></label>
            <label>Status<select name="status"><option value="published">Published</option><option value="draft"<?= (($editItem['status'] ?? '') === 'draft') ? ' selected' : ''; ?>>Draft</option></select></label>
            <button type="submit">Save Service</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>All Services</h2>
        <table class="admin-table">
            <thead><tr><th>Name</th><th>Status</th><th>Order</th><th>Actions</th></tr></thead>
            <tbody>
                <?php foreach ($items as $item): ?>
                    <tr>
                        <td><?= e($item['name']); ?></td>
                        <td><?= e($item['status']); ?></td>
                        <td><?= e((string) $item['display_order']); ?></td>
                        <td class="actions">
                            <a href="/admin/services.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                            <form method="post">
                                <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                                <button type="submit" onclick="return confirm('Delete this service?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
