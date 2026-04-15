# Primus Companies Site Refresh — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild primus-companies.com with fresh design (purple+gold, Inter/Geist Mono), full multi-page structure, 65+ blog articles from markdown, real project photography, and AI search optimization.

**Architecture:** Next.js 14 App Router with static generation. Content pipeline reads markdown from `~/primus_project/content/` at build time, processes with remark/rehype. Photos curated from OneDrive to `public/images/`. All pages SSG via `generateStaticParams`. Framer Motion for animations.

**Tech Stack:** Next.js 14, Tailwind CSS v3, Framer Motion, remark/rehype, gray-matter, @vercel/og, resend

**Spec:** `docs/superpowers/specs/2026-04-14-primus-site-refresh-design.md`

---

## Chunk 1: Foundation — Design System, Layout, Config

### Task 1: Clean slate — config and dependencies

**Files:**
- Modify: `package.json`
- Modify: `next.config.mjs`
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `public/robots.txt`
- Create: `public/llms.txt`

- [ ] **Step 1: Install new dependencies, remove deprecated ones**

```bash
cd ~/primus-site-update
npm uninstall @next/font
npm install gray-matter remark remark-gfm remark-html rehype-slug rehype-stringify unified resend framer-motion @vercel/og
```

- [ ] **Step 2: Update `next.config.mjs` — remove `unoptimized: true`, enable image optimization**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Rewrite `tailwind.config.ts` with new design tokens**

