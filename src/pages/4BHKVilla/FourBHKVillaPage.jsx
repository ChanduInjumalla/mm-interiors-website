import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function FourBHKVillaPage() {
  const relatedPages = services.filter(s => ['modular-kitchen', 'staircase', 'lighting', 'furniture'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: '4BHK / Villa' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">4BHK / Villa</span>
              <h2>Large Homes Deserve Careful Design</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>4BHK homes and villas have unique challenges — more rooms to coordinate, double-height spaces, staircases, outdoor areas and larger budgets that demand quality at every turn.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design large homes with attention to flow between floors, consistent material quality across rooms, and custom solutions for unique spaces like staircases, home offices and entertainment areas.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Formal & Informal Living Areas</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Dining Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Large Modular Kitchen</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Master Suite</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Three Additional Bedrooms</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Pooja Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Staircase & Landing Areas</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Home Office / Study</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False Ceiling & Lighting Throughout</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Custom Furniture</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/4bhk-villa.jpg" 
                alt="4BHK and luxury villa interior design by MM Interiors Hyderabad" 
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
          <h2>4BHK / Villa Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a 4bhk / villa depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your 4BHK / Villa"
        description="Share your 4bhk / villa layout and requirements. We will create a design and scope plan."
        ctaText="Plan a Large Home"
        variant="dark"
      />
    </>
  );
}
