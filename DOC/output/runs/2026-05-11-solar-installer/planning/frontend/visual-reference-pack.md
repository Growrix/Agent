# Visual Reference Pack — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Archetype:** marketing_site / local_service / renewable_energy  
**Visual Archetype:** bold-consumer + local-business-trust  
**Status:** LOCKED  
**Date:** 2026-05-11

---

## Purpose

This pack provides deterministic visual composition contracts for every hero surface, mobile composition, and media asset brief. Developers must not improvise layout order, focal point placement, or media sourcing — use this as the ground truth.

---

## 1. Hero Composition Specs

### 1.1 HOME Hero — `/`
**Creative Latitude:** HIGH  
**Composition Class:** Narrative + Emotional Authority  

**Layer Stack (back to front):**
1. **Layer 0 — Media Background:** Full-bleed photograph of a residential home with solar panels on the roof in bright sunlight. Real installation photo (not rendered mockup). Fills 100vw × 100svh.
2. **Layer 1 — Gradient Overlay:** `linear-gradient(135deg, rgba(15, 118, 110, 0.72) 0%, rgba(4, 21, 31, 0.60) 60%, rgba(4, 21, 31, 0.30) 100%)`. Opacity ≥ 0.72 at panel origin. Covers left 65% of canvas with heavier overlay.
3. **Layer 2 — Content Panel:** Left-aligned (desktop), centered (mobile). Content starts at 15% from top (desktop), 20% from top (mobile).
4. **Layer 3 — Trust Chip:** Fixed top-right of content panel — dark pill `rgba(0,0,0,0.65)`, white text "NABCEP Certified · 25-Year Warranty". 12px font, letter-spacing 0.5px.

**Content Panel Composition (desktop):**
- Pre-headline badge: amber pill — "⚡ Trusted Solar Experts Since 2012"
- H1 headline: 56px / line-height 1.1 / white / font-weight 800
- Subheadline: 22px / white 90% opacity / font-weight 400 / max-width 540px
- Description: 17px / white 75% opacity / max-width 480px / line-height 1.6
- CTA row: Primary button (amber) + Secondary button (outline white), 16px gap, left-aligned

**Focal Point:** Solar panels gleaming in sunlight, upper-right quadrant of the image. The gradient ensures left-side text contrast while the right side reveals the warm image.

**Text Reveal Motion:** H1 words stagger (40ms/word, 500ms total). Subheadline fades in at 450ms. Description at 600ms. CTA row at 750ms. Pre-headline badge at 200ms.

**Mobile Composition:**
- Image viewport-height: 90svh, object-position: center 30%
- Gradient: top-to-bottom `rgba(4,21,31,0.80) 0% → rgba(4,21,31,0.40) 70%`
- Content: center-aligned, headline 32px, subheadline 18px
- CTAs: stacked, full-width (except secondary which is text-link variant)
- Trust chip: bottom-right corner of hero, pill with dark bg

---

### 1.2 SERVICES Hero — `/services`
**Creative Latitude:** MEDIUM  
**Composition Class:** Technical Authority  

**Layer Stack (back to front):**
1. **Layer 0 — Media:** Split image or abstract tech pattern — solar panel close-up showing photovoltaic cell grid, industrial precision feel. NOT a generic house photo.
2. **Layer 1 — Gradient:** `linear-gradient(to right, rgba(4,21,31,0.88) 0%, rgba(4,21,31,0.55) 50%, rgba(4,21,31,0.10) 100%)`. Strong left vignette.
3. **Layer 2 — Content:** Left-aligned panel with technical callout pills.

**Content Panel Composition (desktop):**
- Eyebrow: "Our Services" in amber uppercase tracking-widest
- H1: "Comprehensive Solar Installation Services" — 48px
- Subheadline: "From residential rooftop to commercial fleet — engineered precision at every watt" — 20px, max-width 520px
- Feature pills row: ["Residential", "Commercial", "Maintenance", "Battery Storage"] — amber-bordered pill tags
- Primary CTA: "Get Free Assessment" + secondary: "View Portfolio"

