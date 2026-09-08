import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function GetQuotePage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)' }}>
        <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Get Free Quote' }]} /></div>

        <section className="section">
          <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="overline">Free Consultation</span>
              <h1>Get a Free Interior Design Quote</h1>
              <div className="divider divider--center"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
                Share your requirements and we will get back to you with guidance for your home interior project.
              </p>
            </div>
            <ContactForm formName="get-quote" submitLabel="Request Consultation" />
          </div>
        </section>
      </div>
    </>
  );
}
