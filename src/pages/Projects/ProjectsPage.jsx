import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import './ProjectsPage.css';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'living-room', label: 'Living Room' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'wardrobe', label: 'Wardrobe' },
  { id: 'false-ceiling', label: 'False Ceiling' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'office', label: 'Office' },
  { id: 'renovation', label: 'Renovation' },
];

const PROJECTS = [
  {
    id: 'warm-neutral-living',
    categoryKey: 'living-room',
    categoryLabel: 'Living Room',
    title: 'Warm Neutral Living Room',
    desc: 'Layered neutrals, timber accents and a cove-lit ceiling with fluted TV backdrop.',
    location: 'Ameenpur, Hyderabad',
    image: '/images/tv-unit/tv-unit-1.jpg',
    url: '/living-room-interiors-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'panelled-lounge-wall',
    categoryKey: 'living-room',
    categoryLabel: 'Living Room',
    title: 'Panelled Lounge Wall',
    desc: 'Fluted panelling and a floating console anchoring the contemporary lounge.',
    location: 'Miyapur, Hyderabad',
    image: '/images/tv-unit/tv-unit-2.jpg',
    url: '/tv-unit-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'handleless-modular-kitchen',
    categoryKey: 'kitchen',
    categoryLabel: 'Kitchen',
    title: 'Handleless Modular Kitchen',
    desc: 'Tall units, stone worktop and a clean unbroken shutter line with glossy acrylic finish.',
    location: 'Gachibowli, Hyderabad',
    image: '/images/kitchen/kitchen-1.jpg',
    url: '/modular-kitchen-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'parallel-chefs-kitchen',
    categoryKey: 'kitchen',
    categoryLabel: 'Kitchen',
    title: 'Parallel Chef Kitchen Layout',
    desc: 'BWR boiling waterproof marine ply, quartz countertop and Blum soft-close drawers.',
    location: 'Kukatpally, Hyderabad',
    image: '/images/full-home-interior.jpg',
    url: '/modular-kitchen-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'contemporary-master-suite',
    categoryKey: 'bedroom',
    categoryLabel: 'Bedroom',
    title: 'Contemporary Master Suite',
    desc: 'Integrated headboard panelling, warm pendant lighting and built-in vanity console.',
    location: 'Madhapur, Hyderabad',
    image: '/images/bedroom/bedroom-1.jpg',
    url: '/master-bedroom-interiors-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'minimalist-guest-bedroom',
    categoryKey: 'bedroom',
    categoryLabel: 'Bedroom',
    title: 'Minimalist Bedroom Retreat',
    desc: 'Understated neutral palette with textured accent wall and compact study desk.',
    location: 'Beeramguda, Hyderabad',
    image: '/images/bedroom/bedroom-2.jpg',
    url: '/bedroom-interiors-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'sliding-wardrobe-suite',
    categoryKey: 'wardrobe',
    categoryLabel: 'Wardrobe',
    title: 'Floor-to-Ceiling Sliding Wardrobe',
    desc: 'Geometric grooved shutters, integrated full-length vanity and overhead lofts.',
    location: 'Chandanagar, Hyderabad',
    image: '/images/wardrobe/wardrobe-11.jpg',
    url: '/wardrobe-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'walk-in-wardrobe',
    categoryKey: 'wardrobe',
    categoryLabel: 'Wardrobe',
    title: 'Profile Glass Wardrobe Unit',
    desc: 'Tinted glass profile doors with automatic warm sensor lighting and storage organizers.',
    location: 'Kokapet, Hyderabad',
    image: '/images/wardrobe/wardrobe-1.jpg',
    url: '/wardrobe-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'gypsum-false-ceiling',
    categoryKey: 'false-ceiling',
    categoryLabel: 'False Ceiling',
    title: 'Architectural Cove Ceiling',
    desc: 'Saint-Gobain Gypsum with 3000K warm indirect cove lighting and recessed spots.',
    location: 'Sangareddy, Hyderabad',
    image: '/images/false-ceiling/false-ceiling-1.jpg',
    url: '/false-ceiling-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'executive-office',
    categoryKey: 'office',
    categoryLabel: 'Office',
    title: 'Modern Ergonomic Home Office',
    desc: 'Integrated acoustic fluted panelling, dual monitor desk and concealed wire management.',
    location: 'Hitec City, Hyderabad',
    image: '/images/bhk/apartment.jpg',
    url: '/home-office-interiors-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'commercial-studio',
    categoryKey: 'commercial',
    categoryLabel: 'Commercial',
    title: 'Corporate Reception & Lounge',
    desc: 'Statement architectural wall with back-lit signage and luxury lounge seating.',
    location: 'Financial District, Hyderabad',
    image: '/images/bhk/villa.jpg',
    url: '/commercial-interior-design-hyderabad',
    badge: 'Design Inspiration',
  },
  {
    id: 'turnkey-renovation',
    categoryKey: 'renovation',
    categoryLabel: 'Renovation',
    title: 'Turnkey 3BHK Home Renovation',
    desc: 'Complete transformation including civil alterations, modular woodwork and electricals.',
    location: 'Kondapur, Hyderabad',
    image: '/images/bhk/3bhk.jpg',
    url: '/home-renovation-hyderabad',
    badge: 'Design Inspiration',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.categoryKey === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects' }]} />
      </div>

      <div className="projects-page">
        <div className="projects-header">
          <span className="projects-header__overline">Portfolio & Inspiration</span>
          <h1 className="projects-header__title">Projects & Design Inspiration</h1>
          <div className="projects-header__divider"></div>
          <p className="projects-header__subtitle">
            Explore our curated interior design executions and architectural concepts across Hyderabad.
          </p>
        </div>

        <div className="container">
          {/* Category Filter Pills */}
          <div className="projects-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`projects-filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <Link
                key={proj.id}
                to={proj.url}
                className="project-card"
              >
                <div className="project-card__image-wrap">
                  <span className="project-card__badge">{proj.badge}</span>
                  <img
                    src={proj.image}
                    alt={`${proj.title} by MM Interiors Hyderabad`}
                    className="project-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="project-card__body">
                  <span className="project-card__category">{proj.categoryLabel}</span>
                  <h3 className="project-card__title">{proj.title}</h3>
                  <p className="project-card__desc">{proj.desc}</p>
                  <div className="project-card__footer">
                    <span className="project-card__location">📍 {proj.location}</span>
                    <span className="project-card__link-text">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-xl)' }}>
            <Link to="/gallery" className="btn btn--secondary btn--lg">
              🖼️ Browse Complete Photo Gallery (25+ Photos)
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        title="Inspired by Our Projects?"
        description="Share your floor plan and interior preferences with our design team for a customized layout and estimate."
        ctaText="Book Free Consultation"
        variant="dark"
      />
    </>
  );
}
