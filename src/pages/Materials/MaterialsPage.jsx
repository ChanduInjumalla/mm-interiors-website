import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import MaterialViewer from '../../components/MaterialViewer/MaterialViewer';
import { getFaqsByCategory } from '../../data/faqs';

export default function MaterialsPage() {
  const faqs = getFaqsByCategory('materials');
  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Materials' }]} /></div>

      <section className="section">
        <div className="container">
          <MaterialViewer />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Know Your Materials</span>
            <h2>Materials Used in Home Interiors</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            {[
              { title: 'Plywood', desc: 'The structural base for kitchens and wardrobes. MR grade for dry areas, BWR grade for kitchens and bathrooms.' },
              { title: 'Laminates', desc: 'Surface finish material in hundreds of colors and textures. Affordable, durable and easy to maintain.' },
              { title: 'Hardware', desc: 'Hinges, channels, handles and accessories. Quality hardware affects daily use — soft-close, load capacity and longevity.' },
              { title: 'Countertops', desc: 'Kitchen and bathroom surfaces in granite, quartz or solid surface. Each has different maintenance and durability profiles.' },
              { title: 'Edge Banding', desc: 'Edge finish that protects plywood edges from moisture and gives a clean appearance.' },
              { title: 'Paint & Finishes', desc: 'Wall paints from standard emulsion to premium washable finishes. Primer, putty and preparation matter.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>{item.title}</h4>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Materials FAQs" />
      <CTASection title="Discuss Materials for Your Project" description="We will explain material options, show samples and help you choose based on durability, budget and appearance." ctaText="Discuss Materials" variant="dark" />
    </>
  );
}
