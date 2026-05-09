# Page Brief — Roof Installation (`/services/roof-installation`)

**Visual Signature:** `VD-INST-C3`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 6

---

## Page Definition

- **User intent:** Research the full process and value of a new roof installation before committing to a quote.
- **Conversion outcome:** Quote form submission or phone call
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** Phone call
- **KPI:** Quote submission rate from this page

---

## Outcomes

1. Visitor understands what a full installation involves — scope, materials, timeline.
2. Visitor sees evidence of completed installations (photography + stats).
3. Visitor encounters at least 2 trust signals specific to installation work (warranty, license, years of experience).
4. The installation process is demystified — visitor knows what happens from day 1 to completion.
5. A price signal is present ("starts at" or "free estimate") — no pure mystery pricing.
6. At least one customer testimonial about an installation experience is shown.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Hero headline + subhead | `service.installation.hero.*` | `locality_outcome_statement` |
| Hero split photo (crew on install job) | Client photo — real crew | `local_proof` |
| Service overview paragraph | `service.installation.overview` | `capability_map` |
| Material options (shingle types) | `service.installation.materials.*` | `capability_map` |
| Step-by-step installation process | `service.installation.process.*` | `process_disclosure` |
| Timeline + scope spec | Days range, scope notes | `process_disclosure` |
| Warranty information | `trust.warranty.*` | `trust_signal_cluster` |
| Installation project photos (gallery) | Sanity media gallery | `local_proof` |
| Installation-specific testimonials | Sanity CMS | `customer_voice` |
| Pricing posture | `service.installation.pricing.*` | `pricing_posture` |
| Trust badge cluster | `trust.badge.*` | `trust_signal_cluster` |
| Quote CTA band | `cta.*` | `multi_channel_conversion` |
| Areas served note | `areas.coverage_note` | `local_proof` |

---

## Forbidden Patterns

- Hero composition identical to `/services/roof-replacement` (no before/after slider in hero — installation is about new construction, not transformation)
- Full-bleed aerial photo hero (that is Home's territory)
- Process steps in a card-grid layout (sequential `Trail` element only)
- Generic product photo of shingles from a catalogue — real job-site photos only

---

## Visual Differentiation

- 60/40 editorial split hero: real crew photo on the left panel (portrait orientation, full bleed panel), specification/information content on the right panel with dark background
- Process section uses a numbered `Trail` (sequential, top-to-bottom or left-to-right) — distinct from any other service page
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-INST-C3`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `MediaFrame` + `Frame` + `Stack` + `Trail` + `Reveal` + `Surface`

**Hero split:** `Grid(60/40)` at desktop. Left panel: `MediaFrame` — crew photo, portrait crop, full panel height, `object-position: center center`. Right panel: `Surface(dark)` with dark overlay tint. Headline + subhead + CTA + trust badge cluster on the right. On mobile: stacked — photo above content.

**Material options section:** `Cluster` of material option cards (shingle types). Each card: photo + name + brief description. Light `Surface`.

**Installation process section:** `Trail` element — 5 numbered steps. Dark `Surface`. Each step: number (large `--font-size-display-2`, `--color-accent`), step heading, step body.

**Project gallery:** `Grid(3-col, 2-col tablet, 1-col mobile)` of real project photos. Light `Surface`.

**Testimonial + warranty:** `Stack` — 1–2 testimonials + warranty panel. `Surface(inset)`.

**Pricing posture + CTA:** Dark `Surface`. "Free estimate" message + price range signal + quote CTA.

**Asymmetry:** Hero uses 60/40 asymmetric split. Process section uses wide number + narrow text asymmetry.

---

## Section Blueprint (E2E)

1. `installation_hero_split`: Purpose: skill and trust above fold. Draft copy: installation hero heading/subhead + quote CTA. Layout: 60/40 photo/content split.
2. `material_options`: Purpose: choice clarity. Draft copy: material names, durability notes, quick recommendation lines. Layout: card cluster.
3. `installation_process`: Purpose: timeline transparency. Draft copy: 5 step headings with concise body copy. Layout: dark numbered trail.
4. `project_gallery`: Purpose: visual proof. Draft copy: project captions (area, roof type, completion). Layout: 3-col photo grid.
5. `warranty_and_testimonial`: Purpose: risk reduction. Draft copy: warranty summary + installation testimonial excerpt. Layout: stacked inset section.
6. `installation_cta`: Purpose: conversion. Draft copy: pricing posture + quote CTA + phone fallback. Layout: dark CTA band.

---

## Motion

- Hero split: right panel slides in from right (20px), left photo fades from dark. `--motion-duration-normal`.
- Process steps: stagger `Reveal` 80ms per step from top.
- Gallery: `Reveal` stagger 40ms per image.
- Reduced-motion: instant for all.

---

## State Requirements

| State | Handling |
|-------|---------|
| Gallery loading | Skeleton tiles |
| Error fetching CMS | Show static overview content; gallery gracefully omitted |

---

## Responsive Intent

- Mobile: 60/40 hero collapses to full-width photo above + content below. Trail becomes vertical stack.
- Tablet: 50/50 split acceptable.
- Desktop: 60/40 with tall left panel anchored.

---

## SEO

- Title: `seo.service_installation_title`
- Description: `seo.service_installation_description`
- Schema.org: `Service` (roofType: installation, provider: LocalBusiness)
- Canonical: `/services/roof-installation`
- Internal links: `/services`, `/quote`, `/reviews`, `/areas`

---

## Conversion Path

- Hero CTA → `/quote`
- Pricing section CTA → `/quote`
- Emergency repair cross-link: "Need urgent repair instead?" → `/services/emergency-repair`

---

## Accessibility

- H1: `service.installation.hero.heading`
- Process Trail: each step is `<li>` in an `<ol>`, numbered heading is decorative (aria-hidden), semantic heading is the step title
- Gallery images: each has `alt` text describing the project location + type
- Material option cards: keyboard-navigable, no hover-only info

---

## Performance Plan

- Hero photo: `priority={true}`, WebP + AVIF, explicit `sizes`
- Gallery: lazy-load, `next/image` with `fill` layout
- LCP target: ≤ 2.5s

---

## Analytics

| Event | Trigger |
|-------|---------|
| `quote_cta_click` | Any quote CTA on this page |
| `gallery_image_view` | Gallery section enters viewport |
| `process_section_view` | Process Trail enters viewport |

