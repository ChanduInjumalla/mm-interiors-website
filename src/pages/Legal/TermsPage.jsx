import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function TermsPage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)' }} className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Terms and Conditions' }]} /></div>
      <section className="section">
        <div className="container container--narrow">
          <h1>Terms and Conditions</h1>
          <div className="divider"></div>
          {/* [REPLACE_WITH_VERIFIED_LEGAL_CONTENT] */}
          <p style={{ color: 'var(--color-text-light)' }}>These terms and conditions govern your use of the MM Interiors website and services. By using this website, you agree to these terms.</p>
          <p style={{ color: 'var(--color-text-light)' }}>For detailed terms related to interior design services, project agreements and payment terms, please contact us directly.</p>
        </div>
      </section>
    </>
  );
}
