import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { trackFormSubmission, trackCTAClick } from '../../utils/analytics';
import { submitLeadForm } from '../../utils/formSubmit';
import './HeroConsultationCard.css';

export default function HeroConsultationCard() {
  const [isOpen, setIsOpen] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth > 768 : true
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Full Home Interiors',
    propertyType: 'Apartment',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard accessibility: Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      handleClose();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when modal is open on mobile
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add('has-hero-modal-open');
    } else {
      document.body.classList.remove('has-hero-modal-open');
    }
    return () => {
      document.body.classList.remove('has-hero-modal-open');
    };
  }, [isOpen, isMobile]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReopen = () => {
    setIsOpen(true);
    trackCTAClick('Reopen Hero Consultation Card');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackFormSubmission('hero_consultation');

    try {
      await submitLeadForm(formData, 'Hero Consultation');
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Reopen / Info trigger button when card is closed */}
      {!isOpen && (
        <button
          type="button"
          className="hero-card-trigger"
          onClick={handleReopen}
          aria-label="Open free consultation enquiry form"
          title="Book Free Consultation"
        >
          <span className="hero-card-trigger__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="9" y1="10" x2="15" y2="10" />
              <line x1="12" y1="7" x2="12" y2="13" />
            </svg>
          </span>
          <span className="hero-card-trigger__label">Get Free Quote</span>
        </button>
      )}

      {/* Consultation Card */}
      {isOpen && (() => {
        const modalElement = (
          <div 
            className="hero-card-wrapper" 
            role="dialog" 
            aria-modal="true"
            aria-labelledby="hero-card-heading"
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          >
            <div className="hero-card">
              {/* Close Button */}
              <button
                type="button"
                className="hero-card__close"
                onClick={handleClose}
                aria-label="Close consultation form"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {isSubmitted ? (
                /* Success State */
                <div className="hero-card__success">
                  <div className="hero-card__success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8976A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="hero-card__success-title">Thank you!</h3>
                  <p className="hero-card__success-text">
                    We've received your enquiry. Our design team will get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn--primary hero-card__success-btn"
                    onClick={handleClose}
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Consultation Form */
                <form className="hero-card__form" onSubmit={handleSubmit} noValidate>
                  <div className="hero-card__header">
                    <span className="hero-card__badge">Free Consultation</span>
                    <h3 id="hero-card-heading" className="hero-card__title">
                      Let's Design Your Dream Home
                    </h3>
                    <p className="hero-card__subtitle">
                      Tell us a little about your project and our team will get in touch with you.
                    </p>
                  </div>

                  <div className="hero-card__fields">
                    {/* Field 1: Name */}
                    <div className="hero-card__field">
                      <label htmlFor="hero-name" className="hero-card__label">
                        Name <span className="hero-card__req">*</span>
                      </label>
                      <input
                        id="hero-name"
                        name="name"
                        type="text"
                        className={`hero-card__input ${errors.name ? 'is-error' : ''}`}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <span className="hero-card__error">{errors.name}</span>}
                    </div>

                    {/* Field 2: Phone */}
                    <div className="hero-card__field">
                      <label htmlFor="hero-phone" className="hero-card__label">
                        Phone Number <span className="hero-card__req">*</span>
                      </label>
                      <input
                        id="hero-phone"
                        name="phone"
                        type="tel"
                        className={`hero-card__input ${errors.phone ? 'is-error' : ''}`}
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <span className="hero-card__error">{errors.phone}</span>}
                    </div>

                    {/* Field 3: Looking for (Service) */}
                    <div className="hero-card__field">
                      <label htmlFor="hero-service" className="hero-card__label">
                        What are you looking for?
                      </label>
                      <select
                        id="hero-service"
                        name="service"
                        className="hero-card__select"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Full Home Interiors">Full Home Interiors</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Bedroom Interiors">Bedroom Interiors</option>
                        <option value="Living Room Interiors">Living Room Interiors</option>
                        <option value="Wardrobe Design">Wardrobe Design</option>
                        <option value="2BHK Interiors">2BHK Interiors</option>
                        <option value="3BHK Interiors">3BHK Interiors</option>
                        <option value="4BHK / Villa Interiors">4BHK / Villa Interiors</option>
                        <option value="Home Renovation">Home Renovation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Field 4: Property Type */}
                    <div className="hero-card__field">
                      <label htmlFor="hero-property" className="hero-card__label">
                        Property Type
                      </label>
                      <select
                        id="hero-property"
                        name="propertyType"
                        className="hero-card__select"
                        value={formData.propertyType}
                        onChange={handleChange}
                      >
                        <option value="Apartment">Apartment</option>
                        <option value="Independent House">Independent House</option>
                        <option value="Villa">Villa</option>
                        <option value="Duplex">Duplex</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Field 5: Requirement (Optional) */}
                    <div className="hero-card__field">
                      <label htmlFor="hero-message" className="hero-card__label">
                        Message / Requirement <span className="hero-card__opt">(Optional)</span>
                      </label>
                      <input
                        id="hero-message"
                        name="message"
                        type="text"
                        className="hero-card__input"
                        placeholder="Tell us briefly about your requirement"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="btn btn--primary hero-card__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                  </button>
                </form>
              )}
            </div>
          </div>
        );

        if (isMobile && typeof document !== 'undefined') {
          return createPortal(modalElement, document.body);
        }
        return modalElement;
      })()}
    </>
  );
}
