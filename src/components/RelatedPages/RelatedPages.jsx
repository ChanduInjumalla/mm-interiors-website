import { Link } from 'react-router-dom';

/**
 * RelatedPages — Contextual internal linking section
 * Per Blueprint: 3-6 contextual internal links per page.
 * Links must be relevant to the page, NOT a wall of every URL.
 */
export default function RelatedPages({ title = 'Explore Related Services', pages }) {
  if (!pages || pages.length === 0) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header section-header--center">
          <h2>{title}</h2>
          <div className="divider divider--center"></div>
        </div>
        <div className="grid grid--3">
          {pages.slice(0, 6).map((page) => (
            <Link
              key={page.url}
              to={page.url}
              className="card"
              style={{ textDecoration: 'none' }}
            >
              <div className="card__image-wrapper">
                {page.image ? (
                  <img
                    src={page.image}
                    alt={page.name}
                    className="card__image"
                    loading="lazy"
                  />
                ) : (
                  <div className="card__image placeholder-image" style={{ aspectRatio: '16/10' }}>
                    {page.name}
                  </div>
                )}
              </div>
              <div className="card__body">
                <h3 className="card__title">{page.name}</h3>
                {page.description && (
                  <p className="card__text">{page.description}</p>
                )}
                <span className="card__link">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
