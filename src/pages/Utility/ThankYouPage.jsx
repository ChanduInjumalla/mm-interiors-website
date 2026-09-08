import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';

export default function ThankYouPage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="overline">Thank You</span>
          <h1 style={{ marginTop: 'var(--space-md)' }}>Thank You for Reaching Out!</h1>
          <div className="divider divider--center" style={{ marginTop: 'var(--space-lg)' }}></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', margin: 'var(--space-lg) 0 var(--space-2xl)' }}>
            We have received your inquiry and will get back to you shortly. In the meantime, feel free to explore our work.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">Back to Home</Link>
            <Link to="/interior-design-projects" className="btn btn--secondary">View Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
}
