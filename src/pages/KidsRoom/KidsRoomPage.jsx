import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

/**
 * Kids Room
 * URL: /kids-room-interiors-hyderabad
 * H1: Kids Room Interior Design in Hyderabad
 * CTA: Design a Kids Room
 */
export default function KidsRoomPage() {
  const relatedPages = services.filter(s => ['bedroom', 'home-office', 'furniture', 'wardrobes'].includes(s.id));
  const faqs = getFaqsByCategory('general');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Kids Room' },
        ]} />
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Kids Room</span>
              <h2>A Room That Grows With Your Child</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Children need rooms that are safe, stimulating and organized. As they grow, their room needs change — from play space to study space, from small wardrobes to full storage systems.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design kids rooms with durable materials, rounded edges, accessible storage at child height, dedicated study areas, and flexible layouts that can adapt as your child grows.</p>
            </div>
            <div>
              <img 
                src="/images/kids-room/kids-room-1.jpg" 
                alt="Kids room interior design by MM Interiors Hyderabad" 
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
            <h2>Kids Room Design Elements</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Study Area</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Ergonomic study desks with shelving, lighting and cable management for computers or books.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Smart Storage</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Wardrobes, open shelves, under-bed storage and toy organizers at accessible heights.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Safety First</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Rounded edges, non-toxic finishes, stable furniture and child-safe hardware.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Flexible Layout</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Designs that adapt from toddler to teenager without major renovation.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Bunk & Loft Beds</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Space-saving bed solutions for shared rooms or rooms with limited floor area.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Color & Theme</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Age-appropriate color palettes and design themes that can be updated over time.</p>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Kids Room FAQs" />
      )}

      <RelatedPages title="Explore Related Services" pages={relatedPages} />

      <CTASection
        title="Design Your Kids Room"
        description="Tell us about your child's age, interests and room dimensions."
        ctaText="Design a Kids Room"
        variant="dark"
      />
    </>
  );
}
