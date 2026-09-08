import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import RelatedPages from '../../components/RelatedPages/RelatedPages';
import './ServicePageLayout.css';

/**
 * ServicePageLayout — Reusable layout for room/service pages
 * 
 * IMPORTANT: This provides shared LAYOUT structure.
 * Each page passes its own unique content, sections, FAQ, and related links.
 * Pages should NOT all look identical — each uses this layout with page-specific content blocks.
 */
export default function ServicePageLayout({
  breadcrumbs,
  heroProps,
  introContent,    // JSX for intro section
  featuresContent, // JSX for features/what's included
  whyContent,      // JSX for why this service
  processContent,  // JSX for process relevant to this service
  galleryContent,  // JSX for project gallery relevant to this service
  faqs,
  faqTitle,
  relatedPages,
  relatedTitle,
  ctaTitle,
  ctaDescription,
  ctaText,
  children,        // Additional custom sections
}) {
  return (
    <>
      <SEOHead />

      {breadcrumbs && (
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      {/* Intro Section */}
      {introContent && (
        <section className="section">
          <div className="container">
            {introContent}
          </div>
        </section>
      )}

      {/* Features / What's Included */}
      {featuresContent && (
        <section className="section section--alt">
          <div className="container">
            {featuresContent}
          </div>
        </section>
      )}

      {/* Why This Service */}
      {whyContent && (
        <section className="section">
          <div className="container">
            {whyContent}
          </div>
        </section>
      )}

      {/* Process (relevant to this service) */}
      {processContent && (
        <section className="section section--alt">
          <div className="container">
            {processContent}
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {galleryContent && (
        <section className="section">
          <div className="container">
            {galleryContent}
          </div>
        </section>
      )}

      {/* Additional custom sections */}
      {children}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <FAQSection
          faqs={faqs}
          title={faqTitle || 'Frequently Asked Questions'}
        />
      )}

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <RelatedPages
          title={relatedTitle || 'Explore Related Services'}
          pages={relatedPages}
        />
      )}

      {/* CTA */}
      <CTASection
        title={ctaTitle || 'Ready to Start Your Project?'}
        description={ctaDescription || 'Discuss your requirements with our team. Get a free consultation.'}
        ctaText={ctaText || 'Get Free Consultation'}
        ctaLink="/get-free-quote"
        variant="dark"
      />
    </>
  );
}
