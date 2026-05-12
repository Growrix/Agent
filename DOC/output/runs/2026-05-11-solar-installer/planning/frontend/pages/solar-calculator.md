# Page Design Brief: SOLAR CALCULATOR

**Route:** `/solar-calculator`  
**Status:** LOCKED  
**Lead Gen Role:** PRIMARY LEAD MAGNET — Educate via real-time interaction; capture high-intent leads  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `solar-calculator::realtime-numbers::data-focused::interactive-responsive`

---

## Page Definition

**User Intent:** Get a real-time estimate of solar savings by adjusting sliders (electricity bill, location, usage pattern) — a self-service ROI tool before talking to anyone.

**Conversion Outcome:** User sees their personalized savings → convinced to request an exact assessment.

**Primary CTA:** "Get My Exact Numbers — Free Assessment"  
**Secondary CTA:** "Schedule a Consultation"

**KPI:** Calculator completion rate; slider interactions per session; assessment leads from `/solar-calculator`.

---

## Outcomes (What Must Be True)

1. ✓ Calculator displays results instantly as user adjusts sliders (< 200ms response).
2. ✓ No account or email required to use the calculator — zero friction.
3. ✓ Results include: annual savings, 25-year savings, estimated system size, monthly payment (loan option), and federal tax credit amount.
4. ✓ User can email themselves the estimate (optional, not required).
5. ✓ CTA to "Get My Exact Numbers" appears in the results panel.
6. ✓ Calculator works fully on mobile with touch-friendly sliders.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | calculator.hero.headline | Lead Hook |
| Calculator input labels | calculator.inputs.* | Form |
| Results labels | calculator.results.* | Value Delivery |
| Disclaimer | calculator.disclaimer | Legal |
| Email estimate CTA | calculator.email.* | Lead Capture |
| Trust strip | calculator.trust.* | Trust |
| CTA band | calculator.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Data-Tool Hook)
**Purpose:** Position this page as a self-service tool — empowering, not salesy.  
**Layout Intent:** Compact hero (55svh desktop, 45svh mobile). Split composition: left = headline + copy; right = large decorative "counter" showing sample result (animated, auto-cycling numbers to build intrigue). Dark surface background.  
**Surface Style:** Dark navy surface `var(--color-surface-dark-900)`. Subtle data visualization motif (chart lines at 8% opacity, not distracting).  
**Copy Snapshot:**
- Eyebrow: "SOLAR ROI CALCULATOR"
- H1: "See Your Solar Savings in Real Time" — 46px desktop, 28px mobile
- Subheadline: "Adjust the sliders and watch your savings update instantly. No signup, no commitment."
- Feature pills: ["Instant Results", "No Email Required", "Based on Real Installations"]
- CTA anchor: "Jump to Calculator ↓" (smooth-scroll to calculator section)

**Decorative counter (right panel, desktop):** Large number display cycling through: "$3,800/yr" → "$6,200/yr" → "$12,400/yr" with label "Estimated Annual Savings". Amber color, 64px font. On hover: "Your number could be here."

**Motion:** H1 stagger 350ms. Decorative counter runs immediately on mount with 3s interval (auto-cycle). Pauses on user interaction with the real calculator.  
**Motion Fallback:** Static "$X,XXX/yr" display.

---

### Section 2: INTERACTIVE CALCULATOR
**Purpose:** The core page element — real-time savings simulator.  
**Layout Intent:** 2-column layout (desktop): left = inputs panel; right = results panel. Both visible simultaneously so results update as inputs change. Single-column (mobile): inputs above, results below. Results sticky on scroll (desktop), fixed at bottom-right (tablet), inline stacked (mobile).  
**Surface Style:** White calculator card with amber accent. Results panel: teal surface `var(--color-secondary-50)`.

**Input Panel — Sliders & Dropdowns:**

**Input 1 — Monthly Electricity Bill:**
- Label: "Your Monthly Electricity Bill"
- Type: Range slider
- Range: $50 → $600
- Default: $175
- Step: $10
- Live label: "$175/month"
- Sub-label: "Current avg. US residential: ~$135/month"

**Input 2 — State / Location:**
- Label: "Your State"
- Type: Dropdown (50 states)
- Default: "California"
- Reason shown: "Affects utility rates and solar incentives"

**Input 3 — Property Type:**
- Label: "Property Type"
- Type: Toggle buttons (Residential | Commercial)
- Default: Residential

**Input 4 — Roof Age:**
- Label: "Roof Condition"
- Type: Single-select radio (< 5 years | 5–15 years | 15–25 years | Unsure)
- Note (15–25 yrs): "You may need a partial roof repair before installation. We'll advise in your free assessment."

**Input 5 — Financing Preference:**
- Label: "How would you prefer to pay?"
- Type: Toggle (Cash Purchase | Solar Loan | PPA)
- Default: Solar Loan
- Dynamic: Results panel updates payment vs. savings view based on selection

**Results Panel — Live Updates:**
All numbers update within 200ms of any input change.

- **Annual Savings:** "$5,200" (large, amber, 48px)
- **25-Year Savings:** "$130,000" (teal, 32px)
- **Estimated System Size:** "10.4 kW"
- **Federal Tax Credit:** "$5,460" (26% of estimated system cost)
- **If Loan Selected:** Monthly payment $89 vs. electricity savings $108 → "Cash positive from Month 1 ✓"
- **If Cash Selected:** Payback period "6.8 years"
- **If PPA Selected:** "You save ~25% vs. current utility rate — $0 upfront"

