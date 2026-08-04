import fs from 'fs';
import path from 'path';
import { getReadingTime } from './reading-time';
import { categorizeArticle, type Category } from './article-categories';
import { renderMarkdown } from './markdown';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

// These legacy pieces describe an in-house architecture practice Primus no
// longer operates. They are deliberately removed from publishing, sitemap, and
// related-content discovery until they are rewritten against the current
// builder-led, design-partner model.
const RETIRED_LEGACY_ARTICLE_SLUGS = new Set([
  'architect-builder-same-page',
  'change-order-trap',
  'contractor-as-advisor',
  'fixed-pricing-matters',
  'first-time-builder',
  'horror-contractor-disappeared',
  'horror-incomplete-drawings',
  'insurance-construction-risk',
  'in-house-design-build',
  'interior-design-is-not-decoration',
  'medical-office-compliance',
  'multifamily-entitlement',
  'single-point-of-contact',
]);

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  date: string; // ISO date
  readingTime: number;
  content: string; // raw markdown
  html?: string; // rendered HTML
  excerpt: string; // first 120 chars for cards
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function extractDescription(content: string): string {
  // Get first paragraph after the title
  const lines = content.split('\n');
  let foundTitle = false;
  let description = '';

  for (const line of lines) {
    if (!foundTitle && line.startsWith('# ')) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() === '') continue;
    if (foundTitle && line.trim() !== '' && !line.startsWith('#')) {
      description = line.trim();
      break;
    }
  }

  return description.slice(0, 160);
}

function filenameToSlug(filename: string): string {
  return filename
    .replace(/^article_/, '')
    .replace(/\.md$/, '')
    .replace(/_/g, '-');
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.warn(`Articles directory not found: ${ARTICLES_DIR}`);
    return [];
  }

  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && f.startsWith('article_'))
    .filter(filename => !RETIRED_LEGACY_ARTICLE_SLUGS.has(filenameToSlug(filename)));

  const articles: Article[] = files.map(filename => {
    const filePath = path.join(ARTICLES_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const stat = fs.statSync(filePath);

    return {
      slug: filenameToSlug(filename),
      title: extractTitle(content),
      description: extractDescription(content),
      category: categorizeArticle(filename),
      date: stat.mtime.toISOString().split('T')[0],
      readingTime: getReadingTime(content),
      content,
      excerpt: extractDescription(content).slice(0, 120),
    };
  });

  // Sort by date descending
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = getAllArticles();
  const article = articles.find(a => a.slug === slug);

  if (!article) return null;

  article.html = await renderMarkdown(article.content);
  return article;
}

export function getRelatedArticles(article: Article, count: number = 3): Article[] {
  const all = getAllArticles();
  return all
    .filter(a => a.slug !== article.slug && a.category.slug === article.category.slug)
    .slice(0, count);
}
