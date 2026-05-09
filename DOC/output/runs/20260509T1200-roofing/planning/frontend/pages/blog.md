# Page Brief — Blog (`/blog`)

**Visual Signature:** `VD-BLOG-M13`  
**Creative Latitude:** MEDIUM  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 4

---

## Page Definition

- **User intent:** Browse educational roofing content for homeowners.
- **Conversion outcome:** Article engagement → brand trust → eventual quote
- **Primary CTA:** Article click-through
- **Secondary CTA:** Newsletter subscribe (if in scope)
- **KPI:** Article CTR, pages-per-session from blog

---

## Outcomes

1. Visitor immediately sees the most valuable/recent content without scrolling.
2. Category filtering lets visitors self-sort to their area of interest.
3. The editorial character of the page is distinct from the service pages.
4. Mobile reading experience is excellent — large text, clear images.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Editorial header (no media hero) | `blog.hero.*` | — |
| Category filter tabs | `blog.categories.*` | `capability_map` |
| Featured post (1, large format) | Sanity CMS — latest or editorially pinned | `local_proof` |
| Post card grid | Sanity CMS — paginated | — |
| Newsletter CTA (optional) | `blog.newsletter.*` | `multi_channel_conversion` |
| Bottom CTA | `cta.*` | `multi_channel_conversion` |

---

## Forbidden Patterns

- Traditional hero with background media (editorial leads without one)
- All cards same visual weight — featured post must be visually larger
- Blog used as a services-page clone (no service selling in the editorial area)

---

## Visual Differentiation

- Page starts with large category tags as visual lead (no background image), distinct from all other routes
- Featured post at the top is large-format with dark overlay on post image — distinct from service cards
- Light throughout except featured post card and bottom CTA
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-BLOG-M13`

---

## Composition Guidance (MEDIUM)

**Recommended outline:**

1. **Editorial header:** Light `Surface`. Large eyebrow category tag cluster (visual lead). H1 + subhead.
2. **Filter tabs:** `Cluster` of category tabs.
3. **Featured post:** Large `MediaFrame` card with dark overlay — post title, category tag, excerpt, read time, "Read Article" CTA. Full-width or 70% width.
4. **Post grid:** `Grid(3-col desktop, 2-col tablet, 1-col mobile)` of `BlogCard` components.
5. **Load more / pagination:** "Load More" button.
6. **Bottom CTA:** Dark `Surface`. "Want roofing help now? Get a free quote."

---

## Motion

- Featured post: `Reveal` on mount, `opacity 0→1` + `translateY 12px→0`, `--motion-duration-normal`.
- Post grid cards: stagger `Reveal` 30ms per card.
- Reduced-motion: instant.

---

## State Requirements

| State | Handling |
|-------|---------|
| Loading | Skeleton cards |
| 0 posts | "No articles yet — check back soon" |
| Filter returns 0 | "No articles in this category" |

---

## SEO

- Title: `seo.blog_title`
- Description: `seo.blog_description`
- Schema.org: `Blog` JSON-LD
- Canonical: `/blog`
- Individual posts: `/blog/[slug]` — out of scope for this planning iteration

---

## Accessibility

- Category filters: `role="tablist"` + `role="tab"`
- Post cards: `<article>` with descriptive `aria-label`
- Images: meaningful `alt` text

---

## Performance

- ISR, revalidate 15min
- Post images: lazy, WebP, `next/image`
- LCP: featured post image with `priority={true}`

---

## Analytics

| Event | Trigger |
|-------|---------|
| `blog_post_click` | Any post card clicked + which post |
| `blog_category_filter` | Category tab selected |
| `blog_load_more` | Load more button clicked |
