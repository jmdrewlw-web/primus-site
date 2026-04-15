import type { Article } from '@/lib/articles';
import { MagneticButton } from '@/components/ui/MagneticButton';
import AuthorBio from '@/components/AuthorBio';
import RelatedArticles from '@/components/RelatedArticles';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlePage({
  article,
  relatedArticles,
}: {
  article: Article;
  relatedArticles: Article[];
}) {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-10">
        <span className="bg-purple-700/10 text-purple-700 font-semibold px-3 py-1 rounded-full text-xs">
          {article.category.name}
        </span>
        <span>{formatDate(article.date)}</span>
        <span>·</span>
        <span>{article.readingTime} min read</span>
        <span>·</span>
        <span>By Jason Drewelow</span>
      </div>

      {/* Article body */}
      <div
        className={[
          'mb-12',
          '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4',
          '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3',
          '[&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6',
          '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-gray-700',
          '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-gray-700',
          '[&_li]:mb-2',
          '[&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-8',
          '[&_strong]:font-semibold',
          '[&_a]:text-purple-700 [&_a]:underline',
        ].join(' ')}
        dangerouslySetInnerHTML={{ __html: article.html ?? '' }}
      />

      {/* Mid-article CTA */}
      <div className="bg-gray-50 p-8 rounded-xl mb-12 text-center">
        <p className="text-gray-700 font-semibold text-lg mb-2">Ready to start your project?</p>
        <p className="text-gray-500 text-sm mb-6">
          Talk with our team about your construction goals — no commitment required.
        </p>
        <MagneticButton href="/contact?ref=pathfinder" variant="gold">
          Start a Conversation
        </MagneticButton>
      </div>

      {/* Author bio */}
      <div className="mb-12">
        <AuthorBio />
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="mb-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      )}
    </div>
  );
}
