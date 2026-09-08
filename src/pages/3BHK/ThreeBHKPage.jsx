import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

export default function ThreeBHKPage() {
  const relatedPages = services.filter(s => ['modular-kitchen', 'wardrobes', 'living-room', 'pooja-room', 'false-ceiling'].includes(s.id));
  const faqs = getFaqsByCategory('cost');

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Home Interiors', path: '/home-interiors-hyderabad' },
          { label: '3BHK' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">3BHK Interiors</span>
              <h2>Complete 3BHK Home Interiors</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>A 3BHK home offers more scope — a larger living-dining area, a dedicated kitchen, master bedroom, two additional bedrooms, and often a pooja space. This allows for more design expression while maintaining practical storage.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design 3BHK interiors where every room has a clear identity — the master bedroom feels personal, the kids room is functional, the living room impresses, and the kitchen works efficiently.</p>
              <h3 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Rooms Typically Included</h3>
              <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-light)' }}>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Living Room with TV Unit & Storage</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Dining Area with Crockery Unit</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Modular Kitchen with Tall Unit</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Master Bedroom with Full Wardrobe</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Second Bedroom with Wardrobe</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Third Bedroom / Kids Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Pooja Unit or Room</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>False Ceiling & Lighting for All Rooms</li>
                <li style={{ listStyle: 'disc', marginBottom: 'var(--space-sm)' }}>Foyer & Shoe Storage</li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/bhk/3bhk.jpg" 
                alt="3BHK interior design by MM Interiors Hyderabad" 
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
          <h2>3BHK Interior Design Cost</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-2xl)' }}>
            Interior design cost for a 3bhk depends on room scope, material quality, hardware selection and design complexity. We provide detailed scope and cost breakdowns during consultation.
          </p>
          <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">View Cost Guide</Link>
        </div>
      </section>

      <RelatedPages title="Services Included" pages={relatedPages} />

      <CTASection
        title="Plan Your 3BHK"
        description="Share your 3bhk layout and requirements. We will create a design and scope plan."
        ctaText="Plan My 3BHK"
        variant="dark"
      />
    </>
  );
}
