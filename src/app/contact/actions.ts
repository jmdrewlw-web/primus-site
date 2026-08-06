'use server';

import { getContactDeliveryState } from '@/lib/contact-delivery';

type ContactFormResult =
  | { success: true }
  | { success: false; error: string; reason: 'validation' | 'preview' | 'not-configured' | 'delivery' };

const DELIVERY_ERROR =
  'We could not send your message. Please try again or contact us directly.';
const PREVIEW_MESSAGE =
  'This review preview does not send messages. Please email connect@primus-companies.com or call (319) 393-4831.';
const NOT_CONFIGURED_MESSAGE =
  'Online message delivery is not available yet. Please email connect@primus-companies.com or call (319) 393-4831.';
const CONTACT_FORM_RECIPIENTS = [
  'andy.hedding@primus-companies.com',
  'connect@primus-companies.com',
];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formValue(formData: FormData, key: string, maxLength: number): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  const name = formValue(formData, 'name', 120);
  const email = formValue(formData, 'email', 254);
  const phone = formValue(formData, 'phone', 60);
  const company = formValue(formData, 'company', 160);
  const projectType = formValue(formData, 'projectType', 100);
  const message = formValue(formData, 'message', 5000);
  const budget = formValue(formData, 'budget', 100);
  const website = formValue(formData, 'website', 200);

  if (website) {
    return { success: true };
  }

  // Validate
  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required.', reason: 'validation' };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: 'Enter a valid email address.', reason: 'validation' };
  }

  // Review previews and any environment not explicitly approved for delivery
  // must never transmit a lead, even if mail credentials are present there.
  const deliveryState = getContactDeliveryState();
  if (deliveryState === 'preview') {
    return { success: false, error: PREVIEW_MESSAGE, reason: 'preview' };
  }
  if (deliveryState === 'not-configured') {
    return { success: false, error: NOT_CONFIGURED_MESSAGE, reason: 'not-configured' };
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Primus Website <website@primus-companies.com>',
      to: CONTACT_FORM_RECIPIENTS,
      replyTo: email,
      subject: `New Contact: ${name} — ${projectType}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
    });

    if (error || !data?.id) {
      console.error('Contact email delivery failed.');
      return { success: false, error: DELIVERY_ERROR, reason: 'delivery' };
    }

    return { success: true };
  } catch {
    console.error('Contact email delivery failed.');
    return { success: false, error: DELIVERY_ERROR, reason: 'delivery' };
  }
}
