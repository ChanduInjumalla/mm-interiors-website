import { Link } from 'react-router-dom';
import HeroConsultationCard from './HeroConsultationCard';
import './HeroSection.css';

/**
 * HeroSection — Reusable hero component
 * Each page should pass its own image, H1, description, and CTA.
 */
export default function HeroSection({ 
  h1, 
  description, 
  ctaText, 
  ctaLink = '/get-free-quote',
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
  overline,
  className = '',
  showConsultationCard = false,
}) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero__bg">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt || h1} 
            className="hero__image"
            loading="eager"
          />
        ) : (
          <div className="hero__placeholder">
            <span>{imageAlt || 'MM Interiors Project Photography'}</span>
          </div>
        )}
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container hero__content">
        {overline && <span className="overline">{overline}</span>}
        <h1 className="hero__title">{h1}</h1>
        {description && <p className="hero__description">{description}</p>}
        <div className="hero__actions">
          {ctaText && (
            <Link to={ctaLink} className="btn btn--primary btn--lg">
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link 
              to={secondaryCtaLink} 
              className="btn btn--white btn--lg"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>

      {showConsultationCard && <HeroConsultationCard />}
    </section>
  );
}
