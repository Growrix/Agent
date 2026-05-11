# Page Design Brief: HOME

**Route:** `/`  
**Status:** LOCKED  
**Lead Gen Role:** PRIMARY  
**Section Density:** 8 sections  
**Mobile First:** Yes  
**SEO Critical:** Yes

---

## Page Definition

**Intent:** First impression. Establish brand authority, showcase value proposition, build trust through metrics and proof, and drive primary CTA (Get Free Solar Assessment).

**Conversion Outcome:** Lead email capture or phone consultation booking.

**Primary CTA:** "Get Free Solar Assessment" (forms primary CTA band)  
**Secondary CTA:** "Browse Our Portfolio", "Schedule Consultation"

---

## Outcomes (What Must Be True)

1. ✓ Visitor understands solar ROI and annual savings potential within 3 seconds of hero visibility  
2. ✓ Trust signals (15,000+ installations, 97% satisfaction, 25-year warranty) are visible above fold (mobile: within 2 scrolls)  
3. ✓ Portfolio gallery proof-of-capability is discoverable within 4 sections  
4. ✓ Primary CTA button is sticky on mobile, clearly visible on desktop  
5. ✓ Page loads with hero text reveal animation (staggered entrance) within 800ms  
6. ✓ Mobile users can reach contact method (phone/WhatsApp) within 1 tap from any section  

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Hero Headline | home.hero.headline | Value Prop |
| Hero Subheadline | home.hero.subheadline | Benefit Statement |
| Hero Description | home.hero.description | Trust + Proof |
| Trust Metrics | home.trust_badges.* | Trust Signals |
| Services Preview | home.services_preview.* | Capability Proof |
| Testimonials | home.testimonials.* | Social Proof |
| Featured Projects | home.featured_projects.* | Portfolio Proof |
| CTA Band | home.cta_band.* | Conversion Driver |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Full-Bleed)
**Purpose:** Hero, value prop, urgency, primary CTA  
**Layout Intent:** Full-bleed hero (100vw, 100svh mobile / 80svh) with background image (solar panels, sunny home) + gradient overlay (50%+ coverage, opacity 0.55).  
**Composition:** Text left-aligned (mobile: center), headline + subheadline + description staggered entrance, two CTAs below (primary + secondary, stacked on mobile, side-by-side desktop).  
**Copy Snapshot:**
- Headline: "Power Your Home with Solar Energy"
- Subheadline: "Go solar and save up to 80% on your energy bills"
- Description: "Over 12 years and 15,000+ successful installations..."
- CTA Primary: "Get Free Solar Assessment"
- CTA Secondary: "Browse Our Portfolio"

**Motion:** Hero headline + subheadline text reveal (40ms stagger per word, 500ms total, ease-smooth). Buttons fade in after text (200ms delay).  
**Motion Fallback (prefers-reduced-motion):** Instant full opacity.  
**Responsive:**
- Mobile: Headline 30px, subheadline 20px, single-column stack
- Tablet: Headline 36px, subheadline 24px
- Desktop: Headline 40px, subheadline 28px, two-column (text left, image right or overlay)

**Trust Chip Placement:** One trust chip in hero corner ("NABCEP Certified" or "25-Year Warranty") with dark-pill background (rgba(0,0,0,0.6)) + white text.  
**Accessibility:** Main `<h1>` is headline; focus-visible outline on CTA buttons; alt text on hero image.

---

### Section 2: TRUST METRICS STRIP
**Purpose:** Credibility anchor — establish authority immediately below hero  
**Layout Intent:** Horizontal strip (light gray background, no left/right padding bleed), 4 metric cards in grid (1x4 mobile stacked, 2x2 tablet, 1x4 desktop).  
**Composition:** Each card: large number + label text, center-aligned, subtle shadow on hover.  
**Copy Snapshot:**
- "15,000+ Successful Installations"
- "12 Years of Industry Expertise"
- "97% Customer Satisfaction Rating"
- "25-Year Equipment Warranty"

**Motion:** Cards fade in + scale on scroll-into-view (300ms stagger per card, 50ms offset).  
**Responsive:**
- Mobile: 1 column, full-width cards
- Tablet: 2 columns, equal width
- Desktop: 4 columns, equal width

---

### Section 3: SERVICES PREVIEW
**Purpose:** Capability proof — what we offer  
**Layout Intent:** 3-column grid (1-col mobile, 2-col tablet, 3-col desktop) of service cards.  
**Composition Per Card:** Icon (SVG, 48px) + title + 2-line description + "Learn More" link.  
**Copy Snapshot:**
- **Residential Solar:** "Transform your home into a power-generating asset..."
- **Commercial Solar:** "Reduce operating costs and boost your business image..."
- **Solar Maintenance:** "Keep your system running at peak efficiency..."