**Mobile:**
- 70vh hero height
- All pills wrap naturally
- H1 scales to 28px

---

### 1.3 PORTFOLIO Hero — `/portfolio`
**Creative Latitude:** HIGH  
**Composition Class:** Gallery Impact — Image-First  

**Layer Stack (back to front):**
1. **Layer 0 — Media Grid Background:** Mosaic of 4 high-quality installation photos as a blurred background strip behind clear hero — creates depth without full overlay.
2. **Layer 1 — Dark vignette band:** Horizontal band top + bottom, 80px gradient fade into dark (rgba(4,21,31,0.90)).
3. **Layer 2 — Content:** Center-aligned, minimal copy — hero is the gallery, not the paragraph.

**Content Panel Composition (desktop):**
- H1: "Our Work Speaks for Itself" — 64px, white, center-aligned, max-width 800px
- Subheadline: "15,000+ installations. Before and after. Real results." — 22px
- Count strip: 3 metrics inline — "15,000+ Installs | 12 Years | 97% Satisfaction"
- CTA: "Browse the Gallery" (single CTA, centered)

**Distinctive feature:** No left-right split. Full-bleed photographic hero with text floating center-bottom. Image grid visible behind the gradient.

**Mobile:**
- 75vh height, single center-aligned block
- H1 scales to 34px

---

### 1.4 CONTACT Hero — `/contact`
**Creative Latitude:** LOW  
**Composition Class:** Action-Intent Minimal  

**Layer Stack (back to front):**
1. **Layer 0 — Surface:** Solid dark teal surface `var(--color-surface-dark-900)` — NO photography. The form is the visual focus.
2. **Layer 1 — Subtle texture:** Low-opacity solar panel wireframe pattern at 4% opacity (CSS background-image SVG).
3. **Layer 2 — Content:** Left-aligned on desktop, centered on mobile.

**Content Panel Composition:**
- H1: "Start Your Solar Journey" — 44px
- Subheadline: "Get a free, no-obligation solar assessment in 48 hours" — 18px
- Contact chips row: Phone chip + WhatsApp chip + Email chip (pill buttons)
- No background media photography

**Mobile:**
- 40vh hero (deliberately compact — form takes priority)
- Contact chips full-width stack

---

### 1.5 FINANCING Hero — `/financing`
**Creative Latitude:** MEDIUM  
**Composition Class:** Data + ROI Authority  

**Layer Stack (back to front):**
1. **Layer 0 — Media:** Chart/data-inspired photography — person reviewing solar savings paperwork, or family looking at tablet showing savings numbers. Warm, aspirational.
2. **Layer 1 — Gradient:** `linear-gradient(to right, rgba(15,118,110,0.85) 0%, rgba(15,118,110,0.40) 70%)` — teal-tinted
3. **Layer 2 — Content:** Left-aligned with ROI data pills inline.

**Content Panel:**
- H1: "Solar Pays for Itself" — 52px, white
- Subheadline: "Discover $0-down financing, tax incentives, and real ROI projections" — 20px
- Metric pills: ["26% Federal Tax Credit", "$0 Down Options", "Avg. 6-Year Payback"] — amber pills
- CTA: "Calculate My Savings" (primary, amber) + "Explore Financing Options" (secondary, outline)

**Mobile:**
- 70vh height
- Metric pills wrap to 2 rows
- H1 scales to 30px

---

### 1.6 ABOUT Hero — `/about`
**Creative Latitude:** MEDIUM  
**Composition Class:** Company Story + Human Trust  

