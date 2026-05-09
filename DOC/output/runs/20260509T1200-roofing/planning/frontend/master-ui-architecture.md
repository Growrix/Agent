# Master UI Architecture — Apex Roofing Co.

**Run:** 20260509T1200-roofing  
**Archetype:** `local-business-trust` (elevated)  
**Industry:** Local Services — Roofing  
**Quality Target:** world_class

---

## 1. Product Intent

Apex Roofing Co. is a premium residential and commercial roofing contractor serving a defined metropolitan service area. The website must function as the primary lead-generation and trust-building surface — converting visitors who are either in urgent repair mode or planning a major roof investment into qualified phone calls and quote requests.

The site competes in a market saturated with mediocre template-built contractor sites. It wins by being visually cinematic, immediately trustworthy, and frictionlessly contactable. Every design decision is measured against one question: _does this help a homeowner under stress find, trust, and call us faster?_

---

## 2. Experience Direction

> "A roofing site that feels like it was built for a $50,000 project, not a $500 patch job."

The site must read as **premium**, **confident**, and **locally rooted** simultaneously. It borrows the visual drama of portfolio/editorial sites — deep dark surfaces, bold typographic scale, cinematic photography — while maintaining the trust signals and conversion-first ergonomics of the best local-service sites.

Key differentiators vs. typical roofing template sites:
- Full-bleed cinematic hero with parallax depth and staggered word-by-word headline reveal
- Before/after interactive slider as primary proof (not buried in a gallery tab)
- Alternating dark/light surface sections that create visual rhythm and premium feel
- Counter cluster (projects, guarantee years, response time, Google rating) as permanent trust strip
- Unique hero composition and visual signature for every public route — no two pages look alike
- Material-palette color story: slate-navy + copper-amber echoes actual roofing materials

---

## 3. Experience Principles

1. **Trust before persuasion.** Credentials, license, and years of experience appear above the fold on mobile on the Home page.
2. **Contact always in reach.** Phone number is visible in the header (desktop utility bar), sticky header after scroll, and as a floating pill on mobile.
3. **Proof over claims.** Before/after photography, named client reviews with areas, and job count metrics replace generic superlatives.
4. **Friction inventory.** Every form field not directly required for the contractor to respond is removed.
5. **Mobile-first urgency.** On mobile, the contact path (tap-to-call) is the dominant affordance. Every page's mobile hero renders a visible call CTA in the first viewport.
6. **Visual distinction per route.** Each page earns its own visual identity — home ≠ services ≠ about.
7. **Motion serves trust.** Animation is calibrated: confident, unhurried, cinematic. No bounce, no spin, no celebration effects.

---

## 4. Core Journeys

### Emergency / Urgent Repair Path
```
Entry (Google Search "emergency roofer near me")
→ Home hero: phone CTA + "Same-day available" urgency chip
→ Tap-to-call (mobile sticky)
→ Call connects
```

### Quote Request Path
```
Entry (Home or Service Detail)
→ Service tile or hero CTA → /quote
→ Short quote form (name, phone, service type, postcode, brief note)
→ Confirmation page + email follow-up (Resend)
→ Contractor calls within 1 business hour
```

### Service Research Path
```
Entry (Search "roof replacement cost near me")
→ /services/roof-replacement
→ Process section + Pricing posture
→ Proof (testimonials + gallery)
→ /quote form embedded in-page
```

### Trust Verification Path
```
Entry (Branded search or referral)
→ Home
→ /about (team + license + years)
→ /reviews (Google-verified testimonials)
→ /contact
```

### Area Check Path
```
Entry (Search "[city] roofing contractor")
→ /areas (coverage map + town list)
→ /areas/[slug] (area-specific landing page)
→ Quote or call
```

---

## 5. Site Map

```
/ (Home)                                   P0 — flagship conversion surface
├── /services                              P0 — capability overview
│   ├── /services/roof-installation        P0 — service detail
│   ├── /services/roof-repair              P0 — service detail
│   ├── /services/roof-replacement         P0 — service detail (highest search volume)
│   └── /services/emergency-repair         P0 — service detail (urgency-first)
├── /areas                                 P0 — coverage overview + postcode lookup
│   └── /areas/[slug]                      P1 — area landing pages (SEO)
├── /reviews                               P0 — testimonials + aggregate rating
├── /about                                 P0 — team + story + credentials
├── /contact                               P0 — contact options + form
├── /quote                                 P0 — quote request form (primary CTA destination)
├── /faq                                   P1 — objection handling
├── /blog                                  P1 — SEO content hub
│   └── /blog/[slug]                       P1 — article detail
├── /privacy                               P2 — legal
├── /terms                                 P2 — legal
└── /404                                   P2 — not found
```

