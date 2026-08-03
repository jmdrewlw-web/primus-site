export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  whoItsFor: string;
  faq: ServiceFAQ[];
  relatedCaseStudySlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'preconstruction',
    name: 'Preconstruction',
    tagline: 'The biggest cost decisions happen before construction starts.',
    description: 'We stress-test every assumption before you spend a dollar. Budgeting, feasibility studies, site evaluation, constructability review, and value engineering — all before you break ground.',
    features: [
      { title: 'Real Budget Numbers', description: 'Not ballpark guesses — detailed cost analysis based on 500+ completed projects.' },
      { title: 'Site Evaluation', description: 'Zoning, utilities, soil conditions, access — we find the problems before they find you.' },
      { title: 'Feasibility Studies', description: 'Does this project make financial sense? We\'ll tell you honestly.' },
      { title: 'Value Engineering', description: 'Same quality, lower cost. We know where to save and where not to.' },
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'We learn your business, your goals, and your constraints.' },
      { step: 2, title: 'Site & Budget Analysis', description: 'Evaluate your site options and build a real budget.' },
      { step: 3, title: 'Feasibility Report', description: 'You get a clear go/no-go recommendation with the numbers to back it up.' },
    ],
    whoItsFor: 'Business owners considering a new build or major renovation who need clarity before committing capital.',
    faq: [
      { question: 'How much does preconstruction cost?', answer: 'Our preconstruction services are typically included when you proceed with construction. For standalone feasibility studies, we provide a fixed fee upfront.' },
      { question: 'How long does preconstruction take?', answer: 'Typically 4-8 weeks depending on site complexity and scope. We move fast because delays cost money.' },
      { question: 'What if the project isn\'t feasible?', answer: 'Then we saved you from a bad investment. We\'d rather tell you no than watch you lose money.' },
      { question: 'Do I need to own a site before starting?', answer: 'No. Site selection and evaluation is part of our preconstruction services.' },
    ],
    relatedCaseStudySlugs: ['lake-dental', 'titus-dentistry', 'create-a-smile'],
  },
  {
    slug: 'general-construction',
    name: 'General Construction',
    tagline: 'Fixed pricing. Single point of contact. No surprises.',
    description: 'Ground-up construction and major renovations with locked scope, guaranteed pricing, and one person accountable from start to finish. We build what we say we\'ll build, for what we say it\'ll cost.',
    features: [
      { title: 'Fixed Pricing', description: 'The number we give you is the number you pay. No change order games.' },
      { title: 'Single Point of Contact', description: 'One person from preconstruction through punch list. You always know who to call.' },
      { title: 'Schedule Accountability', description: 'We build to a timeline and we own it. Delays cost us, not you.' },
      { title: 'Quality Assurance', description: '500+ projects of institutional knowledge applied to every build.' },
    ],
    process: [
      { step: 1, title: 'Scope Lock', description: 'We define exactly what you\'re getting. No ambiguity.' },
      { step: 2, title: 'Construction', description: 'We build. You get weekly updates and a single point of contact.' },
      { step: 3, title: 'Punch List & Handoff', description: 'We finish right, hand you the keys, and make sure everything works.' },
    ],
    whoItsFor: 'Business owners with plans ready to build who want guaranteed pricing and accountability.',
    faq: [
      { question: 'What does "fixed pricing" actually mean?', answer: 'It means the price we agree to is the price you pay. If costs go up, that\'s our problem. If we missed something in our estimate, that\'s our problem. You pay what we quoted.' },
      { question: 'How long does construction take?', answer: 'Depends on project type. Dental offices: 8-12 months. Veterinary: 10-14 months. Commercial: 6-18 months. We\'ll give you a specific timeline in preconstruction.' },
      { question: 'What if I want to make changes during construction?', answer: 'We handle change requests, but we\'re honest about what they cost and how they affect the schedule. No hidden fees.' },
    ],
    relatedCaseStudySlugs: ['gleason-dental', 'huber-dds', 'marion-dental'],
  },
  {
    slug: 'design-build',
    name: 'Design-Build',
    tagline: 'A buildable plan, a clear path, and one accountable construction partner.',
    description: 'We lead construction while coordinating closely with your architect, design partners, engineers, and suppliers from day one. The goal is a buildable plan, fewer avoidable gaps, and informed decisions before work reaches the field.',
    features: [
      { title: 'Design-Partner Coordination', description: 'We work with your architect and design partners to resolve constructability, cost, schedule, and field questions early.' },
      { title: 'Clear Construction Scope', description: 'A defined construction agreement and disciplined scope make responsibilities visible before work begins.' },
      { title: 'Early Builder Input', description: 'We bring construction perspective into planning before decisions harden into expensive field changes.' },
      { title: 'Coordinated Decisions', description: 'Every key decision is evaluated for buildability, cost, schedule, and operational impact in real time.' },
    ],
    process: [
      { step: 1, title: 'Programming', description: 'We learn how the operation works and coordinate early assumptions with the owner and design team.' },
      { step: 2, title: 'Design Coordination', description: 'Floor plans, elevations, constructability input, and a working budget move forward together.' },
      { step: 3, title: 'Preconstruction', description: 'Materials, systems, sequencing, and cost implications are made clear before construction.' },
      { step: 4, title: 'Construction', description: 'We carry the plan into the field with direct accountability for the build.' },
    ],
    whoItsFor: 'Business owners who want an accountable builder involved early and a coordinated path from planning through move-in.',
    faq: [
      { question: 'Do I still need my own architect?', answer: 'Architecture is provided by your architect or another qualified design partner. We coordinate closely with that team so construction decisions are informed early.' },
      { question: 'Is an early builder relationship more expensive?', answer: 'The purpose is to make cost, schedule, and constructability visible earlier, before field changes become expensive. The right approach depends on the project and contract structure.' },
      { question: 'Can I see the design before committing to construction?', answer: 'Yes. We help align the evolving design, construction scope, and budget so you can make informed decisions before work begins.' },
      { question: 'What types of projects work best for design-build?', answer: 'Any commercial project benefits, but it\'s especially valuable for specialty spaces (dental, veterinary, medical) where operational flow drives the design.' },
    ],
    relatedCaseStudySlugs: ['lake-dental', 'create-a-smile', 'ducharme-dermatology'],
  },
  {
    slug: 'construction-management',
    name: 'Construction Management',
    tagline: 'Your eyes, ears, and backbone on the job site.',
    description: 'Owner\'s representation and third-party construction oversight. We manage your project as if it were our own — schedule accountability, budget tracking, and quality assurance without the conflict of interest.',
    features: [
      { title: 'Owner\'s Representation', description: 'We represent your interests on the job site. Not the contractor\'s. Not the architect\'s. Yours.' },
      { title: 'Schedule Oversight', description: 'We hold contractors accountable to the timeline and flag problems before they become delays.' },
      { title: 'Budget Tracking', description: 'Real-time cost tracking. No surprises. No overbilling.' },
      { title: 'Quality Assurance', description: 'Independent quality inspections at every phase.' },
    ],
    process: [
      { step: 1, title: 'Project Setup', description: 'We review plans, contracts, and schedules. Establish reporting and communication protocols.' },
      { step: 2, title: 'Active Oversight', description: 'Regular site visits, progress tracking, and issue resolution.' },
      { step: 3, title: 'Closeout', description: 'Punch list management, final inspections, and warranty coordination.' },
    ],
    whoItsFor: 'Property owners, investors, and businesses who have their own architect and contractor but want independent oversight and accountability.',
    faq: [
      { question: 'When should I hire a construction manager?', answer: 'Before construction starts — ideally during design. The earlier we\'re involved, the more problems we can prevent.' },
      { question: 'Do you replace my general contractor?', answer: 'No. We work alongside your GC as your independent representative. We hold them accountable without doing their job.' },
      { question: 'What size projects need construction management?', answer: 'Any project over $1M benefits from independent oversight. The cost of CM is a fraction of what a missed problem costs.' },
    ],
    relatedCaseStudySlugs: [],
  },
  {
    slug: 'development-advisory',
    name: 'Development Advisory',
    tagline: 'Before you have a project, you need a plan.',
    description: 'Site selection, financing consultation, investor structure, and feasibility analysis. For clients who need help before they even have blueprints.',
    features: [
      { title: 'Site Selection', description: 'Demographics, traffic, zoning, competition — we analyze sites the way investors do.' },
      { title: 'Financial Feasibility', description: 'Pro formas, construction budgets, and ROI analysis before you commit.' },
      { title: 'Financing Guidance', description: 'SBA, conventional, 100% financing options — we know what works for each project type.' },
      { title: 'Investor Structure', description: 'For multi-site operators and developers: deal structure, entity formation, and capital stack guidance.' },
    ],
    process: [
      { step: 1, title: 'Goals & Constraints', description: 'We understand what you\'re trying to build and what you have to work with.' },
      { step: 2, title: 'Market & Site Analysis', description: 'Data-driven evaluation of your options.' },
      { step: 3, title: 'Go/No-Go Recommendation', description: 'Clear recommendation with financial projections and risk assessment.' },
    ],
    whoItsFor: 'First-time builders, multi-site operators, and investors evaluating new commercial projects.',
    faq: [
      { question: 'I don\'t even have a site yet. Can you help?', answer: 'That\'s exactly when to call us. Site selection is one of the biggest cost drivers and we can help you get it right.' },
      { question: 'Do you help with financing?', answer: 'We guide you through options and connect you with lenders who specialize in your project type. We don\'t originate loans.' },
      { question: 'What if I\'m just exploring the idea?', answer: 'Good. That\'s the cheapest time to find out if a project makes sense.' },
    ],
    relatedCaseStudySlugs: ['titus-dentistry', 'create-a-smile'],
  },
];