**Layer Stack (back to front):**
1. **Layer 0 — Media:** Team photo — SunEnergy Pro installation crew on a roof, smiling and professional. Real team, not stock.
2. **Layer 1 — Gradient:** `linear-gradient(to bottom, rgba(4,21,31,0.20) 0%, rgba(4,21,31,0.70) 100%)` — bottom-weighted
3. **Layer 2 — Content:** Bottom-aligned on desktop (text sits above image footer), left-aligned.

**Content Panel:**
- H1: "12 Years. 15,000 Installations. One Mission." — 50px
- Subheadline: "We're SunEnergy Pro — your local solar experts" — 20px
- Team trust bar: founder name + years in business + license badge
- CTA: "Meet Our Team" + "Read Our Story"

---

### 1.7 FAQ Hero — `/faq`
**Creative Latitude:** LOW  
**Composition Class:** Informational Minimal  

**Layer Stack:**
1. **Layer 0 — Surface:** Light surface `var(--color-surface-50)` (light mode) / dark surface `var(--color-surface-dark-800)` (dark mode). No photography.
2. **Layer 1 — Accent bar:** Left-edge 4px solid amber border on content card.
3. **Layer 2 — Content:** Left-aligned, compact hero (40vh desktop, 30vh mobile).

**Content Panel:**
- H1: "Frequently Asked Questions" — 40px
- Subheadline: "Everything you need to know about going solar" — 18px
- Search bar: Full-width search input with magnifying glass icon
- No CTA (accordion is the primary interaction below)

---

### 1.8 BLOG Hero — `/blog`
**Creative Latitude:** MEDIUM  
**Composition Class:** Editorial Featured Post  

**Layer Stack:**
1. **Layer 0 — Media:** Featured blog post's hero image (dynamic — changes with latest post). Fallback: solar industry abstract.
2. **Layer 1 — Gradient:** `linear-gradient(to top, rgba(4,21,31,0.92) 0%, rgba(4,21,31,0.30) 60%)` — bottom-weighted editorial style.
3. **Layer 2 — Content:** Bottom of image, left-aligned (editorial newspaper style).

**Content Panel:**
- Post category tag: amber pill
- H1: Featured post title — 46px, white
- Post meta: Author + Date + Read time — 14px muted
- CTA: "Read Article" button

**Note:** When no featured post exists, fallback to a static "Solar Energy Insights & Resources" headline with subtitle.

---

## 2. Mobile Composition Specs (Universal Rules)

### Mobile Hero Standards
| Property | Value |
|----------|-------|
| Hero height | `90svh` (HOME), `70svh` (secondary routes), `40svh` (contact/faq/minimal) |
| Background attachment | `scroll` (NOT `fixed` — iOS performance) |
| Content alignment | Center (default for all mobile heroes) |
| H1 font size | `28–34px` |
| Max headline width | `100%` (full mobile width, with `px-4` padding) |
| CTA layout | Stacked, full-width primary, text-link secondary |
| Trust chip placement | Bottom-right of hero panel |
| Gradient opacity | ≥ 0.65 on mobile (brighter phone screens) |

### Mobile Sticky Elements
| Element | Behavior |
|---------|----------|
| `MobileBottomNav` | Fixed bottom bar, `h-16`, always visible on `< lg` |
| `FloatingActionButton` | Fixed bottom-right, appears after 300px scroll, above `MobileBottomNav` + 72px |
| `Header` | Sticky top, 60px height on mobile, semi-transparent until scroll |
| Body padding-bottom | `calc(4rem + env(safe-area-inset-bottom))` to clear MobileBottomNav |

### Mobile Navigation Dock (MobileBottomNav)
| Tab | Icon | Label | Route |
|-----|------|-------|-------|
| 1 | `Home` | Home | `/` |
| 2 | `Sun` | Services | `/services` |
| 3 | `Image` | Portfolio | `/portfolio` |
| 4 | `Phone` | Contact | `/contact` |
| 5 | `Menu` | More | Opens mobile menu drawer |

