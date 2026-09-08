import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';

export default function TwoBHKCostPage() {
  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cost Guide', path: '/interior-design-cost-hyderabad' }, { label: '2BHK Cost' }]} />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <span className="overline">2BHK Budget Planning</span>
          <h2>What Goes Into a 2BHK Interior Budget?</h2>
          <div className="divider"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            A typical 2BHK interior project includes a modular kitchen, two wardrobes, a TV unit, false ceiling, lighting, shoe rack and wall finishes. The actual cost depends on material quality, kitchen complexity and additional elements you choose.
          </p>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            We do not publish fixed package prices because every home is different. During consultation, we provide a detailed scope and cost breakdown based on your specific 2BHK layout and material preferences.
          </p>

          <h3 style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-lg)' }}>Typical 2BHK Scope</h3>
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            {['Modular Kitchen (L-shaped or straight)', 'Master Bedroom Wardrobe', 'Second Bedroom Wardrobe', 'TV Unit (floating or wall-to-wall)', 'False Ceiling (living + bedrooms)', 'Shoe Rack / Foyer Unit', 'Wall Paint & Finishes', 'Lighting Fixtures'].map((item, i) => (
              <div key={i} style={{ padding: 'var(--space-md) var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: 'var(--fs-small)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-3xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <Link to="/2bhk-interior-design-hyderabad" className="btn btn--secondary">2BHK Design Details</Link>
            <Link to="/interior-design-cost-hyderabad" className="btn btn--secondary">Full Cost Guide</Link>
          </div>
        </div>
      </section>

      <CTASection title="Get Your 2BHK Estimate" description="Share your 2BHK layout and preferences. We will provide a detailed scope and cost breakdown." ctaText="Get a 2BHK Estimate" variant="dark" />
    </>
  );
}
