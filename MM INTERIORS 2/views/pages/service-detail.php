<?php
$metaTitle = $service['seo_title'] ?: $service['name'] . ' | MM Interiors';
$metaDescription = $service['meta_description'] ?: $service['short_description'];
$heroImage = $serviceContent['hero_image'] ?? 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80';
$faqItems = !empty($faqs) ? $faqs : ($serviceContent['faq_fallback'] ?? []);
?>
<main class="page-shell service-page-shell">
    <section class="service-hero">
        <div class="service-hero-media" style="background-image: linear-gradient(90deg, rgba(8, 9, 11, .86), rgba(8, 9, 11, .38)), url('<?= e($heroImage); ?>');"></div>
        <div class="container service-hero-inner">
            <div class="service-hero-copy">
                <div class="breadcrumbs"><a href="/">Home</a> / <a href="/services">Services</a> / <?= e($service['name']); ?></div>
                <p class="eyebrow">Premium Service</p>
                <h1><?= e($service['name']); ?></h1>
                <p><?= e($service['hero_description']); ?></p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Request Quotation</a>
                    <a href="https://wa.me/917993155725?text=<?= rawurlencode('Hello MM Interiors, I am interested in ' . $service['name'] . '. Please share details.'); ?>" target="_blank" rel="noopener" class="button button-soft">WhatsApp About This Service</a>
                </div>
            </div>
            <div class="service-hero-card">
                <h3>Why Clients Pick This Service</h3>
                <div class="service-highlight-list">
                    <?php foreach ($serviceContent['highlights'] as $highlight): ?>
                        <span><?= e($highlight); ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <section class="section container service-gallery-section">
        <div class="service-gallery-grid">
            <?php foreach ($serviceContent['gallery'] as $image): ?>
                <img src="<?= e($image); ?>" alt="<?= e($service['name']); ?> inspiration" loading="lazy">
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section container split-section service-detail-grid">
        <div class="service-content-stack">
            <div class="service-rich-copy">
                <p class="eyebrow">Overview</p>
                <h2>Designed for Better Visual Impact</h2>
                <p><?= e($serviceContent['intro'] ?: $service['overview']); ?></p>
            </div>

            <div>
                <h2>Service Overview</h2>
                <p><?= nl2br(e($service['overview'])); ?></p>
            </div>

            <div class="service-feature-block">
                <div>
                    <h2>Benefits</h2>
                    <ul class="service-bullet-list">
                        <?php foreach ($serviceContent['benefits_list'] as $item): ?>
                            <li><?= e($item); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div>
                    <h2>Styles & Options</h2>
                    <div class="service-chip-list">
                        <?php foreach ($serviceContent['styles_list'] as $item): ?>
                            <span><?= e($item); ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <div class="service-feature-block">
                <div>
                    <h2>Where It Works Best</h2>
                    <ul class="service-bullet-list">
                        <?php foreach ($serviceContent['ideal_for'] as $item): ?>
                            <li><?= e($item); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div>
                    <h2>Execution Process</h2>
                    <ol class="service-process-list">
                        <?php foreach ($serviceContent['process'] as $step): ?>
                            <li><?= e($step); ?></li>
                        <?php endforeach; ?>
                    </ol>
                </div>
            </div>
        </div>

        <div class="sticky-card service-sticky-card">
            <h3>Why Choose MM Interiors</h3>
            <p><?= nl2br(e($service['why_choose_us'])); ?></p>
            <ul class="service-bullet-list compact-list">
                <?php foreach ($serviceContent['why_points'] as $item): ?>
                    <li><?= e($item); ?></li>
                <?php endforeach; ?>
            </ul>
            <div class="service-cta-note">
                <strong>Planning this service?</strong>
                <p><?= e($serviceContent['cta_message']); ?></p>
            </div>
            <p><strong>Service Areas</strong></p>
            <div class="location-pills">
                <?php foreach (array_slice($locations, 0, 6) as $location): ?>
                    <a href="/<?= e($location['slug']); ?>"><?= e($location['name']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <h2>Related Projects</h2>
        <div class="card-grid project-grid">
            <?php if ($projects): ?>
                <?php foreach ($projects as $project): ?>
                    <article class="project-card">
                        <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['title']); ?>" loading="lazy">
                        <div class="project-card-body">
                            <h3><?= e($project['title']); ?></h3>
                            <a href="/project/<?= e($project['slug']); ?>">View Project</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php else: ?>
                <?php foreach (array_slice($serviceContent['gallery'], 0, 3) as $index => $image): ?>
                    <article class="project-card">
                        <img src="<?= e($image); ?>" alt="<?= e($service['name']); ?> inspiration <?= e((string) ($index + 1)); ?>" loading="lazy">
                        <div class="project-card-body">
                            <h3><?= e($service['name']); ?> Inspiration</h3>
                            <a href="/contact-us#quote-form">Request Similar Design</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </section>

    <section class="section container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
            <?php foreach ($faqItems as $faq): ?>
                <details>
                    <summary><?= e($faq['question']); ?></summary>
                    <p><?= e($faq['answer']); ?></p>
                </details>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <h2>Related Services</h2>
            <div class="related-services-grid">
                <?php foreach ($relatedServices as $relatedService): ?>
                    <a href="/services/<?= e($relatedService['slug']); ?>" class="related-service-card">
                        <strong><?= e($relatedService['name']); ?></strong>
                        <span>Explore service</span>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>
