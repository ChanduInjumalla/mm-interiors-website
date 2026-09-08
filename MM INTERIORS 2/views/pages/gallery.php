<?php
$metaTitle = 'Gallery | MM Interiors & Wallpapers';
$galleryHero = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80';
$demoGallery = [
    [
        'title' => 'Luxury Living Room Upgrade',
        'location' => 'Ameenpur',
        'category' => 'Wallpapers',
        'slug' => 'luxury-living-room-upgrade',
        'thumbnail' => 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'image_alt' => 'Luxury living room by MM Interiors',
    ],
    [
        'title' => 'Premium Bedroom Feature Wall',
        'location' => 'Miyapur',
        'category' => '3D Panels',
        'slug' => 'premium-bedroom-feature-wall',
        'thumbnail' => 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'image_alt' => 'Premium bedroom feature wall',
    ],
    [
        'title' => 'Contemporary Modular Kitchen',
        'location' => 'Chandanagar',
        'category' => 'Modular Kitchens',
        'slug' => 'contemporary-modular-kitchen-gallery',
        'thumbnail' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'image_alt' => 'Contemporary modular kitchen',
    ],
];
$displayProjects = !empty($projects) ? $projects : $demoGallery;
?>
<main class="page-shell gallery-page-shell">
    <section class="gallery-hero">
        <div class="gallery-hero-media" style="background-image: linear-gradient(90deg, rgba(8, 9, 11, .86), rgba(8, 9, 11, .34)), url('<?= e($galleryHero); ?>');"></div>
        <div class="container gallery-hero-inner">
            <div class="gallery-hero-copy">
                <p class="eyebrow">Gallery</p>
                <h1>Projects, Finishes and Space Transformations</h1>
                <p>Browse the visual language of MM Interiors across wallpapers, 3D wall panels, false ceilings, TV units, modular kitchens and complete premium interiors.</p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Start Your Project</a>
                    <a href="/services" class="button button-soft">Explore Services</a>
                </div>
            </div>
            <div class="gallery-hero-panel">
                <h3>What You’ll Find Here</h3>
                <div class="service-highlight-list">
                    <span>Luxury wall finishes</span>
                    <span>Feature walls and TV units</span>
                    <span>Modular kitchen inspirations</span>
                    <span>Complete interior upgrades</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="services-page-intro">
            <div class="service-rich-copy">
                <p class="eyebrow">Browse by Category</p>
                <h2>Gallery Categories</h2>
                <p>Use these filters to focus on the kind of interior finish or transformation you’re most interested in.</p>
            </div>
        </div>
        <div class="location-pills gallery-filter-pills">
            <a href="/gallery"<?= $activeCategory === 'all' ? ' class="active"' : ''; ?>>All</a>
            <?php foreach ($categories as $category): ?>
                <a href="/gallery?category=<?= e($category['slug']); ?>"<?= $activeCategory === $category['slug'] ? ' class="active"' : ''; ?>><?= e($category['name']); ?></a>
            <?php endforeach; ?>
        </div>
    </section>

    <?php if ($featuredProjects): ?>
    <section class="section container">
        <p class="eyebrow">Featured Work</p>
        <h2>Highlighted Space Transformations</h2>
        <div class="services-showcase-grid">
            <?php foreach ($featuredProjects as $project): ?>
                <article class="services-showcase-card">
                    <div class="services-showcase-image" style="background-image: linear-gradient(180deg, rgba(10,10,11,.08), rgba(10,10,11,.14)), url('<?= e(asset_url($project['thumbnail'])); ?>');"></div>
                    <div class="services-showcase-body">
                        <p class="eyebrow small-eyebrow"><?= e($project['category']); ?></p>
                        <h2><?= e($project['title']); ?></h2>
                        <p><?= e($project['description'] ?: 'A premium transformation focused on better finishes, stronger visual flow and a more polished final look.'); ?></p>
                        <a href="/project/<?= e($project['slug']); ?>" class="button button-gold">View Project</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <section class="section container">
        <p class="eyebrow">All Projects</p>
        <h2>Visual Inspiration Across Services</h2>
        <div class="card-grid project-grid">
            <?php foreach ($displayProjects as $project): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['image_alt'] ?: $project['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($project['title']); ?></h3>
                        <p><?= e($project['location']); ?></p>
                        <span><?= e($project['category']); ?></span>
                        <?php if (!empty($projects)): ?>
                            <a href="/project/<?= e($project['slug']); ?>">Open Project</a>
                        <?php else: ?>
                            <a href="/contact-us#quote-form">Request Similar Design</a>
                        <?php endif; ?>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
</main>
