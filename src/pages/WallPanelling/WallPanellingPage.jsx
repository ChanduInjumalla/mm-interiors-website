import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

/**
 * undefined
 * URL: 
 * H1: Wall Panelling Design in Hyderabad
 * CTA: Plan My Feature Wall
 */
export default function WallPanellingPage() {
  const relatedPages = services.filter(s => ['tv-unit', 'living-room', 'bedroom', 'wallpaper'].includes(s.id));
  const faqs = getFaqsByCategory('general');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Wall Panelling' },
        ]} />
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Wall Panelling</span>
              <h2>Feature Walls That Anchor Your Room</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Wall panelling adds depth and character to living rooms, bedrooms and dining areas. Fluted panels, wooden textures and stone-look finishes create focal points without overwhelming the space.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We help you select the right panel material, pattern and placement for your room.</p>
            </div>
            <div>
              <img 
                src="/images/wardrobe/wardrobe-12.jpg" 
                alt="Wall panelling design by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">What We Offer</span>
            <h2>Panel Options</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Fluted Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Vertical grooved panels in MDF, WPC or PVC for modern feature walls.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Wood-Look Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Laminate or veneer panels that replicate wood grain without solid wood cost.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Stone-Look Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Textured panels that simulate stone or concrete finishes.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>PVC/WPC Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Moisture-resistant panels suitable for bathrooms and kitchen areas.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Backlit Panels</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Panels with integrated LED backlighting for dramatic effect.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Installation</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Professional installation with proper framing and finishing.</p>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Wall Panelling FAQs" />
      )}

      <RelatedPages title="Explore Related Services" pages={relatedPages} />

      <CTASection
        title="Ready for Your Wall Panelling Project?"
        description="Discuss your wall panelling requirements with our team."
        ctaText="Plan My Feature Wall"
        variant="dark"
      />
    </>
  );
}
