import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function BlogPreview() {
  const articles = getAllArticles().slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section aria-label="Blog preview" className="px-6 py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Field Notes
            </h2>
            <Link
              href="/blog"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              View All Articles →
            </Link>
          </div>
          <p className="text-gray-500 mb-12">
            Real talk about commercial construction.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <Link href={`/blog/${article.slug}`} className="block group h-full">
                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col hover:shadow-md hover:border-purple-700/30 transition-all duration-200">
                  <span className="inline-block bg-purple-700/10 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                    {article.category.name}
                  </span>
                  <h3 className="font-bold text-lg text-black mb-2 group-hover:text-purple-700 transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm mt-auto">
                    {article.readingTime} min read
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              View All Articles →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
