import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function DuplexPage() {
  const relatedPages = services.filter(s => ['staircase', 'living-room', 'modular-kitchen'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: 'Duplex' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Duplex Interiors</span>
              <h2>Two Floors, One Coordinated Design</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Duplexes combine the privacy of two floors with the convenience of an apartment. The design challenge is connecting both floors through the staircase, maintaining visual flow and zoning public and private spaces across levels.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design duplex interiors with ground-floor living/dining/kitchen and upper-floor bedrooms, connected by a staircase that becomes a design feature.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Ground Floor Living & Dining</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Kitchen</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Staircase Design</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Upper Floor Bedrooms</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Wardrobes</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False Ceiling on Both Floors</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Lighting Design</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Under-Stair Storage</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/duplex.jpg" 
                alt="Modern duplex interior design by MM Interiors Hyderabad" 
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
          <h2>Duplex Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a duplex depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your Duplex"
        description="Share your duplex layout and requirements. We will create a design and scope plan."
        ctaText="Discuss Duplex Project"
        variant="dark"
      />
    </>
  );
}
