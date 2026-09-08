import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span style={{ fontSize: 'var(--fs-display)', fontWeight: 700, color: 'var(--color-gold)' }}>404</span>
          <h1 style={{ marginTop: 'var(--space-md)' }}>Page Not Found</h1>
          <div className="divider divider--center" style={{ marginTop: 'var(--space-lg)' }}></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', margin: 'var(--space-lg) 0 var(--space-2xl)' }}>
            The page you are looking for does not exist or has been moved. Here are some helpful links instead:
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">Home</Link>
            <Link to="/services" className="btn btn--secondary">Services</Link>
            <Link to="/interior-design-projects" className="btn btn--secondary">Projects</Link>
            <Link to="/contact" className="btn btn--secondary">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
