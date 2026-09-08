<section class="admin-grid two-columns">
    <div class="admin-panel">
        <h2><?= $editItem ? 'Edit FAQ' : 'Add FAQ'; ?></h2>
        <form method="post" class="admin-form">
            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= e((string) ($editItem['id'] ?? '')); ?>">
            <label>Question<input type="text" name="question" value="<?= e($editItem['question'] ?? ''); ?>"></label>
            <label>Answer<textarea name="answer" rows="4"><?= e($editItem['answer'] ?? ''); ?></textarea></label>
            <label>Scope
                <select name="scope">
                    <option value="global">Global</option>
                    <option value="service"<?= (($editItem['scope'] ?? '') === 'service') ? ' selected' : ''; ?>>Service</option>
                    <option value="location"<?= (($editItem['scope'] ?? '') === 'location') ? ' selected' : ''; ?>>Location</option>
                    <option value="seo"<?= (($editItem['scope'] ?? '') === 'seo') ? ' selected' : ''; ?>>SEO Page</option>
                </select>
            </label>
            <label>Service
                <select name="service_id">
                    <option value="0">None</option>
                    <?php foreach ($services as $service): ?>
                        <option value="<?= e((string) $service['id']); ?>"<?= ((int) ($editItem['service_id'] ?? 0) === (int) $service['id']) ? ' selected' : ''; ?>><?= e($service['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>Location
                <select name="location_id">
                    <option value="0">None</option>
                    <?php foreach ($locations as $location): ?>
                        <option value="<?= e((string) $location['id']); ?>"<?= ((int) ($editItem['location_id'] ?? 0) === (int) $location['id']) ? ' selected' : ''; ?>><?= e($location['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>SEO Page
                <select name="seo_page_id">
                    <option value="0">None</option>
                    <?php foreach ($seoPages as $seoPage): ?>
                        <option value="<?= e((string) $seoPage['id']); ?>"<?= ((int) ($editItem['seo_page_id'] ?? 0) === (int) $seoPage['id']) ? ' selected' : ''; ?>><?= e($seoPage['page_title']); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>Display Order<input type="number" name="display_order" value="<?= e((string) ($editItem['display_order'] ?? 0)); ?>"></label>
            <label>Status<select name="status"><option value="published">Published</option><option value="draft"<?= (($editItem['status'] ?? '') === 'draft') ? ' selected' : ''; ?>>Draft</option></select></label>
            <button type="submit">Save FAQ</button>
        </form>
    </div>
    <div class="admin-panel">
        <h2>All FAQs</h2>
        <table class="admin-table">
            <thead><tr><th>Question</th><th>Scope</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
            <?php foreach ($items as $item): ?>
                <tr>
                    <td><?= e($item['question']); ?></td>
                    <td><?= e($item['scope']); ?></td>
                    <td><?= e($item['status']); ?></td>
                    <td class="actions">
                        <a href="/admin/faqs.php?edit=<?= e((string) $item['id']); ?>">Edit</a>
                        <form method="post">
                            <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?= e((string) $item['id']); ?>">
                            <button type="submit" onclick="return confirm('Delete this FAQ?')">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>
