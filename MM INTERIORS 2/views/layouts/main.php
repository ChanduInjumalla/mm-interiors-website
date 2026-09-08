<?php
$currentUrl = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$siteName = setting('site_name', APP_NAME);
$primaryPhone = setting('primary_phone', '7993155725');
$secondaryPhone = setting('secondary_phone', '9008397793');
$whatsApp = preg_replace('/\D+/', '', setting('whatsapp_phone', '7993155725') ?? '7993155725');
$logoUrl = setting('logo_url', 'https://storage.googleapis.com/localdukan-assets/mminteriors/MM%20LOGO.png');
$metaTitle = $metaTitle ?? $siteName;
$metaDescription = $metaDescription ?? setting('meta_description', 'Premium interior, wallpaper, false ceiling, modular kitchen and complete space transformation solutions in Hyderabad and Sangareddy.');
$metaImage = $metaImage ?? env_url('assets/images/og-default.svg');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($metaTitle); ?></title>
    <meta name="description" content="<?= e($metaDescription); ?>">
    <meta name="robots" content="<?= e($metaRobots ?? 'index,follow'); ?>">
    <link rel="canonical" href="<?= e(env_url(ltrim($currentUrl, '/'))); ?>">
    <meta property="og:title" content="<?= e($metaTitle); ?>">
    <meta property="og:description" content="<?= e($metaDescription); ?>">
    <meta property="og:image" content="<?= e($metaImage); ?>">
    <meta property="og:url" content="<?= e(env_url(ltrim($currentUrl, '/'))); ?>">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="stylesheet" href="/assets/css/style.css">
    <script defer src="/assets/js/app.js"></script>
    <?= setting('header_scripts', ''); ?>
</head>
<body>
    <header class="site-header" data-header>
        <div class="nav-shell">
            <a href="/" class="brand-mark">
                <span class="brand-logo-wrap">
                    <img src="<?= e($logoUrl); ?>" alt="<?= e($siteName); ?> logo" class="brand-logo" loading="eager" decoding="async">
                </span>
                <span class="brand-copy">
                    <strong><?= e($siteName); ?></strong>
                    <small>Premium Interior & Wallpaper Studio</small>
                </span>
            </a>
            <nav class="main-nav" data-menu>
                <a href="/"<?= $currentUrl === '/' ? ' class="active"' : ''; ?>>Home</a>
                <a href="/about-us">About Us</a>
                <a href="/services">Services</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/contact-us#quote-form" class="button button-gold">Get Free Quote</a>
                <div class="lang-switch">
                    <button class="lang-switch-shell" type="button" aria-expanded="false" aria-haspopup="true" data-lang-toggle>
                        <span class="lang-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3.5" y="3.5" width="11" height="11" rx="2.5"></rect>
                                <path d="M7 8h4"></path>
                                <path d="M9 8v5"></path>
                                <path d="M6.5 13.5c1-.3 1.9-.9 2.5-1.8.6.9 1.4 1.5 2.5 1.8"></path>
                                <path d="M15.5 10.5h5"></path>
                                <path d="M18 8.5v2"></path>
                                <path d="M16.2 18.2 18 14l1.8 4.2"></path>
                                <path d="M16.8 17h2.4"></path>
                            </svg>
                        </span>
                        <span class="lang-label">Language</span>
                        <span class="lang-caret" aria-hidden="true"></span>
                    </button>
                    <div class="lang-menu" data-lang-menu>
                        <button type="button" data-lang-code="en">English</button>
                        <button type="button" data-lang-code="te">Telugu</button>
                        <button type="button" data-lang-code="hi">Hindi</button>
                        <button type="button" data-lang-code="ta">Tamil</button>
                        <button type="button" data-lang-code="kn">Kannada</button>
                        <button type="button" data-lang-code="mr">Marathi</button>
                        <button type="button" data-lang-code="ur">Urdu</button>
                    </div>
                    <div id="google_translate_element" class="google-translate-mount" aria-hidden="true"></div>
                </div>
            </nav>
            <div class="nav-actions">
                <a class="call-pill" href="tel:<?= e($primaryPhone); ?>"><?= e($primaryPhone); ?></a>
                <button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" data-menu-toggle>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>

    <?= $content; ?>

    <footer class="site-footer">
        <div class="container footer-grid">
            <div>
                <h3><?= e($siteName); ?></h3>
                <p>Luxury-inspired interiors, wallpapers, ceilings, kitchens and complete transformation services designed for homes and commercial spaces.</p>
            </div>
            <div>
                <h4>Services</h4>
                <ul>
                    <li><a href="/services/wallpaper-installation">Wallpaper Installation</a></li>
                    <li><a href="/services/3d-wall-panels">3D Wall Panels</a></li>
                    <li><a href="/services/false-ceiling">False Ceiling</a></li>
                    <li><a href="/services/tv-unit-feature-wall">TV Unit & Feature Wall</a></li>
                    <li><a href="/services/modular-kitchen">Modular Kitchen</a></li>
                    <li><a href="/services/complete-interior-solutions">Complete Interiors</a></li>
                </ul>
            </div>
            <div>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:<?= e($primaryPhone); ?>"><?= e($primaryPhone); ?></a></li>
                    <li><a href="tel:<?= e($secondaryPhone); ?>"><?= e($secondaryPhone); ?></a></li>
                    <li><a href="mailto:<?= e(setting('email', 'info@mminteriors.com')); ?>"><?= e(setting('email', 'info@mminteriors.com')); ?></a></li>
                    <li><?= nl2br(e(setting('address', "Sri Ram Nagar Colony,\nAmeenpur, Sangareddy, Telangana"))); ?></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom container">
            <p>&copy; <?= date('Y'); ?> <?= e($siteName); ?>. All Rights Reserved.</p>
        </div>
    </footer>

    <div class="floating-whatsapp">
        <a href="https://wa.me/91<?= e($whatsApp); ?>?text=<?= rawurlencode('Hello MM Interiors, I would like to know more about your interior services.'); ?>" target="_blank" rel="noopener">WhatsApp</a>
    </div>

    <div class="mobile-cta-bar">
        <a href="tel:<?= e($primaryPhone); ?>">Call</a>
        <a href="https://wa.me/91<?= e($whatsApp); ?>" target="_blank" rel="noopener">WhatsApp</a>
        <a href="/contact-us#quote-form">Get Quote</a>
    </div>

    <script>
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,te,hi,ta,kn,mr,ur', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      }
    </script>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <?= setting('footer_scripts', ''); ?>
</body>
</html>
