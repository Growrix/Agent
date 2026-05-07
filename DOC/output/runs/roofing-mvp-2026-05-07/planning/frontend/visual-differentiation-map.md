# Visual Differentiation Map — Roofing MVP

**Status:** PLANNED | **Timestamp:** 2026-05-07

---

## Overview

This document ensures no two routes have identical visual compositions. Each public route declares its visual signature: hero composition, primary section stack, motion temperament, and surface density. Routes with HIGH creative latitude must be visually unique from every other HIGH-latitude route.

---

## Route Latitude Classification

| Route | Latitude | Reason | Creative Freedom |
|---|---|---|---|
| `/` (Home) | HIGH | Flagship page; sets brand tone | Full freedom for hero, 5+ distinct sections |
| `/services` | MEDIUM | Service overview; reusable grid pattern | Grid layout standard, but section rhythm + hero can vary |
| `/services/[slug]` | MEDIUM | Dynamic detail; template-driven | Template consistent, but hero composition per service type |
| `/storm-damage` | HIGH | Emergency path; urgent visuals | Distinct urgent hero, fast-contact priority, warm accent dominance |
| `/materials` | MEDIUM | Comparison module; card-grid standard | Standard 3-column card layout; hero can differentiate |
| `/projects` | HIGH | Gallery showcase; visual portfolio | Before/after dominant, filters prominent, hero emphasizes work quality |
| `/financing` | MEDIUM | Trust/confidence strip; option cards | Card grid standard; hero + option presentation |
| `/contact` | LOW | Form + info; standard utility layout | Form + contact info + map; minimal hero variation |
| `/faq` | LOW | Accordion list; standard pattern | Accordion-only; minimal hero + intro |
| `/about` | MEDIUM | Team + trust; team grid standard | Team member grid; hero can emphasize leadership or story |
| `/areas` | MEDIUM | Area listing / search; reusable layout | Area search/filter pattern; hero emphasizes coverage |
| `/areas/[slug]` | MEDIUM | Area-specific landing; geo-targeted | Area-specific hero (mentions city); projects filtered to area |

---

## Visual Signature Matrix (Per-Route Composition)

### Home (`/`)

**Visual Signature Hash:** `home-calm-hero-bold-trust-stack`

**Composition:**
- Hero: Full-bleed calm hero (blue sky or worksite background) + text overlay + trust badges (left align) + centered CTA button
- Section 2: Trust signal strip (ratings, years, areas, response time) — compact horizontal layout
- Section 3: Service grid (3-column, service cards with icons)
- Section 4: Featured project or before/after carousel (1-2 featured projects highlighted)
- Section 5: Material comparison cards (3-column, preview of `/materials`)
- Section 6: Financing trust strip (partner logos + benefit copy)
- Section 7: CTA band (centered, accent background, strong call-to-action)

**Primary section rhythm:** 80px top/bottom (desktop standard)
**Motion temperament:** Calm-precise (reassuring, 200–240ms staggered entrances)
**Surface stack:** Hairline borders on cards, shadow-base on hover
**Content density:** Spacious hero (100svh or 80svh), balanced content, generous whitespace
**Asymmetry:** None; balanced, professional grid-based layout

**Visual differentiation from other HIGH-latitude routes:**
- Vs. `/storm-damage`: Home is calm, professional; Storm page is urgent, warm-accent-heavy
- Vs. `/projects`: Home teases projects; Projects page is gallery-dominant with before/after toggle
- Unique elements: Trust strip directly below hero; financing preview

---

### Storm Damage (`/storm-damage`)

**Visual Signature Hash:** `storm-urgent-hero-warm-accent-fast-cta`

**Composition:**
- Hero: Full-bleed urgent hero (dramatic storm cloud image or damaged roof image) + warm accent gradient overlay (50%+ opacity) + LARGE red/warm headline ("Storm Damage?") + emergency CTA button (accent color, large) + phone number clickable (warm accent)
- Section 2: Urgency messaging + insurance claim explainer (2-column desktop, warm accent border on left)
- Section 3: Fast contact form (name, phone, brief description; pre-filled service type = "Emergency")
- Section 4: FAQ micro-section (storm-specific Q&A; 3 key questions)
- Section 5: CTA band (accent background, "Document your damage" message)

**Primary section rhythm:** Compact (56px or less) — fast navigation
**Motion temperament:** Urgent-alert (warm accent emphasis; faster scroll reveals; 160–200ms)
**Surface stack:** Warm accent accent borders on key sections; urgent red/amber semantic colors
**Content density:** Compact, focused; remove non-essential sections; CTA above fold
**Color dominance:** Warm accent (amber/orange) used instead of primary navy; urgent red on badges

