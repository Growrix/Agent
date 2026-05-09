# Page Brief — Home (`/`)

**Visual Signature:** `VD-HOME-A1`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `restrained-cinematic` (hero) → `calm-precise` (body)  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 8 (flagship)

---

## Page Definition

- **User intent:** Understand what Apex Roofing Co. does, confirm they serve my area, decide whether to trust them, and take the next step — a quote or a call.
- **Conversion outcome:** Phone call or quote form submission
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** `brand.phone` → tap-to-call
- **KPI:** Quote form conversions + phone click-through rate

---

## Outcomes (what must be true)

1. A first-time visitor can parse the business's value proposition in ≤ 5 seconds without scrolling on desktop.
2. The phone number and "Get Free Quote" CTA are visible in the first viewport on every device.
3. Trust credentials (licensed, insured, years, rating) are visible above or at the fold on mobile.
4. Proof of actual work (before/after photography) is accessible within 2 scrolls.
5. The services offered are understood without leaving the home page.
6. The visitor knows whether the contractor serves their area.
7. A second CTA repetition occurs at or after the page mid-point.
8. The emergency service path is discoverable from the home page.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Offer headline + subhead | `home.hero.headline_1`, `home.hero.headline_2`, `home.hero.subhead` | `locality_outcome_statement` |
| Primary + secondary CTA | `home.hero.cta_primary`, `home.hero.cta_secondary` | `multi_channel_conversion` |
| Trust credential badges | `trust.badge.*` | `trust_signal_cluster` |
| Review aggregate bar | `reviews.aggregate.*` | `customer_voice` |
| Business proof counters | `counters.*`, `brand.*` values | `trust_signal_cluster` |
| Services capability map | `services.*` card summaries (all 4) | `capability_map` |
| Before/after photo proof | hero before/after labels | `local_proof` |
| Customer testimonials (3–5) | Sanity CMS — `customer_voice` | `customer_voice` |
| Areas served preview | `home.areas.*` | `local_proof` |
| Engagement process overview | Process steps (3 steps) | `process_disclosure` |
| Pricing posture | "Free quote" + starts-at signals | `pricing_posture` |
| Emergency service highlight | `service.emergency-repair.*` | `urgency_evidence` |
| Blog content teaser (2–3 articles) | `home.blog.*` | — |
| Final CTA band | `home.cta_band.*` | `multi_channel_conversion` |
| Footer credibility | All `footer.*` | `footer_credibility` |

---

## Forbidden Patterns

- Hero composition identical to any service detail page
- Generic "smiling team" stock photography in hero
- Phone number hidden below the fold on mobile
- More than one active before/after slider on the same page
- Counter cluster appears without a dark surface background (contrast requirement)
- Trust chips on hero without `rgba(0,0,0,0.60)` dark pill background

---

## Visual Differentiation (vs. other routes)

