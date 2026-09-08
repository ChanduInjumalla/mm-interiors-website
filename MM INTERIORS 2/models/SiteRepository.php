<?php

declare(strict_types=1);

final class SiteRepository
{
    public function homeData(): array
    {
        return [
            'services' => db_all('SELECT * FROM services WHERE status = "published" ORDER BY display_order, id LIMIT 6'),
            'projects' => db_all('SELECT * FROM projects WHERE status = "published" ORDER BY featured DESC, display_order, id LIMIT 6'),
            'testimonials' => db_all('SELECT * FROM testimonials WHERE status = "published" ORDER BY display_order, id LIMIT 6'),
            'locations' => db_all('SELECT * FROM locations WHERE status = "published" ORDER BY is_popular DESC, name LIMIT 9'),
            'faqs' => db_all('SELECT * FROM faqs WHERE status = "published" AND scope = "global" ORDER BY display_order, id LIMIT 6'),
            'stats' => db_all('SELECT * FROM content_stats WHERE status = "published" ORDER BY display_order, id LIMIT 4'),
            'content' => db_all('SELECT * FROM content_blocks'),
        ];
    }

    public function services(): array
    {
        return db_all('SELECT * FROM services WHERE status = "published" ORDER BY display_order, id');
    }

    public function serviceBySlug(string $slug): ?array
    {
        return db_row('SELECT * FROM services WHERE slug = ? AND status = "published" LIMIT 1', [$slug]);
    }

    public function projectBySlug(string $slug): ?array
    {
        return db_row('SELECT * FROM projects WHERE slug = ? AND status = "published" LIMIT 1', [$slug]);
    }

    public function galleryProjects(?string $category = null): array
    {
        if ($category && $category !== 'all') {
            return db_all('SELECT * FROM projects WHERE status = "published" AND category_slug = ? ORDER BY display_order, id', [$category]);
        }

        return db_all('SELECT * FROM projects WHERE status = "published" ORDER BY display_order, id');
    }

    public function categories(): array
    {
        return db_all('SELECT * FROM gallery_categories WHERE status = "published" ORDER BY display_order, id');
    }

    public function locations(): array
    {
        return db_all('SELECT * FROM locations WHERE status = "published" ORDER BY is_popular DESC, name');
    }

    public function locationBySlug(string $slug): ?array
    {
        return db_row('SELECT * FROM locations WHERE slug = ? AND status = "published" LIMIT 1', [$slug]);
    }

    public function nearbyLocations(string $slug): array
    {
        return db_all('SELECT * FROM locations WHERE slug != ? AND status = "published" ORDER BY is_popular DESC, name LIMIT 6', [$slug]);
    }

    public function seoPageBySlug(string $slug): ?array
    {
        return db_row('SELECT sp.*, s.name AS service_name, l.name AS location_name FROM seo_pages sp LEFT JOIN services s ON s.id = sp.service_id LEFT JOIN locations l ON l.id = sp.location_id WHERE sp.slug = ? AND sp.status = "published" LIMIT 1', [$slug]);
    }

    public function nearbySeoPages(int $serviceId, int $locationId): array
    {
        return db_all('SELECT sp.slug, l.name FROM seo_pages sp JOIN locations l ON l.id = sp.location_id WHERE sp.service_id = ? AND sp.location_id != ? AND sp.status = "published" ORDER BY l.is_popular DESC, l.name LIMIT 5', [$serviceId, $locationId]);
    }

    public function relatedServiceSeoPages(int $locationId, int $serviceId): array
    {
        return db_all('SELECT sp.slug, s.name FROM seo_pages sp JOIN services s ON s.id = sp.service_id WHERE sp.location_id = ? AND sp.service_id != ? AND sp.status = "published" ORDER BY s.display_order, s.name LIMIT 5', [$locationId, $serviceId]);
    }
}
