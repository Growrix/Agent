# Page Design Brief: PORTFOLIO

**Route:** `/portfolio`  
**Status:** LOCKED  
**Lead Gen Role:** PRIMARY — Proof of capability, trust trigger before conversion  
**Section Density:** 6 sections  
**Mobile First:** Yes  
**SEO Critical:** Yes  
**Visual Latitude:** HIGH  
**Visual Signature Hash:** `portfolio::gallery-mosaic::playful-reveal::visual-led`

---

## Page Definition

**User Intent:** See real installation examples, verify quality, confirm the company has done work similar to their property type, and gain confidence before committing to an assessment.

**Conversion Outcome:** User books a free assessment after seeing relatable project proof.

**Primary CTA:** "Start Your Solar Project"  
**Secondary CTA:** "Get Free Assessment"

**KPI:** Assessment clicks from portfolio page; lightbox interactions; before/after slider engagement.

---

## Outcomes (What Must Be True)

1. ✓ User can see before/after proof of real installations within 1 scroll.
2. ✓ Gallery contains a minimum of 12 project cards with distinct categories (residential, commercial, roof types).
3. ✓ Each project shows measurable results (savings amount or kW system size).
4. ✓ Filtering by project type works without page reload.
5. ✓ Mobile gallery is touch-friendly with swipe support.
6. ✓ "Get Free Assessment" CTA is reachable within 1 tap at any scroll depth.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | portfolio.hero.headline | Value Prop |
| Page subheadline | portfolio.hero.subheadline | Proof Statement |
| Project count metrics | portfolio.metrics.* | Trust Signals |
| Gallery filter labels | portfolio.filters.* | Navigation |
| Project cards (12+) | portfolio.projects.* | Portfolio Proof |
| Results highlight strip | portfolio.results.* | Social Proof |
| CTA band | portfolio.cta.* | Conversion Driver |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Gallery Impact)
**Purpose:** Prove capability through visual volume — images do the talking, copy is minimal.  
**Layout Intent:** Full-bleed image mosaic background (4 blurred installation photos). Dark horizontal gradient bands at top and bottom. Content center-aligned, bottom-anchored (newspaper editorial style). 100vw × 75svh desktop, 65svh mobile.  
**Surface Style:** Deep dark overlay — mosaic images at 30% opacity in background, solid dark vignette bands top/bottom.  
**Copy Snapshot:**
- H1: "Our Work Speaks for Itself" — 64px desktop, 34px mobile, white, center
- Subheadline: "15,000+ installations. Before and after. Real results." — 22px, white 85%
- Metrics strip: 3 inline pills — "15,000+ Installs | 12 Years | 97% Satisfaction"
- CTA: "Browse the Gallery" (single CTA, centered, amber)

**Motion:** H1 splits into two halves — top half slides up, bottom half slides down, meeting in center (cinematic reveal, 600ms). Subheadline fades in at 500ms. Metrics strip fades in at 700ms.  
**Motion Fallback:** Instant opacity, all elements visible.

---

### Section 2: GALLERY FILTERS
**Purpose:** Let users filter by project type — residential, commercial, roof type, system size. Reduces irrelevant browsing.  
**Layout Intent:** Horizontal pill-filter bar (scrollable on mobile). Filters: All | Residential | Commercial | Battery Storage | Large Systems (>10kW) | Small Systems (<5kW).  
**Surface Style:** Light surface bar, amber active filter, gray inactive.  
**Interaction:** Click filter → cards animate out/in (opacity + slight scale). URL query param updates (`?type=residential`) for shareability.  
**Accessibility:** `role="group"` on filter container, `aria-pressed` on each filter button.

---

### Section 3: PROJECT GALLERY (Masonry Grid)
**Purpose:** Core portfolio — visual-first grid of real installation projects.  
**Layout Intent:** Masonry-style grid (variable heights) — not uniform grid. 4-column masonry (desktop), 2-column (tablet), 1-column (mobile). Each card: project image + overlay on hover with project name + category badge + savings amount.  
**Surface Style:** Clean white grid, cards with no border (let images breathe).  
**Copy Snapshot (per card):**
- Project name: "Rodriguez Family Home, Sacramento"
- Category badge: "Residential" (amber pill)
- System size: "8.4kW System"
- Savings: "$6,200+ annual savings"
- Install date: "March 2025"

**Interaction:**
- Hover (desktop): Overlay slides up from bottom with project meta + "View Details" button
- Click: Opens Lightbox with before/after slider + full project details
- Mobile: Overlay always visible (no hover)

**Motion:** Cards stagger-entrance on scroll (30ms stagger per card, 300ms each, scale 0.95→1 + fade).  
**Lightbox content:** Before/after slider + project story (1 paragraph) + metrics (kW, savings, install time) + "Start Your Project" CTA.

---