**CTA:** "Explore All Services" (button) at section bottom.  
**Motion:** Card grid entrance (staggered 50ms per card, 300ms duration each).  
**Responsive:**
- Mobile: 1 column, full-width cards, 16px gap
- Tablet: 2 columns, 16px gap
- Desktop: 3 columns, 24px gap

---

### Section 4: FEATURED PROJECTS / PORTFOLIO TEASER
**Purpose:** Before/after proof, tangible savings evidence  
**Layout Intent:** 2-item showcase (1-col mobile stacked, 2-col tablet/desktop side-by-side).  
**Composition Per Card:** Before/after image slider + project name overlay + savings amount highlight ($8,450+ annual savings).  
**Copy Snapshot:**
- Project 1: "Residential Rooftop System | $8,450+ Annual Savings"
- Project 2: "Commercial Warehouse | $42,000+ Annual Savings"

**CTA:** "View Full Portfolio" (button) at section bottom.  
**Motion:** Before/after slider interactive on hover/drag.  
**Responsive:**
- Mobile: 1 column, full-width, 100vh image height
- Tablet/Desktop: 2 columns, 400px height per image

---

### Section 5: TESTIMONIALS CAROUSEL
**Purpose:** Social proof at scale (customer validation)  
**Layout Intent:** Auto-rotating carousel, 1 testimonial visible (mobile/tablet), 1 visible with nav arrows (desktop). Cards are 100% width on mobile, 50% width on tablet.  
**Composition Per Card:** Quote text (18-24px font) + customer name + role + 5-star rating + small profile photo.  
**Copy Snapshot:**
- Quote: "SunEnergy Pro made the entire process effortless..."
- Author: "Maria Santos, Homeowner, Sacramento"
- Rating: ⭐⭐⭐⭐⭐

**Motion:** Cross-fade transition between cards (400ms, ease-in-out). Auto-rotate every 5000ms. Pause on hover or focus.  
**Motion Fallback:** Instant fade, auto-rotation disabled (prefers-reduced-motion).  
**Responsive:**
- Mobile: Full-width card, stacked
- Tablet: 60% width, centered
- Desktop: 50% width with nav arrows on sides

---

### Section 6: STATS VALIDATION
**Purpose:** Numbers reinforce trust (15K+ installations, 97% satisfaction)  
**Layout Intent:** 4-column grid (1-col mobile, 2-col tablet, 4-col desktop) of large number + supporting copy.  
**Composition:**
- Large number (48-56px): "15,000+"
- Label (14px): "successful solar installations"

**Animation:** Count-up animation from 0 to final number over 1000ms on scroll-into-view.  
**Responsive:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns

---

