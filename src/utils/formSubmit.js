/**
 * MM Interiors — Form Submission Service
 * 
 * Handles form submissions to Web3Forms.
 * Emails are delivered to mminterior7995@gmail.com
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = 'a57e2c11-0d14-4495-92a1-69e6b0958eca';

/**
 * Format form data into a clean, professional email body
 */
function formatEmailBody(data, formName) {
  const divider = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let body = `
${divider}
     🏠  MM INTERIORS — NEW ENQUIRY
${divider}

📋  ENQUIRY SOURCE: ${formName}
📅  Received: ${timestamp}

${divider}
     👤  CLIENT DETAILS
${divider}

   Name:          ${data.name || '—'}
   Phone:         ${data.phone || '—'}
   Email:         ${data.email || 'Not provided'}

${divider}
     🏗️  PROJECT DETAILS
${divider}

   Service:       ${data.service || 'Not specified'}
   Property:      ${data.propertyType || data.property || 'Not specified'}
   BHK:           ${data.bhk || 'Not specified'}

${divider}
     💬  MESSAGE
${divider}

   ${data.message || 'No message provided'}

${divider}

⚡ ACTION REQUIRED: Call the client within 30 minutes for best conversion.

📞  Quick Call: ${data.phone || '—'}
💬  WhatsApp: https://wa.me/91${(data.phone || '').replace(/\D/g, '')}

${divider}
     MM Interiors | mminterior.in
     Interior Designers in Hyderabad
${divider}
`;

  return body.trim();
}

export async function submitLeadForm(data, formName = 'Lead Form') {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  // Build a clean, structured payload for Web3Forms
  const payload = {
    access_key: ACCESS_KEY,
    from_name: '🏠 MM Interiors Website',
    subject: `🔔 New ${formName} Enquiry — ${data.name || 'Website Visitor'} | ${data.service || 'Interior Design'}`,
    replyto: data.email || undefined,
    // Organized fields with better labels
    'Client Name': data.name || '—',
    'Phone Number': data.phone || '—',
    'Email Address': data.email || 'Not provided',
    'Service Required': data.service || 'Not specified',
    'Property Type': data.propertyType || data.property || 'Not specified',
    'BHK Configuration': data.bhk || 'Not specified',
    'Client Message': data.message || 'No message',
    'Enquiry Source': formName,
    'Submitted At': timestamp,
    'Quick WhatsApp Link': data.phone ? `https://wa.me/91${data.phone.replace(/\D/g, '')}` : '—',
    'Website': 'mminterior.in',
  };

  // Remove undefined/empty fields for cleaner email
  Object.keys(payload).forEach(key => {
    if (payload[key] === undefined || payload[key] === '') {
      delete payload[key];
    }
  });

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!result.success) {
      console.warn('[FormSubmit] Web3Forms error:', result);
    }
    return { success: true, result };
  } catch (err) {
    console.error('[FormSubmit] Network error:', err);
    return { success: true, offline: true };
  }
}
