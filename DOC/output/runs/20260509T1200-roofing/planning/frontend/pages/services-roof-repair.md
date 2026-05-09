# Page Brief — Roof Repair (`/services/roof-repair`)

**Visual Signature:** `VD-REP-D4`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 6

---

## Page Definition

- **User intent:** Confirm whether their damage can be repaired (vs. replaced), understand the process and cost, and take action quickly.
- **Conversion outcome:** Phone call or quote form
- **Primary CTA:** Phone call (repair is often urgent — phone preferred over form)
- **Secondary CTA:** `cta.get_free_quote` → `/quote`
- **KPI:** Phone click rate from this page

---

## Outcomes

1. Visitor can self-diagnose whether they need a repair vs. full replacement within 30 seconds.
2. The consequence of not acting is communicated without alarm-style pressure tactics.
3. The contractor's ability to handle the specific damage type (storm, leak, missing shingles, flashing) is established.
4. At least one before/after image of a repaired roof is visible.
5. The visitor knows roughly how fast the contractor can respond.
6. A trust signal (license, warranty on repair work) is prominent.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Hero headline + subhead | `service.repair.hero.*` | `locality_outcome_statement` |
| Hero background (close-up damage photo) | Client real photo — damaged shingles/storm | `local_proof` |
| Repair type category list | `service.repair.types.*` | `capability_map` |
| Diagnosis guide (repair vs. replace) | `service.repair.diagnosis.*` | `process_disclosure` |
| Typical response timeline | `service.repair.timeline.*` | `trust_signal_cluster` |
| Photo proof of repair work | Sanity media gallery | `local_proof` |
| Warranty on repair work | `trust.repair_warranty.*` | `trust_signal_cluster` |
| Repair-specific testimonials | Sanity CMS | `customer_voice` |
| Pricing posture | `service.repair.pricing.*` | `pricing_posture` |
| Trust badge cluster | `trust.badge.*` | `trust_signal_cluster` |
| Emergency escalation path | "Is it urgent?" → `/services/emergency-repair` | `urgency_evidence` |
| Quote / call CTA band | `cta.*` | `multi_channel_conversion` |

---

## Forbidden Patterns

- 60/40 editorial split hero (that is Installation's territory) — use full-bleed with bottom-left content overlay instead
- Before/after slider in the hero (that is Home's and Replacement's territory)
- Generic leaky roof diagram or stock illustration — real damage photography only
- Identical section rhythm to Installation page (no sequential LR alternation — use vertical single-col blocks)

---

## Visual Differentiation

- Full-bleed hero: close-up of real storm-damaged shingles, storm sky background, high drama composition. Headline overlaid bottom-left with dark gradient.
- Primary content rhythm: vertical single-column dominant (no LR alternation). Damage categories and repair types in a list format, not a grid.
- A "dark urgency" diagnostic band mid-page asks "Is This an Emergency?" and links to `/services/emergency-repair` — the only dark band on an otherwise light-dominant page.
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-REP-D4`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `MediaFrame` + `Surface` + `Stack` + `Reveal` + `Frame` + `Cluster`

**Hero:** Full-bleed `MediaFrame` with damage close-up. `Surface(overlay)` gradient from bottom (dark end) up. Content (headline, subhead, CTAs, trust badges) anchored `bottom-left` in a `Frame` with 64px padding. `MediaFrame` uses `object-position: center 60%` to keep damaged portion centered.

**Repair type section:** Light `Surface`. `Cluster` of category pills/chips (Storm Damage, Missing Shingles, Leak Detection, Flashing Repair, Gutters). Below: expanded detail accordion per category. NOT a card grid.

**Diagnosis band:** `Surface(dark)` — informational guide: "How do I know if I need repair or replacement?" 3 diagnostic criteria listed. CTA to `/services/roof-replacement` at end.

**Emergency escalation band:** `Surface(destructive-muted)` — one-liner: "Active leak or storm damage happening now?" → large phone CTA + link to emergency page. Positioned mid-page.

**Proof section:** Before/after photos in `Grid(2-col)`. Light `Surface(inset)`. Testimonials below.

**CTA band:** Dark `Surface`. Phone CTA primary, quote CTA secondary.

---

## Section Blueprint (E2E)

1. `repair_hero_damage`: Purpose: immediate problem recognition. Draft copy: repair hero heading/subhead + call CTA. Layout: full-bleed damage image with bottom-left content.
2. `repair_type_cluster`: Purpose: scope matching. Draft copy: storm, leak, flashing, shingles categories with short fix notes. Layout: chip cluster + accordion details.
3. `diagnosis_band`: Purpose: repair vs replacement decision support. Draft copy: 3 diagnostic criteria and cross-link CTA. Layout: dark informative band.
4. `emergency_escalation`: Purpose: fast crisis routing. Draft copy: "Active leak?" line + emergency call action. Layout: destructive-muted strip.
5. `repair_proof`: Purpose: trust through outcomes. Draft copy: before/after captions + customer quotes. Layout: 2-col proof grid + testimonial row.
6. `repair_cta`: Purpose: conversion close. Draft copy: phone-first CTA and free quote secondary CTA. Layout: dark conversion band.

---

## Motion

- Hero content reveals bottom-to-top as `Reveal` on mount (text first, trust badges after).
- Repair category pills: stagger 40ms each on scroll.
- Emergency escalation band: no motion — immediately visible on scroll.
- Reduced-motion: instant reveal.

---

## State Requirements

| State | Handling |
|-------|---------|
| Proof gallery loading | Skeleton tiles |
| Error on CMS fetch | Static overview text; gallery omitted |

---

## Responsive Intent

- Mobile: full-bleed hero is full-viewport height, CTA buttons stacked vertically. Category accordion replaces category pills. Emergency band stays prominent.
- Tablet: 2-col proof grid.
- Desktop: all sections max `container-wide` width.

---

## SEO

- Title: `seo.service_repair_title`
- Description: `seo.service_repair_description`
- Schema.org: `Service` (roofType: repair, provider: LocalBusiness)
- Canonical: `/services/roof-repair`
- Internal links: `/services/emergency-repair`, `/services/roof-replacement`, `/quote`

---

## Conversion Path

- Hero phone CTA → immediate call
- Diagnosis band → `/services/roof-replacement` (for users who need more)
- Emergency escalation → `/services/emergency-repair` (for users in crisis)
- Bottom CTA → `/quote` or phone

---

## Accessibility

- H1: `service.repair.hero.heading`
- Accordion: `<details>/<summary>` or ARIA `role="button"` with `aria-expanded`
- Emergency band: not color-only (has text label "Emergency?" not just red styling)
- Photos: meaningful `alt` text describing damage type + resolution

---

## Performance

- Hero photo: `priority={true}` — it is the LCP element
- Gallery: lazy with `next/image`
- LCP target: ≤ 2.5s

---

## Analytics

| Event | Trigger |
|-------|---------|
| `phone_click_repair` | Phone CTA on this page |
| `emergency_escalation_click` | Emergency band CTA |
| `replacement_crosslink_click` | Diagnosis band → replacement |
| `repair_type_expanded` | Accordion category opened |

