import { useState, useRef, useCallback } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before (Raw Site)',
  afterLabel = 'After (Delivered)',
  title,
  location,
  description,
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="ba-card">
      <div 
        className="ba-slider"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="ba-slider__img ba-slider__img--after" 
          loading="lazy" 
        />
        <span className="ba-slider__tag ba-slider__tag--after">{afterLabel}</span>

        {/* Before Image (Clipped Overlay) */}
        <div 
          className="ba-slider__overlay" 
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel} 
            className="ba-slider__img ba-slider__img--before" 
            loading="lazy" 
          />
          <span className="ba-slider__tag ba-slider__tag--before">{beforeLabel}</span>
        </div>

        {/* Draggable Divider Line */}
        <div 
          className="ba-slider__divider" 
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
        >
          <div className="ba-slider__handle" aria-label="Drag to compare before and after">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
              <polyline points="15 18 21 12 15 6" />
            </svg>
          </div>
        </div>
      </div>

      {(title || description) && (
        <div className="ba-card__info">
          <div className="ba-card__meta">
            {location && <span className="ba-card__location">📍 {location}</span>}
          </div>
          {title && <h3 className="ba-card__title">{title}</h3>}
          {description && <p className="ba-card__desc">{description}</p>}
        </div>
      )}
    </div>
  );
}
