# Page Design Brief: TESTIMONIALS

**Route:** `/testimonials`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Social proof at scale; reinforce trust before conversion  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** Medium  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `testimonials::quote-grid::social-proof-dense::warm-validation`

---

## Page Definition

**User Intent:** Read real customer reviews before committing to an assessment — confirm that real people (like them) had a positive experience.

**Conversion Outcome:** Trust is reinforced → user clicks "Get Free Assessment."

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "Browse Our Portfolio"

**KPI:** Time on page > 90s; CTA click rate; Google rating widget engagement.

---

## Outcomes (What Must Be True)

1. ✓ User can see 12+ distinct customer testimonials without scrolling through a single carousel.
2. ✓ Rating aggregate (4.9/5 from 1,200+ reviews) is prominently displayed above the fold.
3. ✓ Testimonials include customer name, location, service type, and star rating — not anonymous quotes.
4. ✓ At least 3 video testimonials are embedded or linked.
5. ✓ Google Business Profile rating is embedded or prominently cited.
6. ✓ CTA to assessment is reachable within 1 tap on mobile at any scroll depth.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | testimonials.hero.headline | Social Proof |
| Rating aggregate | testimonials.rating.* | Trust Signal |
| Featured testimonials (3) | testimonials.featured.* | Social Proof |
| Full testimonial grid | testimonials.grid.* | Social Proof |
| Video testimonials | testimonials.video.* | Video Proof |
| Platform badges | testimonials.platforms.* | Third-Party Validation |
| CTA band | testimonials.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Social Proof Authority)
**Purpose:** Immediately anchor the page with a dominant rating number — signal overwhelmingly positive sentiment.  
**Layout Intent:** Compact hero (50svh desktop / 40svh mobile). Light surface (not dark photography — this page is about warmth and social validation). Center-aligned content.  
**Surface Style:** Teal-to-amber gradient background (`linear-gradient(135deg, var(--color-secondary-700) 0%, var(--color-primary-600) 100%)`), white text. No photography.  
**Copy Snapshot:**
- Stars: 5 large gold stars (SVG, 32px each)
- Big number: "4.9 / 5" — 72px, white, font-weight 800
- Label: "from 1,200+ verified customer reviews" — 18px, white 85%
- H1: "Real Results. Real Customers. Real Savings." — 36px, white
- Platform badges row: Google ⭐⭐⭐⭐⭐ | Yelp ⭐⭐⭐⭐⭐ | BBB A+

**Motion:** Rating number counts up from 0.0 to 4.9 (800ms). Stars fade in from left (stagger 80ms). H1 slides up (300ms).  
**Motion Fallback:** Instant display.

---

### Section 2: FEATURED TESTIMONIALS (3 Large Cards)
**Purpose:** The most compelling, detailed testimonials first — long-form social proof from different customer types.  
**Layout Intent:** 3 large cards in a row (desktop), stacked (mobile). Each card is larger than standard — photo + extended quote (3–5 sentences) + customer meta + service badge.  
**Surface Style:** White cards + soft shadow + left amber border accent.  
**Copy Snapshot:**

**Card 1 — Residential, Savings Focus:**
- Photo: Maria Santos headshot
- Quote: "SunEnergy Pro transformed our electricity situation. We went from $340/month bills to $45/month after the solar installation. The process took 2 days and the team was incredibly professional. We qualified for the full tax credit. Best investment we've ever made."
- Name: Maria Santos, Homeowner — Sacramento, CA
- Service: Residential Solar (8.4kW) · March 2025
- Rating: ⭐⭐⭐⭐⭐

**Card 2 — Commercial, ROI Focus:**
- Photo: David Kim headshot
- Quote: "We were skeptical about commercial solar ROI, but SunEnergy Pro's analysis was spot-on. Our 120kW system at our distribution center saves us $3,800/month. The team handled all permits and utility interconnection. We're already considering a second facility."
- Name: David Kim, Operations Director — Fresno, CA
- Service: Commercial Solar (120kW) · January 2024
- Rating: ⭐⭐⭐⭐⭐

**Card 3 — Financing, Barrier-Removal Focus:**
- Photo: Lisa Torres headshot
- Quote: "I thought solar was out of reach financially. SunEnergy Pro showed me the $0 down loan option — now my monthly solar payment is $110 less than my old electricity bill. I'm cash positive from Day 1. I wish I'd done this sooner."
- Name: Lisa Torres, Homeowner — Modesto, CA
- Service: Residential Solar + Battery Storage · August 2024
- Rating: ⭐⭐⭐⭐⭐

