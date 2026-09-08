import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';
import RelatedPages from '../../../components/RelatedPages/RelatedPages';
import { services } from '../../../data/services';

export default function LuxuryPage() {
  const relatedPages = services.filter(s => ['living-room', 'modular-kitchen', 'bedroom'].includes(s.id));

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Inspiration', path: '/interior-design-inspiration-hyderabad' },
          { label: 'Luxury' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Luxury Interiors</span>
              <h2>When Every Detail Matters</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Luxury interior design is defined by material quality, custom craftsmanship, attention to detail and generous proportions. It is not about spending more — it is about spending well on materials and workmanship that you can see and feel.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Our luxury projects use premium hardware, custom-made furniture, detailed ceiling work, layered lighting and materials selected for both beauty and durability.</p>
            </div>
            <div>
              <img 
                src="/images/bhk/4bhk-villa.jpg" 
                alt="Luxury interior design by MM Interiors Hyderabad" 
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
            <h2>Premium Design Elements</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Premium Materials</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Solid surfaces, imported hardware, natural stone and premium veneers.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Custom Furniture</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Bespoke sofas, dining tables, consoles and storage pieces.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Detailed Ceiling</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Multi-layer false ceilings with integrated lighting and AC.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Layered Lighting</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Multiple lighting layers with dimming, scenes and automation.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Statement Pieces</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Designer pendant lights, artwork and curated accessories.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Quality Hardware</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Blum, Hettich or equivalent premium kitchen and wardrobe hardware.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages title="Related Services" pages={relatedPages} />

      <CTASection
        title="Interested in Luxury Design?"
        description="Discuss your design preferences and see how we can bring this style to your home."
        ctaText="Plan a Premium Home"
        variant="dark"
      />
    </>
  );
}
