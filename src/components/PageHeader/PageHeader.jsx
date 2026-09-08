import { Link } from 'react-router-dom';
import './PageHeader.css';

/**
 * PageHeader — Simple left-aligned page title header
 * Used on all pages EXCEPT the homepage (which uses HeroSection).
 * Clean, minimal, no background image.
 */
export default function PageHeader({ 
  overline, 
  h1, 
  description, 
  ctaText, 
  ctaLink = '/get-free-quote',
}) {
  return (
    <section className="page-header">
      <div className="container">
        {overline && <span className="overline">{overline}</span>}
        <h1 className="page-header__title">{h1}</h1>
        {description && <p className="page-header__desc">{description}</p>}
        {ctaText && (
          <Link to={ctaLink} className="btn btn--primary">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
