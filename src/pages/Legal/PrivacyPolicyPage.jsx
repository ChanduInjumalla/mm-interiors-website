import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)' }} className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} /></div>
      <section className="section">
        <div className="container container--narrow">
          <h1>Privacy Policy</h1>
          <div className="divider"></div>
          {/* [REPLACE_WITH_VERIFIED_LEGAL_CONTENT] */}
          <p style={{ color: 'var(--color-text-light)' }}>This privacy policy explains how MM Interiors collects, uses and protects your personal information when you use our website or contact us for interior design services.</p>
          <h2 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Information We Collect</h2>
          <p style={{ color: 'var(--color-text-light)' }}>When you fill out a contact form or request a consultation, we collect your name, phone number, email address and project details to respond to your inquiry.</p>
          <h2 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>How We Use Your Information</h2>
          <p style={{ color: 'var(--color-text-light)' }}>We use your information to respond to your inquiry, discuss your interior design requirements and provide consultation services. We do not sell or share your information with third parties for marketing purposes.</p>
          <h2 style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>Contact</h2>
          <p style={{ color: 'var(--color-text-light)' }}>For questions about this privacy policy, please contact us at info@mminterior.in.</p>
        </div>
      </section>
    </>
  );
}
