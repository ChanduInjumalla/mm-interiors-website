<?php
$metaTitle = $page['seo_title'] ?: $page['page_title'];
$metaDescription = $page['meta_description'] ?: $page['hero_description'];
$metaRobots = $page['allow_indexing'] ? 'index,follow' : 'noindex,nofollow';
?>
<main class="page-shell">
    <section class="page-hero container">
        <div class="breadcrumbs"><a href="/">Home</a> / <a href="/services">Services</a> / <?= e($page['service_name']); ?> / <?= e($page['location_name']); ?></div>
        <p class="eyebrow"><?= e($page['short_heading']); ?></p>
        <h1><?= e($page['h1_title']); ?></h1>
        <p><?= e($page['hero_description']); ?></p>
        <a href="/contact-us#quote-form" class="button button-gold">Request Quotation</a>
    </section>
    <section class="section container split-section">
        <div>
            <h2>Local Introduction</h2>
            <p><?= nl2br(e($page['introduction'])); ?></p>
            <h2><?= e($page['service_name']); ?> Services</h2>
            <p><?= nl2br(e($page['service_description'])); ?></p>
            <h2>Why Choose MM Interiors</h2>
            <p><?= nl2br(e($page['why_choose_us'])); ?></p>
            <h2>Our Process</h2>
            <p><?= nl2br(e($page['process_content'])); ?></p>
        </div>
        <div class="sticky-card">
            <h3>Benefits</h3>
            <p><?= nl2br(e($page['benefits'])); ?></p>
            <h3>Nearby Areas</h3>
            <div class="location-pills">
                <?php foreach ($nearbyPages as $nearbyPage): ?>
                    <a href="/<?= e($nearbyPage['slug']); ?>"><?= e($nearbyPage['name']); ?></a>
                <?php endforeach; ?>
            </div>
            <h3>You May Also Need</h3>
            <div class="location-pills">
                <?php foreach ($relatedServicePages as $relatedPage): ?>
                    <a href="/<?= e($relatedPage['slug']); ?>"><?= e($relatedPage['name']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <section class="section container">
        <h2>Recent Projects Near <?= e($page['location_name']); ?></h2>
        <div class="card-grid project-grid">
            <?php foreach ($projects as $project): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($project['title']); ?></h3>
                        <a href="/project/<?= e($project['slug']); ?>">View Project</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <section class="section container">
        <h2>FAQs</h2>
        <div class="faq-list">
            <?php foreach ($faqs as $faq): ?>
                <details>
                    <summary><?= e($faq['question']); ?></summary>
                    <p><?= e($faq['answer']); ?></p>
                </details>
            <?php endforeach; ?>
        </div>
    </section>
</main>
