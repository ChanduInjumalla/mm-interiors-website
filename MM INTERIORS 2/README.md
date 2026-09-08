# MM Interiors & Wallpapers

Premium PHP + MySQL website and admin CMS for MM Interiors & Wallpapers.

## Stack

- PHP 8+
- MySQL / MariaDB
- HTML5 / CSS3
- Vanilla JavaScript
- PDO prepared statements

## Install

1. Create a MySQL database named `mm_interiors`.
2. Import [database.sql](/Users/tekmalbharathkumar/Desktop/MM%20INTERIORS/database.sql).
3. Update database credentials in [config/database.php](/Users/tekmalbharathkumar/Desktop/MM%20INTERIORS/config/database.php).
4. Point your web root to this project folder.
5. Ensure Apache `mod_rewrite` is enabled.
6. Make `/uploads` writable by PHP.

## Admin Login

- URL: `/admin/login.php`
- Email: `admin@mminteriors.com`
- Password: `Admin@12345`

Change the password immediately after first login by updating the `admins` table with a new `password_hash()`.

## Main Areas

- Public website with service pages, gallery, projects, contact and SEO landing pages
- Admin CMS for content, services, projects, SEO pages, locations, testimonials, FAQs, leads and settings
- Sitemap and robots support
- CSRF protection, prepared statements, hashed passwords and session timeout

## Notes

- Uploaded images are validated by MIME type and file size.
- SEO bulk generation creates draft pages intentionally to reduce duplicate content risk.
- The app is designed to run on standard PHP + MySQL hosting, without WordPress.
