<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit Gallery Image' : 'Add Gallery Image'; ?></h2>
        <form method="post" enctype="multipart/form-data" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <input type="hidden" name="existing_thumbnail" value="<?= e($editItem['thumbnail'] ?? ''); ?>">
            <label>Gallery Category
                <select name="category" required>
                    <option value="">Select category</option>
                    <?php foreach ($categories as $category): ?>
                        <option value="<?= e($category['name']); ?>"<?= (($editItem['category'] ?? '') === $category['name']) ? ' selected' : ''; ?>><?= e($category['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>Image Upload
                <input type="file" name="thumbnail" accept="image/*"<?= $editItem ? '' : ' required'; ?>>
            </label>
            <?php if (!empty($editItem['thumbnail'])): ?>
                <p>Current image: <a href="<?= e(asset_url($editItem['thumbnail'])); ?>" target="_blank" rel="noopener">View image</a></p>
            <?php endif; ?>
            <button type="submit">Save Gallery Image</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>All Gallery Images</h2>
        <table class="admin-table">
            <thead><tr><th>Image</th><th>Category</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
            <?php foreach ($items as $item): ?>
                <tr>
                    <td><?= e($item['title']); ?></td>
                    <td><?= e($item['category']); ?></td>
                    <td><?= e($item['status']); ?></td>
                    <td class="actions">
                        <a href="/admin/projects.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                        <form method="post">
                            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                            <button type="submit" onclick="return confirm('Delete this project?')">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
