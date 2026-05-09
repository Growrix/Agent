# Page Brief — Reviews (`/reviews`)

**Visual Signature:** `VD-REV-H8`  
**Creative Latitude:** MEDIUM  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 5

---

## Page Definition

- **User intent:** Read authentic customer feedback before deciding to hire.
- **Conversion outcome:** Trust established → quote or call
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** Phone call
- **KPI:** Exit rate from this page (lower = trust established)

---

## Outcomes

1. Visitor sees the aggregate rating and review count immediately.
2. Testimonials feel authentic — real names, real areas, real service types.
3. Visitor can filter or browse by service type.
4. There is no "we say we're good" copy — the page is the customer's voice.
5. A natural conversion path follows the trust.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Page eyebrow + editorial heading | `reviews.hero.*` | `customer_voice` |
| Aggregate rating display | `reviews.aggregate.*` | `customer_voice` |
| Star rating + review count | `brand.google_rating`, `brand.google_review_count` | `trust_signal_cluster` |
| Review filter tabs (service type) | Filter labels from service names | `capability_map` |
| Testimonial masonry grid (all reviews) | Sanity CMS | `customer_voice` |
| Platform badges (Google, etc.) | Platform logos + links | `trust_signal_cluster` |
| Quote CTA at page bottom | `cta.*` | `multi_channel_conversion` |

---

## Forbidden Patterns

- Traditional hero section with background media (page starts immediately with editorial eyebrow + aggregate rating)
- Testimonials in a uniform 3-col equal-height card grid — must use masonry layout
- Company-authored copy mixed in with customer testimonials
- Review count or rating without verifiable source link (e.g., link to Google Maps listing)

---

## Visual Differentiation

- ONLY page on the site that starts without a traditional hero — the aggregate rating and masonry wall begin immediately below the nav
- Masonry 3-col layout (desktop) is unique to this page — all other pages use uniform grid or stack
- Light surface throughout — no dark sections except the final CTA band
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-REV-H8`

---

## Composition Guidance (MEDIUM)

**Recommended outline:**

1. **Editorial eyebrow header:** Light `Surface`. Overline ("What Our Customers Say") + H1 (`reviews.hero.heading`) + `ReviewAggregateBar` (stars, count, platform links). No background media.
2. **Filter tabs:** `Cluster` of tab buttons for filtering by service type (All / Installation / Repair / Replacement / Emergency). Sticky below nav on desktop during scroll.
3. **Masonry testimonial wall:** Masonry `Grid(3-col desktop, 2-col tablet, 1-col mobile)`. Each `TestimonialCard`: customer name, area, service type badge, star rating, review text, date. Cards have varying heights based on content.
4. **Load more / pagination:** "Show more reviews" button (not infinite scroll — accessibility).
5. **CTA band:** Dark `Surface`. "Ready to experience the same quality?" → quote CTA + phone.

---

## Section Blueprint (E2E)

1. `reviews_intro`: Purpose: establish credibility instantly. Draft copy: review heading + aggregate rating/count. Layout: editorial header, no hero media.
2. `review_filters`: Purpose: relevant proof by service type. Draft copy: All / Installation / Repair / Replacement / Emergency tabs. Layout: horizontal cluster.
3. `masonry_reviews`: Purpose: authentic voice at scale. Draft copy: testimonial body, customer name, area, service badge, rating. Layout: 3-col masonry desktop, 1-col mobile.
4. `platform_proof`: Purpose: source transparency. Draft copy: Google/source badge and link labels. Layout: compact inline row.
5. `conversion_band`: Purpose: convert trust into action. Draft copy: quote CTA + call CTA line. Layout: dark bottom strip.

---

## Motion

- Individual testimonial cards: stagger `Reveal` 30ms per card, `opacity 0→1` only (no translate — respects masonry layout).
- Filter tabs: `--motion-duration-fast` color transition on select.
- Load more: new cards fade in after append.
- Reduced-motion: instant.

---

## State Requirements

| State | Handling |
|-------|---------|
| Reviews loading | Skeleton masonry cards |
| 0 reviews | "Be our first reviewer!" message + Google link |
| Filter returns 0 | "No reviews for this service yet" inline message |
| Sanity error | Hardcoded 6 fallback testimonials |

---

## Responsive Intent

- Mobile: 1-col stack. Filter tabs scroll horizontally. Aggregate stats stacked.
- Tablet: 2-col masonry.
- Desktop: 3-col masonry.

---

## SEO

- Title: `seo.reviews_title`
- Description: `seo.reviews_description`
- Schema.org: `Review` + `AggregateRating` on `LocalBusiness`
- Canonical: `/reviews`

---

## Conversion Path

- After reading reviews → bottom CTA band → `/quote`
- Header phone CTA always visible

---

## Accessibility

- H1: `reviews.hero.heading`
- Filter tabs: `role="tablist"` + `role="tab"` with `aria-selected`
- Each testimonial: `<article>` with `aria-label` ("Review by [name]")
- Star ratings: text equivalent (`aria-label="4.9 out of 5 stars"`)
- Load more button: `aria-live="polite"` announces new count

---

## Performance

- Testimonials: ISR, revalidate 30min. First 9 SSR, rest loaded client-side on "Show more".
- LCP: text heading — ≤ 1.5s
- No images in testimonial cards (no avatar photos — text-only for authenticity and privacy)

---

## Analytics

| Event | Trigger |
|-------|---------|
| `review_filter_click` | Filter tab selected |
| `load_more_reviews` | "Show more" clicked |
| `reviews_cta_click` | Bottom quote CTA |
| `platform_link_click` | Google / platform badge clicked |

