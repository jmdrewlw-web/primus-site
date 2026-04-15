import Link from 'next/link';
import type { Article } from '@/lib/articles';

export default function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Placeholder image area */}
        <div className="bg-gray-100 h-48 flex-shrink-0" aria-hidden="true" />

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category badge */}
          <span className="inline-block bg-purple-700/10 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
            {article.category.name}
          </span>

          {/* Title */}
          <p className="font-bold text-lg text-black line-clamp-2 group-hover:text-purple-700 transition-colors">
            {article.title}
          </p>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mt-2 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          {/* Meta */}
          <p className="text-gray-400 text-xs mt-3">
            {formattedDate} · {article.readingTime} min read
          </p>
        </div>
      </div>
    </Link>
  );
}