**Motion:** Cards fade-in on scroll with 100ms stagger.

---

### Section 3: VIDEO TESTIMONIALS
**Purpose:** Video builds deeper trust than text — seeing and hearing a real customer is the highest form of social proof.  
**Layout Intent:** 3 video cards in a row (desktop), 1 visible at a time with carousel (mobile). Each card: video thumbnail + play overlay + customer name + 1-line quote below.  
**Surface Style:** Dark surface (`var(--color-surface-dark-800)`) — videos look best on dark backgrounds.  
**Copy Snippet per card:** Customer name + city + "Watch [Name]'s Story" CTA below thumbnail.  
**Interaction:** Click play → opens video in `Modal` (YouTube embed) or inline playback. Keyboard accessible (Enter/Space on thumbnail).  
**Note:** If real video testimonials are unavailable at launch, this section is hidden (not shown as empty). Fallback: promote to 5 featured text testimonial cards instead.

---

### Section 4: TESTIMONIAL GRID (All Reviews)
**Purpose:** Volume proof — show dozens of shorter testimonials to reinforce the aggregate rating.  
**Layout Intent:** 3-column masonry-ish grid (desktop), 2-column (tablet), 1-column (mobile). Each card: quote (2–3 sentences) + customer name + city + service type badge + star rating. No photos on grid cards (unlike featured).  
**Surface Style:** Light surface, small cards with subtle border + amber-star accent.  
**Filter bar:** Filter by service type: All | Residential | Commercial | Battery Storage.  
**Copy Snapshot (grid cards):**
- "Crew showed up on time, finished ahead of schedule. System is producing more than projected." — Robert Johnson, San Jose · Residential
- "Our utility bill dropped from $650 to $85/month. The NABCEP certification gave us total confidence." — Chen Family, Stockton · Residential
- "SunEnergy Pro handled our complex commercial roof layout perfectly. Highly recommend." — Apex Industries, Sacramento · Commercial
- "Battery storage has been a game-changer during outages. Worth every penny." — Angela Ruiz, Fresno · Battery Storage

**Minimum 12 cards visible initially. "Load More" shows additional 12 (lazy load).**  
**Accessibility:** `role="list"`, `role="listitem"`, `aria-label` on filter buttons.

---

### Section 5: CTA BAND
**Purpose:** Convert the trust built by reading reviews into an action step.  
**Layout Intent:** Full-width amber band. Desktop: quote/badge left + CTA right. Mobile: stacked center.  
**Copy Snapshot:**
- Pull-quote stat: `"97% of our customers say they'd recommend SunEnergy Pro to a neighbor"`
- CTA Headline: "Join 15,000+ Happy Solar Customers"
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Browse Our Portfolio"

---

## Forbidden Patterns

- ✗ MUST NOT use only a single scrolling carousel (volume proof requires visible grid)
- ✗ MUST NOT show anonymous testimonials (no "— Happy Customer, CA")
- ✗ MUST NOT include testimonials without star ratings and service type
- ✗ MUST NOT use the same gradient hero as Home (Home is photography-based; this is rating-data-based)

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home has a 5-card testimonials carousel; Testimonials page has a full grid of 12+ plus video. Different hero (data-badge vs. photo overlay). Higher testimonial density.  
**vs. ABOUT:** About has company story + team; Testimonials is purely about customer voices.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `warm-validation` — soft, approachable. Not technical. Gentle entrances.  
**Key moments:** Rating count-up (hero) + card stagger (grid)  
**Reduced-motion:** Instant display on all.

---

## SEO + Schema

- **Title:** "Customer Reviews & Testimonials — SunEnergy Pro | 4.9★ Rating"
- **Meta:** "Read 1,200+ verified customer reviews for SunEnergy Pro. 4.9/5 star rating. Real customers share solar installation experiences."
- **Schema:** `AggregateRating`, `Review` per testimonial
- **H1:** "Real Results. Real Customers. Real Savings."

---

## Open Questions

1. Do we have real customer photos or only text testimonials?
2. Are video testimonials available at launch?
3. What is the verified review count on Google vs. Yelp vs. BBB?
