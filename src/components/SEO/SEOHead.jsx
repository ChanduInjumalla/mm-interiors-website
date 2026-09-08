import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoData } from '../../utils/seo';

/**
 * SEOHead — Centralized SEO metadata component
 * Reads from the seo.js data system and renders correct meta tags for each page.
 */
export default function SEOHead({ overrides = {} }) {
  const location = useLocation();
  const seo = getSeoData(location.pathname);
  
  const title = overrides.title || seo.title;
  const description = overrides.description || seo.description;
  const canonical = overrides.canonical || seo.canonical;
  const noindex = overrides.noindex ?? seo.noindex;
  const ogTitle = overrides.ogTitle || seo.ogTitle;
  const ogDescription = overrides.ogDescription || seo.ogDescription;
  const ogImage = overrides.ogImage || seo.ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MM Interiors" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
