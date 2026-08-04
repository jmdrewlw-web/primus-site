import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const repo = process.cwd();
const articlesDir = path.join(repo, 'content/articles');
const articlesSource = fs.readFileSync(path.join(repo, 'src/lib/articles.ts'), 'utf8');
const sitemapSource = fs.readFileSync(path.join(repo, 'src/app/sitemap.ts'), 'utf8');

const retiredSlugs = [
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
];

function filenameToSlug(filename) {
  return filename.replace(/^article_/, '').replace(/\.md$/, '').replaceAll('_', '-');
}

function slugToFilename(slug) {
  return `article_${slug.replaceAll('-', '_')}.md`;
}

const oldArchitectureClaim = /in[- ]house (?:architecture|design)|owns the architecture|same firm is drawing the plans and building|architects? (?:are )?employees|architecture and construction (?:under|work)|own architecture and construction staff|single integrated entity|integrates interior design|Primus[^\n.]*architectural presentation/i;

test('thirteen architecture-claim articles are retired, not rewritten', () => {
  for (const slug of retiredSlugs) {
    assert.match(articlesSource, new RegExp(`['\"]${slug}['\"]`));
    const retiredSource = fs.readFileSync(path.join(articlesDir, slugToFilename(slug)), 'utf8');
    assert.match(retiredSource, /architect|design-build|interior design|integrated/i);
  }

  assert.match(articlesSource, /filter\(filename => !RETIRED_LEGACY_ARTICLE_SLUGS\.has\(filenameToSlug\(filename\)\)\)/);
  assert.match(articlesSource, /getArticleBySlug[\s\S]*getAllArticles\(\)/);
  assert.match(articlesSource, /getRelatedArticles[\s\S]*getAllArticles\(\)/);
  assert.match(sitemapSource, /const articles = getAllArticles\(\)/);
});

test('no active article source makes the retired in-house architecture claim', () => {
  const activeArticles = fs.readdirSync(articlesDir)
    .filter((filename) => filename.startsWith('article_') && filename.endsWith('.md'))
    .filter((filename) => !retiredSlugs.includes(filenameToSlug(filename)));

  for (const filename of activeArticles) {
    const content = fs.readFileSync(path.join(articlesDir, filename), 'utf8');
    assert.doesNotMatch(content, oldArchitectureClaim, filename);
  }
});

test('public positioning removes the disallowed personal-record metrics', () => {
  const publicFiles = [
    'src/app/about/page.tsx',
    'src/app/layout.tsx',
    'src/app/opengraph-image.tsx',
    'src/components/AuthorBio.tsx',
    'src/components/Hero.tsx',
    'src/data/services.ts',
    'src/lib/schema.tsx',
    'public/llms.txt',
  ];
  const activeArticleFiles = fs.readdirSync(articlesDir)
    .filter((filename) => filename.startsWith('article_') && filename.endsWith('.md'))
    .filter((filename) => !retiredSlugs.includes(filenameToSlug(filename)))
    .map((filename) => `content/articles/${filename}`);
  const publicPositioning = [...publicFiles, ...activeArticleFiles]
    .map((file) => fs.readFileSync(path.join(repo, file), 'utf8'))
    .join('\n');

  assert.doesNotMatch(
    publicPositioning,
    /500\+?\s+(?:completed\s+)?projects|24 years|\$77(?:0|7)M|five offices|5 offices|more than 1,000 (?:projects|facilities)|1,000 (?:projects|facilities)|job #501|15\+? states|50[–-]100/i
  );

  const about = fs.readFileSync(path.join(repo, 'src/app/about/page.tsx'), 'utf8');
  const hero = fs.readFileSync(path.join(repo, 'src/components/Hero.tsx'), 'utf8');
  assert.match(about, /Commercial construction,<br[^>]*\/> built on experience since 1973\./);
  assert.match(about, /Cedar Rapids in 1973/);
  assert.doesNotMatch(`${about}\n${hero}`, /CountUp|const STATS/);
});