**Visual differentiation from Home:**
- Hero background: dramatic/destructive image vs. calm worksite
- Accent color: warm accent (amber) replaces navy in CTA hierarchy
- Section rhythm: faster, more compact
- Motion: faster, more urgent (160–200ms vs. 200–240ms)
- Forbidden: no secondary content; only emergency path

**Unique signature elements:**
- Warm accent dominance (footer, badging, CTA)
- Emergency contact form (not inspection request form)
- Insurance explainer section

---

### Projects (`/projects`)

**Visual Signature Hash:** `gallery-before-after-showcase-filter-grid`

**Composition:**
- Hero: Full-bleed hero with before/after composite image (split-screen or carousel toggle) + text overlay ("Our Work" or "Completed Projects") + small trust stat overlay
- Section 2: Filter bar (job type buttons: inspection, replacement, repair, maintenance; area buttons: city/region names)
- Section 3: Before/after gallery grid (4-column desktop, 2-column tablet, 1-column mobile) — cards have toggle button to reveal after image
- Section 4: Optional: project detail modal or expand section (click card to see warranty, customer quote, timeline)
- Section 5: CTA band ("See similar work? Schedule your inspection")

**Primary section rhythm:** 80px top/bottom (normal); gallery: 24px gap
**Motion temperament:** Calm-precise; image toggle crossfade 200ms; filter transition 200ms
**Surface stack:** Cards with shadow-base; border-light on toggle button
**Content density:** Gallery-focused; minimal text; image dominance
**Imagery direction:** High-quality before/after photography; real worksite photos

**Visual differentiation from Home:**
- Hero: composite before/after vs. single background
- Primary content: image-dominant gallery vs. text/service grid
- Motion: image fade transitions vs. text reveal stagger
- Filters prominent: not present on home page

**Unique signature elements:**
- Before/after toggle on each card (motion-heavy)
- Job type + area filter bar (interactive, multi-select)
- Warranty badge overlay on cards

---

### Materials (`/materials`)

**Visual Signature Hash:** `material-comparison-cards-attributes-matrix`

**Composition:**
- Hero: Full-bleed hero with material samples or comparison callout ("Compare Roofing Materials") + intro copy on material selection
- Section 2: Material comparison cards (3-column: asphalt, metal, tile) — each card has icon, name, attributes (cost, durability, aesthetic, maintenance, warranty), use-case copy, CTA button
- Section 3: Optional: side-by-side attribute comparison matrix table (desktop only; shows all materials vs. attributes)
- Section 4: CTA band ("Ready to choose? Get a free consultation")

**Primary section rhythm:** 80px standard
**Motion temperament:** Calm-precise; card entrance staggered 240ms per card
**Surface stack:** Card padding 24px; shadow-base; border-light
**Content density:** Balanced; attributes listed clearly; generous padding
**Asymmetry:** All 3 materials equal visual weight; no "recommended" bias (let user decide)

**Visual differentiation from Home & Services:**
- Hero: specific to material education vs. general roofing intro
- Content: attribute matrix vs. service benefits
- Cards: material specs vs. service offerings

**Unique signature elements:**
- Material icons (asphalt shingles, metal panels, tile sheets) on cards
- Durability + cost displayed prominently per material
- Optional matrix table (desktop additional view)

---

### About (`/about`)

**Visual Signature Hash:** `about-team-grid-leadership-story`

**Composition:**
- Hero: Full-bleed hero image (team photo or company building) + headline ("Meet the Team" or "Trusted Local Leadership") + optional: company origin story callout
- Section 2: Company story / origin text (1–2 paragraphs, centered, max-width 600px)
- Section 3: Team member grid (3-column desktop, 2-column tablet, 1-column mobile) — each card: photo (circular, 1:1), name, title, bio (2–3 lines), optional social links
- Section 4: Trust credentials section (years founded, certifications, industry affiliations, awards)
- Section 5: CTA band ("Ready to work with us?")

**Primary section rhythm:** 80px standard
**Motion temperament:** Calm-precise; team card entrance staggered 240ms per member
**Surface stack:** Team cards: photo + text stack; shadow-base on hover
**Content density:** Spacious; generous margins around text; ample whitespace
**Imagery direction:** Real team member photos; professional headshots; authentic workplace imagery

