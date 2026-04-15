# Primus Companies — Full Site Refresh Design Spec

## Overview

Complete rebuild of primus-companies.com. Fresh design, full site structure, 65+ blog articles deployed, real project photography from OneDrive, AI search optimization, and distinctive animations with character.

**Repo:** `~/primus-site-update/`
**Stack:** Next.js 14, Tailwind CSS, Framer Motion
**Deploy:** Vercel → primus-companies.com
**Content source:** `~/primus_project/content/` (articles, case studies, guides, quotes)
**Photo source:** OneDrive — `Shared Documents - Primus Library/Marketing/Professional Photos/`

---

## Site Map

```
/                                  → Homepage
/about                             → Company story, stats, team
/services                          → Services overview (5 cards → individual pages)
/services/preconstruction          → Preconstruction service page
/services/general-construction     → General Construction service page
/services/design-build             → Design-Build service page
/services/construction-management  → Construction Management service page
/services/development-advisory     → Development Advisory service page
/projects                          → Portfolio gallery + case studies
/blog                              → Blog index (65+ articles, filterable, paginated)
/blog/[slug]                       → Individual article pages
/contact                           → Contact form + office locations + Pathfinder CTA
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#ffffff` | Page backgrounds |
| `black` | `#111111` | Primary text, dark sections |
| `purple-700` | `#6B2FA0` | Primary brand — buttons, links, accents |
| `purple-600` | `#7B3DB0` | Hover states, lighter purple |
| `purple-500` | `#8B5FC7` | Subtle highlights |
| `gold` | `#D4A843` | Secondary accent — CTAs, highlights, premium badges |
| `gold-light` | `#E8C973` | Gold hover state |
| `gray-50` | `#f7f7f7` | Surface backgrounds, cards |
| `gray-100` | `#f0f0f0` | Alternate sections |
| `gray-200` | `#e5e5e5` | Borders |
| `gray-400` | `#999999` | Secondary text |
| `gray-600` | `#666666` | Body text (on white) |
| `gray-800` | `#333333` | Headings on white |

### Typography

- **Headings:** Inter (weight 700-800), tight letter-spacing (-0.02em on hero, -0.01em on H2)
- **Body:** Inter (weight 400-500), 16px base, 1.6 line-height
- **Mono/stats:** Geist Mono for numbers, stats, data points
- **Load via `next/font/google`** with `display: 'swap'`

### Layout

- Max-width: 1200px, centered
- Generous whitespace (80px+ between sections)
- 12-column grid for complex layouts
- Mobile-first, responsive breakpoints at 640/768/1024/1280

### Animation Philosophy

**Character without gimmicks.** Subtle but distinctive. No particles, no matrix rain, no parallax hero. Instead:

1. **Scroll-triggered reveals** — Elements fade up + slight scale (0.97→1.0) as they enter viewport. Staggered for lists/grids (50ms delay between items).
2. **Number counters** — Stats animate from 0 to final value on scroll, using `useInView` + `useSpring`. Geist Mono font for numbers.
3. **Smooth hover states** — Cards lift slightly (translateY -4px) + subtle shadow expansion. Buttons have smooth color transitions.
4. **Hero text reveal** — Words appear sequentially with a smooth clip-path or opacity animation. Not the heavy blur/skew of the current site — cleaner.
5. **Photo reveal** — Project images clip-reveal from left to right as they scroll into view.
6. **Section transitions** — Subtle gradient line or thin gold rule between major sections.
7. **Magnetic cursor on CTAs** — Buttons subtly follow the cursor when hovering within proximity. Adds life without being distracting.
8. **Smooth page transitions** — Crossfade between pages using Framer Motion `AnimatePresence`.
9. **Testimonial rotation** — Auto-advancing carousel with smooth slide transition, pausable on hover.
10. **Blog card hover** — Image zooms slightly (scale 1.05), category badge slides into view.

All animations respect `prefers-reduced-motion`.

---

## Page Designs

### Homepage

**Sections in order:**

1. **Navigation (sticky)**
   - Logo (from OneDrive Logos folder — use PNG white version on scroll-dark, standard on scroll-light)
   - Links: About, Services, Projects, Blog, Contact
   - CTA button: "Start a Conversation" (gold background, black text)
   - Mobile: hamburger → full-screen overlay menu

