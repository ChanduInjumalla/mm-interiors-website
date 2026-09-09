import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import HeroSection from '../../components/Hero/HeroSection';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { getHomepageServices, bhkTypes } from '../../data/services';
import { getHomepageFaqs } from '../../data/faqs';
import { trackCTAClick } from '../../utils/analytics';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HomePage.css';

/**
 * HomePage — Primary local commercial entry page
 * 
 * URL: /
 * H1: Home Interior Designers in Hyderabad
 * SEO Title: Interior Designers in Hyderabad | MM Interiors
 * CTA: Get Free Home Consultation
 * 
 * Content order per AntiGravity page 48:
 * 1. Sticky header (global)
 * 2. Hero: H1 + real completed home + two CTAs
 * 3. Trust strip
 * 4. Why MM Interiors
 * 5. Full Home Interiors feature block
 * 6. Services grid (max 8 cards)
 * 7. Before/after transformation
 * 8. Featured project case studies
 * 9. How the project works
 * 10. BHK / home-type cards
 * 11. Cost guidance
 * 12. Reviews
 * 13. Hyderabad coverage
 * 14. FAQ
 * 15. Final consultation + short form
 * 16. Footer (global)
 */
export default function HomePage() {
  const services = getHomepageServices();
  const faqs = getHomepageFaqs();
  const trustRef = useScrollReveal();
  const interiorsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const bhkRef = useScrollReveal();
  const costRef = useScrollReveal();
  const coverageRef = useScrollReveal();
  return (
    <>
      <SEOHead />

      {/* 1. Hero */}
      <HeroSection
        h1="Your Hyderabad Home. Designed, Built, Delivered."
        description="End-to-end home interiors without the hassle."
        ctaText="Book Free Consultation"
        ctaLink="/get-free-quote"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/gallery"
        imageAlt="Complete home interior design project by MM Interiors in Hyderabad"
        imageSrc="/images/hero-home.jpg"
        showConsultationCard={true}
      />

      {/* 2. Trust Strip */}
      <section className="section--sm">
        <div className="container">
          <div className="trust-bar scroll-reveal" ref={trustRef.ref}>
            <div className="trust-bar__item">
              <div className="trust-bar__value">Hyderabad</div>
              <div className="trust-bar__label">Based & Operating</div>
            </div>
            <div className="trust-bar__item">
              <div className="trust-bar__value">End-to-End</div>
              <div className="trust-bar__label">Design & Execution</div>
            </div>
            <div className="trust-bar__item">
              <div className="trust-bar__value">Complete</div>
              <div className="trust-bar__label">Home Interiors</div>
            </div>
            <div className="trust-bar__item">
              <div className="trust-bar__value">Quality</div>
              <div className="trust-bar__label">Materials & Workmanship</div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Full Home Interiors Feature Block */}
      <section className="section section--alt">
        <div className="container">
          <div className="home-full-interiors scroll-reveal" ref={interiorsRef.ref}>
            <div className="home-full-interiors__image">
              <img 
                src="/images/full-home-interior.jpg" 
                alt="Complete luxury open-plan living and dining home interior design by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '16/10', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
            <div className="home-full-interiors__content">
              <span className="overline">Our Signature Service</span>
              <h2>Full Home Interior Design</h2>
              <div className="divider"></div>
              <p>
                We design every room in your home as one coordinated project — kitchen, wardrobes, 
                living room, bedrooms, ceilings, lighting, TV unit and more. 
                This ensures design consistency, better material procurement and smoother execution.
              </p>
              <ul className="home-full-interiors__rooms">
                <li>Modular Kitchen</li>
                <li>Wardrobes & Storage</li>
                <li>Living Room & TV Unit</li>
                <li>Master Bedroom</li>
                <li>Kids Room</li>
                <li>False Ceiling & Lighting</li>
                <li>Pooja Room</li>
                <li>Wall Finishes</li>
              </ul>
              <Link 
                to="/home-interiors-hyderabad" 
                className="btn btn--primary"
                onClick={() => trackCTAClick('Plan My Complete Home')}
              >
                Plan My Complete Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Grid (max 8 per Blueprint) */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Our Services</span>
            <h2>Interior Design Services in Hyderabad</h2>
            <p>From individual rooms to complete homes — explore the services we offer.</p>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--4 scroll-reveal" ref={servicesRef.ref}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/services" className="btn btn--secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. How the Project Works */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Our Process</span>
            <h2>How Your Interior Project Works</h2>
            <p>A clear, step-by-step approach from consultation to handover.</p>
            <div className="divider divider--center"></div>
          </div>
          <div className="home-process scroll-reveal" ref={processRef.ref}>
            <div className="home-process__step">
              <div className="home-process__number">01</div>
              <h3>Consultation</h3>
              <p>Discuss your requirements, space, budget and timeline. We visit your home to understand the scope.</p>
            </div>
            <div className="home-process__step">
              <div className="home-process__number">02</div>
              <h3>Design & Planning</h3>
              <p>We create layouts, material selections and detailed scope. You review and approve before work begins.</p>
            </div>
            <div className="home-process__step">
              <div className="home-process__number">03</div>
              <h3>Execution</h3>
              <p>Our team handles manufacturing, site work, installations, quality checks and coordination.</p>
            </div>
            <div className="home-process__step">
              <div className="home-process__number">04</div>
              <h3>Handover</h3>
              <p>Final inspection, touch-ups and handover of your completed home interiors.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/interior-design-process-hyderabad" className="btn btn--secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BHK / Home-Type Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">By Home Type</span>
            <h2>Interiors for Every Home</h2>
            <p>Whether you have a 2BHK apartment or a 4BHK villa — we design for your home type.</p>
            <div className="divider divider--center"></div>
          </div>
          <div className="grid grid--3 scroll-reveal" ref={bhkRef.ref}>
            {bhkTypes.slice(0, 6).map((bhk) => (
              <Link key={bhk.id} to={bhk.url} className="card" style={{ textDecoration: 'none' }}>
                <div className="card__image-wrapper">
                  <img 
                    className="card__image" 
                    src={bhk.image} 
                    alt={`${bhk.name} by MM Interiors Hyderabad`}
                    loading="lazy"
                    style={{ aspectRatio: '16/10', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{bhk.name}</h3>
                  <p className="card__text">{bhk.description}</p>
                  <span className="card__link">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cost Guidance */}
      <section className="section section--alt">
        <div className="container">
          <div className="home-cost scroll-reveal" ref={costRef.ref}>
            <div className="home-cost__content">
              <span className="overline">Cost Guidance</span>
              <h2>Interior Design Cost in Hyderabad</h2>
              <div className="divider"></div>
              <p>
                Interior design cost depends on your home size, scope of work, material choices, 
                hardware quality and design complexity. Understanding these factors helps you 
                plan your project budget effectively.
              </p>
              <p>
                We provide transparent scope and cost breakdowns during consultation, 
                so you know exactly what to expect before your project begins.
              </p>
              <div className="home-cost__links">
                <Link to="/interior-design-cost-hyderabad" className="btn btn--primary">
                  Cost Guide
                </Link>
                <Link to="/2bhk-interior-design-cost-hyderabad" className="btn btn--secondary">
                  2BHK Cost
                </Link>
                <Link to="/3bhk-interior-design-cost-hyderabad" className="btn btn--secondary">
                  3BHK Cost
                </Link>
              </div>
            </div>
            <div className="home-cost__image">
              <img 
                src="/images/wardrobe/wardrobe-4.jpg" 
                alt="Blue and white wardrobe with vanity — interior design project by MM Interiors Hyderabad" 
                loading="lazy"
                style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Hyderabad Coverage */}
      <section className="section">
        <div className="container container--narrow scroll-reveal" ref={coverageRef.ref} style={{ textAlign: 'center' }}>
          <span className="overline">Service Area</span>
          <h2>Interior Designers Serving Across Hyderabad</h2>
          <div className="divider divider--center"></div>
          <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--color-text-light)', maxWidth: '680px', margin: '0 auto' }}>
            MM Interiors provides home interior design services across Hyderabad. 
            Whether your home is in Gachibowli, Kondapur, Miyapur, Kukatpally, Manikonda, 
            Banjara Hills, Jubilee Hills, Madhapur or any other area — we are ready to discuss your project.
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        description="Common questions about home interior design in Hyderabad."
      />

      {/* 11. Final Consultation CTA */}
      <CTASection
        title="Ready to Design Your Home?"
        description="Start with a free consultation. Tell us about your home, requirements and budget — we will guide you through the next steps."
        ctaText="Get Free Home Consultation"
        ctaLink="/get-free-quote"
        variant="dark"
      />
    </>
  );
}
