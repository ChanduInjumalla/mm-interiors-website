import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import './AboutPage.css';

/**
 * AboutPage — Trust and company story
 * URL: /about
 * H1: About MM Interiors
 * CTA: Meet the Design Team
 */
export default function AboutPage() {
  return (
    <>
      <SEOHead />
      

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]} />
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__content">
              <span className="overline">Our Story</span>
              <h2>Designing Homes in Hyderabad</h2>
              <div className="divider"></div>
              <p>
                MM Interiors is a Hyderabad-based home interior design company. We handle complete 
                home interiors — modular kitchens, wardrobes, living rooms, bedrooms, false ceilings, 
                wall treatments and more — as one coordinated project.
              </p>
              <p>
                Our approach is simple: understand how your family lives, what your home needs, 
                and deliver quality design and execution within your budget and timeline. 
                We believe in transparent communication, quality materials and reliable workmanship.
              </p>
              <p>
                We specialize in wallpaper installation, 3D wall panels, false ceilings, TV units, 
                modular kitchens and complete interior solutions. Operating from Ameenpur, Sangareddy, 
                we serve homeowners across Hyderabad including Miyapur, Chandanagar, Kukatpally, 
                Beeramguda, Patancheru and Lingampally.
              </p>
            </div>
            <div className="about-story__image">
              <img 
                src="/images/bathroom/bathroom-1.jpg" 
                alt="Premium bathroom vanity designed by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">What We Stand For</span>
            <h2>Our Design Values</h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="about-values">
            <div className="about-value">
              <h3>Quality Materials</h3>
              <p>We use plywood, laminates, hardware and finishes from reliable brands — selected for durability, not just appearance.</p>
            </div>
            <div className="about-value">
              <h3>Transparent Process</h3>
              <p>Clear scope, material details, cost breakdowns and timelines. You know what to expect before work begins.</p>
            </div>
            <div className="about-value">
              <h3>Design Integrity</h3>
              <p>Every room is designed to serve a real purpose — not just to look good in photos. Function and beauty together.</p>
            </div>
            <div className="about-value">
              <h3>End-to-End Execution</h3>
              <p>One team handles design, manufacturing, site work, installations and quality checks. No fragmented vendor coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="overline">Services</span>
          <h2>What We Do</h2>
          <div className="divider divider--center"></div>
          <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--space-2xl)' }}>
            From individual rooms to complete homes — we offer a full range of interior design services in Hyderabad.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn--primary">Explore Our Services</Link>
            <Link to="/interior-design-projects" className="btn btn--secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        description="Start with a conversation. Share your requirements, and we will guide you through the next steps."
        ctaText="Contact Us"
        ctaLink="/contact"
        variant="dark"
      />
    </>
  );
}
