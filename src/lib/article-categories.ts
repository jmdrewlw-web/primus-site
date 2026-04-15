export interface Category {
  name: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { name: 'Planning & Process', slug: 'planning' },
  { name: 'Design & Operations', slug: 'design' },
  { name: 'Finance & ROI', slug: 'finance' },
  { name: 'Risk & Pitfalls', slug: 'risk' },
  { name: 'Construction', slug: 'construction' },
  { name: 'Growth & Strategy', slug: 'growth' },
];

const CATEGORY_PATTERNS: Record<string, string[]> = {
  planning: ['process', 'first_time', 'when_to_start', 'what_the_process', 'questions_to_ask', 'single_point', 'managing_up', 'managing_project'],
  design: ['design_for_', 'interior_design', 'operatory', 'architect_builder', 'in_house', 'building_for_the_next', 'what_patients_notice', 'handoff'],
  finance: ['financing', '100_percent', 'roi_', 'realistic_budget', 'fixed_pricing', 'what_fixed_pricing', 'expense_vs', 'psychology_of_sticker', 'lease_vs', 'cheapest_bid'],
  risk: ['horror_', 'change_order', 'scope_creep', 'geotech', 'wrong_contractor', 'sunk_cost', 'renovation_that_never', 'what_happens_when_you_rush', 'insurance', 'permit'],
  construction: ['vetting', 'what_a_good_contractor', 'contractor_', 'equipment', 'ground_up', 'site_selection', 'light_industrial', 'vet_clinic', 'daycare', 'medical', 'multifamily'],
  growth: ['multi_location', 'scaling', 'building_as_exit', 'building_attracts', 'competition', 'referrals', 'staff_retention', 'grand_opening', 'when_not_to_build', 'why_operators', 'practice_acquisition', 'build_or_buy', 'real_cost', 'moving_vs'],
};

export function categorizeArticle(filename: string): Category {
  const base = filename.replace(/^article_/, '').replace(/\.md$/, '');

  for (const [slug, patterns] of Object.entries(CATEGORY_PATTERNS)) {
    for (const pattern of patterns) {
      if (base.includes(pattern) || base.startsWith(pattern)) {
        return CATEGORIES.find(c => c.slug === slug)!;
      }
    }
  }

  return CATEGORIES.find(c => c.slug === 'construction')!; // default
}
