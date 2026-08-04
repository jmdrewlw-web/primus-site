export type ContactDeliveryState = 'ready' | 'preview' | 'not-configured';

export function getContactDeliveryState(): ContactDeliveryState {
  if (process.env.VERCEL_ENV !== 'production') return 'preview';

  if (
    process.env.CONTACT_FORM_DELIVERY_ENABLED !== 'true' ||
    !process.env.RESEND_API_KEY
  ) {
    return 'not-configured';
  }

  return 'ready';
}
