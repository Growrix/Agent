# Component Spec: Footer

**Group:** Global  
**Type:** Organism  
**Route scope:** All marketing routes (shared layout)

---

## Purpose

Site-wide footer providing: brand column (logo + tagline + social row), navigation columns, contact info column, legal links row, copyright, and attribution. Primary trust reinforcement for every page.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | 4-column grid desktop footer; full information architecture |
| `minimal` | For legal/error pages — 1-row copyright + legal links only |

---

## Information Architecture (default variant)

```
[Column 1: Brand]        [Column 2: Services]     [Column 3: Company]      [Column 4: Contact]
Logo                     Residential Solar        About Us                 Phone number
Tagline                  Commercial Solar         Portfolio                Email
Social row (20px icons)  Battery Storage          Blog                     Address
                         Financing                Team                     Hours
                         Service Area             Certifications           Map link

[Bottom bar]
Copyright © 2025 SunEnergy Pro | Privacy | Terms | Accessibility | [Attribution: Built and maintenance by Growrix OS]
```

---

## Footer Attribution

From `brief.brand.footer_attribution` → default contract:
- Text: "Built and maintenance by"
- Link text: "Growrix OS"
- URL: "https://www.growrixos.com"
- Placement: `footer_bottom_bar` (right side of copyright row, desktop; below copyright mobile)
- Opens new tab: `target="_blank" rel="noopener noreferrer"`
- Aria label: `"Built and maintenance by Growrix OS (opens in a new tab)"`

Content keys:
- `footer.attribution.text`
- `footer.attribution.link_text`
- `footer.attribution.url`
- `footer.attribution.aria_label`

---

## States

| State | Behavior |
|-------|----------|
| `default` | Full 4-column layout |
| `dark-theme` | `background: var(--color-surface-dark-950)`, text `var(--color-neutral-300)` |
| `link-hover` | `color: var(--color-primary-500)` (amber) |

---

## ARIA / Keyboard / Focus

- `<footer role="contentinfo">`
- Column nav: `<nav aria-label="Footer navigation - [column label]">` per column
- Attribution link: `aria-label="Built and maintenance by Growrix OS (opens in a new tab)"`
- Social links: each with `aria-label="Follow SunEnergy Pro on [Platform]"`
- Legal links row: `<nav aria-label="Legal">`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< md` | Single column stack; brand column first; social row centered |
| `md` | 2-column grid (brand + services; company + contact) |
| `lg+` | 4-column grid; bottom bar single row |

---

## Sub-components Consumed

- `SocialIconRow` — footer social row (20px icons)
- `SocialLink` — individual social links within the row

---

## Motion Declarations

Footer has no entrance animation (not visible on load). Link hover states use instant CSS color transition (150ms).

---

## Content Keys

- `footer.brand.tagline`
- `footer.nav.*` — column headings and links
- `footer.contact.*` — phone, email, address, hours
- `footer.legal.*` — privacy, terms, accessibility labels
- `footer.copyright`
- `footer.attribution.*` — attribution block
- `social.*` — social links

---

## Dark Theme Contract

- Background: `var(--color-surface-dark-950)`
- Text: `var(--color-neutral-300)` (body), `var(--color-neutral-100)` (headings)
- Links: `var(--color-neutral-400)` default → `var(--color-primary-400)` hover
- Border top: `1px solid var(--color-neutral-800)`
- Social icons: `var(--color-neutral-400)` → `var(--color-primary-400)` hover