Replace entire file. New palette: white, black (#111), purple-700 (#6B2FA0), purple-600 (#7B3DB0), purple-500 (#8B5FC7), gold (#D4A843), gold-light (#E8C973), grays (50/100/200/400/600/800). Max-width 1200px container.

- [ ] **Step 4: Rewrite `globals.css` — strip all old styles, animations, grain texture**

Clean slate: Tailwind directives, CSS reset, smooth scroll, custom scrollbar. No @import for Google Fonts (using next/font instead). No animation keyframes (using Framer Motion instead).

- [ ] **Step 5: Rewrite `layout.tsx` — new fonts, metadata, Organization schema**

Load Inter + Geist Mono via `next/font/google`. Set global metadata with `metadataBase`, OG defaults, robots config. Add Organization JSON-LD schema (`GeneralContractor` type with 5 offices). Wrap children in `<main>`.

- [ ] **Step 6: Create `public/robots.txt`**

Allow all crawlers including GPTBot, ChatGPT-User, Claude-Web, PerplexityBot. Include sitemap URL.

- [ ] **Step 7: Create `public/llms.txt`**

Plain-text site summary: company description, services list, markets, 5 office locations, blog summary, links to major pages.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat: clean slate — new design system, config, SEO foundation"
```

---

### Task 2: Shared UI components — animations, nav, footer

**Files:**
- Create: `src/components/ui/ScrollReveal.tsx`
- Create: `src/components/ui/CountUp.tsx`
- Create: `src/components/ui/MagneticButton.tsx`
- Create: `src/components/ui/SectionDivider.tsx`
- Create: `src/components/Nav.tsx` (rewrite)
- Create: `src/components/Footer.tsx` (rewrite)

- [ ] **Step 1: Build `ScrollReveal` component**

Client component wrapping Framer Motion `motion.div`. Props: `children`, `delay` (number, default 0), `className`. Uses `useInView` to trigger fade-up + scale (0.97→1.0). Respects `useReducedMotion()` — if true, `transition.duration = 0`.

- [ ] **Step 2: Build `CountUp` component**

Client component. Props: `end` (number), `suffix` (string, e.g. "+", "M"), `prefix` (string, e.g. "$"). Uses `useInView` + `useSpring` to animate from 0 to `end`. Renders in Geist Mono font. Respects reduced motion.

- [ ] **Step 3: Build `MagneticButton` component**

Client component. Wraps a button/link. On mouse move within proximity, button position shifts slightly toward cursor (max 4px). On mouse leave, returns to origin. Gold variant (gold bg, black text) and outline variant (border, transparent bg).

- [ ] **Step 4: Build `SectionDivider` component**

Thin gradient line (purple → gold → transparent) or simple gold rule. Used between major homepage sections.

- [ ] **Step 5: Rewrite `Nav.tsx`**

Sticky header. Logo (standard on white, white on dark sections). 5 nav links: About, Services, Projects, Blog, Contact. Gold "Start a Conversation" CTA button (links to /contact?ref=pathfinder). Mobile: hamburger → full-screen overlay with Framer Motion `AnimatePresence`. Scroll detection: bg becomes white with shadow after scroll > 20px.

- [ ] **Step 6: Rewrite `Footer.tsx`**

4-column grid: Company (About, Team), Services (5 links), Resources (Blog), Contact (email, phone, address). Office locations listed. Copyright line. Logo at top.

- [ ] **Step 7: Commit**

```bash
git add src/components/ && git commit -m "feat: shared UI — ScrollReveal, CountUp, Nav, Footer"
```

---

### Task 3: Copy photos and logos from OneDrive

**Files:**
- Create: `public/images/logos/primus-logo.png`
- Create: `public/images/logos/primus-logo-white.png`
- Create: `public/images/logos/primus-icon.png`
- Create: `public/images/projects/` (curated photos)
- Create: `public/images/team/` (headshots)

- [ ] **Step 1: Copy logos**

```bash
ONEDRIVE="/Users/macmini/Library/CloudStorage/OneDrive-PrimusCompanies/Shared Documents - Primus Library/Marketing"
mkdir -p ~/primus-site-update/public/images/{logos,projects,team,hero}
cp "$ONEDRIVE/Logos/Primus Companies - Old/Primus Companies Logo PNG.png" ~/primus-site-update/public/images/logos/primus-logo.png
cp "$ONEDRIVE/Logos/Primus Companies - Old/Primus Companies Logo PNG- White.png" ~/primus-site-update/public/images/logos/primus-logo-white.png
cp "$ONEDRIVE/Logos/Primus Companies - Old/Primus Icon.png" ~/primus-site-update/public/images/logos/primus-icon.png
```

- [ ] **Step 2: Curate project photos — select 1-2 best shots from each key project**

Copy photos from OneDrive Professional Photos into `public/images/projects/[project-slug]/`. Priority projects (case study clients first):
- `gleason-dental/` — from Dental/Gleason Dental Clinic
- `lake-dental/` — from Dental/Lake Dental Care - Skjei
- `huber-dds/` — from Dental/Stephen Huber, DDS
- `ducharme-dermatology/` — from Dermatology/Ducharme Dermatology
- `crystal-group/` — from Commercial/Crystal Group
- `raining-rose/` — from Commercial/Raining Rose
- `white-elephant/` — from Historic Preservation/White Elephant Building
- `madison-vet/` — from Veterinary/Madison Veterinary Hospital
- `bluegrass-vet/` — from Veterinary/Bluegrass Veterinary Hospital
- 5-10 more dental/commercial projects for portfolio variety

For each folder, browse the photos (they are JPEGs), pick the best exterior + best interior shot. Prefer "Reduced" versions if available (smaller file size). Copy to project folder.

- [ ] **Step 3: Copy team headshots**

```bash
cp "$ONEDRIVE/Employee Photos/Headshots/TN/Primus Headshots Jason-1.jpg" ~/primus-site-update/public/images/team/jason-drewelow.jpg
cp "$ONEDRIVE/Employee Photos/Headshots/IA/Thad Harker copy.jpg" ~/primus-site-update/public/images/team/thad-harker.jpg
# Copy other available headshots
```

- [ ] **Step 4: Select hero image**

Pick the best wide/landscape exterior shot from the professional photos collection for the homepage hero. Copy to `public/images/hero/`.

- [ ] **Step 5: Commit**

```bash
git add public/images/ && git commit -m "feat: add real project photos, logos, team headshots from OneDrive"
```

---

## Chunk 2: Content Pipeline — Articles, Case Studies, Testimonials

### Task 4: Article processing library

**Files:**
- Create: `src/lib/articles.ts`
- Create: `src/lib/article-categories.ts`
- Create: `src/lib/reading-time.ts`
- Create: `src/lib/markdown.ts`

- [ ] **Step 1: Create `lib/reading-time.ts`**

```ts
export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 238);
}
```

- [ ] **Step 2: Create `lib/article-categories.ts`**

Export a `categorizeArticle(filename: string): { name: string; slug: string }` function. Uses the pattern-matching table from the spec. Each filename is tested against patterns in priority order. Default category: "Construction".

Also export `CATEGORIES` array: `[{ name: 'Planning & Process', slug: 'planning' }, ...]` for the blog filter UI.

- [ ] **Step 3: Create `lib/markdown.ts`**

Function `renderMarkdown(content: string): Promise<string>` — uses remark + remark-gfm + rehype-slug + rehype-stringify to convert markdown to HTML with heading IDs.

- [ ] **Step 4: Create `lib/articles.ts`**

Main article processing module:
- `getAllArticles(): Article[]` — reads all `.md` files from the articles directory (skip QA_REPORT files), extracts title from first H1, description from first paragraph, slug from filename (strip `article_`, replace `_` with `-`), category via `categorizeArticle()`, reading time, date from file mtime.
- `getArticleBySlug(slug: string): Article | null` — returns single article with rendered HTML body.
- `getRelatedArticles(article: Article, count: number): Article[]` — returns articles in same category, excluding current.
- Type: `Article = { slug, title, description, category, categorySlug, date, readingTime, content (raw md), html (rendered), excerpt }`

Articles directory: read from `~/primus_project/content/articles/` at build time. Use `fs.readdirSync` and `fs.readFileSync`.

- [ ] **Step 5: Commit**

```bash
git add src/lib/ && git commit -m "feat: article processing pipeline — markdown, categories, reading time"
```

---

### Task 5: Case studies and testimonials data

**Files:**
- Create: `src/lib/case-studies.ts`
- Create: `src/lib/testimonials.ts`
- Create: `src/data/case-studies.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/data/services.ts`
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create `data/case-studies.ts`**

Hand-structured data from `~/primus_project/content/case_studies.md`. Array of 9 case study objects: `{ slug, name, client, location, type, category, result, quote, quoteAuthor, quoteTitle, description, photoDir }`. These are static data — no build-time file reading needed.

- [ ] **Step 2: Create `data/testimonials.ts`**

Hand-structured from `~/primus_project/content/testimonial_quote_library.md`. Array of quote objects: `{ quote, author, title, company, location, category }`. Categorized: results, process, trust.

- [ ] **Step 3: Create `data/services.ts`**

Array of 5 service objects: `{ slug, name, tagline, description, features[], process[], faq[], relatedCaseStudySlugs[] }`. Content derived from spec section on service pages.

- [ ] **Step 4: Create `data/projects.ts`**

Array of portfolio projects (beyond case studies). Each: `{ slug, name, location, category, photoDir, featured }`. Maps to curated photo folders. Category uses the OneDrive→display mapping from spec.

- [ ] **Step 5: Create `lib/case-studies.ts` and `lib/testimonials.ts`**

Helper functions: `getCaseStudyBySlug()`, `getCaseStudiesByCategory()`, `getFeaturedTestimonials()`, `getTestimonialsByCategory()`.

- [ ] **Step 6: Commit**

```bash
git add src/data/ src/lib/ && git commit -m "feat: structured data — case studies, testimonials, services, projects"
```

---

### Task 6: Schema.org utilities

**Files:**
- Create: `src/lib/schema.ts`

- [ ] **Step 1: Create `lib/schema.ts`**

Export functions that return JSON-LD objects:
- `organizationSchema()` — GeneralContractor with 5 office departments
- `localBusinessSchema(office)` — per-office LocalBusiness
- `serviceSchema(service)` — Service linked to Organization
- `blogPostingSchema(article)` — BlogPosting with author, dates, wordCount
- `faqSchema(questions)` — FAQPage
- `breadcrumbSchema(items)` — BreadcrumbList
- `creativeWorkSchema(project)` — CreativeWork for case studies

All schemas use consistent `@id` references (`https://primus-companies.com/#organization`, etc.).

