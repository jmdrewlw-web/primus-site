import { testimonials, type Testimonial } from '@/data/testimonials';

export function getFeaturedTestimonials(count: number = 4): Testimonial[] {
  return testimonials.filter(t => t.category === 'results').slice(0, count);
}

export function getTestimonialsByCategory(category: 'results' | 'process' | 'trust'): Testimonial[] {
  return testimonials.filter(t => t.category === category);
}
