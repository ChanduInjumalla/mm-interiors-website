<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit SEO Page' : 'Add SEO Page'; ?></h2>
        <form method="post" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <label>Page Title<input type="text" name="page_title" value="<?= e($editItem['page_title'] ?? ''); ?>" required></label>
            <label>Slug<input type="text" name="slug" value="<?= e($editItem['slug'] ?? ''); ?>"></label>
            <label>Category / Service
                <select name="service_id">
                    <?php foreach ($services as $service): ?>
                        <option value="<?= e((string) $service['id']); ?>" data-slug="<?= e($service['slug']); ?>"<?= ((int) ($editItem['service_id'] ?? 0) === (int) $service['id']) ? ' selected' : ''; ?>><?= e($service['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>Location
                <select name="location_id">
                    <?php foreach ($locations as $location): ?>
                        <option value="<?= e((string) $location['id']); ?>" data-slug="<?= e($location['slug']); ?>"<?= ((int) ($editItem['location_id'] ?? 0) === (int) $location['id']) ? ' selected' : ''; ?>><?= e($location['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <p>All other SEO page content will be auto-generated from the selected title, service and location.</p>
            <label><input type="checkbox" name="allow_indexing" value="1"<?= !empty($editItem['allow_indexing']) ? ' checked' : ''; ?>> Allow Search Engine Indexing</label>
            <label>Status<select name="status"><option value="draft">Draft</option><option value="published"<?= (($editItem['status'] ?? '') === 'published') ? ' selected' : ''; ?>>Published</option></select></label>
            <button type="submit">Save SEO Page</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>Bulk Generator</h2>
        <form method="post" class="admin-form compact-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="bulk_generate">
            <div class="checkbox-grid">
                <?php foreach ($services as $service): ?>
                    <label><input type="checkbox" name="service_ids[]" value="<?= e((string) $service['id']); ?>"> <?= e($service['name']); ?></label>
                <?php endforeach; ?>
            </div>
            <div class="checkbox-grid">
                <?php foreach ($locations as $location): ?>
                    <label><input type="checkbox" name="location_ids[]" value="<?= e((string) $location['id']); ?>"> <?= e($location['name']); ?></label>
                <?php endforeach; ?>
            </div>
            <button type="submit">Generate Draft Pages</button>
        </form>
        <h2>All SEO Pages</h2>
        <table class="admin-table">
            <thead><tr><th>Title</th><th>Service</th><th>Location</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
            <?php foreach ($items as $item): ?>
                <tr>
                    <td><?= e($item['page_title']); ?></td>
                    <td><?= e($item['service_name'] ?? ''); ?></td>
                    <td><?= e($item['location_name'] ?? ''); ?></td>
                    <td><?= e($item['status']); ?></td>
                    <td class="actions">
                        <a href="/admin/seo-pages.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                        <form method="post">
                            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                            <button type="submit" onclick="return confirm('Delete this SEO page?')">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
