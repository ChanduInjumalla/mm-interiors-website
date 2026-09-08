import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services, bhkTypes } from '../../data/services';

/**
 * HomeInteriorsPage — Primary commercial pillar
 * URL: /home-interiors-hyderabad
 * H1: Full Home Interior Design in Hyderabad
 * CTA: Plan My Complete Home
 */
export default function HomeInteriorsPage() {
  const relatedPages = [
    ...services.filter(s => ['modular-kitchen', 'wardrobes', 'living-room', 'bedroom', 'false-ceiling'].includes(s.id)),
  ];

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Full Home Interiors' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Complete Home Design</span>
              <h2>Why Choose Full Home Interiors?</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
                When you design your entire home as one project, every room connects. 
                The kitchen flows into the dining, the living room complements the bedrooms, 
                and the ceiling design ties everything together. This is not possible when you 
                design rooms separately with different vendors.
              </p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
                Full home interiors also mean better material procurement, consistent quality, 
                a single point of coordination, and a smoother timeline.
              </p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>What's Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Modular kitchen with countertop and backsplash</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Wardrobes for all bedrooms</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>TV unit and entertainment wall</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False ceiling and lighting design</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Wall finishes and paint</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Pooja unit or room (where applicable)</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Shoe rack, crockery unit and storage solutions</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Electrical and plumbing coordination</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/full-home-interior.jpg" 
                alt="Complete full home interior design by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BHK Options */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">By Home Size</span>
            <h2>Interiors for Every Home Type</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            {bhkTypes.slice(0, 3).map(bhk => (
              <Link key={bhk.id} to={bhk.url} className="card" style={{ textDecoration: 'none' }}>
                <div className="card__image-wrapper">
                  <img 
                    src={bhk.image} 
                    alt={bhk.name + ' by MM Interiors Hyderabad'} 
                    className="card__image"
                    loading="lazy"
                  />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{bhk.name}</h3>
                  <p className="card__text">{bhk.description}</p>
                  <span className="card__link">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages title="Rooms We Design" pages={relatedPages} />

      <CTASection
        title="Plan Your Complete Home"
        description="Discuss your home layout, requirements and budget with us. We will help you plan every room."
        ctaText="Plan My Complete Home"
        variant="dark"
      />
    </>
  );
}
