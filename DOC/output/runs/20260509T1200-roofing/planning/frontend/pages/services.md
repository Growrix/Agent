# Page Brief — Services Overview (`/services`)

**Visual Signature:** `VD-SVC-B2`  
**Creative Latitude:** MEDIUM  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 6

---

## Page Definition

- **User intent:** Understand the full range of services offered and self-select the right service for their situation.
- **Conversion outcome:** Click-through to a specific service detail page OR direct quote initiation.
- **Primary CTA:** Service card "Learn More" → `/services/[slug]`
- **Secondary CTA:** `cta.get_free_quote` → `/quote`
- **KPI:** Service detail page CTR from this page

---

## Outcomes (what must be true)

1. A visitor can identify which of the 4 services matches their situation in ≤ 30 seconds.
2. Each service has a distinct visual identity — no two service cards look interchangeable.
3. A path to each service detail page is reachable without scrolling on desktop.
4. Emergency repair is visually emphasized as the highest-urgency option.
5. A conversion CTA is present without needing to visit a service detail page first.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Section heading + subhead | `services.overview.*` | `capability_map` |
| 4 service cards (all services) | `service.{slug}.*` | `capability_map` |
| Emergency service emphasis | `service.emergency-repair.*` + urgency badge | `urgency_evidence` |
| Trust signal strip | `trust.badge.*` (abbreviated) | `trust_signal_cluster` |
| 1–2 featured testimonials | Sanity CMS | `customer_voice` |
| Process overview | 3-step process | `process_disclosure` |
| Final quote CTA | `home.cta_band.*` | `multi_channel_conversion` |
| Footer credibility | `footer.*` | `footer_credibility` |

---

## Forbidden Patterns

- Service tiles all using the same visual composition (each must differ in photo angle or category emphasis)
- Hero media identical to Home hero (dark surface + typographic tiles is required — no aerial photo)
- Emergency repair listed in the same visual tier as non-emergency services without distinction

---

## Composition Guidance (MEDIUM latitude)

**Hero section:** Dark `Surface(primary)` — `--color-primary`. No background media. 4 large service name tiles arranged in a 2×2 grid acting as the hero. Each tile: service name in `--font-size-display-2`, category overline, `--color-accent` border-bottom. Subtle texture overlay (noise/grain at 4% opacity). CTA row below the grid.

**Service grid section (main content):** Full `Grid(2-col desktop, 1-col mobile)` of `ServiceCard` components. Emergency Repair card has an `--color-destructive` accent band at top (not the same card design as others).

**Testimonial strip:** 1 `TestimonialCard` + `ReviewAggregateBar`. Light surface.

**Process section:** 3-step process strip. Dark `Surface`. Numbered trail left to right.

**Final CTA:** Same `EmergencyCTABand` pattern from design system. Dark.

---

## Motion Temperament

- Hero tile reveals: `Reveal` with 80ms stagger per tile, `opacity 0→1` + `translateY 16px→0`, `--motion-duration-slow`
- Service card reveals: `Reveal` with 60ms stagger, `calm-precise`
- Reduced-motion: instant reveals

---

## State Requirements

| State | Handling |
|-------|---------|
| Service cards loading | Skeleton cards |
| Error fetching services | Static fallback (4 hardcoded cards) |

---

## Responsive Intent

- Mobile: tiles stack vertically, hero becomes a simple dark heading section. Service cards 1-col.
- Tablet: 2-col service grid.
- Desktop: 2×2 hero tiles + 2-col large service cards (or 4-col compact).

---

## SEO

- Title: `seo.services_title`
- Description: `seo.services_description`
- Schema.org: `Service` JSON-LD for each of the 4 services (brief summary)
- Canonical: `/services`

---

## Conversion Path

- Primary: Service card → `/services/[slug]`
- Secondary: Final CTA → `/quote`
- Exit: Phone CTA in header

---

## Accessibility Plan

- H1: `services.overview.heading`
- Each service card: `<article>` with descriptive heading
- Emergency card: includes visible "24/7" indicator — not color-only distinction

---

## Performance Plan

- LCP: Service grid hero section (no media LCP — typographic)
- Service card images: lazy-load (not above fold)
- ISR: revalidate 1hr for service list

---

## Analytics

| Event | Trigger |
|-------|---------|
| `service_card_click` | Which service card clicked |
| `emergency_cta_click` | Emergency service card or band CTA |
