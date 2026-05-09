# Component Spec — SiteFooter

**Path:** `web/src/components/global/SiteFooter.tsx`  
**Type:** Global shell — server component

---

## Purpose
The footer is the last trust-confirmation surface. It must contain every piece of business-identity information a cautious homeowner needs: license, address, hours, areas, links. Dense but organized.

## Structure (desktop 4-column grid, mobile stacked)

### Column 1 — Brand + Credentials
- Logo (white variant)
- Tagline (`body-sm`, `--color-dark-text-muted`) — content key `footer.brand.tagline`
- `TrustBadgeCluster` (mini variant: licensed, insured, guarantee)
- License number (`font-mono`, `caption`, muted) — content key `footer.legal.license`
- Google Business link

### Column 2 — Navigation
- Heading: "Quick Links" (overline)
- Services (with sub-links: Installation, Repair, Replacement, Emergency)
- Areas | Reviews | About | Blog | FAQ | Contact

### Column 3 — Contact + Hours
- Heading: "Contact Us" (overline)
- Phone (large, `--color-accent`, click-to-call)
- Email
- Address (multi-line)
- Hours table: Mon–Sat 7am–7pm, 24hr Emergency

### Column 4 — Service Areas
- Heading: "Areas Served" (overline)
- Comma-separated list of primary service towns/boroughs (max 12 visible, "+ more" link)
- CTA: "Check Coverage →" links to `/areas`

### Bottom Bar
- Copyright (`caption`, `--color-dark-text-muted`)
- Privacy Policy link
- Terms link
- **Attribution:** `footer.attribution.text` + `footer.attribution.link_text` linked to `footer.attribution.url` — `aria-label={footer.attribution.aria_label}`. Opens in same tab.

## Background
- `--color-dark-bg` (slate-navy) with subtle noise texture overlay at 4% opacity
- Text: `--color-dark-text`
- Borders: `--color-dark-border`

## ARIA
- `<footer role="contentinfo">`
- All nav lists: `<nav aria-label="Footer navigation">`
- Phone: `aria-label={footer.contact.phone_aria_label}`
- Attribution link: `aria-label={footer.attribution.aria_label}`

## Responsive
- Desktop (≥ 1024px): 4-column `Grid`
- Tablet (768–1023px): 2×2 `Grid`
- Mobile (< 768px): `Stack`, each column stacked, collapsed by default with Disclosure expand for Areas and Navigation

## Content Keys Used
- `footer.brand.tagline`
- `footer.legal.license`
- `footer.contact.phone`
- `footer.contact.phone_aria_label`
- `footer.contact.email`
- `footer.contact.address`
- `footer.contact.hours`
- `footer.areas.list` (array)
- `footer.areas.more_link`
- `footer.nav.*` (all nav link labels)
- `footer.attribution.text`
- `footer.attribution.link_text`
- `footer.attribution.url`
- `footer.attribution.aria_label`
- `footer.legal.copyright`
- `footer.legal.privacy`
- `footer.legal.terms`

## Attribution Contract
- `footer.attribution.*` values use the deterministic default contract:
	- text: "Built and maintenance by"
	- link_text: "Growrix OS"
	- url: "https://www.growrixos.com"
	- aria_label: "Built and maintenance by Growrix OS (opens in a new tab)"
- Contract remains brief-overridable for client-specific attribution.

