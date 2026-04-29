import Link from 'next/link';
import type { Article } from '@/lib/articles';

const CATEGORY_COLORS: Record<string, string> = {
  planning: 'from-purple-700 to-purple-900',
  design: 'from-indigo-600 to-indigo-800',
  finance: 'from-amber-600 to-amber-800',
  risk: 'from-red-600 to-red-800',
  construction: 'from-gray-700 to-gray-900',
  growth: 'from-emerald-600 to-emerald-800',
};

const CATEGORY_ICONS: Record<string, string> = {
  planning: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  design: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  finance: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  risk: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z',
  construction: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  growth: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
};

export default function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const gradient = CATEGORY_COLORS[article.category.slug] ?? CATEGORY_COLORS.construction;
  const iconPath = CATEGORY_ICONS[article.category.slug] ?? CATEGORY_ICONS.construction;

  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Category-colored header */}
        <div className={`bg-gradient-to-br ${gradient} h-40 flex-shrink-0 relative flex items-center justify-center`}>
          <svg
            className="w-16 h-16 text-white/15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
          <span className="absolute bottom-3 left-4 text-white/70 text-xs font-semibold uppercase tracking-wider">
            {article.category.name}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
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
