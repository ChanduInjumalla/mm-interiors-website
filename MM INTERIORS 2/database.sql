CREATE DATABASE IF NOT EXISTS mm_interiors CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mm_interiors;

CREATE TABLE admins (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE settings (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(150) NOT NULL UNIQUE,
  setting_value MEDIUMTEXT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE services (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(190) NOT NULL,
  slug VARCHAR(190) NOT NULL UNIQUE,
  short_description TEXT NULL,
  short_cta VARCHAR(190) NULL,
  hero_description TEXT NULL,
  overview MEDIUMTEXT NULL,
  benefits MEDIUMTEXT NULL,
  styles MEDIUMTEXT NULL,
  usage_areas MEDIUMTEXT NULL,
  why_choose_us MEDIUMTEXT NULL,
  seo_title VARCHAR(255) NULL,
  meta_description TEXT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  display_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE gallery_categories (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(190) NOT NULL,
  slug VARCHAR(190) NOT NULL UNIQUE,
  status VARCHAR(20) NOT NULL DEFAULT 'published',
  display_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE projects (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(190) NOT NULL,
  slug VARCHAR(190) NOT NULL UNIQUE,
  location VARCHAR(190) NULL,
  location_slug VARCHAR(190) NULL,
  category VARCHAR(190) NULL,
  category_slug VARCHAR(190) NULL,
  description MEDIUMTEXT NULL,
  thumbnail VARCHAR(255) NULL,
  before_image VARCHAR(255) NULL,
  after_image VARCHAR(255) NULL,
  featured TINYINT(1) NOT NULL DEFAULT 0,
  display_order INT NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  seo_title VARCHAR(255) NULL,
  meta_description TEXT NULL,
  materials_used TEXT NULL,
  completion_details VARCHAR(255) NULL,
  related_service_slugs TEXT NULL,
  image_alt VARCHAR(255) NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE locations (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(190) NOT NULL,
  slug VARCHAR(190) NOT NULL UNIQUE,
  district VARCHAR(190) NULL,
  state VARCHAR(190) NULL,
  pincode VARCHAR(20) NULL,
  short_description TEXT NULL,
  full_description MEDIUMTEXT NULL,
  latitude VARCHAR(50) NULL,
  longitude VARCHAR(50) NULL,
  is_popular TINYINT(1) NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE seo_pages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  page_title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  service_id INT UNSIGNED NOT NULL,
  location_id INT UNSIGNED NOT NULL,
  service_slug VARCHAR(190) NULL,
  location_slug VARCHAR(190) NULL,
  h1_title VARCHAR(255) NULL,
  short_heading VARCHAR(255) NULL,
  hero_description TEXT NULL,
  introduction MEDIUMTEXT NULL,
  service_description MEDIUMTEXT NULL,
  benefits MEDIUMTEXT NULL,
  why_choose_us MEDIUMTEXT NULL,
  process_content MEDIUMTEXT NULL,
  custom_content MEDIUMTEXT NULL,
  seo_title VARCHAR(255) NULL,
  meta_description TEXT NULL,
  meta_keywords TEXT NULL,
  canonical_url VARCHAR(255) NULL,
  allow_indexing TINYINT(1) NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  CONSTRAINT fk_seo_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
  CONSTRAINT fk_seo_location FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
);

CREATE TABLE testimonials (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(190) NOT NULL,
  location VARCHAR(190) NULL,
  rating TINYINT NOT NULL DEFAULT 5,
  review TEXT NULL,
  service VARCHAR(190) NULL,
  display_order INT NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE faqs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  scope VARCHAR(30) NOT NULL DEFAULT 'global',
  service_id INT UNSIGNED NOT NULL DEFAULT 0,
  location_id INT UNSIGNED NOT NULL DEFAULT 0,
  seo_page_id INT UNSIGNED NOT NULL DEFAULT 0,
  display_order INT NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE contact_enquiries (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(190) NOT NULL,
  mobile VARCHAR(30) NOT NULL,
  email VARCHAR(190) NULL,
  location VARCHAR(190) NULL,
  service VARCHAR(190) NULL,
  property_type VARCHAR(100) NULL,
  message TEXT NULL,
  source_url VARCHAR(255) NULL,
  source_page VARCHAR(190) NULL,
  utm_source VARCHAR(190) NULL,
  utm_medium VARCHAR(190) NULL,
  utm_campaign VARCHAR(190) NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'new',
  notes TEXT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE content_blocks (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  block_key VARCHAR(150) NOT NULL UNIQUE,
  title VARCHAR(255) NULL,
  content MEDIUMTEXT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'published',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

CREATE TABLE content_stats (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  stat_label VARCHAR(190) NOT NULL,
  stat_value VARCHAR(100) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  display_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

INSERT INTO admins (email, password_hash, status, created_at, updated_at) VALUES
('admin@mminteriors.com', '$2y$10$W6Picf2IKsgcYPlU8YlvmOC4h60YlwiksqdGWj7nSGutl35bMn9aO', 'active', NOW(), NOW());

INSERT INTO settings (setting_key, setting_value, created_at, updated_at) VALUES
('site_name', 'MM Interiors & Wallpapers', NOW(), NOW()),
('primary_phone', '7993155725', NOW(), NOW()),
('secondary_phone', '9008397793', NOW(), NOW()),
('whatsapp_phone', '7993155725', NOW(), NOW()),
('email', 'info@mminteriors.com', NOW(), NOW()),
('address', 'Sri Ram Nagar Colony,\nAmeenpur, Sangareddy, Telangana', NOW(), NOW()),
('meta_description', 'Premium interior and wallpaper studio in Ameenpur, Sangareddy and Hyderabad for wallpapers, ceilings, modular kitchens and complete interior solutions.', NOW(), NOW());

INSERT INTO services (name, slug, short_description, short_cta, hero_description, overview, benefits, styles, usage_areas, why_choose_us, seo_title, meta_description, status, display_order, created_at, updated_at) VALUES
('Wallpaper Installation', 'wallpaper-installation', 'Premium wallpaper installation for living rooms, bedrooms, offices, commercial spaces and feature walls with clean professional finishing.', 'Wallpaper Solutions', 'Premium wallpaper installation with clean alignment, long-lasting adhesion and luxury visual impact.', 'We handle wallpaper consultation, pattern selection, surface preparation and expert installation for homes and commercial spaces.', 'Professional finishing\nPremium designs\nDurable material guidance\nFast execution', 'Textured wallpaper\nLuxury prints\nMinimal modern wallpaper\nOffice feature wallpaper', 'Living rooms\nBedrooms\nReception areas\nWorkspaces\nFeature walls', 'Customized recommendations\nSkilled installers\nPremium finish standards', 'Wallpaper Installation | MM Interiors', 'Premium wallpaper installation in Ameenpur, Sangareddy and Hyderabad by MM Interiors.', 'published', 1, NOW(), NOW()),
('3D Wall Panels', '3d-wall-panels', 'Decorative 3D wall panels designed to create depth, texture and a distinctive premium look.', '3D Wall Panels', 'Decorative wall panel systems designed to create texture, impact and premium aesthetics.', 'Our 3D wall panel solutions add structure and character to living spaces, lobbies, TV walls and commercial interiors.', 'Distinctive wall depth\nModern visual identity\nPremium finish', 'Geometric panels\nMinimal groove panels\nStatement feature walls', 'TV walls\nReception walls\nLiving spaces\nCommercial interiors', 'Creative concepts\nClean installation\nStrong finishing quality', '3D Wall Panels | MM Interiors', 'Premium 3D wall panel design and installation by MM Interiors.', 'published', 2, NOW(), NOW()),
('False Ceiling', 'false-ceiling', 'Modern false ceiling solutions with stylish lighting integration designed to improve aesthetics and ambience.', 'False Ceiling', 'Stylish false ceiling design and execution with smart lighting integration.', 'We create ceiling concepts that improve ambience, conceal services and elevate the overall feel of a room.', 'Better ambience\nLighting integration\nCleaner ceiling look', 'Cove lighting\nLayered ceilings\nMinimal modern ceiling styles', 'Living rooms\nBedrooms\nOffice cabins\nRetail interiors', 'Planning-led execution\nQuality finishing\nReliable timelines', 'False Ceiling | MM Interiors', 'Modern false ceiling solutions for homes and offices.', 'published', 3, NOW(), NOW()),
('TV Unit & Feature Wall', 'tv-unit-feature-wall', 'Custom-designed TV units and feature walls combining storage, visual appeal and practical functionality.', 'TV Units', 'Premium TV unit and feature wall design built for storage, balance and visual impact.', 'We design TV walls that combine storage, materials and composition for a polished entertainment zone.', 'Functional storage\nPremium styling\nTailored dimensions', 'Panelled walls\nStone-finish walls\nFloating TV units', 'Living rooms\nFamily lounges\nModel apartments', 'Detail-oriented design\nSpace planning\nPremium materials', 'TV Unit & Feature Wall | MM Interiors', 'Custom TV unit and feature wall solutions by MM Interiors.', 'published', 4, NOW(), NOW()),
('Modular Kitchen', 'modular-kitchen', 'Smart modular kitchens designed for efficient storage, easy maintenance, functionality and premium finishes.', 'Modular Kitchens', 'Functional modular kitchens with elegant layouts and durable finishes.', 'We develop modular kitchen solutions that balance workflow, storage, maintenance and premium styling.', 'Optimized storage\nBetter usability\nPremium finishes', 'Straight kitchens\nL-shape kitchens\nU-shape kitchens\nIsland kitchens', 'Apartments\nIndependent houses\nVillas', 'Practical planning\nFinish options\nInstallation quality', 'Modular Kitchen | MM Interiors', 'Premium modular kitchen design and execution by MM Interiors.', 'published', 5, NOW(), NOW()),
('Complete Interior Solutions', 'complete-interior-solutions', 'Complete residential and commercial interior solutions including planning, design, materials, execution and finishing.', 'Interior Solutions', 'End-to-end interior solutions from concept to execution.', 'We manage complete interiors including concept planning, materials, feature elements, ceilings, storage and final finishing.', 'One partner for execution\nConsistent finish quality\nCoordinated delivery', 'Home interiors\nOffice interiors\nRetail fit-outs', 'Homes\nWorkspaces\nCommercial projects', 'Professional coordination\nIntegrated service team\nPremium visual outcomes', 'Complete Interior Solutions | MM Interiors', 'End-to-end interior solutions by MM Interiors.', 'published', 6, NOW(), NOW());

INSERT INTO gallery_categories (name, slug, status, display_order, created_at, updated_at) VALUES
('Wallpapers', 'wallpapers', 'published', 1, NOW(), NOW()),
('3D Panels', '3d-panels', 'published', 2, NOW(), NOW()),
('False Ceiling', 'false-ceiling', 'published', 3, NOW(), NOW()),
('TV Units', 'tv-units', 'published', 4, NOW(), NOW()),
('Modular Kitchens', 'modular-kitchens', 'published', 5, NOW(), NOW()),
('Complete Interiors', 'complete-interiors', 'published', 6, NOW(), NOW());

INSERT INTO locations (name, slug, district, state, pincode, short_description, full_description, is_popular, status, created_at, updated_at) VALUES
('Ameenpur', 'ameenpur', 'Sangareddy', 'Telangana', '', 'Premium interior and wallpaper services in Ameenpur.', 'MM Interiors serves Ameenpur with wallpaper, feature wall, ceiling and complete interior solutions.', 1, 'published', NOW(), NOW()),
('Sangareddy', 'sangareddy', 'Sangareddy', 'Telangana', '', 'Interior solutions in Sangareddy.', 'MM Interiors handles residential and commercial interior projects across Sangareddy.', 1, 'published', NOW(), NOW()),
('Miyapur', 'miyapur', 'Hyderabad', 'Telangana', '', 'Interior and wallpaper services in Miyapur.', 'Premium interiors, wallpaper and modular kitchen support for Miyapur clients.', 1, 'published', NOW(), NOW()),
('Chandanagar', 'chandanagar', 'Hyderabad', 'Telangana', '', 'Interior services in Chandanagar.', 'Feature walls, wallpapers and complete interior solutions in Chandanagar.', 1, 'published', NOW(), NOW()),
('Beeramguda', 'beeramguda', 'Sangareddy', 'Telangana', '', 'Interior services in Beeramguda.', 'MM Interiors delivers wallpaper and interior execution in Beeramguda.', 1, 'published', NOW(), NOW()),
('Patancheru', 'patancheru', 'Sangareddy', 'Telangana', '', 'Interior services in Patancheru.', 'Complete space transformation services in Patancheru.', 1, 'published', NOW(), NOW()),
('Lingampally', 'lingampally', 'Hyderabad', 'Telangana', '', 'Interior services in Lingampally.', 'Premium interior design and execution support in Lingampally.', 1, 'published', NOW(), NOW()),
('Kukatpally', 'kukatpally', 'Hyderabad', 'Telangana', '', 'Interior services in Kukatpally.', 'Luxury-inspired interiors and wallpapers in Kukatpally.', 1, 'published', NOW(), NOW()),
('Hyderabad', 'hyderabad', 'Hyderabad', 'Telangana', '', 'Interior services in Hyderabad.', 'MM Interiors serves Hyderabad with end-to-end interior solutions.', 1, 'published', NOW(), NOW());

INSERT INTO seo_pages (page_title, slug, service_id, location_id, service_slug, location_slug, h1_title, short_heading, hero_description, introduction, service_description, benefits, why_choose_us, process_content, custom_content, seo_title, meta_description, meta_keywords, canonical_url, allow_indexing, status, created_at, updated_at) VALUES
('Wallpaper Installation in Ameenpur', 'wallpaper-installation-in-ameenpur', 1, 1, 'wallpaper-installation', 'ameenpur', 'Wallpaper Installation in Ameenpur', 'Premium Wallpaper Studio', 'Premium wallpaper installation solutions in Ameenpur by MM Interiors.', 'MM Interiors helps homeowners and business owners in Ameenpur upgrade plain walls into polished, design-led surfaces.', 'We offer wallpaper consultation, selection support, preparation and careful installation for feature walls, bedrooms, offices and living spaces.', 'Clean finishing\nPremium designs\nProfessional execution', 'Clients choose MM Interiors for detail-oriented installation, premium material understanding and responsive service.', 'We begin with consultation, assess the wall condition, finalize the wallpaper style and complete installation with finishing checks.', 'Add local proof, nearby landmark references and project examples from admin before scaling further.', 'Wallpaper Installation in Ameenpur | MM Interiors', 'Premium wallpaper installation in Ameenpur for homes and offices.', 'wallpaper installation ameenpur, wallpaper studio ameenpur', '', 1, 'published', NOW(), NOW());

INSERT INTO testimonials (customer_name, location, rating, review, service, display_order, status, created_at, updated_at) VALUES
('Ravi Kumar', 'Ameenpur', 5, 'Professional execution and very neat wallpaper finishing. The team was responsive and delivered on time.', 'Wallpaper Installation', 1, 'published', NOW(), NOW()),
('Sneha Reddy', 'Miyapur', 5, 'Our TV wall and false ceiling turned out exactly the way we hoped. Premium look and clean work.', 'TV Unit & Feature Wall', 2, 'published', NOW(), NOW()),
('Ahmed Khan', 'Chandanagar', 5, 'Good coordination, clear communication and quality materials. Happy with the full interior transformation.', 'Complete Interior Solutions', 3, 'published', NOW(), NOW());

INSERT INTO faqs (question, answer, scope, service_id, location_id, seo_page_id, display_order, status, created_at, updated_at) VALUES
('How long does wallpaper installation take?', 'Most wallpaper projects can be completed within one to three days depending on wall condition and project size.', 'global', 0, 0, 0, 1, 'published', NOW(), NOW()),
('Do you handle site measurement before starting?', 'Yes. We assess the site, take measurements and recommend suitable finishes before execution begins.', 'global', 0, 0, 0, 2, 'published', NOW(), NOW()),
('Can you manage complete interior execution?', 'Yes. MM Interiors handles wallpapers, ceilings, feature walls, kitchens and full interior solutions.', 'global', 0, 0, 0, 3, 'published', NOW(), NOW());

INSERT INTO content_blocks (block_key, title, content, status, created_at, updated_at) VALUES
('hero_title', 'Beautiful Spaces. Timeless Impressions.', '', 'published', NOW(), NOW()),
('hero_subtitle', '', 'Premium Interior, Wallpaper & Complete Home Transformation Solutions', 'published', NOW(), NOW()),
('about_preview', 'Designing Spaces That Feel Like You', 'Professional interior and wallpaper studio for homes and commercial spaces.', 'published', NOW(), NOW()),
('cta_home', 'Planning to Transform Your Space?', 'Talk to MM Interiors and receive a consultation for your home, office or commercial interior project.', 'published', NOW(), NOW());

INSERT INTO content_stats (stat_label, stat_value, status, display_order, created_at, updated_at) VALUES
('Projects Completed', '120+', 'draft', 1, NOW(), NOW()),
('Years of Experience', '8+', 'draft', 2, NOW(), NOW()),
('Locations Served', '9+', 'draft', 3, NOW(), NOW());
