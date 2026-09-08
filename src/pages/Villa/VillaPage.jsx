import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function VillaPage() {
  const relatedPages = services.filter(s => ['staircase', 'lighting', 'furniture', 'modular-kitchen'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: 'Villa' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Villa Interiors</span>
              <h2>Villa Interiors That Match the Scale</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Villas offer more space, more freedom and more design possibilities. But they also need more coordination — the staircase connects two floors, the living room might have a double-height ceiling, and the number of rooms demands consistent quality.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design villa interiors with attention to spatial drama, material continuity across rooms, custom furniture and lighting design that takes advantage of larger spaces.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Double-Height Living Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Staircase & Landing Design</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Large Kitchen with Island</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Multiple Bedroom Suites</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Home Office</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Pooja Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Outdoor & Balcony Areas</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Custom Furniture</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/villa.jpg" 
                alt="Luxury villa interior design by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="overline">Cost Information</span>
          <h2>Villa Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a villa depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your Villa"
        description="Share your villa layout and requirements. We will create a design and scope plan."
        ctaText="Plan My Villa"
        variant="dark"
      />
    </>
  );
}
