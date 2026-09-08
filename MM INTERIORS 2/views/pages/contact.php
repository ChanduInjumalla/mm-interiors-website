<?php
$metaTitle = 'Contact Us | MM Interiors & Wallpapers';
$contactHero = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80';
?>
<main class="page-shell contact-page-shell">
    <section class="contact-hero">
        <div class="contact-hero-media" style="background-image: linear-gradient(90deg, rgba(8, 9, 11, .86), rgba(8, 9, 11, .34)), url('<?= e($contactHero); ?>');"></div>
        <div class="container contact-hero-inner">
            <div class="contact-hero-copy">
                <p class="eyebrow">Contact Us</p>
                <h1>Let's Talk About Your Space</h1>
                <p>Reach MM Interiors for wallpaper installation, modular kitchens, feature walls, false ceilings and complete interior solutions. We help you move from idea to a polished result with premium planning and professional execution.</p>
                <div class="hero-actions">
                    <a href="#quote-form" class="button button-gold">Request Callback</a>
                    <a href="https://wa.me/917993155725?text=<?= rawurlencode('Hello MM Interiors, I would like to discuss my interior project. Please share details.'); ?>" target="_blank" rel="noopener" class="button button-soft">WhatsApp Now</a>
                </div>
            </div>
            <div class="contact-hero-panel">
                <h3>Quick Contact</h3>
                <div class="service-highlight-list">
                    <span>Call: 7993155725</span>
                    <span>Call: 9008397793</span>
                    <span>Email: info@mminteriors.com</span>
                    <span>Mon - Sat: 9:00 AM to 7:00 PM</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section container contact-detail-grid">
        <div class="contact-info-stack">
            <div class="service-rich-copy">
                <p class="eyebrow">Visit Us</p>
                <h2>MM Interiors & Wallpapers</h2>
                <p>Sri Ram Nagar Colony<br>Ameenpur, Sangareddy, Telangana</p>
                <p>Whether you are planning a wallpaper feature wall, a complete modular kitchen or a full interior transformation, we can guide you on the right approach for your space.</p>
            </div>

            <div class="location-services-grid contact-cards-grid">
                <article class="location-service-card">
                    <strong>Call Us</strong>
                    <span><a href="tel:7993155725">7993155725</a><br><a href="tel:9008397793">9008397793</a></span>
                </article>
                <article class="location-service-card">
                    <strong>Email Us</strong>
                    <span><a href="mailto:info@mminteriors.com">info@mminteriors.com</a></span>
                </article>
                <article class="location-service-card">
                    <strong>Business Hours</strong>
                    <span>Monday to Saturday<br>9:00 AM to 7:00 PM</span>
                </article>
                <article class="location-service-card">
                    <strong>Service Areas</strong>
                    <span>Hyderabad, Ameenpur, Miyapur, Chandanagar, Sangareddy and nearby locations.</span>
                </article>
            </div>

            <div class="service-rich-copy">
                <p class="eyebrow">Where We Serve</p>
                <h2>Nearby Locations We Cover</h2>
                <div class="location-pills">
                    <?php foreach ($locations as $location): ?>
                        <a href="/<?= e($location['slug']); ?>"><?= e($location['name']); ?></a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="cta-form-wrap" id="quote-form">
            <h2>Request a Callback</h2>
            <p>Share a few details and MM Interiors will contact you shortly.</p>
            <?php
            $sourcePage = 'Contact Page';
            $submitLabel = 'Request Callback';
            require __DIR__ . '/../partials/enquiry-form.php';
            ?>
        </div>
    </section>

    <?php if ($testimonials): ?>
    <section class="section container">
        <p class="eyebrow">Client Feedback</p>
        <h2>Why People Reach Out to MM Interiors</h2>
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
</main>
