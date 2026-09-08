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
 * H1: Home Renovation in Hyderabad
 * CTA: Discuss Renovation
 */
export default function RenovationPage() {
  const relatedPages = services.filter(s => ['modular-kitchen', 'bathroom', 'living-room'].includes(s.id));
  const faqs = getFaqsByCategory('general');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Renovation' },
        ]} />
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Renovation</span>
              <h2>Renovate Your Home With a Clear Plan</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Renovation is different from new interior design. It involves demolition, structural assessment, plumbing/electrical rework and reinstallation. The process needs careful planning to avoid surprises.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We handle home renovations — including kitchen remodels, bathroom upgrades and room redesigns — with a clear demolition scope, material plan and timeline.</p>
            </div>
            <div>
              <img 
                src="/images/full-home-interior.jpg" 
                alt="Home renovation by MM Interiors Hyderabad" 
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
            <h2>Renovation Services</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Kitchen Renovation</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Complete kitchen redesign with new cabinets, countertops and layout changes.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Bathroom Renovation</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Tile replacement, vanity upgrade, waterproofing and fixture updates.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Room Remodeling</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Bedroom and living room updates with new design, storage and finishes.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Demolition Scope</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Clear assessment of what needs to be removed and what can be retained.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Structural Assessment</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Identifying load-bearing elements and structural constraints before redesign.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Timeline Planning</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Renovation timeline with phases to minimize disruption to your daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Renovation FAQs" />
      )}

      <RelatedPages title="Explore Related Services" pages={relatedPages} />

      <CTASection
        title="Ready for Your Renovation Project?"
        description="Discuss your renovation requirements with our team."
        ctaText="Discuss Renovation"
        variant="dark"
      />
    </>
  );
}
