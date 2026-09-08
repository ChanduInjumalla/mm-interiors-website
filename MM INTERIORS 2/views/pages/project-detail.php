<?php
$metaTitle = $project['seo_title'] ?: $project['title'] . ' | MM Interiors Project';
$metaDescription = $project['meta_description'] ?: $project['description'];
?>
<main class="page-shell">
    <section class="page-hero container">
        <div class="breadcrumbs"><a href="/">Home</a> / <a href="/gallery">Gallery</a> / <?= e($project['title']); ?></div>
        <p class="eyebrow"><?= e($project['category']); ?></p>
        <h1><?= e($project['title']); ?></h1>
        <p><?= e($project['location']); ?> • <?= e($project['completion_details']); ?></p>
    </section>
    <section class="section container split-section">
        <div>
            <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['title']); ?>" loading="lazy">
            <h2>Project Overview</h2>
            <p><?= nl2br(e($project['description'])); ?></p>
            <h3>Materials Used</h3>
            <p><?= nl2br(e($project['materials_used'])); ?></p>
        </div>
        <div class="sticky-card">
            <h3>Before & After</h3>
            <img src="<?= e(asset_url($project['before_image'])); ?>" alt="<?= e($project['title']); ?> before" loading="lazy">
            <img src="<?= e(asset_url($project['after_image'])); ?>" alt="<?= e($project['title']); ?> after" loading="lazy">
            <a href="/contact-us#quote-form" class="button button-gold">Start a Similar Project</a>
        </div>
    </section>
    <section class="section container">
        <h2>Related Projects</h2>
        <div class="card-grid project-grid">
            <?php foreach ($relatedProjects as $relatedProject): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($relatedProject['thumbnail'])); ?>" alt="<?= e($relatedProject['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($relatedProject['title']); ?></h3>
                        <a href="/project/<?= e($relatedProject['slug']); ?>">View Project</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
</main>
