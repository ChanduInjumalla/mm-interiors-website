import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import { services } from '../../data/services';
import { getFaqsByCategory } from '../../data/faqs';

/**
 * undefined
 * URL: /home-office-interiors-hyderabad
 * H1: Home Office Interior Design in Hyderabad
 * CTA: Design My Study
 */
export default function HomeOfficePage() {
  const relatedPages = services.filter(s => ['kids-room', 'furniture', 'lighting', 'bedroom'].includes(s.id));
  const faqs = getFaqsByCategory('general');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Home Office' },
        ]} />
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Home Office</span>
              <h2>Work From Home, Designed Properly</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>A home office or study room needs more than a desk and chair. It needs ergonomic furniture, proper lighting, cable management, sound isolation and storage for documents and equipment.</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>We design home offices that fit into your home — whether it is a dedicated room, a bedroom corner, or a partition in the living area.</p>
            </div>
            <div>
              <img 
                src="/images/bedroom/bedroom-3.jpg" 
                alt="Home office design by MM Interiors Hyderabad" 
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
            <h2>Home Office Design</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Ergonomic Desk</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Custom desk with proper height, depth and cable management channels.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Shelving & Storage</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Open shelves, closed cabinets and drawer units for documents and supplies.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Task Lighting</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Desk lamp, overhead lighting and screen-friendly ambient light.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Cable Management</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Concealed wiring, charging stations and power access points.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Acoustic Privacy</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Door, partition or material choices to reduce noise from the rest of the home.</p>
            </div>
            <div style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>Video Call Setup</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>Background design and lighting optimized for video calls when relevant.</p>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Home Office FAQs" />
      )}

      <RelatedPages title="Explore Related Services" pages={relatedPages} />

      <CTASection
        title="Ready for Your Home Office Project?"
        description="Discuss your home office design requirements with our team."
        ctaText="Design My Study"
        variant="dark"
      />
    </>
  );
}
