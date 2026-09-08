import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackFormSubmission } from '../../utils/analytics';
import { submitLeadForm } from '../../utils/formSubmit';
import './ContactForm.css';

/**
 * ContactForm — Reusable form component for Contact and Get Quote pages.
 * Fields: Name, Phone, Email, Property type, BHK, Service, Message
 */
export default function ContactForm({ 
  formName = 'contact', 
  showAllFields = true,
  submitLabel = 'Request Consultation',
}) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    bhk: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Please enter your name';
    if (!formState.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[6-9]\d{9}$/.test(formState.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    trackFormSubmission(formName);
    
    try {
      await submitLeadForm(formState, formName);
      setSubmitted(true);
      navigate('/thank-you');
    } catch {
      setErrors({ form: 'Something went wrong. Please try again or call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you for reaching out!</h3>
        <p>We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {errors.form && <div className="form-error" style={{ marginBottom: '1rem' }}>{errors.form}</div>}
      
      <div className="contact-form__row">
        <div className="form-group">
          <label htmlFor={`${formName}-name`} className="form-label">Name *</label>
          <input
            type="text"
            id={`${formName}-name`}
            name="name"
            className="form-input"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={`${formName}-phone`} className="form-label">Phone *</label>
          <input
            type="tel"
            id={`${formName}-phone`}
            name="phone"
            className="form-input"
            placeholder="Your phone number"
            value={formState.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={`${formName}-email`} className="form-label">Email</label>
        <input
          type="email"
          id={`${formName}-email`}
          name="email"
          className="form-input"
          placeholder="Your email address"
          value={formState.email}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      {showAllFields && (
        <>
          <div className="contact-form__row">
            <div className="form-group">
              <label htmlFor={`${formName}-property`} className="form-label">Property Type</label>
              <select
                id={`${formName}-property`}
                name="propertyType"
                className="form-select"
                value={formState.propertyType}
                onChange={handleChange}
              >
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="duplex">Duplex</option>
                <option value="independent">Independent House</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor={`${formName}-bhk`} className="form-label">BHK</label>
              <select
                id={`${formName}-bhk`}
                name="bhk"
                className="form-select"
                value={formState.bhk}
                onChange={handleChange}
              >
                <option value="">Select BHK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="4bhk+">4+ BHK</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor={`${formName}-service`} className="form-label">Service Required</label>
            <select
              id={`${formName}-service`}
              name="service"
              className="form-select"
              value={formState.service}
              onChange={handleChange}
            >
              <option value="">Select service</option>
              <option value="full-home">Full Home Interiors</option>
              <option value="kitchen">Modular Kitchen</option>
              <option value="wardrobes">Wardrobes</option>
              <option value="living-room">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="false-ceiling">False Ceiling</option>
              <option value="renovation">Renovation</option>
              <option value="wallpaper">Wallpaper</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      )}

      <div className="form-group">
        <label htmlFor={`${formName}-message`} className="form-label">Message</label>
        <textarea
          id={`${formName}-message`}
          name="message"
          className="form-textarea"
          placeholder="Tell us about your project — location, timeline, specific requirements..."
          value={formState.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
