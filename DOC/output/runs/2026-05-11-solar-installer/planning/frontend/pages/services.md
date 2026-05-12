# Page Design Brief: SERVICES

**Route:** `/services`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY → Educate on solutions, drive to assessment CTA  
**Section Density:** 7 sections  
**Mobile First:** Yes  
**SEO Critical:** Yes  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `services::tech-grid::structured-stagger::measured`

---

## Page Definition

**User Intent:** Understand what solar solutions are available, how each one applies to their situation, and which service best fits their needs before requesting a consultation.

**Conversion Outcome:** Click "Get Free Assessment" after exploring service options; alternatively click through to Portfolio for proof.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "View Our Portfolio"

**KPI:** Assessment form submissions sourced from `/services` referrer; avg. time on page > 2 min.

---

## Outcomes (What Must Be True)

1. ✓ User can identify which of the three service types applies to their property within 2 scrolls.
2. ✓ Each service's value proposition, process, and expected ROI are clearly communicated — no jargon.
3. ✓ Trust signals (certifications, warranty, years of experience) are visible within the services context.
4. ✓ CTA to "Get Free Assessment" is reachable within 1 tap on mobile at any scroll depth.
5. ✓ A comparison matrix or feature grid exists so users can distinguish residential vs. commercial vs. maintenance.
6. ✓ Process flow (how installation works) is visualized — removes fear of commitment.
7. ✓ Social proof (specific testimonials) appears in a services context (not just generic).

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | services.hero.headline | Value Prop |
| Page subheadline | services.hero.subheadline | Benefit Statement |
| Service 1: Residential | services.residential.* | Capability Proof |
| Service 2: Commercial | services.commercial.* | Capability Proof |
| Service 3: Maintenance | services.maintenance.* | Capability Proof |
| Service 4: Battery Storage | services.battery.* | Capability Proof |
| Process steps | services.process.step_* | Education |
| Feature comparison | services.comparison.* | Decision Support |
| Service testimonials | services.testimonials.* | Social Proof |
| Trust strip | services.trust.* | Trust Signals |
| CTA band | services.cta.* | Conversion Driver |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Technical Authority)
**Purpose:** Signal technical expertise immediately; differentiate from Home (which is emotional). This hero is about capability, not inspiration.  
**Layout Intent:** Full-bleed hero (100vw, 70svh desktop / 60svh mobile). Background: close-up of solar panel PV cell grid. Dark left gradient overlay (strong left, transparent right). Feature pill tags inline with headline.  
**Surface Style:** Dark overlay surface — `var(--color-surface-dark-900)` gradient over image.  
**Copy Snapshot:**
- Eyebrow: "OUR SERVICES" (amber, uppercase, tracking-wide)
- H1: "Solar Solutions Built for Every Property"
- Subheadline: "From residential rooftops to commercial fleets — precision-engineered solar systems that maximize your energy return."
- Feature tags: ["Residential", "Commercial", "Maintenance", "Battery Storage"] — amber-bordered pills, inline row
- CTA: "Get Free Assessment" (primary amber) + "View Portfolio" (outline white)

**Motion:** Eyebrow fades in first (200ms). H1 stagger-reveal (40ms/word, 400ms total). Feature pills fan in from left (50ms stagger, 300ms each). CTAs fade in at 650ms.  
**Motion Fallback:** Instant full opacity on all elements.  
**Responsive:**
- Mobile: H1 28px, feature pills wrap to 2 rows, CTAs stacked
- Tablet: H1 38px, pills on single row
- Desktop: H1 48px, full composition

**Accessibility:** `<h1>` for page headline; pills are `<span>` not interactive; focus-visible on CTAs.

---

### Section 2: SERVICES GRID
**Purpose:** Core capability matrix — give each service its own card with icon, description, key benefits, and direct CTA.  
**Layout Intent:** 2×2 grid (tablet+desktop), 1-column stack (mobile). Each card has an icon (48px amber icon) + service name + 3 bullet benefit points + "Learn More" link that expands or scrolls to detail section.  
**Surface Style:** Light surface (`var(--color-surface-100)`), cards with white bg + subtle shadow.  
**Copy Snapshot:**

**Card 1 — Residential Solar:**
- Icon: `Home` (lucide)
- Title: "Residential Solar Installation"
- Benefits: "Reduce electricity bills by up to 80% | 25-year panel warranty | Zero-down financing available"
- CTA: "Explore Residential →"

**Card 2 — Commercial Solar:**
- Icon: `Building2` (lucide)
- Title: "Commercial Solar Systems"
- Benefits: "Lower operating costs | Federal tax credits | Systems from 50kW to 5MW"
- CTA: "Explore Commercial →"

