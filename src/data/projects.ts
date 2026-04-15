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
  { slug: 'huber-dds', name: 'Stephen Huber, DDS', location: 'Leawood, KS', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/huber-dds', featured: true, hasCaseStudy: true },
  { slug: 'ducharme-dermatology', name: 'Ducharme Dermatology', location: 'Clive, IA', category: 'Healthcare', type: 'Medical', photoDir: '/images/projects/ducharme-dermatology', featured: true, hasCaseStudy: true },
  // Additional portfolio projects
  { slug: 'crystal-group', name: 'Crystal Group', location: 'Hiawatha, IA', category: 'Commercial', type: 'Industrial', photoDir: '/images/projects/crystal-group', featured: true, hasCaseStudy: false },
  { slug: 'raining-rose', name: 'Raining Rose', location: 'Cedar Rapids, IA', category: 'Commercial', type: 'Commercial', photoDir: '/images/projects/raining-rose', featured: true, hasCaseStudy: false },
  { slug: 'white-elephant', name: 'White Elephant Building', location: 'Cedar Rapids, IA', category: 'Historic', type: 'Historic Preservation', photoDir: '/images/projects/white-elephant', featured: false, hasCaseStudy: false },
  { slug: 'madison-vet', name: 'Madison Veterinary Hospital', location: 'Madison, WI', category: 'Healthcare', type: 'Veterinary', photoDir: '/images/projects/madison-vet', featured: false, hasCaseStudy: false },
  { slug: 'bluegrass-vet', name: 'Bluegrass Veterinary Hospital', location: 'Gallatin, TN', category: 'Healthcare', type: 'Veterinary', photoDir: '/images/projects/bluegrass-vet', featured: false, hasCaseStudy: false },
  { slug: 'coral-west-dental', name: 'Coral West Dental', location: 'Coralville, IA', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/coral-west-dental', featured: false, hasCaseStudy: false },
  { slug: 'signal-ridge-dental', name: 'Signal Ridge Dental', location: 'Cedar Rapids, IA', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/signal-ridge-dental', featured: false, hasCaseStudy: false },
  { slug: 'modern-day-dental', name: 'Modern Day Dental', location: 'Eden Prairie, MN', category: 'Healthcare', type: 'Dental', photoDir: '/images/projects/modern-day-dental', featured: false, hasCaseStudy: false },
  { slug: 'primus-office', name: 'Primus Companies HQ', location: 'Cedar Rapids, IA', category: 'Commercial', type: 'Office', photoDir: '/images/projects/primus-office', featured: false, hasCaseStudy: false },
  { slug: 'van-meter', name: 'Van Meter', location: 'Cedar Rapids, IA', category: 'Commercial', type: 'Commercial', photoDir: '/images/projects/van-meter', featured: false, hasCaseStudy: false },
  { slug: 'broadview-eye', name: 'Broadview Eye Center', location: '', category: 'Healthcare', type: 'Optometry', photoDir: '/images/projects/broadview-eye', featured: false, hasCaseStudy: false },
  { slug: 'graham-animal-hospital', name: 'Graham Animal Hospital', location: '', category: 'Healthcare', type: 'Veterinary', photoDir: '/images/projects/graham-animal-hospital', featured: false, hasCaseStudy: false },
];
