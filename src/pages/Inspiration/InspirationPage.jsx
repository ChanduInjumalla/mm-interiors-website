import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import StyleQuiz from '../../components/StyleQuiz/StyleQuiz';
import { stylePages } from '../../data/services';

export default function InspirationPage() {
  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Inspiration' }]} /></div>

      <section className="section">
        <div className="container">
          <StyleQuiz />
        </div>
      </section>

      <section className="section section--alt" id="styles">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Design Styles</span>
            <h2>Explore Interior Design Styles</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3">
            {stylePages.map(style => (
              <Link key={style.id} to={style.url} className="card" style={{ textDecoration: 'none' }}>
                <div className="card__image-wrapper">
                  <img src={style.image} alt={style.name + ' by MM Interiors'} className="card__image" loading="lazy" />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{style.name}</h3>
                  <p className="card__text">{style.description}</p>
                  <span className="card__link">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="overline">Resources</span>
          <h2>Helpful Guides</h2>
          <div className="divider divider--center"></div>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-2xl)' }}>
            <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">Cost Guide</Link>
            <Link to="/interior-materials-hyderabad" className="btn btn--secondary">Materials Guide</Link>
            <Link to="/interior-design-process-hyderabad" className="btn btn--secondary">Our Process</Link>
            <Link to="/blog" className="btn btn--secondary">Blog</Link>
          </div>
        </div>
      </section>

      <CTASection title="Inspired?" description="Turn inspiration into reality. Discuss your design preferences with our team." ctaText="Explore Ideas" variant="dark" />
    </>
  );
}
