<?php
$metaTitle = 'About Us | MM Interiors & Wallpapers';
$aboutHero = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80';
$aboutSecondary = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80';
?>
<main class="page-shell about-page-shell">
    <section class="about-hero">
        <div class="about-hero-media" style="background-image: linear-gradient(90deg, rgba(9, 10, 12, .86), rgba(9, 10, 12, .34)), url('<?= e($aboutHero); ?>');"></div>
        <div class="container about-hero-inner">
            <div class="about-hero-copy">
                <p class="eyebrow">About MM Interiors</p>
                <h1>Premium Interior Solutions Built Around Better Living</h1>
                <p>We bring together wallpaper expertise, feature walls, ceilings, modular kitchens and full interior execution to create polished spaces with lasting value for homes and commercial interiors.</p>
                <div class="hero-actions">
                    <a href="/contact-us#quote-form" class="button button-gold">Book Free Consultation</a>
                    <a href="/services" class="button button-soft">Explore Services</a>
                </div>
            </div>
            <div class="about-hero-panel">
                <h3>What Defines Our Work</h3>
                <div class="service-highlight-list">
                    <span>Premium finish standards</span>
                    <span>Design-led execution</span>
                    <span>Thoughtful material selection</span>
                    <span>Transparent project coordination</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section container split-section about-story-grid">
        <div class="about-image-stack">
            <img src="<?= e($aboutHero); ?>" alt="Premium interior design by MM Interiors" loading="lazy">
            <img src="<?= e($aboutSecondary); ?>" alt="Feature wall and bedroom styling by MM Interiors" loading="lazy">
        </div>
        <div class="about-story-copy">
            <p class="eyebrow">Who We Are</p>
            <h2>Designing Spaces That Feel Elevated, Practical and Personal</h2>
            <p>MM Interiors & Wallpapers is a premium interior and wall-finish studio focused on homes, apartments, villas, offices and commercial spaces that need more than a basic contractor approach. We plan each room with attention to finish quality, space function and overall visual harmony.</p>
            <p>Our role is not only to install. We help clients think through the space, choose the right finish direction and execute in a way that makes the final result feel complete and well-composed.</p>
        </div>
    </section>

    <?php if ($stats): ?>
    <section class="section container">
        <div class="stats-grid">
            <?php foreach ($stats as $stat): ?>
                <article>
                    <strong><?= e($stat['stat_value']); ?></strong>
                    <span><?= e($stat['stat_label']); ?></span>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <section class="section container about-values-grid">
        <div class="service-rich-copy">
            <p class="eyebrow">Mission</p>
            <h2>Create Beautiful, Functional Spaces With Professional Workmanship</h2>
            <p>Our mission is to deliver interiors that are visually refined, functionally smart and executed with the kind of detail that builds long-term trust. We want every project to feel considered from consultation to final handover.</p>
        </div>
        <div class="service-rich-copy">
            <p class="eyebrow">Vision</p>
            <h2>Be the Trusted Interior Upgrade Partner Across Hyderabad and Sangareddy</h2>
            <p>We aim to grow as a recognized premium interior studio known for clean execution, better finish quality, dependable communication and space transformations that feel distinctly above average.</p>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container">
            <p class="eyebrow">What We Do</p>
            <h2>Services That Bring the Entire Space Together</h2>
            <div class="related-services-grid">
                <?php foreach ($services as $service): ?>
                    <a href="/services/<?= e($service['slug']); ?>" class="related-service-card">
                        <strong><?= e($service['name']); ?></strong>
                        <span><?= e($service['short_description']); ?></span>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section container">
        <p class="eyebrow">Why MM Interiors</p>
        <h2>Why Clients Choose Us</h2>
        <div class="location-services-grid about-reasons-grid">
            <?php foreach ([
                ['Customized Design Direction', 'We shape each project around the space, client lifestyle and finish expectations.'],
                ['Premium Material Sense', 'We recommend options that balance aesthetics, durability and overall project tone.'],
                ['Professional Installation', 'Execution quality matters as much as the concept. Our finishing standards reflect that.'],
                ['Transparent Communication', 'Clients stay clear on the process, progress and service scope throughout the project.'],
            ] as [$title, $text]): ?>
                <article class="location-service-card">
                    <strong><?= e($title); ?></strong>
                    <span><?= e($text); ?></span>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section container">
        <p class="eyebrow">Areas We Serve</p>
        <h2>Interior Services Across Key Locations</h2>
        <div class="location-pills">
            <?php foreach ($locations as $location): ?>
                <a href="/<?= e($location['slug']); ?>"><?= e($location['name']); ?></a>
            <?php endforeach; ?>
        </div>
    </section>

    <?php if ($projects): ?>
    <section class="section container">
        <p class="eyebrow">Project Inspiration</p>
        <h2>Selected Spaces and Finish Directions</h2>
        <div class="card-grid project-grid">
            <?php foreach ($projects as $project): ?>
                <article class="project-card">
                    <img src="<?= e(asset_url($project['thumbnail'])); ?>" alt="<?= e($project['title']); ?>" loading="lazy">
                    <div class="project-card-body">
                        <h3><?= e($project['title']); ?></h3>
                        <p><?= e($project['location']); ?></p>
                        <a href="/project/<?= e($project['slug']); ?>">View Project</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <?php if ($testimonials): ?>
    <section class="section container">
        <p class="eyebrow">Client Feedback</p>
        <h2>What Our Clients Say</h2>
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

    <section class="section container cta-panel">
        <div>
            <p class="eyebrow">Let's Build Your Space</p>
            <h2>Ready to Upgrade the Way Your Interiors Feel?</h2>
            <p>Whether you need a single feature wall or complete interior execution, MM Interiors can help you move from idea to a polished final result.</p>
        </div>
        <div class="cta-form-wrap">
            <?php
            $sourcePage = 'About Us Page';
            $submitLabel = 'Request Consultation';
            require __DIR__ . '/../partials/enquiry-form.php';
            ?>
        </div>
    </section>
</main>
