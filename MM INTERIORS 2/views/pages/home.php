<?php
$metaTitle = 'MM Interiors & Wallpapers | Premium Interior & Wallpaper Studio';
$metaDescription = 'Premium interior solutions, wallpapers, false ceilings, modular kitchens and feature walls in Ameenpur, Sangareddy, Hyderabad and nearby areas.';
$contentBlocks = [];
foreach ($content as $block) {
    $contentBlocks[$block['block_key']] = $block;
}

$demoProjects = [
    [
        'title' => 'Modern Living Room Transformation',
        'location' => 'Ameenpur',
        'category' => 'Wallpaper + TV Feature Wall',
        'slug' => 'modern-living-room-transformation',
        'thumbnail' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'before_image' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'after_image' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'description' => 'A premium living room upgrade combining elegant wallpaper detailing, a refined TV feature wall and balanced lighting.',
        'image_alt' => 'Modern living room transformation by MM Interiors',
    ],
    [
        'title' => 'Luxury Bedroom Feature Wall',
        'location' => 'Miyapur',
        'category' => '3D Panels + False Ceiling',
        'slug' => 'luxury-bedroom-feature-wall',
        'thumbnail' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        'before_image' => 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
        'after_image' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        'description' => 'A calm bedroom concept with layered textures, accent wall treatment and ceiling lighting integration.',
        'image_alt' => 'Luxury bedroom feature wall by MM Interiors',
    ],
    [
        'title' => 'Contemporary Modular Kitchen',
        'location' => 'Chandanagar',
        'category' => 'Modular Kitchen',
        'slug' => 'contemporary-modular-kitchen',
        'thumbnail' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        'before_image' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        'after_image' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        'description' => 'A smart modular kitchen planned for storage efficiency, easy movement and a premium finish palette.',
        'image_alt' => 'Contemporary modular kitchen by MM Interiors',
    ],
];