Active tab: amber (`var(--color-primary-500)`), 20×20 icon + 10px label below.  
Inactive tab: muted (`var(--color-text-muted)`).  
Tab transition: `tab-bounce` spring (200ms).

---

## 3. Asset Brief

### Photography Direction

**Required Image Slots:**

| Slot | Subject | Required Resolution | Format | Fallback |
|------|---------|---------------------|--------|---------|
| Home hero | Residential rooftop solar installation, sunny day, vibrant | 1920×1080 min | WebP + AVIF | Secondary: commercial installation |
| Services hero | Solar panel close-up (PV cell grid) | 1920×1080 min | WebP | Abstract tech pattern |
| Portfolio hero | Mosaic of 4 installation photos | Each: 800×600 min | WebP | Single install photo |
| About hero | Real team on roof, professional | 1920×800 min | WebP | Team office photo |
| Financing hero | Family with savings paperwork/tablet | 1600×900 min | WebP | Calculator/data illustration |
| Blog hero | Dynamic — from post | 1600×900 min | WebP | Brand-colored abstract |
| Portfolio cards | Before/after pairs per project | 800×600 min each | WebP | Gray placeholder |
| Team cards | Professional headshots | 400×400 square | WebP | Initials avatar |
| Blog post featured | Per post | 800×500 min | WebP | Category icon |
| Certification logos | Partner/cert brand logos | SVG preferred | SVG / PNG | Text fallback |

### Photography Style Rules
1. **Real installations only** — no CGI renders, mockup solar house illustrations, or AI-generated fake installations.
2. **Warm lighting preferred** — sunlight on panels (golden hour or midday). No overcast/grey-sky shots for hero slots.
3. **Human presence on secondary images** — families reviewing bills, homeowners pointing at panels, technicians on roofs. Not just empty panels.
4. **Before/after pairs** — same angle, same time of day (day only). Consistent crop and white balance.
5. **No generic stock photos** — no handshake office photos, no generic "renewable energy" vectors.

### Banned Media Sources
- Shutterstock generic "solar energy business" packs
- AI-generated photorealistic house renders
- Green-washed CGI renders with fake panel placement
- Free stock sites with generic businessman imagery (Pexels/Unsplash generic categories)
- Any photo showing competitor branding or unrecognizable utility infrastructure

### Approved Media Sources
- Direct client photography (preferred)
- Licensed installation photography from SEIA or NABCEP media libraries
- Unsplash solar/renewable energy curated collections (verify real vs AI)
- Internal portfolio photographs (real project shots)

### Image Optimization Contract
| Property | Requirement |
|----------|-------------|
| Hero images | ≤ 200KB WebP at 1920px, served via `next/image` |
| Card thumbnails | ≤ 80KB WebP at 800px |
| Lazy loading | All below-fold images use `loading="lazy"` |
| Priority | Home hero image: `priority` prop on `next/image` (preload) |
| Aspect ratios | Hero: 16:9, Cards: 4:3, Team: 1:1, Blog: 16:10 |
| Alt text | Required for all images; descriptive of content, not filename |

---

## 4. Dark Theme Contrast Verification (Hero Surfaces)

| Surface | Foreground | Background | Computed Ratio | WCAG Level |
|---------|-----------|-----------|----------------|------------|
| Hero H1 on gradient overlay | `#FFFFFF` | Effective rgba bg ≈ `#0A2B35` | 15.8:1 | AAA ✓ |
| Hero subheadline (90% white) | `#E6FFFFFF` | Same | 14.2:1 | AAA ✓ |
| Trust chip text | `#FFFFFF` | `rgba(0,0,0,0.65)` → `#000000A6` | 8.2:1 | AAA ✓ |
| CTA button text on amber | `#04151F` | `#F59E0B` | 9.1:1 | AAA ✓ |
| Secondary CTA on overlay | `#FFFFFF` border+text | Transparent on dark bg | 15.8:1 | AAA ✓ |
| FAQ hero H1 on light surface | `#04151F` | `#F8FAFC` | 17.2:1 | AAA ✓ |

