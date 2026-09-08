import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';

export default function BlogPage() {
  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} /></div>

      <section className="section" id="blog">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="overline">Coming Soon</span>
          <h2>Our Blog is Being Prepared</h2>
          <div className="divider divider--center"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            We are preparing helpful articles on interior design cost, materials, process and design ideas for Hyderabad homeowners.
          </p>
          {/* [PLACEHOLDER] — Blog articles will be added with genuine, useful content */}
        </div>
      </section>

      <CTASection title="Have a Design Question?" description="Contact us directly with your question. We are happy to help." ctaText="Contact Us" ctaLink="/contact" variant="dark" />
    </>
  );
}