**Card 3 — Solar Maintenance:**
- Icon: `Wrench` (lucide)
- Title: "Maintenance & Monitoring"
- Benefits: "24/7 performance monitoring | Annual inspection | Emergency repair service"
- CTA: "Explore Maintenance →"

**Card 4 — Battery Storage:**
- Icon: `Battery` (lucide)
- Title: "Battery Storage Systems"
- Benefits: "Energy independence | Backup during outages | Pair with existing or new solar"
- CTA: "Explore Battery Storage →"

**Motion:** Cards stagger-entrance on scroll (50ms per card, 300ms each, ease-out).  
**Responsive:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 2×2 grid, even spacing

---

### Section 3: SERVICE DETAIL DEEP-DIVES
**Purpose:** Expandable detail per service — answers "what exactly do you install?" without requiring a new page.  
**Layout Intent:** Accordion or tab-based detail rows. Each service has an expanded view: installation diagram/photo, system specs, typical property profile, and estimated savings range.  
**Surface Style:** Alternating rows — odd: white, even: light gray surface.  
**Copy Snapshot (Residential detail):**
- "System size: 5kW–15kW | Roof types: Composition shingle, tile, metal | Installation time: 1–3 days | Monitoring: Included | Payback: 6–8 years average"
- "The SunEnergy Pro residential installation process begins with a detailed site assessment..."

**Interaction:** Tab or accordion expand; smooth height animation. Keyboard navigable.

---

### Section 4: THE INSTALLATION PROCESS
**Purpose:** Remove fear of commitment by showing exactly what happens from assessment to power-on.  
**Layout Intent:** Horizontal timeline (desktop), vertical step stack (mobile). 5 numbered steps with icon + title + 1-sentence description each.  
**Surface Style:** Teal accent surface (`var(--color-secondary-50)`), step numbers in amber circles.  
**Copy Snapshot:**
- Step 1: "Free Assessment" — "Our expert visits your property to evaluate solar potential and roof condition."
- Step 2: "Custom Design" — "We engineer a system tailored to your energy usage and roof layout."
- Step 3: "Permits & Approvals" — "We handle all permits, utility approvals, and HOA requirements."
- Step 4: "Professional Installation" — "NABCEP-certified technicians install your system in 1–3 days."
- Step 5: "Activation & Monitoring" — "System goes live. We monitor performance and send monthly reports."

**Motion:** Steps reveal left-to-right (desktop) or top-to-bottom (mobile), 80ms stagger per step.

---

### Section 5: FEATURE COMPARISON TABLE
**Purpose:** Decision support — help users compare residential vs. commercial side-by-side.  
**Layout Intent:** 3-column table (desktop): Feature | Residential | Commercial. Mobile: stacked comparison cards.  
**Surface Style:** White background, amber header row, alternating row shading.  
**Features to compare:** System size | Typical savings | Installation time | Financing options | Warranty | Monitoring | Permits handled | Tax incentives.  
**Accessibility:** `<table>` with proper `<thead>`, `<th scope="col">`, and `<tbody>`.

---

### Section 6: SERVICE-SPECIFIC TESTIMONIALS
**Purpose:** Prove capability with real customer feedback tied to specific service type.  
**Layout Intent:** 3-card row (desktop), 1-card carousel (mobile). Each card shows: quote + customer name + service type badge + star rating.  
**Copy Snapshot:**
- "The commercial installation at our warehouse reduced our energy bill by 60%. SunEnergy Pro handled everything." — David Kim, Warehouse Owner, Fresno | Commercial Solar
- "Our residential system was installed in one day. The team was professional and clean. Best home investment we've made." — Lisa Torres, Homeowner, Sacramento | Residential Solar

**Motion:** Cards fade in on scroll. Carousel auto-plays on mobile (5s), pauses on focus.

---

### Section 7: CTA BAND
**Purpose:** Final conversion driver after full-page service exploration.  
**Layout Intent:** Full-width band, amber background (`var(--color-primary-500)`), dark text. Desktop: text left + CTA buttons right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Which Solar Solution Is Right for You?"
- Subheadline: "Let our experts analyze your property and recommend the best system for your goals."
- CTA Primary: "Get Free Assessment" (dark button on amber bg)
- CTA Secondary: "Call Us: +1-555-766-2576" (text link with phone icon)

**Motion:** Band fades in on scroll-into-view (300ms).

---

## Forbidden Patterns

