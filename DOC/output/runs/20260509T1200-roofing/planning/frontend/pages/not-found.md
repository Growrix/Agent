# Page Brief — 404 Not Found (`/not-found`)

**Visual Signature:** `VD-404-N14`  
**Creative Latitude:** MEDIUM  
**Motion Temperament:** `calm-precise`  
**min_sections_exempt:** true

---

## Page Definition

- **User intent:** Recover from a broken or mistyped URL.
- **Conversion outcome:** Navigate to a useful page
- **Primary CTA:** Return to Home
- **Secondary CTA:** Get a Quote
- **KPI:** Exit rate from this page (lower = successful recovery)

---

## Outcomes

1. Visitor immediately understands this is a 404 page (not a blank screen or error).
2. A path back to the most important pages is presented.
3. The page reflects brand character — memorable and slightly playful without losing trust.
4. Phone number is visible in case they were trying to find contact information.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| 404 heading | `not_found.heading` | — |
| Explanation message | `not_found.subhead` | — |
| Suggested links | Home, Services, Quote, Contact | — |
| Phone number | `brand.phone` | `multi_channel_conversion` |
| Brand voice note | `not_found.brand_line` (e.g., "Even our 404 is well-built.") | — |

---

## Composition Guidance (MEDIUM)

- `Surface(dark)` — full-page dark background. Centered `Stack`.
- Large `--font-size-display-1` "404" in `--color-accent`.
- Heading below in white.
- Subhead + navigation link cluster (Home, Services, Quote, Contact).
- Phone CTA at bottom.
- Optional: subtle background texture (noise grain at 4%).

---

## Section Blueprint (E2E)

1. `error_code_hero`: Purpose: immediate recognition of missing page. Draft copy: large "404" + `not_found.heading`. Layout: centered stack on dark surface.
2. `recovery_message`: Purpose: reassure and redirect. Draft copy: `not_found.subhead`. Layout: concise body below heading.
3. `recovery_links`: Purpose: get users back on-path. Draft copy: Home, Services, Quote, Contact links. Layout: clustered link buttons.
4. `direct_contact`: Purpose: support urgent visitors. Draft copy: phone label and direct call CTA. Layout: bottom action row.

---

## Motion

- 404 number: scale-in from 0.8 → 1.0 on mount, `--motion-duration-normal`.
- Links: stagger `Reveal` 60ms each.
- Reduced-motion: instant.

---

## SEO

- Title: `not_found.meta_title`
- HTTP 404 status (Next.js `notFound()`)
- `noindex`

---

## Accessibility

- Clear H1 indicating the page was not found
- Navigation links are keyboard-accessible