---

## 6. Global Navigation

### Desktop Header (≥ 1024px)

**Topbar (utility bar — always visible):**
- Left: Address / "Serving Greater Austin area" tagline
- Center: Business hours ("Mon–Sat 7am–7pm | 24hr Emergency")
- Right: Phone number (large, click-to-call) + "Free Quote" pill button

**Main nav:**
- Logo (left)
- Nav links: Services ▾ | Areas | Reviews | About | Contact
- Services has a dropdown: Roof Installation / Roof Repair / Roof Replacement / Emergency Repair
- Right: "Get a Free Quote" accent CTA button
- After scroll (>80px): topbar hides, header condenses, adds phone to right side, sticky with subtle backdrop-blur

**Header state machine:**
| State | Trigger | Behavior |
|-------|---------|----------|
| `at-top` | Page load, scroll position 0 | Full topbar visible; main nav transparent on hero routes (home, service detail), opaque on interior pages |
| `scrolled-down` | Scroll > 80px | Topbar hidden; header condenses to 64px; primary nav + phone CTA + logo; `backdrop-blur-md` + `bg-background/90`; border-b |
| `scrolled-up` | User scrolls back up after scrolling down | Same as `scrolled-down` — header remains condensed |

**Contrast strategy on transparent hero:** All nav text uses `--color-text-on-dark` (white). Logo uses white variant. After condensation, uses standard `--color-text`. 

### Mobile Header (< 1024px)

- Fixed at top: Logo left, hamburger right, phone icon center-right
- Hamburger opens a full-screen slide-over sheet (right-to-left)
- Sheet contents: nav links (stacked), phone CTA (prominent), "Get Quote" button
- After scroll: header condenses + phone icon becomes more prominent

### Mobile Bottom Navigation (MobileBottomNav — mandatory invariant)

Five fixed tabs at viewport bottom, `padding-bottom: calc(60px + env(safe-area-inset-bottom))`:

| Tab | Icon | Label | Route |
|-----|------|-------|-------|
| Home | house-outline | Home | `/` |
| Services | tool-outline | Services | `/services` |
| Quote | clipboard-check | Get Quote | `/quote` |
| Reviews | star-outline | Reviews | `/reviews` |
| Contact | phone-outline | Contact | `/contact` |

Active state: `--color-accent` icon + label, scale 1.05, dot indicator above icon.

---

## 7. Shared Conversion Infrastructure

- **QuoteFormWidget**: Embeddable short form (name, phone, service, postcode, note). Used on `/quote` (full page), and as an inline section on Home + Service Detail pages.
- **StickyCallPill**: Mobile-only floating pill CTA. Shows tap-to-call number + "Call Now". Visible on every page except `/quote` full form.
- **TrustBadgeCluster**: Reusable group of credential badges (licensed, insured, years, guarantee). Referenced in hero surfaces and service detail pages.
- **ReviewAggregateBar**: Star rating + count + source badge ("Google Reviews"). Used below hero on Home and on the /reviews page header.
- **AreaCoverageChip**: Inline chip showing "Serving [City/Area]" — appears in hero and footer.

---

## 8. Frontend Visual Strategy

### Color Story
The palette is derived from actual roofing materials:
- **Slate-navy** (`#0F1923`) — the color of dark roofing slate; primary brand hue; deep, protective, authoritative
- **Copper-amber** (`#D4750A`) — flashing copper + autumn leaf; warm CTA accent; energy, action, craftsmanship
- **Warm off-white** (`#FAF8F5`) — the color of weathered limestone; background; breathable, clean, honest
- **Storm-charcoal** (`#1D2B35`) — dark surface sections; depth, drama
- **Ash-mid** (`#4A5568`) — body text muted, borders

### Surface Rhythm
- **Light surfaces** (off-white + white): Used for content-dense sections, testimonials, service cards, FAQ
- **Dark surfaces** (slate-navy, storm-charcoal): Used for hero panels (home), counter clusters, CTA bands, emergency service highlight
- **Alternation pattern**: Home page alternates L → D → L → D → L. Service details are primarily light with one dark CTA band.

