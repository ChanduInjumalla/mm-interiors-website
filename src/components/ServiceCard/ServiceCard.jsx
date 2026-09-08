import { Link } from 'react-router-dom';

/**
 * ServiceCard — Reusable card for service/room pages
 * Used on Services page, Homepage, and cross-link sections.
 */
export default function ServiceCard({ service }) {
  return (
    <Link to={service.url} className="card service-card">
      <div className="card__image-wrapper">
        {service.image ? (
          <img 
            src={service.image} 
            alt={service.name + ' by MM Interiors in Hyderabad'} 
            className="card__image"
            loading="lazy"
          />
        ) : (
          <div className="card__image placeholder-image" style={{ aspectRatio: '16/10' }}>
            {service.name}
          </div>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{service.name}</h3>
        <p className="card__text">{service.description}</p>
        <span className="card__link">View Details</span>
      </div>
    </Link>
  );
}
