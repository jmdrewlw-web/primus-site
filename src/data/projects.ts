export interface Project {
  slug: string;
  name: string;
  location: string;
  category: 'Healthcare' | 'Commercial' | 'Historic';
  type: string;
  photoDir: string;
  featured: boolean;
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  // Case study clients (featured)
  { slug: 'gleason-dental', name: 'Gleason Dental Clinic', location: 'Beatrice, NE', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/gleason-dental', featured: true, hasCaseStudy: true },
  { slug: 'lake-dental', name: 'Lake Dental Care', location: 'Big Lake, MN', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/lake-dental', featured: true, hasCaseStudy: true },
  { slug: 'huber-dds', name: 'Stephen Huber, DDS', location: 'Leawood, KS', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/huber-dds', featured: false, hasCaseStudy: true },
  { slug: 'ducharme-dermatology', name: 'Ducharme Dermatology', location: 'Clive, IA', category: 'Healthcare', type: 'Medical', photoDir: '/images/projects/ducharme-dermatology', featured: true, hasCaseStudy: true },
  // Additional portfolio projects
  { slug: 'crystal-group', name: 'Crystal Group', location: 'Hiawatha, IA', category: 'Commercial', type: 'Industrial', photoDir: '/images/projects/crystal-group', featured: true, hasCaseStudy: false },
  { slug: 'raining-rose', name: 'Raining Rose', location: 'Cedar Rapids, IA', category: 'Commercial', type: 'Commercial', photoDir: '/images/projects/raining-rose', featured: false, hasCaseStudy: false },
  { slug: 'white-elephant', name: 'White Elephant Building', location: 'Cedar Rapids, IA', category: 'Historic', type: 'Historic Preservation', photoDir: '/images/projects/white-elephant', featured: true, hasCaseStudy: false },
  { slug: 'madison-vet', name: 'Madison Veterinary Hospital', location: 'Madison, WI', category: 'Healthcare', type: 'Veterinary', photoDir: '/images/projects/madison-vet', featured: false, hasCaseStudy: false },
  { slug: 'bluegrass-vet', name: 'Bluegrass Veterinary Hospital', location: 'Gallatin, TN', category: 'Healthcare', type: 'Veterinary', photoDir: '/images/projects/bluegrass-vet', featured: true, hasCaseStudy: false },
  { slug: 'coral-west-dental', name: 'Coral West Dental', location: 'Coralville, IA', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/coral-west-dental', featured: false, hasCaseStudy: false },
  { slug: 'signal-ridge-dental', name: 'Signal Ridge Dental', location: 'Cedar Rapids, IA', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/signal-ridge-dental', featured: false, hasCaseStudy: false },
  { slug: 'brush-dental', name: 'Brush Dental Studio', location: 'St. Bonifacius, MN', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/brush-dental', featured: false, hasCaseStudy: false },
  { slug: 'renew-dental', name: 'Renew Dental', location: 'Clarksville, TN', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/renew-dental', featured: false, hasCaseStudy: false },
  { slug: 'indian-hills', name: 'Indian Hills Dental', location: 'Marion, IA', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/indian-hills', featured: false, hasCaseStudy: false },
];
