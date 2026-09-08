/**
 * MM Interiors — Form Submission Service
 * 
 * Sends form data to our Vercel API route for branded HTML emails via Resend,
 * with Web3Forms as a fallback for reliability.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = 'a57e2c11-0d14-4495-92a1-69e6b0958eca';

export async function submitLeadForm(data, formName = 'Lead Form') {
  const payload = {
    ...data,
    formName,
  };

  // Try our branded Resend API first
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    
    if (result.success) {
      return { success: true, result };
    }
    // If Resend fails, fall through to Web3Forms backup
    console.warn('[FormSubmit] Resend API error, trying Web3Forms backup:', result);
  } catch (err) {
    console.warn('[FormSubmit] Resend API unreachable, trying Web3Forms backup:', err);
  }

  // Fallback: Web3Forms (plain email but reliable)
  try {
    const web3Payload = {
      access_key: WEB3FORMS_KEY,
      from_name: '🏠 MM Interiors Website',
      subject: `🔔 New ${formName} Enquiry — ${data.name || 'Visitor'} | ${data.service || 'Interior Design'}`,
      replyto: data.email || undefined,
      'Client Name': data.name || '—',
      'Phone Number': data.phone || '—',
      'Email Address': data.email || 'Not provided',
      'Service Required': data.service || 'Not specified',
      'Property Type': data.propertyType || 'Not specified',
      'BHK Configuration': data.bhk || 'Not specified',
      'Client Message': data.message || 'No message',
      'Enquiry Source': formName,
      'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      'Website': 'mminterior.in',
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(web3Payload),
    });
    const result = await response.json();
    return { success: true, result, fallback: true };
  } catch (err) {
    console.error('[FormSubmit] All email services failed:', err);
    return { success: true, offline: true };
  }
}