- ✗ MUST NOT use same hero composition as Home (no narrative emotional overlay — use technical precision instead)
- ✗ MUST NOT use testimonials carousel (Home already has this — use static 3-card row instead)
- ✗ MUST NOT repeat the full trust metrics strip from Home (use a minimal trust bar instead)
- ✗ MUST NOT show "coming soon" or unfinished service descriptions

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home is emotional/narrative (family, savings story). Services is structured/technical (specifications, feature matrix, process). Different hero background (PV close-up vs. installed home). Different rhythm (grid-heavy vs. story-led).  
**vs. PORTFOLIO:** Services describes what we offer; Portfolio shows what we've delivered. Services primary content is text + icons; Portfolio primary content is images.  
**vs. CONTACT:** Services educates and nurtures; Contact captures leads. Services has 7 sections; Contact has 5.  
→ See `visual-differentiation-map.md` for full matrix.

---

## Motion Temperament

**Mood:** `measured-precision` — structured, confidence-inspiring. No cinematic flourishes.  
**Key moments:**
- Feature pill fan-in: purposeful micro-reveal (→ clarity)
- Service card stagger: organized entrance (→ hierarchy)
- Process step progression: left-to-right reveal (→ narrative flow)

**Reduced-motion fallback per moment:**
- Feature pills: instant opacity
- Card stagger: all appear at once, 200ms single fade
- Process steps: instant visibility

**Forbidden motion:** No infinite loops, no parallax, no hero video.

---

## State Requirements

| State | Behavior |
|-------|----------|
| Loading skeleton | Service cards show shimmer skeleton (3 cards, same layout) |
| Error fallback | "Services temporarily unavailable. Call +1-555-766-2576." with phone CTA |
| Empty comparison | Not applicable (static content) |
| Dark theme | All surfaces switch per `[data-theme="dark"]` token set; amber stays consistent |

---

## Responsive Intent

- **Mobile (xs/sm):** Single-column service cards, stacked process steps, horizontal-scroll comparison table (or card-flip layout), sticky CTA button
- **Tablet (md):** 2-column service cards, horizontal process timeline visible
- **Desktop (lg+):** 2×2 service grid, 5-step horizontal timeline, 3-column comparison table

---

## SEO + Schema

- **Title:** "Solar Installation Services | Residential & Commercial | SunEnergy Pro"
- **Meta description:** "Explore SunEnergy Pro's full range of solar services: residential installation, commercial systems, maintenance & battery storage. NABCEP certified. Free assessment."
- **H1:** "Solar Solutions Built for Every Property"
- **Schema:** `Service` schema per service type; `BreadcrumbList`
- **Canonical:** `/services`
- **Internal links:** → `/portfolio`, → `/financing`, → `/contact`, → individual service anchor sections

---

## Conversion Path

**Primary path:** Hero CTA → Assessment form (`/contact` or inline modal)  
**Secondary path:** Service card "Learn More" → Scroll to detail → CTA band → Assessment  
**Exit point:** "View Our Portfolio" button → `/portfolio`

---

## Accessibility Plan

- `<main>` landmark wraps page content
- Skip-to-main link in header
- H1 → H2 (service names) → H3 (section sub-items) heading hierarchy
- Comparison table: proper `scope` attributes
- Process timeline: `role="list"` with `role="listitem"` for steps
- Accordion/tab: `aria-expanded`, `aria-controls`, `aria-panel`
- All icons: `aria-hidden="true"` with adjacent text labels
- Color: never used as sole differentiator in comparison table

---

## Performance Plan

- LCP target: < 2.5s (hero image is PV close-up, ≤ 180KB WebP, `priority` on `next/image`)
- Route JS budget: ≤ 65KB (no heavy calculators on this page)
- Comparison table: static — no client data fetch
- Testimonials: static array — no API call

---

## Data Fetching Plan

| Surface | Source | Cache | Failure |
|---------|--------|-------|---------|
| Service cards | Static (MDX or JSON) | Build-time | N/A |
| Testimonials | Static array in content.en-US.json | Build-time | N/A |
| No dynamic data surfaces | — | — | — |

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `service_card_click` | Click on any service card "Learn More" |
| `service_cta_click` | Click on "Get Free Assessment" from this page |
| `comparison_view` | Comparison table scrolls into view |
| `process_section_view` | Process timeline scrolls into view |
| `service_testimonial_view` | Testimonials section scrolls into view |

---

## Open Questions

1. Are there any additional specialty services (e.g., EV charger installation, solar for pools) to list?
2. Do we have real customer names/photos for service-specific testimonials?
3. Is the comparison table scope residential vs. commercial only, or should maintenance be included?
