import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';

export default function ThreeBHKCostPage() {
  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cost Guide', path: '/interior-design-cost-hyderabad' }, { label: '3BHK Cost' }]} />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <span className="overline">3BHK Budget Planning</span>
          <h2>What Goes Into a 3BHK Interior Budget?</h2>
          <div className="divider"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            A 3BHK home has more scope than a 2BHK — an additional bedroom, often a larger kitchen, a dining area, possibly a pooja room and more wardrobe requirements. Each addition affects the total budget.
          </p>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            The actual cost depends on whether you include all rooms or prioritize certain spaces, what material tier you choose, and whether additional elements like a bar unit, study corner or full pooja room are included.
          </p>

          <h3 style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-lg)' }}>Typical 3BHK Scope</h3>
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            {['Modular Kitchen (L-shaped or U-shaped with tall unit)', 'Master Bedroom Wardrobe (full wall)', 'Second Bedroom Wardrobe', 'Third Bedroom / Kids Room Wardrobe', 'TV Unit with Back Panel', 'Crockery Unit / Dining Storage', 'False Ceiling (all rooms)', 'Pooja Unit or Room', 'Shoe Rack & Foyer Unit', 'Wall Finishes & Paint', 'Lighting for All Rooms'].map((item, i) => (
              <div key={i} style={{ padding: 'var(--space-md) var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: 'var(--fs-small)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-3xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <Link to="/3bhk-interior-design-hyderabad" className="btn btn--secondary">3BHK Design Details</Link>
            <Link to="/interior-design-cost-hyderabad" className="btn btn--secondary">Full Cost Guide</Link>
          </div>
        </div>
      </section>

      <CTASection title="Get Your 3BHK Estimate" description="Share your 3BHK layout and requirements. We will provide a detailed scope and cost breakdown." ctaText="Get a 3BHK Estimate" variant="dark" />
    </>
  );
}
