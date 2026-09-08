import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';
import RelatedPages from '../../../components/RelatedPages/RelatedPages';
import { services } from '../../../data/services';

export default function AffordablePage() {
  const relatedPages = services.filter(s => ['living-room', 'modular-kitchen', 'bedroom'].includes(s.id));

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Inspiration', path: '/interior-design-inspiration-hyderabad' },
          { label: 'Affordable' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Budget Interiors</span>
              <h2>Smart Design Within Your Budget</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Affordable does not mean poor quality. It means smart prioritization — spending more where it matters (kitchen hardware, wardrobe internals) and saving where alternatives exist (paint instead of wallpaper, laminate instead of veneer).</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We help homeowners with limited budgets make informed choices about scope, materials and design complexity so the final result looks and functions well without unnecessary expense.</p>
            </div>
            <div>
              <img 
                src="/images/bhk/2bhk.jpg" 
                alt="Affordable interior design by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Key Elements</span>
            <h2>Budget-Smart Strategies</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Scope Prioritization</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Focus budget on high-impact rooms — kitchen, living room, master bedroom.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Material Alternatives</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Cost-effective materials that look good and perform well.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Standard Sizes</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Using standard dimensions to reduce custom manufacturing cost.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Paint Over Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Painted accent walls instead of expensive wall treatments where appropriate.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Essential Hardware</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Good quality soft-close hinges and basic accessories — skip luxury add-ons.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Phase Planning</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Completing interiors in phases to spread cost over time.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages title="Related Services" pages={relatedPages} />

      <CTASection
        title="Interested in Affordable Design?"
        description="Discuss your design preferences and see how we can bring this style to your home."
        ctaText="Discuss My Budget"
        variant="dark"
      />
    </>
  );
}
