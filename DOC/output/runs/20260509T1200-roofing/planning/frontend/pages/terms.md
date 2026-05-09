# Page Brief — Terms of Service (`/terms`)

**min_sections_exempt:** true  
**Creative Latitude:** LOW  
**Motion Temperament:** none

---

## Page Definition

- **User intent:** Read the terms of service.
- **Conversion outcome:** Legal compliance — no conversion goal.
- **KPI:** N/A

---

## Outcomes

1. Content is readable and clearly structured.
2. Required legal sections are present.

---

## Required Content Slots

| Slot | Category Tag |
|------|-------------|
| Page heading ("Terms of Service") | — |
| Effective date | — |
| Acceptance of terms | — |
| Services description | — |
| Limitation of liability | — |
| Governing law | — |
| Contact | — |

---

## Composition Guidance (LOW)

- Same as `/privacy` — `Surface(white)`, `container-narrow`, no decorative elements.
- Table of contents with anchor links.

---

## Section Blueprint (E2E)

1. `terms_header`: Purpose: legal framing and effective date. Draft copy: "Terms of Service" + "Effective date: {date}". Layout: narrow header block.
2. `terms_toc`: Purpose: quick navigation. Draft copy: acceptance, services, payments, liability, governing law, contact anchors. Layout: linked list.
3. `terms_core_sections`: Purpose: full legal terms. Draft copy includes service scope, customer responsibilities, disclaimers, limitations, dispute handling. Layout: long-form legal text with H2/H3 structure.
4. `terms_contact`: Purpose: legal contact channel. Draft copy: support/legal email and business mailing address. Layout: final subsection.

---

## SEO

- Title: "Terms of Service — Apex Roofing Co."
- `noindex` recommended
- Canonical: `/terms`

---

## Accessibility

- Full heading hierarchy
- `<nav aria-label="Terms of service sections">` for table of contents

