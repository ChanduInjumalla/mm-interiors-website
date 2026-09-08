<?php

declare(strict_types=1);

require_once __DIR__ . '/../models/SiteRepository.php';

final class SiteController
{
    private SiteRepository $repo;

    public function __construct()
    {
        $this->repo = new SiteRepository();
    }

    public function home(): void
    {
        $data = $this->repo->homeData();
        render('pages/home', $data);
    }

    public function about(): void
    {
        render('pages/about', [
            'locations' => $this->repo->locations(),
            'services' => $this->repo->services(),
            'projects' => db_all('SELECT * FROM projects WHERE status = "published" ORDER BY featured DESC, display_order, id LIMIT 3'),
            'testimonials' => db_all('SELECT * FROM testimonials WHERE status = "published" ORDER BY display_order, id LIMIT 3'),
            'stats' => db_all('SELECT * FROM content_stats WHERE status = "published" ORDER BY display_order, id LIMIT 4'),
        ]);
    }

    public function services(): void
    {
        render('pages/services', [
            'services' => $this->repo->services(),
            'locations' => $this->repo->locations(),
            'projects' => db_all('SELECT * FROM projects WHERE status = "published" ORDER BY featured DESC, display_order, id LIMIT 3'),
        ]);
    }

    public function service(string $slug): void
    {
        $service = $this->repo->serviceBySlug($slug);
        if (!$service) {
            $this->notFound();
            return;
        }

        render('pages/service-detail', [
            'service' => $service,
            'serviceContent' => service_content_for($slug),
            'projects' => db_all('SELECT * FROM projects WHERE status = "published" AND FIND_IN_SET(?, related_service_slugs) ORDER BY featured DESC LIMIT 3', [$slug]),
            'faqs' => db_all('SELECT * FROM faqs WHERE status = "published" AND (scope = "global" OR service_id = ?) ORDER BY display_order, id', [(int) $service['id']]),
            'relatedServices' => db_all('SELECT * FROM services WHERE id != ? AND status = "published" ORDER BY display_order, id LIMIT 4', [(int) $service['id']]),
            'locations' => $this->repo->locations(),
        ]);
    }

    public function gallery(): void
    {
        $category = $_GET['category'] ?? 'all';
        render('pages/gallery', [
            'categories' => $this->repo->categories(),
            'projects' => $this->repo->galleryProjects($category),
            'activeCategory' => $category,
            'featuredProjects' => db_all('SELECT * FROM projects WHERE status = "published" ORDER BY featured DESC, display_order, id LIMIT 3'),
        ]);
    }

    public function project(string $slug): void
    {
        $project = $this->repo->projectBySlug($slug);
        if (!$project) {
            $this->notFound();
            return;
        }

        render('pages/project-detail', [
            'project' => $project,
            'relatedProjects' => db_all('SELECT * FROM projects WHERE id != ? AND status = "published" ORDER BY featured DESC, display_order LIMIT 3', [(int) $project['id']]),
        ]);
    }

    public function contact(): void
    {
        render('pages/contact', [
            'services' => $this->repo->services(),
            'locations' => $this->repo->locations(),
            'testimonials' => db_all('SELECT * FROM testimonials WHERE status = "published" ORDER BY display_order, id LIMIT 3'),
        ]);
    }

    public function location(string $slug): bool
    {
        $location = $this->repo->locationBySlug($slug);
        if (!$location) {
            return false;
        }

        $services = $this->repo->services();
        $relatedSeoPages = db_all(
            'SELECT sp.slug, s.name AS service_name FROM seo_pages sp JOIN services s ON s.id = sp.service_id WHERE sp.location_id = ? AND sp.status = "published" ORDER BY s.display_order, s.name LIMIT 6',
            [(int) $location['id']]
        );
        $projects = db_all(
            'SELECT * FROM projects WHERE status = "published" AND location_slug = ? ORDER BY featured DESC, display_order LIMIT 6',
            [$slug]
        );
        $testimonials = db_all(
            'SELECT * FROM testimonials WHERE status = "published" AND (location = ? OR location = "") ORDER BY display_order, id LIMIT 4',
            [$location['name']]
        );
        $faqs = db_all(
            'SELECT * FROM faqs WHERE status = "published" AND (location_id = ? OR scope = "global") ORDER BY display_order, id LIMIT 6',
            [(int) $location['id']]
        );

        render('pages/location-detail', [
            'location' => $location,
            'locationContent' => location_content_for($slug),
            'services' => $services,
            'nearbyLocations' => $this->repo->nearbyLocations($slug),
            'relatedSeoPages' => $relatedSeoPages,
            'projects' => $projects,
            'testimonials' => $testimonials,
            'faqs' => $faqs,
        ]);

        return true;
    }

    public function seo(string $slug): void
    {
        $page = $this->repo->seoPageBySlug($slug);
        if (!$page) {
            $this->notFound();
            return;
        }

        render('pages/seo-detail', [
            'page' => $page,
            'nearbyPages' => $this->repo->nearbySeoPages((int) $page['service_id'], (int) $page['location_id']),
            'relatedServicePages' => $this->repo->relatedServiceSeoPages((int) $page['location_id'], (int) $page['service_id']),
            'projects' => db_all('SELECT * FROM projects WHERE status = "published" AND (location_slug = ? OR category_slug = ?) ORDER BY featured DESC LIMIT 3', [$page['location_slug'], $page['service_slug']]),
            'faqs' => db_all('SELECT * FROM faqs WHERE status = "published" AND (seo_page_id = ? OR service_id = ? OR location_id = ? OR scope = "global") ORDER BY display_order, id', [(int) $page['id'], (int) $page['service_id'], (int) $page['location_id']]),
        ]);
    }

    public function submitEnquiry(): void
    {
        verify_csrf();

        $name = trim($_POST['name'] ?? '');
        $mobile = trim($_POST['mobile'] ?? '');

        if ($name === '' || $mobile === '') {
            flash('error', 'Please provide your name and mobile number.');
            redirect_to($_SERVER['HTTP_REFERER'] ?? '/contact-us');
        }

        save_record('contact_enquiries', [
            'name' => $name,
            'mobile' => $mobile,
            'email' => trim($_POST['email'] ?? ''),
            'location' => trim($_POST['location'] ?? ''),
            'service' => trim($_POST['service'] ?? ''),
            'property_type' => trim($_POST['property_type'] ?? ''),
            'message' => trim($_POST['message'] ?? ''),
            'source_url' => $_POST['source_url'] ?? ($_SERVER['HTTP_REFERER'] ?? ''),
            'source_page' => trim($_POST['source_page'] ?? ''),
            'utm_source' => trim($_POST['utm_source'] ?? ''),
            'utm_medium' => trim($_POST['utm_medium'] ?? ''),
            'utm_campaign' => trim($_POST['utm_campaign'] ?? ''),
            'status' => 'new',
            'notes' => '',
        ]);

        flash('success', 'Thank you! MM Interiors will contact you shortly.');
        redirect_to($_SERVER['HTTP_REFERER'] ?? '/contact-us');
    }

    public function notFound(): void
    {
        http_response_code(404);
        render('pages/404', [], 'main');
    }
}