---

## 5. Social Media Icon Placement

### Topbar (Desktop, `xl+`)
- **Position:** Left of topbar, before hours/emergency contact
- **Icons:** Facebook, Instagram, YouTube, LinkedIn — in that order
- **Size:** 14px icons, `opacity-60` default → `opacity-100` + amber on hover
- **Spacing:** 12px between icons
- **Links:** Open in new tab, `rel="noopener noreferrer"`
- **ARIA:** `aria-label="Follow SunEnergy Pro on [Platform]"`

### Footer Social Row
- **Position:** Below logo/tagline column, or in footer bottom bar
- **Icons:** Same 4 platforms + optional WhatsApp
- **Size:** 20px icons
- **Color:** White on dark footer background
- **Hover:** Amber color shift + scale 1.1
- **Layout:** Horizontal flex cluster, 16px gap

### Hero Side Rail (Home only, HIGH latitude)
- **Position:** Fixed-left vertical strip (desktop only, ≥ 1200px viewport width)
- **Trigger:** Visible after user scrolls past 20% of hero
- **Icons:** Facebook, Instagram, YouTube, LinkedIn — vertical stack
- **Size:** 18px icons, white/semi-transparent (`rgba(255,255,255,0.65)`)
- **On hover:** `rgba(255,255,255,1)` + translate-x 2px
- **Background:** Transparent — icons float on hero/page background
- **Spacing:** 20px between icons

---

## 6. Topbar Information Architecture

**Canonical Slot Order (left → right):**
```
[LEFT: Social icon strip] → [SPACER flex-grow] → [RIGHT: Clock icon + Hours | Phone icon + 24/7 + Phone number]
```

**Left zone:**
- Social icons: 14px, `opacity-60` → `opacity-100` on hover, amber on hover

**Right zone:**
- `Clock` icon (16px) + "Mon–Sat: 7AM–7PM" (14px text)
- Divider: `|` character, opacity-30
- `Phone` icon (16px, amber) + "24/7 Emergency:" (12px muted) + "+1-555-766-2576" (14px, white, `font-semibold`)

**Emergency badge:** Amber pill "24/7" — 10px font, `var(--color-primary-500)` bg, dark text.

---

## 7. Footer Information Architecture

**Layout:** 4-column grid (desktop), 2-column (tablet), 1-column (mobile)

**Column 1 — Brand:**
- SunEnergy Pro logo (SVG, 140px width)
- Tagline: "Premium Solar Solutions for Your Home & Business"
- Trust strip: BBB A+ badge + "4.9 ⭐ 1,200+ reviews" inline
- Social row: Facebook, Instagram, YouTube, LinkedIn (20px icons)

**Column 2 — Services:**
- "Services" heading
- Residential Solar | Commercial Solar | Solar Maintenance | Battery Storage | Solar Financing

**Column 3 — Company:**
- "Company" heading
- About Us | Portfolio | Team | Certifications | Blog | News

**Column 4 — Contact:**
- "Contact Us" heading
- Phone: +1-555-766-2576
- Email: info@sunenergypro.example
- Hours: Mon–Sat 7AM–7PM
- WhatsApp button (green pill, 18px icon)
- Service area: "Serving 50+ mile radius"

**Footer Bottom Bar (full width):**
```
[© 2026 SunEnergy Pro. All rights reserved.] → [Privacy | Terms | Accessibility] → [Built by Growrix OS ↗]
```
- Attribution: "Built by" text + "Growrix OS" link (amber) → `https://www.growrixos.com`, `target="_blank"`, `aria-label="Built by Growrix OS (opens in a new tab)"`
- Social row alignment: Left-aligned under Column 1 (desktop), centered (mobile)
- Bottom bar text-align: left (desktop), center (mobile)
