import SEOHead from '../../../components/SEO/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../../components/CTA/CTASection';
import RelatedPages from '../../../components/RelatedPages/RelatedPages';
import { services } from '../../../data/services';

export default function ContemporaryPage() {
  const relatedPages = services.filter(s => ['living-room', 'modular-kitchen', 'bedroom'].includes(s.id));

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Inspiration', path: '/interior-design-inspiration-hyderabad' },
          { label: 'Contemporary' },
        ]} />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Contemporary Style</span>
              <h2>Current Design, Timeless Appeal</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Contemporary design borrows from multiple styles while remaining current. It combines warm materials with clean forms, uses texture for interest and embraces natural light.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Our contemporary projects blend wood-look finishes with modern layouts, use statement lighting and create spaces that feel both current and comfortable.</p>
            </div>
            <div>
              <img 
                src="/images/tv-unit/tv-unit-1.jpg" 
                alt="Contemporary interior design by MM Interiors Hyderabad" 
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
            <h2>Contemporary Design Elements</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Mixed Materials</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Wood, metal, glass and fabric combined in one design.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Warm Tones</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Earth tones, warm whites and natural material colors.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Statement Pieces</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>One or two focal elements that define each room.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Textural Interest</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Fluted panels, textured paint and fabric upholstery for depth.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Open Layouts</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Connected living, dining and kitchen with visual flow.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Natural Light</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Maximizing natural light with window treatments and reflective surfaces.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages title="Related Services" pages={relatedPages} />

      <CTASection
        title="Interested in Contemporary Design?"
        description="Discuss your design preferences and see how we can bring this style to your home."
        ctaText="Explore Contemporary Projects"
        variant="dark"
      />
    </>
  );
}
