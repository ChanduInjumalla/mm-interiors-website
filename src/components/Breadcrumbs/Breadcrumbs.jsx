import { Link } from 'react-router-dom';

/**
 * Breadcrumbs — Accessible breadcrumb navigation
 * Uses BreadcrumbList structured data pattern.
 */
export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.path ? `https://mminterior.in${item.path}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="breadcrumbs__separator" aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
