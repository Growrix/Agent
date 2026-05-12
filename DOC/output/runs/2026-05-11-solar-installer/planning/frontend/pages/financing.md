# Page Design Brief: FINANCING

**Route:** `/financing`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Remove purchase barrier; educate on ROI; convert fence-sitters  
**Section Density:** 6 sections  
**Mobile First:** Yes  
**SEO Critical:** Yes  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `financing::roi-data::interactive-calc::teal-authority`

---

## Page Definition

**User Intent:** Understand how much solar will cost, what financing options exist, how fast they'll recoup the investment, and what tax incentives they qualify for — without needing to talk to a salesperson first.

**Conversion Outcome:** User tries the ROI calculator, sees their potential savings, and requests an assessment to confirm the numbers.

**Primary CTA:** "Calculate My Savings"  
**Secondary CTA:** "Get Free Assessment"

**KPI:** Calculator interactions, calculator completions, assessment leads attributed to `/financing`.

---

## Outcomes (What Must Be True)

1. ✓ User understands the three main financing options (cash, loan, PPA) before leaving the page.
2. ✓ An interactive ROI calculator is usable without creating an account — zero friction.
3. ✓ Federal and state incentives (26% ITC, SGIP, net metering) are explained in plain language.
4. ✓ The "typical payback period" is stated clearly with a concrete example (e.g., "Most homeowners recoup in 6–8 years").
5. ✓ Trust signals confirm the calculator estimates are backed by real installations.
6. ✓ CTA to "Get Free Assessment" follows immediately after calculator results appear.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | financing.hero.headline | Value Prop |
| Financing options (3) | financing.options.* | Education |
| Incentive explainer | financing.incentives.* | Education |
| ROI calculator inputs | financing.calculator.* | Interactive |
| ROI calculator results | financing.results.* | Proof |
| Payback metric | financing.payback.* | Trust Signal |
| Customer savings stories | financing.stories.* | Social Proof |
| CTA band | financing.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Data + ROI Authority)
**Purpose:** Immediately signal that this page answers the "#1 question" — "can I afford this?"  
**Layout Intent:** Full-bleed hero 70svh (desktop) / 60svh (mobile). Background: warm photography — family reviewing savings on a tablet, or bright sun on solar panels suggesting wealth generation. Teal-tinted gradient overlay (left-weighted).  
**Surface Style:** `var(--color-secondary-600)` tint overlay + `rgba(4,21,31,0.40)` dark layer.  
**Copy Snapshot:**
- Eyebrow: "SOLAR FINANCING & ROI" (amber, tracking-wide)
- H1: "Solar Pays for Itself" — 52px desktop, 30px mobile
- Subheadline: "Discover $0-down financing, federal tax credits, and real ROI projections for your home."
- Metric pills: ["26% Federal Tax Credit", "$0 Down Options", "Avg. 6-Year Payback"] — amber pills
- CTA: "Calculate My Savings" (primary amber) + "Explore Financing Options" (outline white)

**Motion:** H1 word stagger (400ms). Pills fan in from left (50ms stagger). CTAs fade at 650ms.  
**Motion Fallback:** Instant opacity.

---

### Section 2: FINANCING OPTIONS GRID
**Purpose:** Explain the three financing paths without jargon.  
**Layout Intent:** 3-column grid (desktop), 1-column stack (mobile). Each option card: icon + title + "best for:" label + 3 key facts + callout badge (recommended for most homeowners).  
**Surface Style:** White cards + colored left-border accent. Recommended card has amber border + "Most Popular" badge.  

**Card 1 — Cash Purchase:**
- Icon: `Banknote` (lucide, amber)
- Title: "Cash Purchase"
- Best for: "Homeowners wanting maximum long-term ROI"
- Key facts: "Highest savings | No monthly payments | Full ownership from Day 1"
- Payback: "6–8 year average payback"

**Card 2 — Solar Loan (RECOMMENDED):**
- Icon: `CreditCard` (lucide, amber)
- Title: "Solar Loan"
- Best for: "Homeowners who want $0 down with ownership benefits"
- Key facts: "$0 down options | Fixed monthly payments | Immediate savings"
- Badge: "Most Popular" (amber bg)
- Payback: "Positive cash flow from Month 1 (savings > payment)"

**Card 3 — Power Purchase Agreement (PPA):**
- Icon: `Zap` (lucide, amber)
- Title: "Power Purchase Agreement"
- Best for: "Homeowners who prefer no upfront cost or ownership"
- Key facts: "$0 down | Pay per kWh at lower rate | No ownership"
- Note: "Available in select states — ask your advisor"

**Motion:** Cards stagger-entrance on scroll (50ms per card).

---

### Section 3: INCENTIVES & TAX CREDITS
**Purpose:** Demystify the 26% Federal ITC and state incentives — often the deciding factor for undecided buyers.  
**Layout Intent:** 2-column layout (desktop): left column = animated number callout + explainer, right column = incentive list with checkmarks.  
**Surface Style:** Teal surface (`var(--color-secondary-50)`) background.  
**Copy Snapshot:**
- Big number: "26%" (count-up animation) — "Federal Investment Tax Credit"
- Explainer: "Claim 26% of your total solar system cost as a federal tax credit in the year of installation."
- Incentive list items:
  - ✓ Federal Investment Tax Credit (ITC): 26% of system cost
  - ✓ Net Metering: Sell excess energy back to the grid
  - ✓ Property Tax Exclusion: Solar adds home value but not property tax (CA, NV, TX, FL)
  - ✓ SGIP Rebate: Up to $400/kWh for battery storage (CA)
  - ✓ Utility Rebates: Varies by utility provider (we handle the paperwork)

