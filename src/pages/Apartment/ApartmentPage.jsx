import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function ApartmentPage() {
  const relatedPages = services.filter(s => ['modular-kitchen', 'wardrobes', 'living-room', 'false-ceiling'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: 'Apartment' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Apartment Interiors</span>
              <h2>Smart Design for Apartment Living</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Apartments come with fixed layouts, compact rooms and shared walls. Good apartment interior design maximizes storage, creates visual space and works within the constraints of the building.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design apartment interiors that feel larger than they are — using vertical storage, multi-functional furniture, light color palettes and clever layout planning.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Living-Dining Area</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Modular Kitchen</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Bedrooms with Wardrobes</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False Ceiling & Lighting</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Compact Storage Solutions</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Foyer & Shoe Storage</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Balcony Design</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/apartment.jpg" 
                alt="Apartment interior design by MM Interiors Hyderabad" 
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
          <h2>Apartment Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a apartment depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your Apartment"
        description="Share your apartment layout and requirements. We will create a design and scope plan."
        ctaText="Plan My Apartment"
        variant="dark"
      />
    </>
  );
}
