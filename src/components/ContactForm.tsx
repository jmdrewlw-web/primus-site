'use client';

import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { MagneticButton } from './ui/MagneticButton';
import { submitContactForm } from '@/app/contact/actions';
import type { ContactDeliveryState } from '@/lib/contact-delivery';

const PROJECT_TYPES = [
  'General Inquiry',
  'Project Pathfinder',
  'Design-Build',
  'Construction Management',
  'Development Advisory',
];

const BUDGET_RANGES = [
  'Under $500K',
  '$500K - $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M+',
  'Not Sure',
];

const labelClass = 'block text-sm font-medium text-gray-800 mb-1.5';
const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition';

export default function ContactForm({ deliveryState }: { deliveryState: ContactDeliveryState }) {
  const searchParams = useSearchParams();
  const isPathfinder = searchParams.get('ref') === 'pathfinder';
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      formRef.current?.reset();
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-3xl mb-3">&#10003;</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Message received!</h3>
        <p className="text-sm text-gray-600">
          Thank you for reaching out. A member of our team will follow up.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-medium text-purple-700 underline underline-offset-2 hover:text-purple-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {deliveryState !== 'ready' && (
        <div
          role="status"
          className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
        >
          {deliveryState === 'preview'
            ? 'Review preview: message delivery is disabled, so this form will not send. Please use the email or phone number on this page.'
            : 'Online message delivery is not configured yet. Please use the email or phone number on this page.'}
        </div>
      )}

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={isPathfinder ? 'Project Pathfinder' : 'General Inquiry'}
          className={inputClass}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget Range
        </label>
        <select id="budget" name="budget" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a range (optional)
          </option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — scope, location, timeline, or any questions you have."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && errorMsg && (
        <p
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div>
        <MagneticButton
          type="submit"
          disabled={status === 'submitting' || deliveryState !== 'ready'}
          variant="gold"
          className={status === 'submitting' || deliveryState !== 'ready' ? 'opacity-60 cursor-not-allowed' : ''}
        >
          {status === 'submitting'
            ? 'Sending…'
            : deliveryState === 'ready'
              ? 'Send Message'
              : 'Message Delivery Disabled'}
        </MagneticButton>
      </div>
    </form>
  );
}
