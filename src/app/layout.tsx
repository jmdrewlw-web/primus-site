import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://primus-companies.com";
const SITE_NAME = "Primus Companies";
const SITE_DESCRIPTION =
  "Primus Companies is a commercial general contractor with offices in Cedar Rapids, Nashville, Omaha, Minneapolis, and Kansas City. 500+ projects, $770M delivered across dental, veterinary, medical, daycare, multifamily, and light industrial.";

export const metadata: Metadata = {
  title: {
    default: "Primus Companies — Commercial General Contractor & Development Partner",
    template: "%s | Primus Companies",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Primus Companies — Commercial General Contractor & Development Partner",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Primus Companies — Plan. Build. Develop. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primus Companies — Commercial General Contractor & Development Partner",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/hero.jpg`],
  },
  other: {
    "theme-color": "#6B2FA0",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: "Primus Companies",
  description:
    "Commercial general contractor specializing in design-build, construction management, and development services across 15+ states. 500+ projects, $770M delivered, 24 years.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Primus_Logo.jpeg`,
  image: `${SITE_URL}/images/hero.jpg`,
  foundingDate: "2002",
  slogan: "Plan. Build. Develop. Grow.",
  telephone: "+1-319-393-4831",
  email: "connect@primus-companies.com",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 100 },
  areaServed: [
    { "@type": "State", name: "Iowa" },
    { "@type": "State", name: "Tennessee" },
    { "@type": "State", name: "Nebraska" },
    { "@type": "State", name: "Minnesota" },
    { "@type": "State", name: "Missouri" },
    { "@type": "State", name: "Kansas" },
    { "@type": "State", name: "Illinois" },
    { "@type": "State", name: "Wisconsin" },
    { "@type": "State", name: "South Dakota" },
    { "@type": "State", name: "North Dakota" },
    { "@type": "State", name: "Indiana" },
    { "@type": "State", name: "Kentucky" },
    { "@type": "State", name: "Arkansas" },
    { "@type": "State", name: "Oklahoma" },
    { "@type": "State", name: "Alabama" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "4350 River Ridge Dr NE",
      addressLocality: "Cedar Rapids",
      addressRegion: "IA",
      postalCode: "52402",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Nashville",
      addressRegion: "TN",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Omaha",
      addressRegion: "NE",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
  ],
  knowsAbout: [
    "Design-Build Construction",
    "Construction Management",
    "General Contracting",
    "Commercial Construction",
    "Healthcare Construction",
    "Dental Office Construction",
    "Veterinary Clinic Construction",
    "Daycare Construction",
    "Light Industrial Construction",
    "Multi-Site Rollout",
    "Tenant Improvement",
    "Ground-Up Development",
    "Multifamily Housing",
    "Senior Housing",
    "Preconstruction Services",
    "Construction Cost Estimating",
    "AI-Assisted Construction Technology",
  ],
  sameAs: [
    "https://www.linkedin.com/company/primus-companies",
    "https://www.facebook.com/primuscompanies",
  ],
};

const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#cedar-rapids`,
    name: "Primus Companies — Cedar Rapids (Headquarters)",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    telephone: "+1-319-393-4831",
    email: "connect@primus-companies.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4350 River Ridge Dr NE",
      addressLocality: "Cedar Rapids",
      addressRegion: "IA",
      postalCode: "52402",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 42.0334, longitude: -91.6353 },
    areaServed: [
      { "@type": "State", name: "Iowa" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "State", name: "Wisconsin" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#nashville`,
    name: "Primus Companies — Nashville",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashville",
      addressRegion: "TN",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Tennessee" },
      { "@type": "State", name: "Kentucky" },
      { "@type": "State", name: "Alabama" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#omaha`,
    name: "Primus Companies — Omaha",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Omaha",
      addressRegion: "NE",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Nebraska" },
      { "@type": "State", name: "South Dakota" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#minneapolis`,
    name: "Primus Companies — Minneapolis",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Minnesota" },
      { "@type": "State", name: "North Dakota" },
      { "@type": "State", name: "Wisconsin" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#kansas-city`,
    name: "Primus Companies — Kansas City",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Missouri" },
      { "@type": "State", name: "Kansas" },
      { "@type": "State", name: "Oklahoma" },
    ],
  },
];

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Preconstruction Services",
    description:
      "Budget validation, site evaluation, constructability review, and cost estimating. We find problems before they find your wallet.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Preconstruction",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "General Construction",
    description:
      "Full delivery from foundation to certificate of occupancy. One team, one contract, one point of accountability across dental, veterinary, medical, daycare, multifamily, and light industrial projects.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "General Contracting",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design-Build",
    description:
      "Architect and builder aligned from day one. Faster timeline, fewer change orders, better outcomes for commercial construction projects.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Design-Build",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Management",
    description:
      "For owners who want oversight without the overhead. We manage the construction process so you can stay focused on your business.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Construction Management",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Development Advisory",
    description:
      "Site selection, deal evaluation, and capital planning. The strategic layer that makes the building decision make sense.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Development Advisory",
  },
];

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#jason-drewelow`,
    name: "Jason Drewelow",
    jobTitle: "Principal & Owner",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    description:
      "Founder and Principal of Primus Companies. 24 years leading commercial construction and development projects across 15+ states.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#andy-headding`,
    name: "Andy Headding",
    jobTitle: "President",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    description:
      "President of Primus Companies overseeing operations, project delivery, and client relationships.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of commercial construction does Primus Companies do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primus Companies specializes in commercial general contracting across dental offices, veterinary clinics, medical facilities, daycare centers, multifamily housing, light industrial, and multi-site rollouts. We offer preconstruction, general construction, design-build, construction management, and development advisory services.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Primus Companies operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primus Companies has offices in Cedar Rapids (headquarters), Nashville, Omaha, Minneapolis, and Kansas City. As a general contractor, we focus within a few hours of our offices but travel for specific engagements and follow multi-site customers wherever projects take us — across 15+ states.",
      },
    },
    {
      "@type": "Question",
      name: "What is design-build construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Design-build is a project delivery method where the architect and builder work together under one contract from day one. This means faster timelines, fewer change orders, and better alignment between design intent and construction reality. Primus Companies has delivered hundreds of design-build projects across multiple industries.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Primus Companies been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primus Companies was founded in 2002 and has 24 years of experience delivering commercial construction projects. In that time, we've completed 500+ projects totaling $770M in delivered value across 15+ states.",
      },
    },
    {
      "@type": "Question",
      name: "Does Primus Companies work with multi-site operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Multi-site operators are one of our core specialties. We follow our clients wherever the next project takes us, providing consistent quality, pricing, and project management across multiple locations. Our longest client partnership spans 23 years.",
      },
    },
    {
      "@type": "Question",
      name: "What is Primus Companies' Project Pathfinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Project Pathfinder is a free, no-commitment consultation that takes about 5 minutes to initiate. You tell us what you're planning — no drawings needed — and our team reviews your situation, pressure-tests the numbers, and delivers a personalized report with honest next steps, realistic budget ranges, and a recommended path forward.",
      },
    },
    {
      "@type": "Question",
      name: "When should I bring in a general contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As early as possible. The biggest cost decisions happen before construction starts — site selection, design direction, budget validation. A GC adds the most value during preconstruction. But if you already have drawings ready to price, we plug in wherever you are in the process.",
      },
    },
    {
      "@type": "Question",
      name: "Does Primus Companies help with project financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Primus Companies has relationships with a variety of financing partners — traditional banks, SBA lenders, and alternative capital sources. Our preconstruction work gives lenders exactly what they need: validated budgets, realistic timelines, and a credible delivery plan. For qualified multi-site operators, we can facilitate 100% financing introductions.",
      },
    },
  ],
};

