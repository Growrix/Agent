# Frontend Planning — Apex Roofing Co.
**Run:** 20260509T1200-roofing  
**Status:** `PLANNED` ✓  
**Industry:** Local Services — Roofing  
**Visual Archetype:** `local-business-trust` (elevated — HIGH creative latitude across hero and motion layers)  
**Project Archetype:** `marketing_site`  
**Quality Target:** `world_class`  
**Locale:** `en`  
**Lock Status:** LOCKED

---

## Design Direction (Executive Summary)

Apex Roofing Co. is designed to be the gold standard roofing website in the template market — a site that looks and feels like it was built for a premium contractor who charges premium prices and delivers premium results. The aesthetic blends the credibility gravity of `local-business-trust` with the visual drama of `portfolio-craft`, executed through:

- **Deep slate-navy primary** (#0F1923) + **amber-copper accent** (#D4750A) — materials-palette: the color of shingles, flashing, and twilight sky
- **Cinematic full-bleed heroes** with real aerial rooftop photography, gradient overlays ≥ 0.65 opacity, staggered headline reveals
- **Bold counter clusters** (projects, years, guarantee) that build trust without a word of filler
- **Before / after slider** on the Home flagship — interactive proof baked into the hero area
- **Dark surface sections** alternating with warm off-white — high contrast rhythm that reads upscale
- Every route gets a compositionally **unique hero** — no two pages share a layout or visual rhythm signature

---

## Artifact Index

| File | Purpose |
|------|---------|
| [ai-context.yaml](ai-context.yaml) | AI-first navigation for this run |
| [master-ui-architecture.md](master-ui-architecture.md) | Full UX architecture, site map, journeys, layout system |
| [design-system.md](design-system.md) | Design tokens narrative, color system, typography, spacing |
| [design-system.tokens.json](design-system.tokens.json) | Machine-readable token file |
| [component-system.md](component-system.md) | Primitive kit, composition rules, component list |
| [components/](components/) | Per-component spec files |
| [motion-system.md](motion-system.md) | Motion catalog, temperaments, reduced-motion policy |
| [content-library.md](content-library.md) | Content key index, copy direction, open questions |
| [content.en.json](content.en.json) | Machine-readable content library (en) |
| [interaction-matrix.md](interaction-matrix.md) | Interaction model per surface |
| [visual-differentiation-map.md](visual-differentiation-map.md) | Route-pair delta matrix, visual signatures |
| [pages/home.md](pages/home.md) | Home page design brief |
| [pages/services.md](pages/services.md) | Services overview design brief |
| [pages/services-roof-installation.md](pages/services-roof-installation.md) | Service detail — Roof Installation |
| [pages/services-roof-repair.md](pages/services-roof-repair.md) | Service detail — Roof Repair |
| [pages/services-roof-replacement.md](pages/services-roof-replacement.md) | Service detail — Roof Replacement |
| [pages/services-emergency-repair.md](pages/services-emergency-repair.md) | Service detail — Emergency Repair |
| [pages/areas.md](pages/areas.md) | Areas Served design brief |
| [pages/reviews.md](pages/reviews.md) | Reviews / Testimonials design brief |
| [pages/about.md](pages/about.md) | About / Team design brief |
| [pages/contact.md](pages/contact.md) | Contact design brief |
| [pages/quote.md](pages/quote.md) | Quote Request design brief |
| [pages/faq.md](pages/faq.md) | FAQ design brief |
| [pages/blog.md](pages/blog.md) | Blog index design brief |
| [pages/privacy.md](pages/privacy.md) | Privacy Policy |
| [pages/terms.md](pages/terms.md) | Terms of Service |
| [pages/not-found.md](pages/not-found.md) | 404 design brief |
| [visual-reference-pack.md](visual-reference-pack.md) | Hero composition specs, asset brief |
| [frontend.json](frontend.json) | Machine-readable summary for plan aggregation |

---

## Route Map

| Route | Page | Priority |
|-------|------|---------|
| `/` | Home | P0 |
| `/services` | Services Overview | P0 |
| `/services/roof-installation` | Service Detail | P0 |
| `/services/roof-repair` | Service Detail | P0 |
| `/services/roof-replacement` | Service Detail | P0 |
| `/services/emergency-repair` | Service Detail — Emergency | P0 |
| `/areas` | Areas Served | P0 |
| `/reviews` | Reviews | P0 |
| `/about` | About | P0 |
| `/contact` | Contact | P0 |
| `/quote` | Quote Request | P0 |
| `/faq` | FAQ | P1 |
| `/blog` | Blog Index | P1 |
| `/privacy` | Privacy | P2 |
| `/terms` | Terms | P2 |
| `/404` | Not Found | P2 |

---

## Frontend Constraints Summary

| ID | Constraint | Status |
|----|-----------|--------|
| F1 | Mobile-first responsive | pass |
| F2 | All tokens from design system — no raw values | pass |
| F3 | All strings from content library | pass |
| F4 | WCAG 2.1 AA contrast on every text/bg pair | pass |
| F5 | Reduced-motion fallback on every animation | pass |
| F6 | Every interactive element has full state matrix | pass |
| F7 | Dark theme token set present | pass |
| F8 | ThemeSwitcher in header + mobile toolbar | pass |
| F9 | MobileBottomNav (icon tab bar) declared | pass |
| F10 | AuthModal not required — auth opted out (local services) | not-applicable |
| F11 | Footer attribution from brief | pass |
| F12 | Every page ≥ 5 sections (flagship ≥ 7) | pass |

---

## Open Questions

1. **Business name**: Using placeholder "Apex Roofing Co." — client to confirm actual name.
2. **License number**: Placeholder `LIC-XXXXXXX` — client to supply state roofing license number.
3. **Phone number**: Placeholder `(555) 800-ROOF` — client to supply.
4. **Service area**: Placeholder "Greater Metro Area + 50 surrounding towns" — client to confirm exact geography.
5. **Review source**: Google Business reviews assumed — confirm integration approach (embed vs. API pull vs. Sanity seeded).
6. **Booking integration**: Calendar booking optional — confirm whether Calendly, Acuity, or custom is preferred.
7. **Footer attribution**: `brief.brand.footer_attribution` not supplied in intake — using placeholder `{ enabled: true, text: "Built by [Agency]", url: "#" }`. Client/agency to confirm.
8. **Years in business**: Placeholder "20+ years" — client to confirm founding year.
9. **Project count**: Placeholder "2,400+ projects" — client to confirm.
10. **Blog**: P1 — confirm whether blog launches with site or is phase 2.
