/**
 * MM Interiors — Analytics & Conversion Tracking
 * 
 * Infrastructure for tracking page views, phone clicks, WhatsApp clicks,
 * form submissions and consultation CTAs.
 * 
 * [REPLACE_WITH_GA4_ID] — Replace with actual GA4 Measurement ID before production.
 */

const GA_MEASUREMENT_ID = ''; // [REPLACE_WITH_GA4_ID]

/**
 * Initialize Google Analytics (GA4)
 * Call once on app mount.
 */
export function initAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    console.info('[Analytics] GA4 Measurement ID not configured. Tracking disabled.');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We handle page views manually for SPA
  });
}

/**
 * Track a page view
 */
export function trackPageView(path, title) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}

/**
 * Track a custom event
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track phone click
 */
export function trackPhoneClick() {
  trackEvent('phone_click', { event_category: 'contact', event_label: 'phone' });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', { event_category: 'contact', event_label: 'whatsapp' });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName) {
  trackEvent('form_submission', { event_category: 'conversion', event_label: formName });
}

/**
 * Track CTA click (Get Consultation, Get Quote, etc.)
 */
export function trackCTAClick(ctaLabel) {
  trackEvent('cta_click', { event_category: 'engagement', event_label: ctaLabel });
}