**Note:** "Incentives vary by state and utility provider. We'll identify every dollar you qualify for in your free assessment."

---

### Section 4: ROI CALCULATOR (Interactive)
**Purpose:** The page's core interactive element — personalize savings estimate to the visitor's situation.  
**Layout Intent:** Full-width calculator panel. Light card on light surface. Step 1 (inputs) → "Calculate" button → Step 2 (results reveal). Inputs: monthly bill slider ($50–$500), state dropdown, property type (residential/commercial).  
**Surface Style:** White card, amber accent on focus inputs, teal on results panel.  

**Calculator Inputs:**
- Monthly electricity bill: Range slider $50 → $500 (default: $150)
- State: Dropdown (pre-filled to top solar states)
- Property type: Radio (Residential / Commercial)
- Roof ownership: Toggle (Own / Lease) — affects eligibility note

**Results Display (after calculation):**
- Big number: Estimated annual savings ($X,XXX)
- 25-year savings: $XX,XXX
- Estimated payback: X years
- System size estimate: XX kW
- Monthly payment (loan option): $XXX/mo

**Disclaimer:** "Estimates based on regional averages. Actual savings depend on site assessment."  
**CTA after results:** "Get My Exact Savings — Free Assessment" (primary amber, full-width on mobile).

**Motion:** "Calculate" triggers calculating spinner (1200ms), then results `slide-up` + count-up animation.

---

### Section 5: CUSTOMER SAVINGS STORIES
**Purpose:** Validate calculator estimates with real customer numbers — prove the ROI is real, not theoretical.  
**Layout Intent:** 3 customer story cards (desktop horizontal row, mobile 1-card carousel). Each card: customer name + city + savings amount + quote + service type badge.  
**Copy Snapshot:**
- "We're saving $580/month on our electricity bill. The system paid back in 7 years." — Robert Chen, Homeowner, San Jose | Residential Loan
- "Our commercial property now generates 40% of its own power. ROI exceeded projections." — Meridian Logistics, Sacramento | Commercial PPA

---

### Section 6: CTA BAND
**Purpose:** Final conversion — user has learned about financing options and seen ROI numbers, now invite them to get their real numbers.  
**Layout Intent:** Full-width amber band. Desktop: text left + dual CTAs right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Ready to See Your Real Numbers?"
- Subheadline: "Our experts will calculate your exact savings, incentives, and financing options — completely free."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Call Us: +1-555-766-2576"

---

## Forbidden Patterns

- ✗ MUST NOT replicate the Home ROI metrics strip (this page goes deeper with interactive calculator)
- ✗ MUST NOT use the same hero composition as Services (financing is aspirational/ROI, not technical specs)
- ✗ MUST NOT include installation process steps (that's Services page territory)

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home uses emotional narrative (family). Financing uses data authority (numbers, ROI, calculator). Teal-tinted hero vs. home's warm amber overlay.  
**vs. SERVICES:** Services is about what we install; Financing is about how to pay and what you'll earn back.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `interactive-responsiveness` — the page reacts to user input. Calculator creates a feedback loop.  
**Key moments:**
- ROI calculator results: most critical animation — count-up numbers build excitement
- Savings story cards: stagger-fade on scroll (builds authority incrementally)

**Reduced-motion fallback:**
- Count-up: instant final number display
- Stagger: single simultaneous fade
- Calculator spinner: replaced by instant result display

---

## State Requirements

| State | Behavior |
|-------|----------|
| Calculator empty (no input) | "Calculate" button disabled, shows placeholder instruction |
| Calculator calculating | Spinner + "Crunching your numbers..." text |
| Calculator results | Results panel slides up, numbers count up |
| Calculator error | "Calculation unavailable. Call us for a free assessment." + phone CTA |
| Incentives disclaimer | Toggleable "learn more" expansion per incentive |

---

## SEO + Schema

- **Title:** "Solar Financing Options & ROI Calculator | SunEnergy Pro"
- **Meta description:** "Explore solar financing: loans, PPAs, $0 down options. Use our ROI calculator to estimate your savings and payback period. Free solar assessment."
- **H1:** "Solar Pays for Itself"
- **Schema:** `FAQPage` for incentive explainer items; `BreadcrumbList`
- **Canonical:** `/financing`

---

## Performance Plan

- LCP target: < 2.5s
- Calculator: client component — lazy-loaded, ≤ 25KB
- No external API needed for calculator (client-side estimate algorithm)
- Hero image: ≤ 180KB WebP, `priority` prop

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `calculator_start` | User moves first slider |
| `calculator_complete` | User clicks "Calculate" |
| `calculator_results_view` | Results panel appears |
| `financing_option_click` | Click any financing card "Learn More" |
| `incentive_expand` | Expand any incentive detail |
| `financing_cta_click` | Click "Get Free Assessment" from this page |

---

## Open Questions

1. Is the 26% ITC still valid for the current tax year or has it changed (check IRS updates)?
2. Which states are in scope for the SGIP and other incentive specifics?
3. Should the calculator use a real API (e.g., NREL PVWatts) or a simplified formula?
