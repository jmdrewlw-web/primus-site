import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SchemaScript, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { services } from '@/data/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description.slice(0, 160),
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <Nav />
      <SchemaScript schema={serviceSchema(service)} />
      <SchemaScript schema={faqSchema(service.faq)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name },
        ])}
      />
      <ServicePageTemplate service={service} />
      <Footer />
    </>
  );
}