$displayProjects = !empty($projects) ? $projects : $demoProjects;
?>
<main>
    <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container hero-grid">
            <div class="hero-copy">
                <p class="eyebrow">Premium Interior & Wallpaper Studio</p>
                <h1><?= e($contentBlocks['hero_title']['title'] ?? 'Beautiful Spaces. Timeless Impressions.'); ?></h1>
                <p><?= e($contentBlocks['hero_subtitle']['content'] ?? 'Transform your home or workspace with professionally designed interiors, premium wallpapers, feature walls, false ceilings, modular kitchens and complete interior solutions.'); ?></p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Get Free Consultation</a>
                    <a href="/gallery" class="button button-outline">View Our Projects</a>
                    <a href="https://wa.me/917993155725" class="button button-soft">WhatsApp Us</a>
                </div>
                <div class="hero-phones">Call: 7993155725 | 9008397793</div>
            </div>
            <div class="hero-showcase">
                <div class="showcase-card large"></div>
                <div class="showcase-card small"></div>
            </div>
        </div>
    </section>

    <section class="trust-strip container">
        <article><strong>Premium Designs</strong><span>Elegant and customized concepts.</span></article>
        <article><strong>Best Materials</strong><span>Quality materials selected for durability.</span></article>
        <article><strong>On-Time Service</strong><span>Professional execution and project coordination.</span></article>
        <article><strong>Customer Satisfaction</strong><span>Transparent service from consultation to completion.</span></article>
    </section>

    <section class="section container split-section">
        <div class="image-stack">
            <div class="stack-image primary"></div>
            <div class="stack-image secondary"></div>
        </div>
        <div>
            <p class="eyebrow">About MM Interiors</p>
            <h2>Designing Spaces That Feel Like You</h2>
            <p>MM Interiors is a professional interior and wallpaper studio delivering design, installation and complete transformation solutions for homes, offices and commercial spaces.</p>
            <a href="/about-us" class="button button-outline">Know More About Us</a>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <p class="eyebrow">Our Services</p>
            <h2>Everything Your Space Needs</h2>
            <p class="section-intro">From walls and ceilings to kitchens and complete interiors, MM Interiors delivers professional solutions under one roof.</p>
            <div class="card-grid services-grid">
                <?php foreach ($services as $service): ?>
                    <article class="service-card">
                        <div class="service-icon"><?= e(substr($service['name'], 0, 1)); ?></div>
                        <h3><?= e($service['name']); ?></h3>
                        <p><?= e($service['short_description']); ?></p>
                        <a href="/services/<?= e($service['slug']); ?>">Explore <?= e($service['short_cta'] ?: $service['name']); ?></a>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Transformation</p>
                <h2>See The Transformation</h2>
            </div>
        </div>
        <?php $featuredTransformation = $displayProjects[0] ?? null; ?>
        <div class="before-after-card">
            <div class="before-after-panels">
                <div>
                    <span>Before</span>
                    <img src="<?= e(asset_url($featuredTransformation['before_image'])); ?>" alt="<?= e($featuredTransformation['title']); ?> before image" loading="lazy">
                </div>
                <div>
                    <span>After</span>
                    <img src="<?= e(asset_url($featuredTransformation['after_image'])); ?>" alt="<?= e($featuredTransformation['title']); ?> after image" loading="lazy">
                </div>
            </div>
            <div class="before-after-copy">
                <h3><?= e($featuredTransformation['title']); ?></h3>
                <p><?= e($featuredTransformation['description']); ?></p>
                <?php if (!empty($projects)): ?>
                    <a href="/project/<?= e($featuredTransformation['slug']); ?>" class="button button-gold">View Project</a>
                <?php else: ?>
                    <a href="/gallery" class="button button-gold">Explore Our Gallery</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Featured Projects</p>
                <h2>Spaces We've Transformed</h2>
            </div>
        </div>
        <div class="card-grid project-grid">
            <?php foreach ($displayProjects as $project): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['image_alt'] ?: $project['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($project['title']); ?></h3>
                        <p><?= e($project['location']); ?></p>
                        <span><?= e($project['category']); ?></span>
                        <?php if (!empty($projects)): ?>
                            <a href="/project/<?= e($project['slug']); ?>">View Project</a>
                        <?php else: ?>
                            <a href="/contact-us#quote-form">Request Similar Design</a>
                        <?php endif; ?>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container timeline-section">
            <p class="eyebrow">How We Work</p>
            <h2>From Idea to Beautiful Reality</h2>
            <div class="timeline-grid">
                <?php foreach ([
                    ['Consultation', 'Understand the client requirement, preferred style, budget and space.'],
                    ['Site Visit & Measurement', 'Take measurements and evaluate the site.'],
                    ['Design & Material Selection', 'Finalize layouts, materials, colours and finishes.'],
                    ['Professional Execution', 'Our team begins installation and execution.'],
                    ['Quality Inspection', 'Inspect finishing and workmanship.'],
                    ['Final Handover', 'Complete the project and hand over the finished space.'],
                ] as $index => [$step, $text]): ?>
                    <article>
                        <span><?= e((string) ($index + 1)); ?></span>
                        <h3><?= e($step); ?></h3>
                        <p><?= e($text); ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <p class="eyebrow">Service Areas</p>
        <h2>Interior Solutions Near You</h2>
        <div class="location-pills">
            <?php foreach ($locations as $location): ?>
                <a href="/<?= e($location['slug']); ?>"><?= e($location['name']); ?></a>
            <?php endforeach; ?>
        </div>
    </section>

    <?php if ($stats): ?>
    <section class="section stats-section">
        <div class="container stats-grid">
            <?php foreach ($stats as $stat): ?>
                <article>
                    <strong><?= e($stat['stat_value']); ?></strong>
                    <span><?= e($stat['stat_label']); ?></span>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <section class="section container">
        <p class="eyebrow">Testimonials</p>
        <h2>What Clients Say</h2>
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

    <section class="section container cta-panel" id="quote-form">
        <div>
            <p class="eyebrow">Get Started</p>
            <h2>Planning to Transform Your Space?</h2>
            <p>Talk to MM Interiors and receive a consultation for your home, office or commercial interior project.</p>
        </div>
        <div class="cta-form-wrap">
            <?php
            $sourcePage = 'Homepage CTA';
            $submitLabel = 'Get Free Quote';
            require __DIR__ . '/../partials/enquiry-form.php';
            ?>
        </div>
    </section>
</main>
