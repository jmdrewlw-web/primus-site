import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://primus-companies.com";

export const metadata: Metadata = {
  title: {
    default: "Primus Companies — Commercial Construction",
    template: "%s | Primus Companies",
  },
  description:
    "Commercial general contractor specializing in design-build, construction management, and development advisory. 500+ projects, 24 years, $770M delivered.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Primus Companies",
    title: "Primus Companies — Commercial Construction",
    description:
      "Commercial general contractor specializing in design-build, construction management, and development advisory. 500+ projects, 24 years, $770M delivered.",
    images: [
      {
        url: `${SITE_URL}/images/hero/main.jpg`,
        width: 878,
        height: 585,
        alt: "Primus Companies — Commercial Construction",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "GeneralContractor"],
  "@id": "https://primus-companies.com/#organization",
  name: "Primus Companies",
  url: "https://primus-companies.com",
  logo: "https://primus-companies.com/images/logos/primus-logo.jpeg",
  description:
    "Commercial general contractor specializing in design-build, construction management, and development advisory. 500+ projects, 24 years, $770M delivered.",
  telephone: "(319) 393-4831",
  email: "connect@primus-companies.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 8th Ave SE",
    addressLocality: "Cedar Rapids",
    addressRegion: "IA",
    postalCode: "52401",
    addressCountry: "US",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 100,
  },
  foundingDate: "2002",
  areaServed: ["Iowa", "Tennessee", "Nebraska", "Minnesota", "Missouri"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