const reviewSchemas = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kyle Skjei" },
      reviewBody:
        "We're at 10,000 patients doing over $4 million a year. The builders and architects were all on the same page from day one.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@type": "GeneralContractor", name: "Primus Companies" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Tom Zulandt" },
      reviewBody:
        "Less than 100 days from demo to move-in. You won't be disappointed with the quality of people at Primus.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@type": "GeneralContractor", name: "Primus Companies" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dan Gleason" },
      reviewBody:
        "Production is up 50-60%. We closed the old practice Thursday, opened the new one Monday.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@type": "GeneralContractor", name: "Primus Companies" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Benjamin Zimmerman" },
      reviewBody:
        "Primus earned my trust by being honest and upfront. Having somebody on my side who knows that business — it's hugely helpful.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@type": "GeneralContractor", name: "Primus Companies" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Stephen Huber" },
      reviewBody: "I'm asked over and over again, 'Who did your construction?'",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@type": "GeneralContractor", name: "Primus Companies" },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#6B2FA0" />
        <link rel="icon" href="/images/Primus_Logo.jpeg" type="image/jpeg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {localBusinessSchemas.map((schema, i) => (
          <script
            key={`lb-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {serviceSchemas.map((schema, i) => (
          <script
            key={`svc-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {personSchemas.map((schema, i) => (
          <script
            key={`person-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemas) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