2. **Hero**
   - Full-width, white background
   - Bold headline (example: "We've built 500+ projects. Yours is next.")
   - Subheadline (1-2 sentences — the direct, no-BS voice)
   - Two CTAs: "Start a Conversation" (gold) + "See Our Work" (outlined)
   - Stats bar below: 500+ Projects / 24 Years / $770M Delivered / 5 Offices
   - Stats use Geist Mono, count-up animation on scroll
   - Optional: subtle background — very light grid pattern or single hero photo with low opacity

3. **Problem/Solution**
   - Keep the 5 existing problem/solution pairs (already written and strong)
   - Layout: split-screen — problems on left (dark card), solutions on right (white card with purple accent)
   - Each pair reveals on scroll with stagger

4. **Services Strip**
   - 5 service cards in a row (wraps on mobile)
   - Each card: icon + name + one-line description + arrow link
   - Hover: card lifts, purple border appears
   - Links to individual service pages

5. **Featured Projects**
   - 4-6 projects in a masonry or grid layout
   - Real photos from OneDrive Professional Photos
   - Hover: overlay with project name + type + location
   - Click → /projects page or specific case study
   - "View All Projects →" link

6. **Testimonials**
   - 3-card carousel or grid
   - Large quote text, client name + practice + location
   - Gold quote marks
   - Auto-rotate with pause on hover
   - Use the strongest quotes: Skjei ($4M), Gleason (50-60%), Titus (3x), Huber ("building does the marketing")

7. **Blog Preview**
   - "Field Notes" section header
   - 3 latest articles in card format
   - Card: thumbnail (from article or category default), category badge, title, excerpt, reading time
   - "Read More →" link per card
   - "View All Articles →" link