**Visual differentiation from other pages:**
- Hero: team/office photo vs. worksite image
- Primary content: team member profiles vs. service/product information
- Cards: circular photos vs. rectangular project images
- Motion: team card stagger vs. other card patterns

**Unique signature elements:**
- Team member circular portrait photos
- Credentials / awards section (not present elsewhere)
- Optional founder story callout

---

### Contact (`/contact`)

**Visual Signature Hash:** `contact-form-utility-low-latit`

**Latitude:** LOW (minimal variation permitted)

**Composition:**
- Hero: Simple hero with headline ("Get in Touch") + contact info overlay (phone, hours, address, email)
- Section 2: Contact form (inspection request form; standard layout)
- Section 3: Contact info + map (optional Google Maps embedded; address + hours + phone clickable)
- Section 4: FAQ link or "Other questions?" secondary CTA

**Primary section rhythm:** 56px (more compact than high-latitude pages)
**Motion temperament:** Minimal; form field focus effects only; no scroll reveals
**Surface stack:** Form fields: standard input styling
**Content density:** Compact; form-focused

**Visual differentiation:** None significant (low-latitude page); follows standard utility pattern.

---

## Cross-Route Comparison Matrix

| Route | Hero Type | Primary Section | Color Dominance | Motion Tempo | Unique Element |
|---|---|---|---|---|---|
| Home | Calm worksite bg | Service grid | Navy primary | Calm-precise (200–240ms) | Trust strip below hero |
| Storm | Urgent/dramatic bg | Insurance explainer | Warm accent | Urgent (160–200ms) | Emergency contact form |
| Services | Minimal | Service grid | Navy primary | Standard (200ms) | Reusable grid layout |
| Service Detail | Outcome-focused | Specific benefits | Navy primary | Standard (200ms) | Service-specific iconography |
| Materials | Comparison intro | Material cards | Navy primary | Standard (200ms) | Material attributes matrix |
| Projects | Before/after composite | Gallery grid | Navy primary | Image-motion (200ms crossfade) | Before/after toggle on cards |
| Financing | Trust intro | Financing cards | Navy primary + accent | Standard (200ms) | Warranty partner logos |
| Contact | Simple utility | Contact form | Navy primary | Minimal | Map embed (optional) |
| FAQ | Simple utility | Accordion | Navy primary | Minimal | Accordion per category |
| About | Team photo | Team grid | Navy primary | Standard (200ms) | Circular team portraits |
| Areas | Coverage intro | Area list/search | Navy primary | Standard (200ms) | Area filter/search bar |
| Area Detail | Geo-specific intro | Area projects + info | Navy primary | Standard (200ms) | Area-specific projects |

---

## Visual Consistency Rules (Enforced Across All Routes)

**Mandatory consistent elements (no variation):**
- Header structure: logo left, nav center, utility right
- Footer structure: 5-column layout + bottom bar (desktop); stack (mobile)
- Dark theme: consistent color inverses across all pages
- Typography scale: consistent heading hierarchy
- Spacing unit: 8px base divisible structure
- Component styling: button, input, badge, link appearance identical across pages
- Accessibility: heading outline, focus indicators, ARIA labels consistent

**Permitted variations (per latitude):**
- Hero background imagery (HIGH latitude)
- Primary section arrangement (HIGH latitude: free; MEDIUM: guided; LOW: fixed)
- Color accent usage (emphasized on storm page, subtle elsewhere)
- Motion intensity (faster on storm; standard elsewhere)
- Content density (spacious on home/projects; compact on contact/faq)

---

## Visual Differentiation Verification Checklist

- [ ] No two HIGH-latitude routes share the same hero composition, primary section stack, or motion pattern
- [ ] HOME hero: calm background, centered text, trust strip direct below
- [ ] STORM hero: dramatic/urgent background, warm accent, fast contact CTA (distinct from HOME)
- [ ] PROJECTS hero: before/after composite or carousel (distinct from HOME calm single image)
- [ ] MATERIALS hero: material-specific iconography or samples (distinct from SERVICE grid)
- [ ] ABOUT hero: team photo or office image (distinct from worksite/project photos)
- [ ] Each MEDIUM-latitude page has unique hero messaging (not copy-paste from Home)
- [ ] LOW-latitude pages (CONTACT, FAQ) use minimal hero variation (acceptable reuse of pattern)
- [ ] Dark theme colors verified for all page compositions
- [ ] All animations respect reduced-motion preference on all routes
- [ ] Footer attribution visible and consistent across all routes

---

**Next:** Page-specific design briefs will cross-reference this map for composition guidance.
