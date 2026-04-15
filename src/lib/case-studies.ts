import { caseStudies, type CaseStudy } from '@/data/case-studies';

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.category === category);
}

export function getCaseStudiesBySlugs(slugs: string[]): CaseStudy[] {
  return slugs.map(s => getCaseStudyBySlug(s)).filter(Boolean) as CaseStudy[];
}
