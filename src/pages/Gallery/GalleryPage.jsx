import { useState, useMemo } from 'react';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import { getAllPhotos } from '../../data/businessInfo';
import './GalleryPage.css';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'wardrobe', label: 'Wardrobes' },
  { key: 'pooja-room', label: 'Pooja Room' },
  { key: 'tv-unit', label: 'TV Unit' },
  { key: 'living-room', label: 'Living Room' },
  { key: 'bedroom', label: 'Bedroom' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'kids-room', label: 'Kids Room' },
  { key: 'false-ceiling', label: 'False Ceiling' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const allPhotos = useMemo(() => getAllPhotos(), []);
  
  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return allPhotos;
    return allPhotos.filter(p => p.category === activeCategory);
  }, [activeCategory, allPhotos]);

  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]} /></div>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Photo Gallery</span>
            <h2>Our Work in Pictures</h2>
            <div className="divider divider--center"></div>
            <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Browse genuine photographs from our completed interior projects across Hyderabad.
            </p>
          </div>

          {/* Category Filters */}
          <div className="gallery-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`gallery-filter ${activeCategory === cat.key ? 'gallery-filter--active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={`${photo.src}-${index}`} 
                className="gallery-item"
                onClick={() => setLightboxPhoto(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxPhoto(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  loading="lazy"
                  className="gallery-item__image"
                />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__zoom">View</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', padding: 'var(--space-3xl) 0' }}>
              No photos in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div className="gallery-lightbox" onClick={() => setLightboxPhoto(null)}>
          <div className="gallery-lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="gallery-lightbox__close" onClick={() => setLightboxPhoto(null)} aria-label="Close">×</button>
            <img src={lightboxPhoto.src} alt={lightboxPhoto.alt} className="gallery-lightbox__image" />
            <p className="gallery-lightbox__caption">{lightboxPhoto.alt}</p>
          </div>
        </div>
      )}

      <CTASection title="Like What You See?" description="Contact us to discuss your own home interior project." ctaText="Get Free Consultation" variant="dark" />
    </>
  );
}
