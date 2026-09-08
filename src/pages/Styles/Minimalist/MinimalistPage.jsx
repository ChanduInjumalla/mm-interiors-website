import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';
import RelatedPages from '../../../components/RelatedPages/RelatedPages';
import { services } from '../../../data/services';

export default function MinimalistPage() {
  const relatedPages = services.filter(s => ['living-room', 'modular-kitchen', 'bedroom'].includes(s.id));

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Inspiration', path: '/interior-design-inspiration-hyderabad' },
          { label: 'Minimalist' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Minimalist Style</span>
              <h2>Less, But Better</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Minimalist design is not about empty rooms. It is about every element having a clear purpose. Storage is hidden, surfaces are clear, colors are restrained and the architecture speaks for itself.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Our minimalist projects use built-in furniture, wall-to-wall storage with flush doors, muted palettes and carefully selected lighting.</p>
            </div>
            <div>
              <img 
                src="/images/bhk/apartment.jpg" 
                alt="Minimalist interior design by MM Interiors Hyderabad" 
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
            <h2>Minimalist Design Elements</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Built-In Everything</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Wardrobes, TV units and storage built into walls for a seamless look.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Flush Surfaces</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>No visible handles, no protruding elements, clean wall planes.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Muted Palette</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Whites, off-whites, light greys and one accent tone.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Quality Over Quantity</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Fewer, better pieces of furniture and accessories.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Empty Space</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Deliberate use of negative space as a design element.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Precise Lighting</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Architectural lighting that defines space without visible fixtures.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages title="Related Services" pages={relatedPages} />

      <CTASection
        title="Interested in Minimalist Design?"
        description="Discuss your design preferences and see how we can bring this style to your home."
        ctaText="Explore Minimal Interiors"
        variant="dark"
      />
    </>
  );
}