8. **Bottom CTA**
   - Dark background (#111) section
   - Bold headline: "Not sure where to start? That's exactly what we're here for."
   - Subtext about the Pathfinder process
   - Gold CTA button
   - Contact info

9. **Footer**
   - 4-column: Company (About, Team, Careers), Services (5 links), Resources (Blog, Guides), Contact
   - Office locations listed
   - Social links
   - Copyright + legal

### About Page

- Company story — 24 years, founding, growth
- Stats section (animated counters)
- Core values (from OneDrive "02 Core Values.pdf")
- Team section — use employee headshots from OneDrive (Jason Drewelow, Andy Headding, Katie Nichols-Lotfi, Chris Wand + others)
- Office locations with addresses
- "Why Primus" section (from "04 Why Primus.pdf")

### Service Pages (template)

Each of the 5 service pages follows this template:

1. **Hero** — Service name as H1, one-line description, relevant project photo background
2. **What You Get** — 4-6 deliverables/features in icon+text grid
3. **Our Process** — 3-5 numbered steps with descriptions
4. **Who It's For** — Brief description of ideal clients for this service
5. **Case Studies** — 2-3 relevant case studies with photos and results
6. **FAQ** — 4-6 questions specific to this service (good for AI citability + schema)
7. **CTA** — "Ready to get started?" with contact form or Pathfinder link

**Service-specific content:**

- **Preconstruction:** Budgeting, feasibility studies, site evaluation, constructability review, value engineering. "The biggest cost decisions happen before construction starts."
- **General Construction:** Ground-up + renovation, fixed pricing, single point of contact, schedule accountability. The core offering.
- **Design-Build:** In-house architecture + construction under one contract. Faster timelines, fewer coordination issues. The "came with everything" testimonial.
- **Construction Management:** Owner's representation, third-party oversight, schedule + budget accountability. Newbury Franklin-type work. Placeholder content for now — will be expanded later.
- **Development Advisory:** Site selection, financing consultation, investor structure, feasibility. For clients who need help before they even have a project.

### Projects Page

- Filterable grid of completed projects
- Filter by type (no vertical-specific pages, but filterable by: Commercial, Healthcare, Industrial, Residential, Historic, Mixed-Use)
- Each card: large photo, project name, location, project type
- Click → expanded detail with case study narrative (from the 9 case studies)
- Photos sourced from OneDrive Professional Photos (curate best 1-2 shots per project)
- Include both the case-study clients AND non-case-study projects from OneDrive (Crystal Group, Raining Rose, White Elephant, credit unions, etc.)

### Blog

#### Blog Index (`/blog`)

- Hero: "Field Notes" + subtitle
- Category filter tabs (horizontal scrollable): All, Planning, Design, Construction, Finance, Risk, Growth
- Article cards: thumbnail, category badge, title, excerpt (120 chars), date, reading time
- 12 articles per page, paginated
- Search functionality (client-side filter)

#### Article Pages (`/blog/[slug]`)

- H1 title
- Meta row: Category badge, date, reading time, author
- Hero image (category-default or article-specific)
- Article body (rendered from markdown)
- Proper heading hierarchy (H2/H3)
- In-article CTAs (mid-article + end)
- FAQ section if applicable (with FAQPage schema)
- Key Takeaways section at bottom
- Author bio box (Jason Drewelow)
- Related articles (3, matched by category)
- Schema: BlogPosting + BreadcrumbList + FAQPage

#### Article Categories (mapping 65 articles)

| Category | Slug | Example Articles |
|----------|------|------------------|
| Planning & Process | `planning` | what_the_process_looks_like, when_to_start_the_conversation, first_time_builder |
| Design & Operations | `design` | design_for_operations, design_for_technology, interior_design_is_not_decoration |
| Finance & ROI | `finance` | 100_percent_financing, financing_dental_build, roi_of_building_new, realistic_budget |
| Risk & Pitfalls | `risk` | horror_contractor_disappeared, change_order_trap, scope_creep, geotech_surprise |
| Construction | `construction` | fixed_pricing_matters, vetting_contractor, managing_up_your_contractor |
| Growth & Strategy | `growth` | multi_location_expansion, scaling_second_location, building_as_exit_strategy |

#### Article Data Pipeline

1. At build time, read all `.md` files from `~/primus_project/content/articles/`
2. Extract or generate frontmatter: title, description, category, slug, date
3. If no frontmatter exists, derive from filename + first paragraph
4. Convert markdown → HTML with proper heading IDs for anchor links
5. Calculate reading time (words / 238)
6. Generate static pages via `generateStaticParams`

### Contact Page

- Two-column layout: form on left, info on right
- Contact form: Name, Email, Phone, Company, Project Type (dropdown), Message, Budget Range (optional)
- Right side: office locations (5), phone, email
- Map embed showing all 5 offices
- Pathfinder CTA section below form
- Schema: ContactPage

---

## Photo Strategy

### Source

All project photos from OneDrive:
```
/Users/macmini/Library/CloudStorage/OneDrive-PrimusCompanies/
  Shared Documents - Primus Library/Marketing/Professional Photos/
```

### Curation Plan

During implementation, copy curated photos to `public/images/`:

```
public/images/
├── hero/           (1-2 hero-quality shots)
├── projects/       (2-3 best shots per project, optimized)
│   ├── gleason-dental/
│   ├── lake-dental/
│   ├── titus-dentistry/
│   ├── ducharme-dermatology/
│   ├── crystal-group/
│   ├── raining-rose/
│   ├── white-elephant/
│   └── ...
├── team/           (headshots from Employee Photos/)
├── office/         (Primus office shots)
└── logos/          (logo files from Logos/)
```

- Use `next/image` for all photos — automatic WebP/AVIF conversion
- Hero images: `priority` flag, explicit width/height
- Gallery images: lazy loaded, blur placeholder
- Target: 20-30 curated project folders, 2-3 shots each

### Logo

Source high-res PNG from OneDrive Logos folder:
- `Primus Companies Logo PNG.png` (standard)
- `Primus Companies Logo PNG- White.png` (for dark backgrounds)
- `Primus Icon.png` (favicon / small contexts)

---

## AI Search Optimization (GEO)

### Schema.org Structured Data

Implement on every page via `<script type="application/ld+json">`:

1. **Organization** (global, in layout) — `GeneralContractor` type with 5 office locations as departments
2. **LocalBusiness** (per office) — on contact page and future location pages
3. **Service** (per service page) — linked to Organization
4. **BlogPosting** (per article) — with author, dates, wordCount, articleSection
5. **FAQPage** (service pages + articles with FAQ sections)
6. **BreadcrumbList** (every page)
7. **CreativeWork** (project case studies)

Utility: `lib/schema.ts` generates all schema types with consistent `@id` cross-references.

### robots.txt

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://primus-companies.com/sitemap.xml
```

### llms.txt

Create `/public/llms.txt` — plain-text site summary for AI models:
- Company description, services, markets served, service areas
- Links to all major pages
- Blog summary with article count and topics covered

### sitemap.xml

Dynamic sitemap via `app/sitemap.ts`:
- All static pages with priority weights
- All blog articles with lastModified dates
- All service pages

### Content Structure for AI Citability

Every page follows:
- H1 with primary keyword
- Lead paragraph (2-3 sentences, directly answers the page topic — #1 citation target)
- H2/H3 hierarchy with definitive first sentences
- Stats in dedicated, parseable paragraphs
- FAQ section with direct-answer-first pattern
- Key Takeaways bulleted summary

### Meta Tags

- Unique title + description per page
- Open Graph images (auto-generated or curated)
- Canonical URLs
- `max-image-preview: large`, `max-snippet: -1` for Google

### Core Web Vitals

- `next/image` everywhere — automatic AVIF/WebP, proper sizing
- `next/font` for font loading (no FOIT)
- Dynamic imports for heavy components (contact map, project gallery lightbox)
- Server Components by default, `'use client'` only where needed
- Preconnect to external origins
- Third-party scripts deferred via `next/script`

---

## Content Pipeline

### Articles (65+)

1. Read all `.md` files from `~/primus_project/content/articles/`
2. Parse/generate frontmatter (title, description, category, slug)
3. Store as data files in repo (e.g., `content/articles/`) or read at build time from original location
4. Each article rendered as static page via ISR or SSG

### Case Studies (9)

1. Read from `~/primus_project/content/case_studies.md`
2. Split into individual case study data objects
3. Used on: Projects page, service pages (related case studies), homepage (featured)

### Testimonials

1. Read from `~/primus_project/content/testimonial_quote_library.md`
2. Parse into structured quote objects: quote, author, title, company, category
3. Used on: Homepage carousel, service pages, about page

### Guides (10+)

1. Available as downloadable resources linked from blog/articles
2. Not full pages — gated or linked as PDF/content upgrades

---

## Technical Requirements

- Next.js 14 (App Router)
- Tailwind CSS v3 (keep current version — v4 migration out of scope)
- Framer Motion for animations
- `next/image` for all images
- `next/font` for typography
- Static generation (SSG) for all pages — no dynamic server rendering needed
- Vercel deployment with primus-companies.com domain
- `generateStaticParams` for blog articles
- `generateMetadata` for per-page SEO
- Responsive: mobile-first, tested at 375/768/1024/1440

---

## Brand Voice (Reference)

Direct from prior sessions — do not deviate:

- **Direct. No-bullshit.** Knowledgeable without arrogance.
- "We'll tell you what's actually possible" — not what you want to hear
- Anti-slick, anti-salesy
- Confident expert, trusted advisor
- Real talk from someone who's done hundreds of these
- No filler. No corporate-speak. No fluff.
- Specific numbers over generics ("3x new patient flow" not "significant growth")
- Stories of things going WRONG, then how Primus solves it

---

## Migration Notes

This is a **full design system replacement**, not an incremental update:

- **Typography:** Replaces existing Playfair Display / DM Sans stack with Inter + Geist Mono. Remove the Google Fonts `@import` from `globals.css`. Use `next/font/google` instead. Remove deprecated `@next/font` package from `package.json`.
- **Colors:** Replaces the warm cream palette (`#F6F3EE`, `#EFECE6`, etc.) with white/black/purple/gold. Gut the existing `tailwind.config.ts` color tokens and `globals.css` custom properties.
- **Animations:** Remove all existing animation keyframes (heroWordReveal, float, marquee, etc.) and the grain texture overlay. Replace with Framer Motion-based scroll reveals. Wrap all animations in `useReducedMotion()` from Framer Motion — when true, set `transition: { duration: 0 }`.
- **Images:** Remove `images: { unoptimized: true }` from `next.config.mjs` — this must be off for `next/image` optimization to work.
- **Layout:** Existing single-page component structure (`page.tsx` importing 13 components) will be replaced with multi-page App Router structure.

## Article Processing Pipeline

Articles at `~/primus_project/content/articles/` have **no frontmatter** — they start with raw markdown. Processing rules:

1. **Slug:** Strip `article_` prefix from filename, replace underscores with hyphens. Example: `article_first_time_builder.md` → `first-time-builder`
2. **Title:** Extract from first H1 (`# ...`) in the markdown content
3. **Description:** First paragraph after the title (truncated to 160 chars)
4. **Date:** Use file modification time as initial date, can be overridden later
5. **Category:** Assigned via lookup table in `lib/article-categories.ts`:

| Category | Slug | Articles (by filename pattern) |
|----------|------|-------------------------------|
| Planning & Process | `planning` | process, first_time, when_to_start, what_the_process, questions_to_ask, single_point, managing_up, managing_project |
| Design & Operations | `design` | design_for_*, interior_design, operatory, architect_builder, in_house, building_for_the_next, what_patients_notice, handoff |
| Finance & ROI | `finance` | financing, 100_percent, roi_*, realistic_budget, fixed_pricing, what_fixed_pricing, expense_vs, psychology_of_sticker, lease_vs, cheapest_bid |
| Risk & Pitfalls | `risk` | horror_*, change_order, scope_creep, geotech, wrong_contractor, sunk_cost, renovation_that_never, what_happens_when_you_rush, insurance, permit |
| Construction | `construction` | vetting, what_a_good_contractor, contractor_*, equipment, ground_up, site_selection, light_industrial, vet_clinic, daycare, medical, multifamily |
| Growth & Strategy | `growth` | multi_location, scaling, building_as_exit, building_attracts, competition, referrals, staff_retention*, grand_opening, when_not_to_build, why_operators, practice_acquisition, build_or_buy, real_cost, moving_vs |

6. **Dependencies:** `gray-matter` (frontmatter parsing, for future use), `remark` + `rehype` + `remark-gfm` + `rehype-slug` + `rehype-stringify` for markdown → HTML with heading IDs

## Project Filter Category Mapping

OneDrive folder → display category:

| OneDrive Folder | Display Category |
|-----------------|-----------------|
| Dental | Healthcare |
| Veterinary | Healthcare |
| Medical | Healthcare |
| Optometry | Healthcare |
| Dermatology | Healthcare |
| Commercial | Commercial |
| Historic Preservation | Historic |
| Credit Unions | Commercial |
| Miscellaneous | Commercial |

Additional categories (Mixed-Use, Industrial, Residential) exist in the Marketing Pieces/Project Profiles but not in Professional Photos. Use photos from those project profiles if available, otherwise use category-default placeholder.

## Pathfinder

"Pathfinder" is Primus's free initial consultation / project assessment process. On the website, all Pathfinder CTAs link to the **Contact page** with `?ref=pathfinder` query param. The contact form detects this param and pre-selects "Project Pathfinder" in the Project Type dropdown. This is NOT a separate page or tool.

## Contact Form Backend

Form submissions handled via **Resend** (email API):
- Server Action sends form data as formatted email to `connect@primus-companies.com`
- Confirmation email sent to submitter
- Fallback: if Resend not configured, form data logged to console with a "coming soon" toast
- Dependencies: `resend` package

## Additional Details

- **Guides:** Remain as markdown files. Not rendered as pages. Linked as downloadable content from relevant blog articles. PDF conversion deferred.
- **Map embed:** Use Google Maps embed (iframe) — no API key needed for basic embeds. Static map image as fallback.
- **Blog search:** Client-side text filter on title + excerpt. Not full-text search across bodies.
- **404 page:** Custom 404 with brand voice: "This page doesn't exist. But your next building could."
- **OG images:** Auto-generated via `@vercel/og` — template with purple gradient background, white text title, Primus logo. One template, dynamic per page.

---

## Out of Scope (for now)

- Construction Management deep-dive (placeholder only — Jason will expand later)
- Individual market/vertical pages
- Careers page
- Client portal
- E-commerce / online booking
- CMS integration (content lives as files for now)
