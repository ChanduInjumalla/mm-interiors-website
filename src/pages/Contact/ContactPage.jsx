import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ContactForm from '../../components/ContactForm/ContactForm';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';
import { businessInfo } from '../../data/businessInfo';

const PHONE = `+91${businessInfo.phone.primary}`;
const PHONE_SECONDARY = `+91${businessInfo.phone.secondary}`;
const WHATSAPP = businessInfo.whatsapp.number;
const EMAIL = businessInfo.email;

export default function ContactPage() {
  return (
    <>
      <SEOHead />
      <div className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} /></div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
            <div>
              <span className="overline">Get in Touch</span>
              <h2>We Would Love to Hear From You</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
                Ready to start your home interior project? Contact us for a free consultation. We will discuss your requirements and guide you through next steps.
              </p>

              <div style={{ display: 'grid', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
                <a href={'tel:' + PHONE} onClick={trackPhoneClick} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'var(--color-text)' }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Call Us</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-small)' }}>{businessInfo.phone.primaryFormatted}</div>
                  </div>
                </a>
                <a href={'tel:' + PHONE_SECONDARY} onClick={trackPhoneClick} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'var(--color-text)' }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Alternate Number</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-small)' }}>{businessInfo.phone.secondaryFormatted}</div>
                  </div>
                </a>
                <a href={'https://wa.me/' + WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'var(--color-text)' }}>
                  <span style={{ fontSize: '1.5rem' }}>💬</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>WhatsApp</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-small)' }}>Chat with us on WhatsApp</div>
                  </div>
                </a>
                <a href={'mailto:' + EMAIL} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'var(--color-text)' }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Email</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-small)' }}>{EMAIL}</div>
                  </div>
                </a>
              </div>

              {/* Address & Hours */}
              <div style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-xl)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 'var(--space-md)' }}>Our Office</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-sm)' }}>
                  📍 {businessInfo.address.full}
                </p>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-md)' }}>
                  🕐 {businessInfo.hours.full}
                </p>
                <a 
                  href={businessInfo.maps.directionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--secondary" 
                  style={{ fontSize: 'var(--fs-small)' }}
                >
                  Get Directions
                </a>
              </div>

              {/* Service Areas */}
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <h4 style={{ fontSize: 'var(--fs-body)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Service Areas</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.8 }}>
                  {businessInfo.serviceAreas.join(' · ')}
                </p>
              </div>
            </div>
            <div id="contact-form">
              <h3 style={{ marginBottom: 'var(--space-xl)' }}>Send Us a Message</h3>
              <ContactForm formName="contact" submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Location</span>
            <h2>Find Us</h2>
            <div className="divider divider--center"></div>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
            <iframe
              src={businessInfo.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MM Interiors Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