### Section 4: FEATURED RESULTS STRIP
**Purpose:** Reinforce with aggregate metrics — makes the gallery feel authoritative, not just pretty.  
**Layout Intent:** Horizontal strip (light teal `var(--color-secondary-50)` background). 4 large metrics in a row.  
**Copy Snapshot:**
- "15,000+ Projects Completed"
- "$180M+ in Customer Savings"
- "97% Customer Satisfaction"
- "4.9 ⭐ Average Rating"

**Motion:** Count-up animation on scroll-into-view (1000ms each).

---

### Section 5: BEFORE & AFTER SHOWCASE
**Purpose:** Give the most tangible visual proof — same property before solar and after. Builds confidence and reduces purchase uncertainty.  
**Layout Intent:** 2 featured before/after comparisons, side-by-side (desktop), stacked (mobile). Each comparison uses `BeforeAfterSlider` — drag to reveal.  
**Copy Snapshot:**
- Project 1: "Whitfield Residence — $8,450+ Annual Savings | Installed 2024"
- Project 2: "Patel Commercial Warehouse — $42,000+ Annual Savings | Installed 2023"

**Interaction:** Interactive drag slider with drag handle icon. Arrow keys (5% per keypress). Touch drag on mobile.  
**Accessibility:** `role="slider"`, `aria-valuemin/max/now`, keyboard-navigable.

---

### Section 6: CTA BAND
**Purpose:** Close the proof loop — user has seen real work, now invite them to start theirs.  
**Layout Intent:** Full-width dark band (`var(--color-surface-dark-900)`), amber accent. Center content (desktop/mobile both centered).  
**Copy Snapshot:**
- Headline: "Ready to Add Your Home to Our Portfolio?"
- Subheadline: "Join 15,000+ homeowners who chose SunEnergy Pro. Start with a free assessment."
- CTA Primary: "Start Your Solar Project"
- CTA Secondary: "Call +1-555-766-2576"

**Motion:** Band fades in on scroll.

---

## Forbidden Patterns

- ✗ MUST NOT use narrative/story-driven hero layout (reserved for Home and About)
- ✗ MUST NOT have feature comparison tables (this is for Services)
- ✗ MUST NOT show text-heavy service descriptions (images lead here)
- ✗ MUST NOT use identical card layout as the Home portfolio teaser (those are 2-card; this is masonry 12+)

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home teases 2 projects; Portfolio shows 12+. Home is story-driven with overlay text; Portfolio is image-first with minimal copy. Different mosaic hero vs. narrative single-image hero.  
**vs. SERVICES:** Services is text + icons (technical grid); Portfolio is images + metrics (visual gallery). Opposite visual density strategies.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `playful-reveal` — visual delight, images feel alive. More energetic than Services.  
**Key moments:**
- H1 cinematic split-reveal: creates drama and excitement
- Card stagger-entrance: gallery "breathes" into view
- Before/after drag: tactile, satisfying feedback

**Reduced-motion fallback:**
- H1 split: instant opacity
- Card stagger: simultaneous 200ms fade
- Before/after: slider still functional, no entrance animation

---

## State Requirements

| State | Behavior |
|-------|----------|
| Loading (gallery) | Shimmer skeleton grid (same masonry layout, gray blocks) |
| Empty filtered | "No projects match this filter. View all projects." with reset button |
| Lightbox open | Full-screen overlay, focus trapped, Escape closes |
| Error (images fail) | Gray placeholder with alt text; project meta still visible |

---

## SEO + Schema

- **Title:** "Solar Installation Portfolio — 15,000+ Real Projects | SunEnergy Pro"
- **Meta description:** "View SunEnergy Pro's portfolio of 15,000+ completed solar installations. Before & after galleries, savings metrics, residential & commercial projects."
- **H1:** "Our Work Speaks for Itself"
- **Schema:** `ImageGallery` schema, `BreadcrumbList`
- **Image SEO:** All project images have descriptive `alt` text including location and project type
- **Canonical:** `/portfolio`

---

## Performance Plan

- LCP target: < 2.5s (hero mosaic images: blur/placeholder first, progressive load)
- Images: `next/image` with WebP, lazy below fold, `priority` on first 4 cards
- Masonry layout: CSS columns (no JS masonry library needed)
- JS budget: ≤ 70KB (includes before/after slider logic)
- Lightbox: dynamic import — only loads JS when lightbox is triggered

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `portfolio_filter_click` | Click any filter pill |
| `portfolio_card_click` | Click any project card |
| `lightbox_open` | Lightbox opens |
| `lightbox_slider_drag` | User drags before/after slider |
| `portfolio_cta_click` | Click CTA from this page |
| `gallery_scroll_depth` | 50% and 100% scroll milestones |

---

## Open Questions

1. Do we have 12+ real project photos with consistent before/after pairs?
2. Are specific savings amounts (e.g., $8,450) approved for publication?
3. What filter categories should be active at launch vs. added later?