### Section Rhythm
- Desktop: 96px vertical padding (elevated from archetype default to signal premium quality)
- Tablet: 64px
- Mobile: 48px

---

## 9. Layout System

### Breakpoints
| Token | Value | Behavior |
|-------|-------|---------|
| `sm` | 640px | Single column, mobile-first |
| `md` | 768px | 2-column grid unlocks |
| `lg` | 1024px | Desktop nav, 3-column grid |
| `xl` | 1280px | Full content width capped |
| `2xl` | 1536px | Max container width 1440px |

### Container
- Max-width: 1440px, centered
- Horizontal padding: 24px (mobile), 40px (tablet), 80px (desktop)
- Full-bleed sections use `100vw` with content constrained via inner container

### Column Grid
- 1 column (mobile < 768px)
- 2 columns (tablet 768–1023px)
- 3–4 columns (desktop ≥ 1024px)
- Asymmetric: 60/40, 40/60, 7/5 column splits used for hero and feature sections

---

## 10. Page Inventory

| Route | Signature Visual | Primary CTA | Min Sections |
|-------|-----------------|-------------|---------|
| `/` | Cinematic aerial hero + before/after slider | Get Free Quote | 8 |
| `/services` | Dark grid hero + service tile wall | See All Services | 6 |
| `/services/roof-installation` | Split hero (photo left, specs right) | Get Installation Quote | 6 |
| `/services/roof-repair` | Full-bleed storm-damage photo hero | Book Repair | 6 |
| `/services/roof-replacement` | Before/after hero with overlay stats | Get Replacement Quote | 6 |
| `/services/emergency-repair` | Red-accent urgent hero | Call Now | 5 |
| `/areas` | Map-embed + coverage grid | Check My Area | 6 |
| `/reviews` | Masonry testimonial wall | Share Your Review | 5 |
| `/about` | Team photography split | Talk to Our Team | 6 |
| `/contact` | Split panel (form left, info right) | Send Message | 3 (utility) |
| `/quote` | Focused form + progress steps | Submit Quote Request | 2 (form-focused) |
| `/faq` | Accordion-based, dark accent header | Still Have Questions? | 4 |
| `/blog` | Editorial card grid | Read Article | 4 |
| `/privacy` | Legalese formatted | — | min_sections_exempt |
| `/terms` | Legalese formatted | — | min_sections_exempt |
| `/404` | Unexpected photo + compass + link home | Back to Home | min_sections_exempt |

---

## 11. Cross-Page Components

- `SiteHeader` — Topbar + main nav + condensed scroll state
- `SiteFooter` — 4-column footer grid with license info, hours, nav, attribution
- `MobileBottomNav` — 5-tab fixed bottom bar (< 1024px)
- `StickyCallPill` — Floating mobile CTA pill
- `QuoteFormWidget` — Embeddable quote form (short variant: 5 fields; long variant: `/quote` page full form)
- `TrustBadgeCluster` — Licensed + insured + years + guarantee badges
- `ReviewAggregateBar` — Star rating display
- `ThemeSwitcher` — Dark/light toggle in header (desktop) and mobile nav sheet

---

## 12. Shared State Requirements

- `theme`: `light | dark`, persisted to `localStorage`, initial value from `prefers-color-scheme`. Toggled by ThemeSwitcher.
- `mobileNavOpen`: boolean, controlled by hamburger + close button. Body scroll locked when open.
- `quoteFormDraft`: persisted to `sessionStorage` to preserve entered values on validation error or page reload.

---

## 13. Motion Posture

Default temperament: **`calm-precise`** — 180–240ms, ease-out, no spring on macro effects.  
Hero surfaces: **`restrained-cinematic`** — 260–320ms, ease-out, staggered word-by-word text reveal.  
Emergency service page: **`alive-energetic`** — 160–200ms, slight spring on CTA button.

Reduced-motion policy: All `translate` and `opacity` animations collapse to instant (0ms). Layout is preserved. No fallback shows different content.

---

## 14. Accessibility Posture

- WCAG 2.1 AA mandatory across all text/background pairs.
- AAA targeted for hero text against overlay backgrounds.
- Focus-visible ring: 3px, `--color-focus-ring` (offset-white on dark, offset-dark on light).
- Skip-to-content link: first focusable element on every page, visually hidden until focused.
- Every interactive component has `aria-label`, `role`, and keyboard parity with mouse interaction.
- `prefers-reduced-motion` respected via `useReducedMotion()` (Framer Motion built-in).
- Heading outline is strict per-page: single `h1`, logical descending hierarchy.

