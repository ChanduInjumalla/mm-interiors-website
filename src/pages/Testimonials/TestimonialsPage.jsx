import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import { getAllTestimonials } from '../../data/testimonials';

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();
  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Reviews' }]} /></div>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="overline">Customer Feedback</span>
          <h2>What Our Clients Say</h2>
          <div className="divider divider--center"></div>
          {testimonials.length > 0 ? (
            <div className="grid grid--2" style={{ textAlign: 'left', marginTop: 'var(--space-3xl)' }}>
              {/* Review cards render here */}
            </div>
          ) : (
            <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', maxWidth: '600px', margin: '0 auto' }}>
              We are updating our reviews section with verified customer feedback. Contact us for references from past clients.
            </p>
          )}
        </div>
      </section>

      <CTASection title="Start Your Home Interior Project" description="Join our growing list of happy homeowners in Hyderabad." ctaText="Get Free Consultation" variant="dark" />
    </>
  );
}
