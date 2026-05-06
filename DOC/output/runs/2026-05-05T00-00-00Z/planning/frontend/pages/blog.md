---
document_type: page-spec
page_id: blog
route: /blog
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
  - interaction-matrix.md
content_keys_used:
  - global.nav.home
  - global.nav.services
  - global.nav.areas
  - global.nav.reviews
  - global.nav.about
  - global.nav.contact
  - global.cta.call_now
  - global.cta.get_quote
  - global.header.hours_label
  - blog.hero.eyebrow
  - blog.hero.headline
  - blog.hero.subheadline
  - blog.list.heading
  - blog.list.body
  - blog.post.read_more
  - blog.post.read_less
  - blog.empty.heading
  - blog.empty.body
  - blog.cta.heading
  - blog.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.blog.meta_title
  - seo.blog.meta_description
  - seo.blog.og_title
  - seo.blog.og_description
---

# Blog (`/blog`)

## 1. Page Definition
- Purpose: Publish homeowner-friendly plumbing tips to drive SEO traffic.
- Target user intent: “Can I understand the issue and decide whether to call?”
- Primary CTA: `global.cta.call_now` → `tel:`.
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `cta_call_click` from informational traffic.
- Min sections exempt?: false.

## 2. Sections in Visual Order

### 1. Global Header
- **Purpose:** Keep phone + hours + navigation visible.
- **Content keys:**
  - global.nav.*
  - global.cta.call_now
  - global.header.hours_label
- **Components:** Header
- **Data source:** `cms.siteSettings`
- **Interactions:** drawer open/close; nav clicks; click-to-call
- **States:** default, scrolled, mobile-open
- **Responsive:** utility strip at `md+`; drawer on mobile
- **Motion:** drawer open/close; reduced-motion instant
- **Accessibility:** nav landmark + skip link

### 2. Blog Hero
- **Purpose:** Explain what the blog is and encourage safe decision-making.
- **Content keys:**
  - blog.hero.eyebrow
  - blog.hero.headline
  - blog.hero.subheadline
  - global.cta.call_now
- **Components:** HeroSection, Button
- **Data source:** static
- **Interactions:** click Call Now
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present

### 3. Blog List
- **Purpose:** Show latest posts without introducing new routes.
- **Content keys:**
  - blog.list.heading
  - blog.list.body
  - blog.post.read_more
  - blog.post.read_less
  - blog.empty.*
- **Components:** GridSection, Card, AccordionItem, Divider
- **Data source:** `cms.groq.posts.list` (title, excerpt, publishedAt, body)
- **Interactions:**
  - Expand/collapse each post inline (no navigation to a detail page).
- **States:** loading, empty, default, error
- **Responsive:** 3/2/1 columns; expanded content stacks within the card.
- **Motion:** accordion reveal for expand; reduced-motion instant
- **Accessibility:**
  - Expand control uses `aria-expanded` and a descriptive label.

### 4. Safety & When to Call
- **Purpose:** Add guardrails (avoid risky DIY) and route to calling.
- **Content keys:**
  - blog.cta.heading
  - blog.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels

### 5. Pre-Footer CTA Band
- **Purpose:** Provide a final call-first conversion path.
- **Content keys:**
  - blog.cta.heading
  - blog.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels

### 6. Global Footer
- **Purpose:** Dense trust + deep links.
- **Content keys:**
  - global.footer.*
  - trust.*
- **Components:** Footer
- **Data source:** `cms.siteSettings` + `cms.groq.services.top` + `cms.groq.areas.top`
- **Interactions:** navigate; click-to-call
- **States:** default
- **Responsive:** columns→stack
- **Motion:** none
- **Accessibility:** footer landmark

### 7. Sticky Mobile ActionBar
- **Purpose:** Keep Call Now reachable.
- **Content keys:**
  - component.action_bar.aria_label
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** ActionBar
- **Data source:** `cms.siteSettings.phone` + static labels
- **Interactions:** tap Call Now / Get Quote
- **States:** default, with-secondary-actions-open
- **Responsive:** mobile only
- **Motion:** reduced-motion instant
- **Accessibility:** labeled region

## 3. Page-Level State Requirements
- Loading: show card skeletons.
- Error: show AlertMessage and promote Call Now.
- Empty: show `blog.empty.*` and promote Call Now.

## 4. Responsive Adaptation Summary
- Mobile: list as single column with expand.
- Desktop: grid with consistent card heights until expanded.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.blog.meta_title
  description:  seo.blog.meta_description
  og_title:     seo.blog.og_title
  og_description: seo.blog.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/blog"
  schema_org:
    "@context": "https://schema.org"
    "@type": "WebPage"
    properties:
      name: seo.blog.meta_title
      url: "/blog"
```

## 6. Conversion Path
- primary_path: Blog hero → Call Now
- secondary_path: Post expand → Call Now
- exit_points: /services, /quote

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: blog.hero.headline
    - h2: blog.list.heading
  notable_aria:
    - "Post expand uses aria-expanded"
  motion_prefers_reduced:
    - "Instant accordion"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: none
    format: avif
    weight_kb_target: 0
    priority: false
  route_js_budget_kb_gz: 95
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - AccordionItem: post expand
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Posts list:
  - Fetch location: server
  - Cache strategy: `revalidate: 86400` + webhook revalidation
  - Failure mode: error state + CTAs

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "blog" }
- Events:
  - `blog_post_expand` { id: "<id>" }
  - `cta_call_click` { source: "header" | "hero" | "action_bar" | "cta_band" }

## 12. Open Questions
- Confirm if blog posts should be curated/featured (ordering) or strictly newest first.

## 13. Asset Brief
- Required photo slots: none.
- Optional: per-post thumbnail image in CMS.
