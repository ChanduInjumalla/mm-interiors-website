<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit Testimonial' : 'Add Testimonial'; ?></h2>
        <form method="post" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <label>Customer Name<input type="text" name="customer_name" value="<?= e($editItem['customer_name'] ?? ''); ?>"></label>
            <label>Location<input type="text" name="location" value="<?= e($editItem['location'] ?? ''); ?>"></label>
            <label>Service<input type="text" name="service" value="<?= e($editItem['service'] ?? ''); ?>"></label>
            <label>Rating<input type="number" min="1" max="5" name="rating" value="<?= e((string) ($editItem['rating'] ?? 5)); ?>"></label>
            <label>Review<textarea name="review" rows="4"><?= e($editItem['review'] ?? ''); ?></textarea></label>
            <label>Display Order<input type="number" name="display_order" value="<?= e((string) ($editItem['display_order'] ?? 0)); ?>"></label>
            <label>Status<select name="status"><option value="published">Published</option><option value="draft"<?= (($editItem['status'] ?? '') === 'draft') ? ' selected' : ''; ?>>Draft</option></select></label>
            <button type="submit">Save Testimonial</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>All Testimonials</h2>
        <table class="admin-table">
            <thead><tr><th>Name</th><th>Service</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
            <?php foreach ($items as $item): ?>
                <tr>
                    <td><?= e($item['customer_name']); ?></td>
                    <td><?= e($item['service']); ?></td>
                    <td><?= e($item['status']); ?></td>
                    <td class="actions">
                        <a href="/admin/testimonials.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                        <form method="post">
                            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                            <button type="submit" onclick="return confirm('Delete this testimonial?')">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
