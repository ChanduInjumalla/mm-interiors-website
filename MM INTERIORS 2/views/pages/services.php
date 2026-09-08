<?php
$metaTitle = 'Services | MM Interiors & Wallpapers';
$servicesHero = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80';
?>
<main class="page-shell services-page-shell">
    <section class="services-hero">
        <div class="services-hero-media" style="background-image: linear-gradient(90deg, rgba(8, 9, 11, .85), rgba(8, 9, 11, .34)), url('<?= e($servicesHero); ?>');"></div>
        <div class="container services-hero-inner">
            <div class="services-hero-copy">
                <p class="eyebrow">Our Services</p>
                <h1>Everything Your Space Needs Under One Premium Interior Studio</h1>
                <p>From wallpapers and 3D panels to ceilings, TV walls, kitchens and complete interiors, MM Interiors delivers coordinated, finish-focused solutions that transform how your space looks and feels.</p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Get Free Consultation</a>
                    <a href="/gallery" class="button button-soft">View Our Projects</a>
                </div>
            </div>
            <div class="services-hero-panel">
                <h3>What You Can Expect</h3>
                <div class="service-highlight-list">
                    <span>Premium design language</span>
                    <span>Professional execution</span>
                    <span>Careful finish detailing</span>
                    <span>Multiple services under one roof</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="services-page-intro">
            <div class="service-rich-copy">
                <p class="eyebrow">Why Our Service Mix Works</p>
                <h2>Interior Upgrades Planned as a Cohesive Whole</h2>
                <p>Many spaces look unfinished because their walls, ceilings, storage and styling are handled separately. Our service approach helps align those parts so your home or workspace feels visually complete, functionally sound and more premium overall.</p>
            </div>
            <div class="location-service-card services-support-card">
                <strong>Best For</strong>
                <span>Homes, apartments, villas, offices and commercial spaces that need better finish quality, smarter design choices and dependable installation.</span>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="services-showcase-grid">
            <?php foreach ($services as $service): ?>
                <?php $serviceData = service_content_for($service['slug']); ?>
                <article class="services-showcase-card">
                    <div class="services-showcase-image" style="background-image: linear-gradient(180deg, rgba(10,10,11,.08), rgba(10,10,11,.12)), url('<?= e($serviceData['hero_image']); ?>');"></div>
                    <div class="services-showcase-body">
                        <p class="eyebrow small-eyebrow">Premium Service</p>
                        <h2><?= e($service['name']); ?></h2>
                        <p><?= e($service['short_description']); ?></p>
                        <div class="service-chip-list services-chip-list">
                            <?php foreach (array_slice($serviceData['highlights'], 0, 3) as $highlight): ?>
                                <span><?= e($highlight); ?></span>
                            <?php endforeach; ?>
                        </div>
                        <a href="/services/<?= e($service['slug']); ?>" class="button button-gold">Explore Service</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <p class="eyebrow">Service Coverage</p>
            <h2>Available Across Key Locations</h2>
            <div class="location-pills">
                <?php foreach ($locations as $location): ?>
                    <a href="/<?= e($location['slug']); ?>"><?= e($location['name']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <?php if ($projects): ?>
    <section class="section container">
        <p class="eyebrow">Recent Work</p>
        <h2>How These Services Come Together in Real Spaces</h2>
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

    <section class="section container cta-panel">
        <div>
            <p class="eyebrow">Need Guidance?</p>
            <h2>Not Sure Which Service Fits Your Space Best?</h2>
            <p>We can help you narrow it down based on your room, finish preference, storage needs and budget direction, then recommend the right interior solution mix.</p>
        </div>
        <div class="cta-form-wrap">
            <?php
            $sourcePage = 'Services Page';
            $submitLabel = 'Talk to MM Interiors';
            require __DIR__ . '/../partials/enquiry-form.php';
            ?>
        </div>
    </section>
</main>
