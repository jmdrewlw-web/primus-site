import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import ArticlePage from '@/components/ArticlePage';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SchemaScript, blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Retired legacy URLs must not serve stale architecture claims on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const articles = getAllArticles();
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);

  return (
    <>
      <Nav />
      <SchemaScript schema={blogPostingSchema({
        title: article.title,
        slug: article.slug,
        description: article.description,
        date: article.date,
        readingTime: article.readingTime,
        categoryName: article.category.name,
      })} />
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Field Notes', url: '/blog' },
        { name: article.title },
      ])} />
      <main className="pt-24 pb-16">
        <ArticlePage article={article} relatedArticles={related} />
      </main>
      <Footer />
    </>
  );
}
