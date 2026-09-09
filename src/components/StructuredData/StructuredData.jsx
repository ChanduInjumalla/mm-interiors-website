import { Helmet } from 'react-helmet-async';
import { businessInfo } from '../../data/businessInfo';

/**
 * StructuredData — Injects Schema.org JSON-LD for SEO
 * Includes LocalBusiness, Organization, and Service schemas
 */
export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://mminterior.in/#business',
    name: businessInfo.name,
    description: 'Premium home interior designers in Hyderabad offering modular kitchens, wardrobes, living room designs, bedroom interiors, false ceilings, and complete home interior solutions.',
    url: 'https://mminterior.in',
    logo: 'https://mminterior.in/logo-512.png',
    image: 'https://mminterior.in/logo-512.png',
    telephone: `+91${businessInfo.phone.primary}`,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.line1,
      addressLocality: businessInfo.address.line2,
      addressRegion: businessInfo.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.5',
      longitude: '78.29',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: businessInfo.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '₹₹₹',
    sameAs: [],
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    url: 'https://mminterior.in',
    logo: 'https://mminterior.in/logo-512.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91${businessInfo.phone.primary}`,
      contactType: 'customer service',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
  };

  const services = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Interior Design',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: businessInfo.name,
      url: 'https://mminterior.in',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modular Kitchen Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wardrobe & Storage Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living Room Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bedroom Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'False Ceiling Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TV Unit & Feature Wall' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete Home Interiors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Renovation' } },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessInfo.name,
    url: 'https://mminterior.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mminterior.in/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(services)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
