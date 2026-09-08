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
 * H1: Interior Electrical Planning in Hyderabad
 * CTA: Discuss Electrical Scope
 */
export default function ElectricalPage() {
  const relatedPages = services.filter(s => ['lighting', 'false-ceiling', 'renovation'].includes(s.id));
  const faqs = getFaqsByCategory('general');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Electrical' },
        ]} />
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Electrical</span>
              <h2>Electrical Planning as Part of Interior Design</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>Electrical planning happens before any interiors are installed. Switch locations, light point positions, TV and data cable routes, AC power points and charging stations all need to be marked before wall work begins.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We coordinate electrical planning with your interior layout so switches are in the right place, cables are concealed, and power access is convenient.</p>
            </div>
            <div>
              <img 
                src="/images/false-ceiling/false-ceiling-3.jpg" 
                alt="Electrical work by MM Interiors Hyderabad" 
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
            <h2>Electrical Planning Services</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Switch Locations</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Switch placement based on furniture layout and daily use patterns.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Lighting Points</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Ceiling, wall and under-cabinet light point positions for each room.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Concealed Wiring</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Cable channels for TV, internet, speakers and power before wall finishing.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>AC Points</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Power and drain point planning for split AC units in each room.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Charging Stations</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>USB outlets and power access near bedside tables, desks and kitchen counters.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Modular Switches</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Switch plate selection coordinated with your interior finish.</p>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Electrical FAQs" />
      )}

      <RelatedPages title="Explore Related Services" pages={relatedPages} />

      <CTASection
        title="Ready for Your Electrical Project?"
        description="Discuss your electrical requirements with our team."
        ctaText="Discuss Electrical Scope"
        variant="dark"
      />
    </>
  );
}