**Disclaimer (below results):** "Estimates use national average data for your state. Actual results depend on site assessment, roof orientation, shading, and local utility rates."

**Email Estimate CTA (below results):** "Email yourself this estimate" — inline email input + "Send" button. Not required. Success: "Estimate sent! Check your inbox."

**Accessibility:** All sliders: `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`. Dropdown: `role="listbox"`. Results panel: `aria-live="polite"` so screen readers announce updates.

---

### Section 3: HOW THE CALCULATOR WORKS
**Purpose:** Build confidence in the estimate — explain the methodology briefly.  
**Layout Intent:** 3-column icon + text (desktop), 1-column (mobile). Light surface section.  
**Copy Snapshot:**
- Icon 1 (ChartBar): "Based on Real Data" — "Estimates use NREL solar irradiance data and regional utility rate averages from 50,000+ installations."
- Icon 2 (CheckCircle): "Verified Accuracy" — "Our formula is regularly calibrated against actual customer savings data from completed SunEnergy Pro installations."
- Icon 3 (Shield): "Your Privacy Protected" — "No data is stored when you use the calculator. Email estimate is opt-in only."

---

### Section 4: CALCULATOR SOCIAL PROOF
**Purpose:** Validate the calculator's estimates with real customer results.  
**Layout Intent:** 3 comparison cards (desktop horizontal row, mobile carousel). Each: "Calculator estimate vs. actual result."  
**Copy Snapshot:**
- Card 1: "Calculator said $4,800/yr → Actual savings: $5,200/yr | 'Almost exactly right!' — Tom R., Sacramento"
- Card 2: "Calculator said $8,200/yr → Actual savings: $7,900/yr | 'Very close estimate.' — Pacific Foods Co., Fresno"
- Card 3: "Calculator said $3,600/yr → Actual savings: $3,850/yr | 'The free assessment confirmed it all.' — Chen Family, Modesto"

---

### Section 5: CTA BAND
**Purpose:** Convert calculator users to assessment requests.  
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Ready to Replace Your Estimate with Exact Numbers?"
- Subheadline: "A free on-site assessment gives you a precise quote, financing options, and permit timeline — no obligation."
- CTA Primary: "Get My Exact Numbers — Free Assessment"
- CTA Secondary: "Call Us: +1-555-766-2576"

---

## Forbidden Patterns

- ✗ MUST NOT gate calculator behind email registration
- ✗ MUST NOT show only one static result (user needs to see numbers change as they adjust inputs)
- ✗ MUST NOT use hero photography (this page is data-focused)
- ✗ MUST NOT duplicate the hero from Financing page (similar topic but different treatment: Financing explains options; Calculator is self-service tool)

---

## Visual Differentiation vs. Other Routes

**vs. FINANCING:** Financing page explains options and has a button-triggered calculator step; Solar Calculator page IS the calculator — full-page, real-time, prominent. Different visual weight and interaction density.  
**vs. FREE ASSESSMENT:** Assessment is a step-by-step qualification questionnaire; Calculator is a real-time slider tool.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `interactive-responsiveness` — every input triggers a visible response. Page feels alive.  
**Key moments:** Number updates (instant but smooth); decorative counter auto-cycle; results fade-update on each slider change.  
**Reduced-motion:** Counter shows static value; number updates instant (no transition); slider still functional.

---

## State Requirements

| State | Behavior |
|-------|----------|
| Initial (default values) | Calculator shows default result with California, $175/mo, Residential, Loan |
| Calculating | No spinner — results update inline with 150ms CSS transition |
| Renter (edge case) | Show note: "Solar typically requires ownership — but ask your landlord!" |
| Email sent | Inline success message replaces email form |
| Email error | Red border + "Couldn't send. Try again." |
| Low-bill edge case (< $75/mo) | Show note: "Low bills may mean solar has limited savings potential in your area. An assessment will confirm." |

---

## SEO + Schema

- **Title:** "Solar Savings Calculator — Calculate Your ROI Instantly | SunEnergy Pro"
- **Meta:** "Free solar savings calculator: enter your electricity bill and see estimated annual savings, 25-year ROI, system size, and federal tax credit — instantly."
- **H1:** "See Your Solar Savings in Real Time"
- **Schema:** `WebApplication` (interactive calculator tool); `BreadcrumbList`
- **Canonical:** `/solar-calculator`

---

## Performance Plan

- LCP target: < 2.0s (no heavy imagery)
- Calculator: Client-side pure function — no network call on input change
- Email send: API route (POST), lazy-loaded
- No heavy libraries needed (custom range slider with Radix Slider or native HTML)
- JS budget: ≤ 55KB

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `calculator_page_view` | Page load |
| `calculator_input_change` | Any slider/dropdown change |
| `calculator_email_submit` | Email estimate submitted |
| `calculator_cta_click` | "Get My Exact Numbers" clicked |
| `calculator_time_spent` | Milestone: 30s, 60s, 120s on page |

---

## Open Questions

1. Should we use real NREL PVWatts API for accuracy, or a simplified formula based on bill × avg efficiency per state?
2. Is the email-estimate feature in scope at launch or Phase 2?
3. Should calculator results be shareable via URL (encode inputs in query params)?
