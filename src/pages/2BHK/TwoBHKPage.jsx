import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function TwoBHKPage() {
  const relatedPages = services.filter(s => ['modular-kitchen', 'wardrobes', 'living-room', 'false-ceiling'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: '2BHK' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">2BHK Interiors</span>
              <h2>Complete 2BHK Home Interiors</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>A 2BHK home typically includes a living-dining area, kitchen, master bedroom, second bedroom and one or two bathrooms. Designing all rooms together ensures visual consistency and better material procurement.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design 2BHK interiors with smart space utilization — maximizing storage in compact rooms, creating multi-functional furniture and ensuring every square foot is used effectively.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Living Room with TV Unit</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Modular Kitchen</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Master Bedroom with Wardrobe</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Second Bedroom with Wardrobe</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False Ceiling & Lighting</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Shoe Rack & Foyer Unit</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Wall Finishes & Paint</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/2bhk.jpg" 
                alt="2BHK interior design by MM Interiors Hyderabad" 
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
          <h2>2BHK Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a 2bhk depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your 2BHK"
        description="Share your 2bhk layout and requirements. We will create a design and scope plan."
        ctaText="Plan My 2BHK"
        variant="dark"
      />
    </>
  );
}
