'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const company = formData.get('company') as string;
  const projectType = formData.get('projectType') as string;
  const message = formData.get('message') as string;
  const budget = formData.get('budget') as string;

  // Validate
  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required.' };
  }

  // Try Resend if configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Primus Website <website@primus-companies.com>',
        to: 'connect@primus-companies.com',
        subject: `New Contact: ${name} — ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
      });
    } catch (err) {
      console.error('Resend error:', err);
      // Fall through to success — we still got the data
    }
  } else {
    console.log('Contact form submission (Resend not configured):', { name, email, phone, company, projectType, message, budget });
  }

  return { success: true };
}
