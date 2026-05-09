# Page Brief — Roof Replacement (`/services/roof-replacement`)

**Visual Signature:** `VD-REPL-E5`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `restrained-cinematic`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 6

---

## Page Definition

- **User intent:** Determine if they need a full replacement, understand the process and investment, and be inspired by results.
- **Conversion outcome:** Quote form submission — this is the highest-ticket service.
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** Phone call
- **KPI:** Quote submission from this page (highest conversion value)

---

## Outcomes

1. Visitor is persuaded by transformation evidence — before/after imagery is the primary persuasion vehicle.
2. Visitor understands the full replacement process including what to expect on day of work.
3. Visitor sees material/product options and how they affect durability and aesthetics.
4. A price positioning signal is present (investment ranges or financing language).
5. At least 3 completed replacement testimonials are shown.
6. Visitor understands warranty coverage on replacement work.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Hero transformation statement | `service.replacement.hero.*` | `locality_outcome_statement` |
| Before/after hero slider | Real project — same property, same angle | `local_proof` |
| Transformation stat overlay | "X roofs replaced", "Y sq ft covered" | `trust_signal_cluster` |
| Why replacement (vs. repair) criteria | `service.replacement.criteria.*` | `process_disclosure` |
| Replacement process timeline | `service.replacement.process.*` | `process_disclosure` |
| Material/product options | `service.replacement.materials.*` | `capability_map` |
| Completed replacement gallery | Sanity media — before/after pairs | `local_proof` |
| Warranty on replacement | `trust.replacement_warranty.*` | `trust_signal_cluster` |
| Replacement testimonials (3+) | Sanity CMS | `customer_voice` |
| Investment/financing posture | `service.replacement.pricing.*` | `pricing_posture` |
| Trust badge cluster | `trust.badge.*` | `trust_signal_cluster` |
| Quote CTA band | `cta.*` | `multi_channel_conversion` |

---

## Forbidden Patterns

- Hero aerial photo (Home's territory)
- 60/40 editorial split hero (Installation's territory)
- Single before/after image — a gallery of before/after pairs is required (not just one)
- Generic catalogue product shots for material options — real installed example photos only
- Identical alternating LDL section rhythm to Home page

---

## Visual Differentiation

- Before/after slider spans ≥ 60% viewport height in the hero area. Stat overlay ("2,400+ roofs replaced") appears in a dark pill at the bottom of the slider.
- Content below the hero uses a timeline-dominant layout (process as a numbered horizontal timeline on desktop, vertical on mobile) — distinct from Installation's Trail.
- Before/after gallery section is a multi-pair grid — distinct from any other service page.
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-REPL-E5`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `BeforeAfterSlider` + `Surface` + `Stack` + `Grid` + `Frame` + `Trail` + `Reveal`

**Hero:** `BeforeAfterSlider` component at `min-height: 60svh`. Dark overlay band at bottom with stat cluster (`CounterCluster` condensed — 2 stats). Headline + subhead above the slider in a `Surface(dark)` header band (not overlaid on the slider — above it). CTA buttons in the header band below headline.

**Why replacement section:** Light `Surface`. 3-column comparison: "Repair only" vs. "Replacement" vs. "Do nothing" — comparison table or illustrated decision guide. No card grid — use a 3-col `Grid` with contrast between options.

**Process timeline:** `Surface(light)`. Horizontal timeline on desktop (`Trail` in horizontal mode), vertical on mobile. 6 stages: Inspection → Assessment → Material Selection → Scheduling → Day of Install → Final Inspection.

**Materials gallery:** Light `Surface(inset)`. Material tiles showing shingle variety. Real installed photos, not catalogues.

**Before/after gallery:** Dark `Surface`. `Grid(2-col)` of before/after pairs. Each pair: side-by-side photos with labels, project details (location, material, timeline) below.

**Testimonials:** `Surface(light)`. 3-col masonry of `TestimonialCard`.

**Investment band:** Dark `Surface`. Pricing posture statement + financing availability signal + quote CTA.

---

## Motion

**Temperament:** `restrained-cinematic`

- Hero band (headline, subhead, CTA): word-by-word reveal at mount. 50ms stagger per word.
- Before/after slider: appears at final state immediately (the slider IS the animation — no additional entrance).
- Stat overlay on slider: count-up on first visible (Macro-D).
- Process timeline: each stage reveals left-to-right with `Reveal` stagger 80ms.
- Before/after gallery pairs: `Reveal` with 60ms stagger on scroll.

**Reduced-motion:** Hero text instant. Stats jump to final value. Timeline reveals instant.

---

## State Requirements

| State | Handling |
|-------|---------|
| Before/after image loading | Both sides skeleton (gray placeholder) |
| Gallery loading | Skeleton tiles |
| Error fetching CMS | Static text content retained; galleries show fallback pair |
| No CMS before/after pairs | Show 1 hardcoded fallback pair |

---

## Responsive Intent

- Mobile: slider goes full-width, 100% viewport height. Headline above slider (not overlaid). Process timeline becomes vertical. Materials tiles 2-col.
- Tablet: slider full-width, partial height. Timeline horizontal at ≥ 768px.
- Desktop: full slate of layouts as described.

---

## SEO

- Title: `seo.service_replacement_title`
- Description: `seo.service_replacement_description`
- Schema.org: `Service` (roofType: replacement, provider: LocalBusiness)
- Canonical: `/services/roof-replacement`
- Internal links: `/services`, `/quote`, `/reviews`, `/services/roof-installation`

---

## Conversion Path

- Hero quote CTA → `/quote`
- Investment band CTA → `/quote`
- "Not sure if you need replacement?" → `/services/roof-repair`
- Reviews cross-link: "See all reviews" → `/reviews`

---

## Accessibility

- H1: `service.replacement.hero.heading`
- `BeforeAfterSlider`: full ARIA slider role (see component spec)
- Before/after gallery pairs: `aria-label` on each image describing project + before/after state
- Comparison table/grid: `<table>` with appropriate `<th>` headers, or `<dl>` if non-tabular

---

## Performance

- Before/after images: `priority={true}` on both sides of hero slider
- Gallery: lazy load with `next/image`
- LCP target: ≤ 2.5s (hero slider is LCP candidate — must be `priority`)

---

## Analytics

| Event | Trigger |
|-------|---------|
| `before_after_interact` | Hero slider drag |
| `quote_cta_click_replacement` | Any quote CTA on this page |
| `gallery_pair_viewed` | Gallery section in viewport |
| `timeline_viewed` | Timeline section in viewport |
