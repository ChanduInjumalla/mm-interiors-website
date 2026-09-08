<?php

declare(strict_types=1);

require_once __DIR__ . '/config/app.php';
require_once __DIR__ . '/controllers/SiteController.php';

$controller = new SiteController();
$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$uri = rtrim($uri, '/') ?: '/';

if ($uri === '/submit-enquiry' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller->submitEnquiry();
    exit;
}

$routes = [
    '/' => fn () => $controller->home(),
    '/about-us' => fn () => $controller->about(),
    '/services' => fn () => $controller->services(),
    '/gallery' => fn () => $controller->gallery(),
    '/contact-us' => fn () => $controller->contact(),
];

if (isset($routes[$uri])) {
    $routes[$uri]();
    exit;
}

if (preg_match('#^/services/([a-z0-9-]+)$#', $uri, $matches)) {
    $controller->service($matches[1]);
    exit;
}

if (preg_match('#^/project/([a-z0-9-]+)$#', $uri, $matches)) {
    $controller->project($matches[1]);
    exit;
}

if (preg_match('#^/([a-z0-9-]+)$#', $uri, $matches)) {
    if ($controller->location($matches[1])) {
        exit;
    }
    $controller->seo($matches[1]);
    exit;
}

$controller->notFound();