Export `SchemaScript` component: renders `<script type="application/ld+json">` with `dangerouslySetInnerHTML`.

- [ ] **Step 2: Commit**

```bash
git add src/lib/schema.ts && git commit -m "feat: schema.org structured data utilities"
```

---

## Chunk 3: Pages — Homepage, About, Contact, 404

### Task 7: Homepage

**Files:**
- Rewrite: `src/app/page.tsx`
- Create: `src/components/Hero.tsx` (rewrite)
- Create: `src/components/ProblemSolution.tsx` (rewrite)
- Create: `src/components/ServicesStrip.tsx`
- Create: `src/components/FeaturedProjects.tsx`
- Create: `src/components/Testimonials.tsx` (rewrite)
- Create: `src/components/BlogPreview.tsx`
- Create: `src/components/BottomCTA.tsx` (rewrite)

- [ ] **Step 1: Rewrite `Hero.tsx`**

Bold headline: "We've built 500+ projects. Yours is next." Subheadline (1-2 sentences, no-BS voice). Two CTAs: gold "Start a Conversation" (MagneticButton → /contact?ref=pathfinder) + outlined "See Our Work" (→ /projects). Stats bar: 4 stats with CountUp components (500+, 24, $770M, 5). Hero text uses sequential word reveal animation via Framer Motion.