- Home is the ONLY route using real aerial rooftop photography as a full-bleed hero background
- Home is the ONLY route using the before/after slider in the hero section (roof-replacement uses it but in the content body, not the hero)
- Home has the ONLY counter cluster strip immediately below the hero
- Home has the MOST section variety (8 distinct sections) — all other routes have fewer
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-HOME-A1`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `Surface` + `MediaFrame` + `Stack` + `Reveal` + `Frame` + `Grid` + `Cluster`

**Surface stack (in visual order):**
1. **Cinematic hero panel** — full-bleed `100vw × 100svh` min. `MediaFrame` (aerial rooftop photo, `object-position: center 30%` to keep sky visible). `Surface(overlay)` gradient `linear-gradient(180deg, rgba(15,25,35,0.15) 0%, rgba(15,25,35,0.70) 60%, rgba(15,25,35,0.92) 100%)`. Content anchored bottom-left. `BeforeAfterSlider` overlaps the bottom of the hero panel (partially below the fold on desktop, visible on scroll).
2. **Trust/counter strip** — `Surface(dark)` full-width. `CounterCluster` (4 counters). `ReviewAggregateBar` below counters.
3. **Services capability** — `Surface(light)`. `Grid(3-col desktop)` of `ServiceCard` components. Section eyebrow + heading above.
4. **Customer proof** — `Surface(light)` with `--color-inset` background. Testimonial cards in 3-col masonry on desktop, 1-col stacked on mobile.
5. **How it works** — `Surface(dark)`. 3-step process (numbered `Trail` variant). Asymmetric composition — steps left, real worksite photo right on desktop.
6. **Areas served** — `Surface(light)`. Area chip cluster + map teaser. `AreaCoverageChip` lookup.
7. **Blog teaser** — `Surface(light)`, `--color-inset` bg tint. 3 `BlogCard` components.
8. **Final CTA band** — `Surface(dark)` — `--color-primary`. Heading + subhead + quote CTA + phone CTA side-by-side.

**Rhythm pattern:** Strict alternation D→L→D→L→D→L→L→D. Never two dark sections adjacent (except hero → counter strip, which is intentional as a single "opening sequence").

**Asymmetry target:** At least 2 sections use a non-centered composition (60/40 or 40/60 Grid column split).

---

## Section Blueprint (E2E)

1. `home_hero`: Purpose: instant value and first conversion. Draft copy: "Your Roof. Our Responsibility." + localized subhead + quote/call CTAs. Layout: full-bleed media hero with bottom-left content.
2. `trust_counter_strip`: Purpose: quantitative credibility. Draft copy: projects, years, satisfaction, response stats + aggregate review line. Layout: dark full-width strip with 4 stat cards.
3. `services_overview`: Purpose: capability clarity. Draft copy: services heading/subhead and 4 service summaries. Layout: light grid cards.
4. `proof_testimonials`: Purpose: customer confidence. Draft copy: testimonial heading + selected review excerpts. Layout: masonry-style cards.
5. `process_walkthrough`: Purpose: remove uncertainty. Draft copy: 3-step process with short action verbs and helper lines. Layout: dark asymmetric split.
6. `areas_preview`: Purpose: service-area confirmation. Draft copy: area heading and lookup prompt. Layout: light section with chips/map teaser.
7. `blog_teaser`: Purpose: educational authority. Draft copy: blog heading and 3 teaser cards. Layout: light inset strip.
8. `final_cta`: Purpose: close conversion loop. Draft copy: "Ready to protect your home?" + quote and phone CTA. Layout: dark CTA band.

---

## Motion Temperament

**Temperament:** `restrained-cinematic` on hero, `calm-precise` on all body sections.

**Key moments:**
1. **Hero headline word-by-word reveal** (trigger: route mount): `home.hero.eyebrow` overline letter-spacing expand first, then `home.hero.headline_1` and `home.hero.headline_2` word groups stagger in, then subhead, then CTAs, then trust badges. See [motion-system.md](../motion-system.md) Macro-A.
2. **Counter count-up** (trigger: counter strip enters viewport): `CounterCluster` Macro-D.
3. **Section reveals** (trigger: each section enters viewport): Macro-B, 60ms stagger on grid children.
4. **BeforeAfterSlider pulse** (trigger: first render): Macro-E, handle breathe animation.

**Forbidden motion on this page:** No page-entry particle effects, no parallax scroll on sections (hero background parallax is allowed at max 0.3 depth), no looping animations.

**Reduced-motion fallbacks:**
- Hero headline: renders at final state immediately
- Counters: jump to final value
- Section reveals: instant opacity
- Slider pulse: disabled

---

## State Requirements

| State | Handling |
|-------|---------|
| Loading (page) | Skeleton on `CounterCluster`, skeleton on `ServiceCard` grid, skeleton on `TestimonialCard` |
| Error (Sanity fetch) | Cards show placeholder content from static fallback array (no empty sections) |
| Empty testimonials | `ReviewAggregateBar` shows rating only, no cards |
| Dark/light theme | All surfaces and text use CSS custom property tokens; no hardcoded values |
| Reduced motion | See motion section above |

---

## Responsive Intent

| Breakpoint | Intent |
|-----------|--------|
| Mobile (< 768px) | Hero: full-height, CTA buttons stacked vertically, before/after slider full-width. Counter strip: 2×2 grid. Service cards: 1-col stack. Testimonials: 1-col. All sections have reduced padding per token. |
| Tablet (768–1023px) | Hero: same height. Service cards: 2-col. Testimonials: 2-col. |
| Desktop (≥ 1024px) | Full 3–4 col grids, 60/40 asymmetric sections, full topbar visible. |

---

## SEO + Schema.org

- Title: `seo.home_title`
- Description: `seo.home_description`
- Schema.org: `LocalBusiness` + `RoofingContractor` JSON-LD on this page
  - Required fields: `name`, `url`, `telephone`, `address`, `areaServed`, `openingHours`, `priceRange`, `aggregateRating` (from `brand.google_rating` + `brand.google_review_count`), `hasCredential` (license)
- OG image: hero aerial photo (1200×630)
- Canonical: `/`

---

## Conversion Path

- **Primary:** Hero "Get Free Quote" CTA → `/quote`
- **Secondary:** Hero phone CTA → tap-to-call
- **Tertiary:** Service card "Learn More" → `/services/[slug]`
- **Exit-point recovery:** Final CTA band at page bottom re-captures scroll-through visitors

---

## Accessibility Plan

- Landmark structure: `<header>`, `<main>`, `<section aria-label="...">` per section, `<footer>`
- Skip link: "Skip to main content" (first focusable element)
- Single `<h1>` in hero (composed from `home.hero.headline_1` + `home.hero.headline_2`)
- Heading hierarchy: H1 → H2 (section headings) → H3 (card headings)
- Hero media: `aria-hidden="true"` on background image; text carries all meaning
- `BeforeAfterSlider`: full ARIA slider role (see component spec)
- `CounterCluster`: each counter has `aria-label`
- `TrustBadgeCluster`: `aria-label` on container + each badge
- All CTAs: descriptive `aria-label` when icon-only or ambiguous text
- `prefers-reduced-motion`: respected (see motion section)
- WCAG 2.1 AA: all text/bg pairs pass (see design-system.md contrast audit)
- Hero text contrast: minimum 8:1 against overlay background (AAA for large display text)

---

## Performance Plan

- LCP target: ≤ 2.5s
- Hero image: `next/image` with `priority={true}`, no `loading="lazy"`, explicit `sizes="100vw"`, WebP + AVIF formats from Sanity CDN
- Route JS budget: < 80KB client JS for initial page
- Client components: `BeforeAfterSlider`, `CounterCluster` (count-up), `StickyCallPill`, `ThemeSwitcher`, `MobileBottomNav` — all others are RSC
- Font: `next/font/google` with `display: 'swap'`, preloaded for `Space Grotesk 800` and `Inter 400/600`

---

## Data Fetching Plan

| Surface | Source | Cache strategy | Failure mode |
|---------|--------|---------------|-------------|
| Hero image | Sanity CDN | Static at build, revalidate 1hr | Fallback to static asset |
| Service cards | Sanity CMS | ISR, revalidate 1hr | Static fallback array of 4 service objects |
| Testimonials | Sanity CMS | ISR, revalidate 30min | 3 hardcoded fallback testimonials |
| Blog teasers | Sanity CMS | ISR, revalidate 15min | Empty section hidden (section not shown if 0 posts) |
| Counter values | `content.en.json` (static) | Build-time — no dynamic fetch | Always renders with static values |
| Review rating | `content.en.json` (static) + optional Google Places API | Build-time or env-var injected | Static fallback from `content.en.json` |

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `hero_cta_click` | Primary CTA button press in hero |
| `phone_click` | Any phone number click/tap (topbar, hero, sticky pill) |
| `service_card_click` | ServiceCard "Learn More" press + which service |
| `before_after_interact` | First time user drags BeforeAfterSlider |
| `counter_viewed` | CounterCluster enters viewport |
| `testimonial_viewed` | Testimonial section enters viewport |
| `final_cta_click` | Final CTA band button press |

---

## Quality Bar Scoring

| Dimension | Target |
|-----------|--------|
| `hero_composition` | 3/3 |
| `narrative_density` | 3/3 |
| `trust_signal_placement` | 3/3 |
| `motion_temperament` | 3/3 |
| `micro_detail_quality` | 3/3 |
| `content_punch` | 3/3 |
| **Total** | **18/18** |

---

## Open Questions

1. Hero aerial photography: client to supply (preferred: taken from drone over actual job site). Minimum 3000px wide.
2. Before/after photo pair: client to supply — real project, same address angle.
3. Exact areas list for "Serving Your Neighborhood" section.
4. 3–5 featured testimonials with customer name, area, and service type consent.

