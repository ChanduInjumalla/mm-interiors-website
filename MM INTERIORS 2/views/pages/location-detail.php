<?php
$metaTitle = 'Interior Solutions in ' . $location['name'] . ' | MM Interiors & Wallpapers';
$metaDescription = 'Premium interior, wallpaper, false ceiling, feature wall and modular kitchen services in ' . $location['name'] . ' by MM Interiors & Wallpapers.';
$heroImage = $locationContent['hero_image'] ?? 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80';
?>
<main class="page-shell location-page-shell">
    <section class="location-hero">
        <div class="location-hero-media" style="background-image: linear-gradient(90deg, rgba(8, 9, 11, .85), rgba(8, 9, 11, .35)), url('<?= e($heroImage); ?>');"></div>
        <div class="container location-hero-inner">
            <div class="location-hero-copy">
                <div class="breadcrumbs"><a href="/">Home</a> / <span><?= e($location['name']); ?></span></div>
                <p class="eyebrow"><?= e($locationContent['tagline']); ?></p>
                <h1>Interior Solutions in <?= e($location['name']); ?></h1>
                <p><?= e($locationContent['intro']); ?></p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Get Free Consultation</a>
                    <a href="https://wa.me/917993155725?text=<?= rawurlencode('Hello MM Interiors, I am looking for interior services in ' . $location['name'] . '. Please share details.'); ?>" target="_blank" rel="noopener" class="button button-soft">WhatsApp for <?= e($location['name']); ?></a>
                </div>
            </div>
            <div class="location-hero-card">
                <h3>Why This Location Page Matters</h3>
                <div class="service-highlight-list">
                    <?php foreach ($locationContent['seo_points'] as $point): ?>
                        <span><?= e($point); ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <section class="section container split-section location-intro-grid">
        <div class="service-rich-copy">
            <p class="eyebrow">Local Overview</p>
            <h2>Premium Interior & Wallpaper Services Near <?= e($location['name']); ?></h2>
            <p><?= e($locationContent['overview']); ?></p>
            <p><?= e($locationContent['why_local']); ?></p>
        </div>
        <div class="sticky-card service-sticky-card">
            <h3>Ideal For</h3>
            <ul class="service-bullet-list compact-list">
                <?php foreach ($locationContent['ideal_for'] as $item): ?>
                    <li><?= e($item); ?></li>
                <?php endforeach; ?>
            </ul>
            <div class="service-cta-note">
                <strong>Need a local consultation?</strong>
                <p>We help clients in <?= e($location['name']); ?> choose the right service mix for better finish quality, better space use and a more premium result overall.</p>
            </div>
        </div>
    </section>

    <section class="section container">
        <p class="eyebrow">Services</p>
        <h2>Interior Services Available in <?= e($location['name']); ?></h2>
        <div class="location-services-grid">
            <?php foreach ($services as $service): ?>
                <a href="/services/<?= e($service['slug']); ?>" class="location-service-card">
                    <strong><?= e($service['name']); ?></strong>
                    <span><?= e($service['short_description']); ?></span>
                </a>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <p class="eyebrow">Local SEO Pages</p>
            <h2>Popular Service Searches for <?= e($location['name']); ?></h2>
            <div class="related-services-grid">
                <?php if ($relatedSeoPages): ?>
                    <?php foreach ($relatedSeoPages as $seoPage): ?>
                        <a href="/<?= e($seoPage['slug']); ?>" class="related-service-card">
                            <strong><?= e($seoPage['service_name']); ?> in <?= e($location['name']); ?></strong>
                            <span>View local landing page</span>
                        </a>
                    <?php endforeach; ?>
                <?php else: ?>
                    <?php foreach (array_slice($services, 0, 6) as $service): ?>
                        <a href="/services/<?= e($service['slug']); ?>" class="related-service-card">
                            <strong><?= e($service['name']); ?> in <?= e($location['name']); ?></strong>
                            <span>Service details and consultation</span>
                        </a>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <p class="eyebrow">Nearby Areas</p>
        <h2>We Also Serve Nearby Locations</h2>
        <div class="location-pills">
            <?php foreach ($nearbyLocations as $nearby): ?>
                <a href="/<?= e($nearby['slug']); ?>"><?= e($nearby['name']); ?></a>
            <?php endforeach; ?>
        </div>
    </section>

    <?php if ($projects): ?>
    <section class="section container">
        <h2>Recent Projects Near <?= e($location['name']); ?></h2>
        <div class="card-grid project-grid">
            <?php foreach ($projects as $project): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($project['title']); ?></h3>
                        <p><?= e($project['category']); ?></p>
                        <a href="/project/<?= e($project['slug']); ?>">View Project</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <?php if ($testimonials): ?>
    <section class="section container">
        <h2>What Clients Around <?= e($location['name']); ?> Say</h2>
        <div class="card-grid testimonials-grid">
            <?php foreach ($testimonials as $testimonial): ?>
                <article class="testimonial-card">
                    <div class="stars"><?= str_repeat('★', (int) $testimonial['rating']); ?></div>
                    <p><?= e($testimonial['review']); ?></p>
                    <strong><?= e($testimonial['customer_name']); ?></strong>
                    <span><?= e($testimonial['location']); ?> • <?= e($testimonial['service']); ?></span>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <section class="section container">
        <h2>Frequently Asked Questions</h2>
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
