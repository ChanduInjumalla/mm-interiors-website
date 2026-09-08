import { Link } from 'react-router-dom';
import { trackCTAClick } from '../../utils/analytics';
import './CTASection.css';

/**
 * CTASection — Reusable consultation CTA block
 * Used at the bottom of most pages per Blueprint template.
 */
export default function CTASection({
  title = 'Ready to Start Your Home Interior Project?',
  description = 'Discuss your requirements with our team. We will help you understand scope, materials, timeline and next steps.',
  ctaText = 'Get Free Consultation',
  ctaLink = '/get-free-quote',
  variant = 'default', // 'default' | 'dark' | 'accent'
}) {
  const handleClick = () => {
    trackCTAClick(ctaText);
  };

  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="container">
        <div className="cta-section__inner">
          <div className="cta-section__content">
            <h2 className="cta-section__title">{title}</h2>
            <p className="cta-section__desc">{description}</p>
          </div>
          <div className="cta-section__actions">
            <Link 
              to={ctaLink} 
              className={`btn btn--lg ${variant === 'dark' ? 'btn--white' : 'btn--primary'}`}
              onClick={handleClick}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