- [ ] **Step 2: Rewrite `ProblemSolution.tsx`**

Keep the 5 existing problem/solution pairs. New layout: split-screen cards. Problems on left (dark bg #111, white text), solutions on right (white bg, purple left border accent). Each pair wrapped in ScrollReveal with stagger. SectionDivider after.

- [ ] **Step 3: Create `ServicesStrip.tsx`**

5 service cards from `data/services.ts`. Each card: Lucide icon + name + one-line tagline + arrow link (→ /services/[slug]). Hover: translateY -4px, purple left border appears. Wrapped in ScrollReveal with staggered children (50ms).

- [ ] **Step 4: Create `FeaturedProjects.tsx`**

Grid of 4-6 featured projects from `data/projects.ts` (filter `featured: true`). Each card: `next/image` with project photo, hover overlay (dark scrim + project name + type + location in white text, slide-up animation). Photo clip-reveal from left on scroll. "View All Projects →" link at bottom.

- [ ] **Step 5: Rewrite `Testimonials.tsx`**

Client component. 3-card carousel using Framer Motion `AnimatePresence`. Auto-advances every 6 seconds, pauses on hover. Large gold quote marks. Quote text in larger font. Author name, title, company below. Navigation dots. Uses strongest quotes from `data/testimonials.ts`.

- [ ] **Step 6: Create `BlogPreview.tsx`**

"Field Notes" section header. 3 latest articles from `getAllArticles()` (sorted by date). Each card: category badge (purple pill), title, excerpt (120 chars), reading time. Hover: slight lift + image zoom. "View All Articles →" link.

- [ ] **Step 7: Rewrite `BottomCTA.tsx`**

Dark section (#111 bg). Headline: "Not sure where to start? That's exactly what we're here for." Subtext about free consultation. Gold MagneticButton CTA → /contact?ref=pathfinder. Contact info (phone, email).

- [ ] **Step 8: Wire up `page.tsx`**

Import all homepage sections. Server Component. Render: Nav, Hero, SectionDivider, ProblemSolution, SectionDivider, ServicesStrip, SectionDivider, FeaturedProjects, SectionDivider, Testimonials, BlogPreview, BottomCTA, Footer. Add homepage-specific metadata via `generateMetadata`.

- [ ] **Step 9: Commit**

```bash
git add src/ && git commit -m "feat: homepage — hero, problem/solution, services, projects, testimonials, blog preview"
```

---

### Task 8: About page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Build About page**

Server Component with `generateMetadata`. Sections:
1. Hero: "24 Years. 500+ Projects. One Standard." + company story (2-3 paragraphs, no-BS voice)
2. Stats section: CountUp grid (500+, 24, $770M, 5 offices, 15+ states)
3. Core Values: 3-4 values in card grid (derive from brand voice docs)
4. Team section: photo cards with headshots from `public/images/team/`. Jason Drewelow (Principal), Andy Headding (President), plus others with available headshots. Photo + name + title.
5. Offices: 5 locations listed with addresses (Cedar Rapids HQ, Nashville, Omaha, Minneapolis, Kansas City)
6. BottomCTA reuse

Schema: BreadcrumbList.

- [ ] **Step 2: Commit**

```bash
git add src/app/about/ && git commit -m "feat: about page — story, team, offices"
```

---

### Task 9: Contact page

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/components/ContactForm.tsx`
- Create: `src/app/contact/actions.ts`

- [ ] **Step 1: Create `ContactForm.tsx`**

Client component. Fields: Name (required), Email (required), Phone, Company, Project Type (dropdown: General Inquiry, Project Pathfinder, Design-Build, Construction Management, Development Advisory), Message (textarea), Budget Range (optional dropdown: Under $500K, $500K-$1M, $1M-$5M, $5M-$10M, $10M+, Not Sure).

Reads `?ref=pathfinder` from URL search params — if present, pre-selects "Project Pathfinder" in Project Type.

Submit calls server action. Shows success toast or error state.

- [ ] **Step 2: Create `actions.ts` — server action for form submission**

`'use server'` function. Validates fields. If `RESEND_API_KEY` env var exists, sends email via Resend to `connect@primus-companies.com`. If not, logs to console and returns success (fallback for dev). Returns `{ success: boolean, error?: string }`.

- [ ] **Step 3: Build Contact page**

Two-column layout. Left: ContactForm. Right: office locations (5), phone number, email, Google Maps iframe embed. Below: Pathfinder CTA section.

Schema: BreadcrumbList + LocalBusiness for HQ.
Metadata: "Contact Primus Companies — Start Your Project"

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/ src/components/ContactForm.tsx && git commit -m "feat: contact page with form, offices, pathfinder CTA"
```

---

### Task 10: 404 page and sitemap

**Files:**
- Create: `src/app/not-found.tsx`
- Create: `src/app/sitemap.ts`
- Create: `src/app/opengraph-image.tsx`

- [ ] **Step 1: Create custom 404 page**

"This page doesn't exist. But your next building could." Link back to homepage and contact. Brand styling.

- [ ] **Step 2: Create dynamic sitemap**

`app/sitemap.ts` — exports async function returning `MetadataRoute.Sitemap`. Static pages (/, /about, /services, /services/*, /projects, /contact, /blog) + all blog article URLs from `getAllArticles()`. Priority weights per spec.

- [ ] **Step 3: Create OG image template**

`app/opengraph-image.tsx` — uses `@vercel/og` ImageResponse. Purple gradient background, white text with page title, Primus logo. Default OG image for pages without specific images.

- [ ] **Step 4: Commit**

```bash
git add src/app/ && git commit -m "feat: 404 page, dynamic sitemap, OG image template"
```

---

## Chunk 4: Service Pages & Projects

### Task 11: Services overview and individual service pages

**Files:**
- Create: `src/app/services/page.tsx`
- Create: `src/app/services/[slug]/page.tsx`
- Create: `src/components/ServicePageTemplate.tsx`

- [ ] **Step 1: Create services overview page**

Grid of 5 service cards (from `data/services.ts`). Each: icon, name, tagline, description paragraph, "Learn More →" link. ScrollReveal stagger. Metadata + BreadcrumbList schema.

- [ ] **Step 2: Create `ServicePageTemplate.tsx`**

Reusable template component. Props: service data object. Renders:
1. Hero with service name H1, tagline, project photo background
2. "What You Get" — feature grid (icon + title + description per feature)
3. "Our Process" — numbered steps with descriptions
4. "Who It's For" — paragraph
5. Case Studies — 2-3 related case studies from `data/case-studies.ts` (matched by `relatedCaseStudySlugs`)
6. FAQ — accordion/expandable questions (with FAQPage schema)
7. CTA → /contact?ref=pathfinder

- [ ] **Step 3: Create `[slug]/page.tsx` with `generateStaticParams`**

Dynamic route. `generateStaticParams` returns 5 service slugs. `generateMetadata` returns service-specific title/description. Renders `ServicePageTemplate` with service data. Adds Service schema + BreadcrumbList + FAQPage schema.

- [ ] **Step 4: Commit**

```bash
git add src/app/services/ src/components/ServicePageTemplate.tsx && git commit -m "feat: services overview + 5 individual service pages"
```

---

### Task 12: Projects page

**Files:**
- Create: `src/app/projects/page.tsx`
- Create: `src/components/ProjectGrid.tsx`
- Create: `src/components/ProjectDetail.tsx`

- [ ] **Step 1: Create `ProjectGrid.tsx`**

Client component. Props: projects array, case studies array. Renders filterable grid. Filter tabs: All, Healthcare, Commercial, Historic (from project categories). Each card: `next/image` photo, project name, location, category badge. Click opens expanded detail (could be inline expand or modal). Hover: image zoom + overlay.

- [ ] **Step 2: Create `ProjectDetail.tsx`**

Expanded view for a project. If it has a matching case study, shows full narrative: description, results, client quote, photos. If no case study, shows photo + name + location + category only.

- [ ] **Step 3: Build Projects page**

Server Component. Hero: "Our Work" + subtitle. ProjectGrid with all projects + case studies data. ScrollReveal. Metadata + BreadcrumbList schema. CreativeWork schema for each case study project.

- [ ] **Step 4: Commit**

```bash
git add src/app/projects/ src/components/Project*.tsx && git commit -m "feat: projects page with filterable grid and case study details"
```

---

## Chunk 5: Blog

### Task 13: Blog index page

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/components/BlogIndex.tsx`
- Create: `src/components/ArticleCard.tsx`

- [ ] **Step 1: Create `ArticleCard.tsx`**

Props: article object. Renders: category badge (purple pill), title (H3 link), excerpt, date, reading time. Hover: lift + category badge slide-in. Wrapped in Link to `/blog/[slug]`.

- [ ] **Step 2: Create `BlogIndex.tsx`**

Client component (needs filter state). Props: articles array, categories array. Renders:
- Category filter tabs (horizontal scroll): All + 6 categories from CATEGORIES
- Search input (filters by title + excerpt, client-side)
- Grid of ArticleCards (filtered)
- Pagination (12 per page, client-side)

- [ ] **Step 3: Build Blog index page**

Server Component. Calls `getAllArticles()`. Hero: "Field Notes" + "Real talk about commercial construction. No fluff." BlogIndex with articles + categories. Metadata + BreadcrumbList schema.

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/ src/components/Blog*.tsx src/components/ArticleCard.tsx && git commit -m "feat: blog index with category filters, search, pagination"
```

---

### Task 14: Individual article pages

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`
- Create: `src/components/ArticlePage.tsx`
- Create: `src/components/AuthorBio.tsx`
- Create: `src/components/RelatedArticles.tsx`

- [ ] **Step 1: Create `AuthorBio.tsx`**

Jason Drewelow author bio box. Photo (from team/), name, title "Principal, Primus Companies", 2-sentence bio. Reusable for all articles (single author for now).

- [ ] **Step 2: Create `RelatedArticles.tsx`**

Props: articles array (3). Renders horizontal row of ArticleCards. "More from Field Notes" header.

- [ ] **Step 3: Create `ArticlePage.tsx`**

Props: article object, relatedArticles array. Renders:
- H1 title
- Meta row: category badge, date formatted, reading time, "By Jason Drewelow"
- Article body (rendered HTML via `dangerouslySetInnerHTML` — the HTML is pre-processed by remark/rehype)
- Article body styling: prose-like typography (max-width 720px, centered), proper heading sizes, list styles, blockquote styling
- In-article CTA after ~50% of content: "Ready to start your project?" box
- End CTA: full-width dark section with contact link
- AuthorBio box
- RelatedArticles

- [ ] **Step 4: Build `[slug]/page.tsx` with `generateStaticParams`**

`generateStaticParams` returns all article slugs from `getAllArticles()`. `generateMetadata` returns article-specific title, description, OG image. Page renders ArticlePage with article data + related articles.

Schema: BlogPosting + BreadcrumbList. If article has FAQ-like content, add FAQPage schema.

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/ src/components/Article*.tsx src/components/AuthorBio.tsx src/components/RelatedArticles.tsx && git commit -m "feat: individual article pages with author bio, related articles, schema"
```

---

## Chunk 6: Polish, Cleanup, Deploy

### Task 15: Delete old components, clean up

**Files:**
- Delete: `src/components/Stats.tsx` (replaced by CountUp in Hero)
- Delete: `src/components/Quote.tsx` (replaced by Testimonials)
- Delete: `src/components/Markets.tsx` (removed per spec — no vertical pages)
- Delete: `src/components/HowItWorks.tsx` (folded into service pages)
- Delete: `src/components/TechnologyEdge.tsx` (removed)
- Delete: `src/components/FAQ.tsx` (moved to service pages)
- Delete: `src/hooks/useReveal.ts` (replaced by ScrollReveal component)
- Delete: old `public/images/project1-5.jpg`, `hero.jpg` (replaced by real photos)

- [ ] **Step 1: Remove old component files**

```bash
cd ~/primus-site-update
rm src/components/Stats.tsx src/components/Quote.tsx src/components/Markets.tsx src/components/HowItWorks.tsx src/components/TechnologyEdge.tsx src/components/FAQ.tsx src/hooks/useReveal.ts
rm public/images/project1.jpg public/images/project2.jpg public/images/project3.jpg public/images/project4.jpg public/images/project5.jpg public/images/hero.jpg
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Fix any import errors or missing references.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove old components, replace stock photos with real project photography"
```

---

### Task 16: Build verification and deploy

- [ ] **Step 1: Run full build and verify**

```bash
cd ~/primus-site-update && npm run build
```

Expected: successful build with 65+ static blog pages, 5 service pages, homepage, about, contact, projects, 404.

- [ ] **Step 2: Test dev server locally**

```bash
npm run dev
```

Verify: homepage loads, navigation works, blog pages render, images display, animations fire, mobile responsive.

- [ ] **Step 3: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 4: Deploy to Vercel**

```bash
vercel --prod
```

Or if auto-deploy is configured, the push triggers it.

- [ ] **Step 5: Verify production deployment**

Check the live URL. Verify: all pages load, images optimized, schema validates (Google Rich Results Test), robots.txt accessible, sitemap.xml generates, llms.txt accessible.

---

## Task Dependency Map

```
Task 1 (Config) ──┬── Task 2 (UI Components) ──┐
                   │                              ├── Task 7 (Homepage)
Task 3 (Photos) ──┘                              │
                                                  ├── Task 8 (About)
Task 4 (Article Pipeline) ──┬── Task 5 (Data) ───┤
                             │                     ├── Task 9 (Contact)
Task 6 (Schema) ────────────┘                     │
                                                  ├── Task 10 (404/Sitemap)
                                                  │
                                                  ├── Task 11 (Services)
                                                  │
                                                  ├── Task 12 (Projects)
                                                  │
                                                  ├── Task 13 (Blog Index)
                                                  │
                                                  └── Task 14 (Article Pages)

Task 15 (Cleanup) ── Task 16 (Deploy)
```

**Parallelization opportunities:**
- Tasks 1, 3, 4 can run in parallel (config, photos, article pipeline)
- Tasks 2, 5, 6 can run in parallel after Task 1 (UI components, data, schema)
- Tasks 7-14 depend on Tasks 1-6 being complete, but pages 7-14 are independent of each other and can be built in parallel
- Tasks 15-16 run last, sequentially
