# Page Brief — Privacy Policy (`/privacy`)

**min_sections_exempt:** true  
**Creative Latitude:** LOW  
**Motion Temperament:** none

---

## Page Definition

- **User intent:** Read the privacy policy.
- **Conversion outcome:** Legal compliance — no conversion goal.
- **KPI:** N/A

---

## Outcomes

1. Content is readable and clearly structured.
2. Required legal sections are present (data collected, how used, third parties, cookies, rights, contact).

---

## Required Content Slots

| Slot | Category Tag |
|------|-------------|
| Page heading ("Privacy Policy") | — |
| Effective date | — |
| Data collected | — |
| How data is used | — |
| Third-party services | — |
| Cookie policy | — |
| User rights | — |
| Contact for privacy inquiries | — |

---

## Composition Guidance (LOW)

- `Surface(white)`, `container-narrow` (720px max-width), generous line-height.
- Heading hierarchy: H1 > H2 per section > H3 for subsections.
- No decorative elements. No CTAs. No animations.
- Table of contents at top (anchor links to each section).

---

## Section Blueprint (E2E)

1. `privacy_header`: Purpose: legal context and effective date. Draft copy: "Privacy Policy" + "Effective date: {date}". Layout: narrow header block.
2. `privacy_toc`: Purpose: quick legal navigation. Draft copy: anchored section titles. Layout: top navigation list.
3. `privacy_core_sections`: Purpose: complete disclosure. Draft copy covers data collected, usage, third parties, cookies, rights, retention, contact. Layout: long-form text sections with H2/H3 hierarchy.
4. `privacy_contact`: Purpose: escalation path. Draft copy: privacy inquiry email and mailing address. Layout: final contact subsection.

---

## SEO

- Title: "Privacy Policy — Apex Roofing Co."
- `noindex` recommended (legal boilerplate — not crawl-worthy)
- Canonical: `/privacy`

---

## Accessibility

- Full heading hierarchy
- Table of contents: `<nav aria-label="Privacy policy sections">`

