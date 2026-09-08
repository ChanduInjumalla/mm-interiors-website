<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit Location' : 'Add Location'; ?></h2>
        <form method="post" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <label>Name<input type="text" name="name" value="<?= e($editItem['name'] ?? ''); ?>" required></label>
            <label>Slug<input type="text" name="slug" value="<?= e($editItem['slug'] ?? ''); ?>"></label>
            <label>District<input type="text" name="district" value="<?= e($editItem['district'] ?? ''); ?>"></label>
            <label>State<input type="text" name="state" value="<?= e($editItem['state'] ?? ''); ?>"></label>
            <label>Pincode<input type="text" name="pincode" value="<?= e($editItem['pincode'] ?? ''); ?>"></label>
            <label>Short Description<textarea name="short_description" rows="3"><?= e($editItem['short_description'] ?? ''); ?></textarea></label>
            <label>Full Description<textarea name="full_description" rows="4"><?= e($editItem['full_description'] ?? ''); ?></textarea></label>
            <label>Latitude<input type="text" name="latitude" value="<?= e($editItem['latitude'] ?? ''); ?>"></label>
            <label>Longitude<input type="text" name="longitude" value="<?= e($editItem['longitude'] ?? ''); ?>"></label>
            <label><input type="checkbox" name="is_popular" value="1"<?= !empty($editItem['is_popular']) ? ' checked' : ''; ?>> Popular Location</label>
            <label>Status<select name="status"><option value="published">Published</option><option value="draft"<?= (($editItem['status'] ?? '') === 'draft') ? ' selected' : ''; ?>>Draft</option></select></label>
            <button type="submit">Save Location</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>All Locations</h2>
        <table class="admin-table">
            <thead><tr><th>Name</th><th>District</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
                <?php foreach ($items as $item): ?>
                    <tr>
                        <td><?= e($item['name']); ?></td>
                        <td><?= e($item['district']); ?></td>
                        <td><?= e($item['status']); ?></td>
                        <td class="actions">
                            <a href="/admin/locations.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                            <form method="post">
                                <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                                <button type="submit" onclick="return confirm('Delete this location?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
