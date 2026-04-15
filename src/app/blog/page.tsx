import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogIndex from '@/components/BlogIndex';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';
import { getAllArticles } from '@/lib/articles';
import { CATEGORIES } from '@/lib/article-categories';

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Real talk about commercial construction. 65+ articles on planning, design, finance, risk, and growth — no fluff.',
};

const schema = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Field Notes', url: '/blog' },
]);

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <SchemaScript schema={schema} />
      <Nav />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-10 py-16 md:py-24 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-4">
              Field Notes
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 text-[1.05rem] max-w-[540px]">
              Real talk about commercial construction. No fluff.
            </p>
          </ScrollReveal>
        </section>

        {/* Blog index with filters */}
        <section className="px-6 md:px-10 pb-24 max-w-[1200px] mx-auto">
          <BlogIndex articles={articles} categories={CATEGORIES} />
        </section>
      </main>
      <Footer />
    </>
  );
}
