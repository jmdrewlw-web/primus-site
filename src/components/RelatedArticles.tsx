import type { Article } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-6">More from Field Notes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
