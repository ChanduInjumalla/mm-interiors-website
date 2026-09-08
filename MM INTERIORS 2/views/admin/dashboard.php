<section class="admin-cards">
    <?php foreach ($stats as $label => $value): ?>
        <article class="metric-card"><strong><?= e((string) $value); ?></strong><span><?= e($label); ?></span></article>
    <?php endforeach; ?>
</section>

<section class="admin-grid">
    <div class="admin-panel">
        <h2>Recent Enquiries</h2>
        <table class="admin-table">
            <thead><tr><th>Name</th><th>Service</th><th>Status</th><th>Date</th></tr></thead>
            <tbody>
            <?php foreach ($recentEnquiries as $enquiry): ?>
                <tr>
                    <td><?= e($enquiry['name']); ?></td>
                    <td><?= e($enquiry['service']); ?></td>
                    <td><?= e($enquiry['status']); ?></td>
                    <td><?= e($enquiry['created_at']); ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="admin-panel">
        <h2>Most Requested Services</h2>
        <ul class="admin-list">
            <?php foreach ($mostRequested as $row): ?>
                <li><span><?= e($row['service']); ?></span><strong><?= e((string) $row['total']); ?></strong></li>
            <?php endforeach; ?>
        </ul>
    </div>
</section>
