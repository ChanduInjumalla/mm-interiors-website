import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { services } from '../../data/services';

/**
 * ServicesPage — Service hub
 * URL: /services
 * H1: Interior Design Services in Hyderabad
 */
export default function ServicesPage() {
  const roomServices = services.filter(s => s.category === 'rooms');
  const finishServices = services.filter(s => s.category === 'finishes');
  const executionServices = services.filter(s => s.category === 'execution');

  return (
    <>
      <SEOHead />

      <div className="container">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]} />
      </div>

      {/* Room Services */}
      <section className="section" id="room-services">
        <div className="container">
          <div className="section-header">
            <span className="overline">Room-by-Room Design</span>
            <h2>Room Interior Design</h2>
            <p>Each room designed for its specific purpose, storage needs and family use.</p>
            <div className="divider"></div>
          </div>
          <div className="grid grid--3">
            {roomServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="overline">Finishes & Features</span>
            <h2>Ceilings, Walls & Lighting</h2>
            <p>The details that complete the design — ceilings, panels, wallpaper, lighting and paint.</p>
            <div className="divider"></div>
          </div>
          <div className="grid grid--3">
            {finishServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="overline">Execution & Support</span>
            <h2>Furniture, Electrical & More</h2>
            <p>Supporting services that complete your home project — furniture, electrical, plumbing, flooring and renovation.</p>
            <div className="divider"></div>
          </div>
          <div className="grid grid--3">
            {executionServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        description="Tell us about your home and we will recommend the right services for your project."
        ctaText="Get Free Consultation"
        variant="dark"
      />
    </>
  );
}
