import fs from 'fs';
import path from 'path';
import { getReadingTime } from './reading-time';
import { categorizeArticle, type Category } from './article-categories';
import { renderMarkdown } from './markdown';

const ARTICLES_DIR = path.join(process.env.HOME || '/Users/macmini', 'primus_project/content/articles');

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
    .filter(f => f.endsWith('.md') && f.startsWith('article_'));

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
