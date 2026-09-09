import './Skeleton.css';

/**
 * SkeletonBlock — Generic skeleton placeholder with shimmer
 */
export function SkeletonBlock({ width = '100%', height = '1rem', radius = '6px', className = '' }) {
  return (
    <div
      className={`skeleton-block ${className}`}
      style={{ width, height, borderRadius: radius }}
    />
  );
}

/**
 * SkeletonText — Multiple lines of skeleton text
 */
export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`skeleton-text ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="skeleton-block"
          style={{
            height: '0.875rem',
            borderRadius: '4px',
            width: i === lines - 1 ? '60%' : '100%',
            marginBottom: '0.5rem',
          }}
        />
      ))}
    </div>
  );
}

/**
 * SkeletonCard — Card-shaped skeleton with image area and text
 */
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`skeleton-card ${className}`}>
      <div className="skeleton-block skeleton-card__image" />
      <div className="skeleton-card__body">
        <SkeletonBlock height="1.1rem" width="75%" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

/**
 * PageSkeleton — Full-page skeleton layout matching typical page structure
 */
export default function PageSkeleton() {
  return (
    <div className="page-skeleton" aria-hidden="true" role="presentation">
      {/* Hero skeleton */}
      <div className="skeleton-hero">
        <div className="skeleton-hero__content">
          <SkeletonBlock width="40%" height="0.75rem" radius="4px" />
          <SkeletonBlock width="80%" height="2rem" radius="6px" />
          <SkeletonBlock width="65%" height="1rem" radius="4px" />
          <SkeletonBlock width="160px" height="2.5rem" radius="8px" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="skeleton-content">
        <div className="skeleton-section">
          <SkeletonBlock width="200px" height="1.5rem" radius="6px" className="skeleton-center" />
          <div className="skeleton-grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </div>
  );
}
