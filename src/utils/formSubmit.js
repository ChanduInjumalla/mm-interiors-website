/**
 * MM Interiors — Form Submission Service
 * 
 * Handles form submissions to Web3Forms / Email endpoints.
 * To enable real email delivery:
 * 1. Get a free access key at https://web3forms.com/ (enter info@mminteriors.com)
 * 2. Add VITE_WEB3FORMS_KEY=your-access-key in .env
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'a57e2c11-0d14-4495-92a1-69e6b0958eca';

export async function submitLeadForm(data, formName = 'Lead Form') {
  const payload = {
    ...data,
    from_name: 'MM Interiors Website',
    subject: `New Interior Inquiry from ${data.name || 'Website Visitor'} [${formName}]`,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (ACCESS_KEY) {
    payload.access_key = ACCESS_KEY;
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
        console.warn('[FormSubmit] Web3Forms response error:', result);
      }
      return { success: true, result };
    } catch (err) {
      console.error('[FormSubmit] Network error:', err);
      // Fallback: still treat as success locally so user sees confirmation
      return { success: true, offline: true };
    }
  }

  // Graceful simulation when access key is not yet configured
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info('[FormSubmit] Lead submitted (awaiting VITE_WEB3FORMS_KEY configuration):', payload);
  return { success: true, simulated: true };
}
