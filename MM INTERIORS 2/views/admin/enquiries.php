<section class="admin-panel">
    <h2>All Leads</h2>
    <table class="admin-table">
        <thead><tr><th>Name</th><th>Mobile</th><th>Service</th><th>Source</th><th>Status</th><th>Notes</th><th>Update</th></tr></thead>
        <tbody>
        <?php foreach ($items as $item): ?>
            <tr>
                <td><?= e($item['name']); ?></td>
                <td><?= e($item['mobile']); ?></td>
                <td><?= e($item['service']); ?></td>
                <td><?= e($item['source_page']); ?></td>
                <td>
                    <form method="post" class="inline-form">
                        <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
                        <input type="hidden" name="action" value="update_status">
                        <?php foreach ($item as $field => $value): ?>
                            <?php if (in_array($field, ['status', 'notes', 'updated_at'], true)) { continue; } ?>
                            <input type="hidden" name="<?= e($field); ?>" value="<?= e((string) $value); ?>">
                        <?php endforeach; ?>
                        <select name="status">
                            <?php foreach (['new', 'contacted', 'interested', 'quotation sent', 'converted', 'closed'] as $status): ?>
                                <option value="<?= e($status); ?>"<?= $item['status'] === $status ? ' selected' : ''; ?>><?= e(ucwords($status)); ?></option>
                            <?php endforeach; ?>
                        </select>
                </td>
                <td><textarea name="notes" rows="2"><?= e($item['notes']); ?></textarea></td>
                <td><button type="submit">Save</button></form></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</section>