---

## 15. Localization Posture

Single locale (`en`) at launch. Content library keys are structured for future i18n expansion (`content.{locale}.json`). No hardcoded strings in components.

---

## 16. Implementation Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, RSC-first) |
| Styling | Tailwind CSS v4 + CSS custom properties for tokens |
| Animation | Framer Motion 12 |
| CMS | Sanity v3 (services, areas, reviews, blog, team) |
| Forms | React Hook Form + Zod |
| Email | Resend (quote + contact) |
| Analytics | PostHog |
| Images | next/image + Sanity CDN |
| Deployment | Vercel |
| Icons | Lucide React (outline, 20×20 default) |
| Fonts | Space Grotesk (display) + Inter (body) via `next/font` |

---

## 17. Route Map (Implementation)

```
app/
├── layout.tsx                   ← root layout: SiteHeader + SiteFooter + ThemeProvider + MobileBottomNav
├── page.tsx                     ← /
├── services/
│   ├── page.tsx                 ← /services
│   └── [slug]/
│       └── page.tsx             ← /services/[slug]
├── areas/
│   ├── page.tsx                 ← /areas
│   └── [slug]/
│       └── page.tsx             ← /areas/[slug]
├── reviews/
│   └── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── quote/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── privacy/
│   └── page.tsx
├── terms/
│   └── page.tsx
└── not-found.tsx                ← /404
```

**Root package-script shim:** A root `package.json` shim with `"dev"`, `"build"`, `"start"` is required so workspace tooling can invoke `npm run dev` from the repo root without `cd web/`.

---

## 18. File Output Inventory

All planning artifacts live under:
```
DOC/output/runs/20260509T1200-roofing/planning/frontend/
```

All implementation artifacts will live under:
```
web/
```

when the `frontend_developer` agent executes the plan.

---

## 19. AI Consumption Guidance

- Start with `ai-context.yaml` for routing.
- Read `design-system.tokens.json` as the single source of truth for all styling values.
- Per-route implementation: read the matching `pages/<route-slug>.md` design brief first, then `visual-differentiation-map.md` to confirm the route's visual signature, then `component-system.md` for composition primitives.
- Content: read `content.en.json` for all visible strings — never invent string values.
- Motion: read `motion-system.md` before implementing any animated component.
- The `frontend.json` summary is the handoff document for `backend_planner`.

---

## 20. Visual Differentiation Map (Summary)

Full map: [visual-differentiation-map.md](visual-differentiation-map.md)

| Route | Hero Composition | Primary Section Rhythm | Motion Temperament | Surface Stack |
|-------|-----------------|----------------------|-------------------|--------------|
| `/` | Full-bleed aerial + before/after slider + staggered wordmark | Alternating D/L, 8 sections | restrained-cinematic | Dark primary hero → Light → Dark counter → Light → Dark CTA |
| `/services` | Dark grid with 4 service pillar tiles as hero | Masonry/grid-dominant | calm-precise | Dark hero → Light grid → Dark CTA |
| `/services/roof-installation` | 60/40 split (photo left, spec sheet right) | Sequential reveal, step-based | calm-precise | Light-primary, one dark CTA band |
| `/services/roof-repair` | Full-bleed storm-damage close-up, text overlay bottom-left | Feature-alternating LR | calm-precise | Light-primary, dark urgency band |
| `/services/roof-replacement` | Before/after hero overlay with transformation stats | Before/after-slider primary | restrained-cinematic | Dark first, light content |
| `/services/emergency-repair` | Red-shifted hero, large clock/urgency visual | Single-column urgency stacked | alive-energetic | Dark red-tinted, no decorative rhythm |
| `/areas` | Map + cluster of town badges above fold | Grid-dominated, dense | calm-precise | Light-primary |
| `/reviews` | Full-width masonry quote wall as hero | Masonry-only, no alternation | calm-precise | Light throughout |
| `/about` | Team photo editorial split, oversized names | Story-narrative, long-form | restrained-cinematic | Alternating warm-light + dark |
| `/contact` | 50/50 split panel (no traditional hero) | Utility-dense, no sections | calm-precise | Light split |
| `/quote` | Focused minimal, step-progress bar top | Single column, form-focused | calm-precise | Light, no distractions |

