// Schema.org JSON-LD utilities for Primus Companies
// All schemas use consistent @id references for cross-linking

const SITE_URL = 'https://primus-companies.com';
const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'GeneralContractor'],
    '@id': ORG_ID,
    name: 'Primus Companies',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/primus-logo.jpeg`,
    description: 'Commercial general contractor providing preconstruction, construction management, and coordinated design-build delivery, serving owners since 1973.',
    telephone: '(319) 393-4831',
    email: 'connect@primus-companies.com',
    foundingDate: '1973',
    areaServed: [
      'Eastern Iowa',
      'Central Iowa',
      'Minneapolis metropolitan area',
      'Kansas City metropolitan area',
      'Omaha metropolitan area',
    ],
  };
}

export function localBusinessSchema(office: {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat?: number;
  lng?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_URL}/locations/${office.city.toLowerCase().replace(/\s+/g, '-')}#location`,
    name: `Primus Companies — ${office.city}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: 'US',
    },
    telephone: office.phone,
    parentOrganization: { '@id': ORG_ID },
    ...(office.lat && office.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: office.lat,
            longitude: office.lng,
          },
        }
      : {}),
  };
}

export function serviceSchema(service: { name: string; slug: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    provider: { '@id': ORG_ID },
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: [
      'Eastern Iowa',
      'Central Iowa',
      'Minneapolis metropolitan area',
      'Kansas City metropolitan area',
      'Omaha metropolitan area',
    ],
  };
}

export function blogPostingSchema(article: {
  title: string;
  slug: string;
  description: string;
  date: string;
  readingTime: number;
  wordCount?: number;
  categoryName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Jason Drewelow',
      jobTitle: 'Principal',
      worksFor: { '@id': ORG_ID },
    },
    publisher: { '@id': ORG_ID },
    url: `${SITE_URL}/blog/${article.slug}`,
    articleSection: article.categoryName,
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

export function creativeWorkSchema(project: {
  name: string;
  description: string;
  location: string;
  type: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    genre: 'Commercial Construction Project',
    creator: { '@id': ORG_ID },
    locationCreated: project.location
      ? {
          '@type': 'Place',
          name: project.location,
        }
      : undefined,
  };
}

// Utility component for rendering JSON-LD in pages
export function SchemaScript({ schema }: { schema: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
