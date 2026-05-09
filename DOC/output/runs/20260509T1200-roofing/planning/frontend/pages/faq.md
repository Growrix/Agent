# Page Brief — FAQ (`/faq`)

**Visual Signature:** `VD-FAQ-L12`  
**Creative Latitude:** LOW  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 3

---

## Page Definition

- **User intent:** Get answers to common questions before deciding to hire.
- **Conversion outcome:** Objection resolved → quote or call
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** Phone call
- **KPI:** CTA click rate from this page (indicates FAQ resolved objection)

---

## Outcomes

1. Visitor finds the answer to their question without calling.
2. FAQs are organized by category — not a flat dump of 30 questions.
3. A natural conversion path follows objection resolution.
4. The page supports SEO for common roofing questions.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Dark header with search | `faq.hero.*` | `process_disclosure` |
| FAQ search input | Instant filter | `process_disclosure` |
| FAQ categories (tabs or headings) | General, Installation, Repair, Replacement, Cost, Insurance | `capability_map` |
| FAQ items (8+ accordion entries) | `faq.items.*` | `process_disclosure` |
| "Still have questions?" CTA | `cta.*` + phone | `multi_channel_conversion` |

---

## Composition Guidance (LOW — prescribed)

**Layout:**
1. Dark `Surface(primary)` header: H1 + subhead + search input (instant filter of accordion items).
2. Light `Surface` body: FAQ accordion organized by category. Each category has a `<h2>` heading + `<dl>` or accordion list below.
3. Bottom CTA: "Still have questions? Talk to our team" → quote CTA + phone.

**No hero media. No card grid. Accordion-only for questions.**

---

## State Requirements

| State | Handling |
|-------|---------|
| Search returns 0 results | "No matching questions — ask us directly" + phone CTA |
| All FAQs collapsed | Default state |

---

## Motion

- Accordion expand: `--motion-duration-normal` height animate + `opacity 0→1` on content.
- Reduced-motion: instant toggle.

---

## SEO

- Title: `seo.faq_title`
- Description: `seo.faq_description`
- Schema.org: `FAQPage` JSON-LD with all question + answer pairs
- Canonical: `/faq`

---

## Accessibility

- Accordion: `<button aria-expanded>` + `aria-controls` on content panel
- Search input: `role="search"` landmark + `aria-label`
- Category headings: `<h2>` (semantic, not visual-only)

---

## Analytics

| Event | Trigger |
|-------|---------|
| `faq_search` | Search input used |
| `faq_item_open` | Accordion item expanded (which item) |
| `faq_cta_click` | CTA at bottom clicked |