### Section 7: CTA BAND (Full-Bleed)
**Purpose:** Final conversion trigger  
**Layout Intent:** Full-width band (primary color background #f59e0b), center-aligned text + button stack (mobile), text left + button right (desktop).  
**Copy Snapshot:**
- Headline: "Ready to Go Solar?"
- Description: "Start with a free, no-obligation solar assessment..."
- CTA: "Get Free Assessment"

**Motion:** Fade in on scroll-into-view (300ms).  
**Responsive:**
- Mobile: Center-aligned, button full-width
- Desktop: Left-right layout, button fixed width

---

### Section 8: FOOTER
**Purpose:** Navigation, contact, attribution  
**Layout Intent:** 4-column grid (mobile: 1-col, tablet: 2-col, desktop: 4-col) with company info, links, social, contact.  
**Content:**
- Column 1: Company name, tagline, trust metrics (BBB A+, 1,200+ reviews)
- Column 2: Quick links (Services, Portfolio, Contact, Blog)
- Column 3: Social media icons (Facebook, Instagram, YouTube, LinkedIn)
- Column 4: Contact info (phone, email), hours, Growrix attribution

**Social Icons:** 20px icons, white on background, hover opacity 100%.  
**Responsive:**
- Mobile: 1 column, full-width
- Tablet: 2 columns
- Desktop: 4 columns, 24px gap

---

## Forbidden Patterns

- ✗ NO generic stock photos (use real solar installations, customer homes)
- ✗ NO testimonials without verified author/location  
- ✗ NO "coming soon" placeholders in any CTA  
- ✗ NO trust badges without visible backup (certification images, warranty links)
- ✗ NO hover-only interaction discovery on mobile (all CTAs touch-friendly)

---

## Visual Differentiation (vs Other Routes)

| Route | Delta |
|-------|-------|
| /services | Services page is grid-heavy + technical; Home hero is narrative-led + emotional |
| /portfolio | Portfolio is gallery-first; Home features only 2 projects as teaser |
| /contact | Contact is form-heavy; Home saves form for CTA band (link to contact) |
| /about | About is story-focused; Home is metrics-focused + proof-of-capability |

---

## Motion Temperament

**Restrained Cinematic:** Text reveals feel premium, gallery entrances are gentle stagger, carousels cross-fade smoothly. No bouncy or playful motion—maintain confidence and authority.

**Key Moments:**
- Hero text reveal (stagger entrance, 40ms between words)
- Gallery project entrance (scale + fade, 50ms stagger)
- Testimonial carousel (smooth cross-fade, 5s auto-rotate)
- CTA band fade-in (on scroll-into-view, 300ms)

---

## State Requirements

| State | Behavior |
|-------|----------|
| Loading | Skeleton screen for images, testimonial cards shimmer until loaded |
| Error (image fail) | Fallback placeholder + generic solar image |
| Empty (no testimonials) | Hide carousel, show "No testimonials available" message |
| Offline | Toast: "Some content may not load while offline" |

---

## Responsive Intent (NOT Prescription)

- **Mobile (< 640px):** Single-column stack, buttons full-width, image-heavy, sticky header with CTA visible
- **Tablet (640-1024px):** 2-column layouts where sensible, buttons sized for thumb reach, images scale responsively
- **Desktop (>= 1024px):** Full-width hero with overlay, 3-4 column grids, sidebar CTA widget visible

---

## SEO + Schema.org

**Title:** "Solar Installation & Energy Solutions | SunEnergy Pro"  
**Meta Description:** "Save up to 80% on energy bills with premium residential & commercial solar. 15,000+ installations. Free assessment."  
**Schema Markup:**
- `Organization` (name, logo, contact, social profiles)
- `LocalBusiness` (address, service area, phone, hours)
- `SolarTechService` (service description, areaServed)
- `AggregateRating` (ratingValue: 4.9, reviewCount: 1200)

**Keywords:** solar installation, solar panels, residential solar, commercial solar, save on energy bills, solar company near me

---

## Conversion Path

1. **Awareness:** Hero value prop + trust metrics
2. **Consideration:** Featured projects + testimonials showcase capability
3. **Decision:** CTA band drives lead capture
4. **Action:** "Get Free Assessment" → Contact form | Direct phone/WhatsApp

---

## Performance Plan

- **LCP Target:** < 2.5s (hero image must load fast)
- **Hero Image:** Optimized WebP/AVIF, max 200KB, responsive srcset
- **Route JS Budget:** 60KB (minimal, mostly Next.js framework code)
- **Data Fetching:** No dynamic server fetch on initial load (all content keys are static strings)
- **Lazy Loading:** Testimonial carousel, portfolio images load on scroll

---

## Accessibility Plan

- **Landmarks:** `<main>` wraps all content, `<nav>` for header, `<footer>` for footer
- **Heading Outline:** H1 (hero headline) → H2 (section titles: Trust, Services, Projects, Testimonials, CTA) → H3 (card titles if needed)
- **Skip Link:** "Skip to main content" at page top
- **Focus Visible:** 3px primary-color outline on all buttons
- **Motion:** All animations respect `prefers-reduced-motion: reduce`
- **Images:** All images have descriptive `alt` text
- **Forms:** Contact form labels properly linked via `<label for="id">`
- **Color Contrast:** Trust chips (6:1 AAA), body text (14.8:1 AAA), CTAs (5.2:1 AA)

---

## Quality Bar Scoring

**Target:** 95/100

| Dimension | Target | Rationale |
|-----------|--------|-----------|
| **Clarity** | 95 | Home must communicate solar ROI instantly; no jargon |
| **Trust** | 98 | Metrics + testimonials + social proof = high credibility |
| **Conversion** | 92 | CTA visibility + multiple contact paths = lead funnel |
| **Accessibility** | 96 | WCAG 2.1 AA compliance + keyboard nav full parity |
| **Performance** | 90 | LCP < 2.5s, Lighthouse score >= 80 |
| **Mobile UX** | 94 | Touch-friendly CTAs, sticky header, bottom nav visible |

---

## Open Questions for Client

1. Should the home hero feature a video background (auto-playing, muted) instead of static image?
2. Are there specific customer testimonials we should highlight, or should we source from Google Reviews?
3. What's the most important metric to lead with (installations, years, satisfaction, warranty)?
4. Should the featured projects section include video testimonials from those customers?

