# Page Design Brief: FREE ASSESSMENT

**Route:** `/free-assessment`  
**Status:** LOCKED  
**Lead Gen Role:** PRIMARY LEAD MAGNET — Collect qualified lead emails; qualify prospects before sales call  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (conversion landing page)  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `free-assessment::multi-step-questionnaire::progressive-reveal::interactive-qualify`

---

## Page Definition

**User Intent:** Take an interactive questionnaire to find out if their property qualifies for solar and get an instant preliminary estimate — zero-commitment first step.

**Conversion Outcome:** User completes the questionnaire → email captured → follow-up consultation scheduled.

**Primary CTA:** "See My Solar Potential" (questionnaire start)  
**Secondary CTA:** "Skip to Contact Form"

**KPI:** Questionnaire completion rate (target > 60%); email capture rate; follow-up consultation bookings from assessment leads.

---

## Outcomes (What Must Be True)

1. ✓ User can start the questionnaire with a single tap — zero friction at entry.
2. ✓ Questionnaire has ≤ 5 steps and takes < 3 minutes to complete.
3. ✓ Progress indicator shows how many steps remain at all times.
4. ✓ Results screen shows a personalized preliminary estimate (savings range + system size).
5. ✓ Email capture occurs on the results screen — after value is delivered, not before.
6. ✓ If user abandons mid-questionnaire, data is preserved in localStorage for up to 7 days.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | assessment.hero.headline | Lead Magnet Hook |
| Questionnaire intro | assessment.intro.* | UX Copy |
| Step labels | assessment.steps.*.label | Form |
| Question text per step | assessment.steps.*.question | Form |
| Results headline | assessment.results.headline | Value Delivery |
| Results metrics | assessment.results.* | Social Proof |
| Email capture | assessment.capture.* | Lead Capture |
| Trust signals | assessment.trust.* | Trust |
| CTA band | assessment.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Lead Magnet Hook)
**Purpose:** Instantly communicate "this is free, fast, and personalized" — the 3 hooks that overcome assessment-page hesitation.  
**Layout Intent:** Full-bleed hero (65svh desktop, 55svh mobile). Split layout: left content panel (60%) + right visual proof panel (40%) on desktop. Stacked on mobile.  
**Surface Style:** Dark surface `var(--color-surface-dark-900)` with subtle solar wireframe texture overlay (4% opacity). Amber accent on CTA.  
**Copy Snapshot:**
- Badge: "⚡ 100% Free — No Obligation"
- H1: "Find Out How Much Solar Can Save You" — 48px desktop, 28px mobile
- Subheadline: "Answer 5 quick questions and get your personalized solar savings estimate in under 3 minutes."
- Proof strip: "Trusted by 15,000+ homeowners | NABCEP Certified | Results in 3 minutes"
- CTA: "See My Solar Potential →" (large amber button, full-width on mobile)

**Right panel (desktop only):**
- Sample result card: blurred/demo version showing "Estimated Annual Savings: $X,XXX" with a lock icon overlay "Complete the form to see your number"

**Motion:** H1 stagger-reveal (30ms/word, 350ms). Proof strip fades in at 500ms. Right panel scales in from 0.95 at 400ms.  
**Motion Fallback:** Instant opacity.

---

### Section 2: MULTI-STEP QUESTIONNAIRE
**Purpose:** The core interactive element — progressive qualification flow.  
**Layout Intent:** Centered card (max-width 600px) with white background + shadow + rounded corners. Step indicator at top. One question visible at a time. "Next →" / "← Back" navigation. Full-width card on mobile.  
**Surface Style:** White card on light gray surface. Amber progress bar at top of card. Active option highlights with amber border.

**Step 1 — Property Type:**
- Question: "What type of property are you looking to power with solar?"
- Options: 🏠 Residential Home | 🏢 Commercial Building | 🏠 Multi-Family Home | 🏭 Industrial Facility
- Type: Single-select radio card

**Step 2 — Ownership:**
- Question: "Do you own or rent your property?"
- Options: I Own | I Rent
- Micro-copy: If "Rent" is selected → "Solar typically requires ownership. But ask your landlord — many owners qualify for savings too." + soft continue allowed.

**Step 3 — Monthly Bill:**
- Question: "What is your average monthly electricity bill?"
- Options: Under $75 | $75–$150 | $150–$250 | $250–$400 | Over $400
- Type: Single-select cards

**Step 4 — Roof Condition:**
- Question: "How would you describe your roof?"
- Options: New or < 5 years old | 5–15 years old | 15–25 years old | I'm not sure
- Micro-copy: "Your roof condition helps us estimate if any repairs are needed before installation."

**Step 5 — Contact Info:**
- Question: "Where should we send your results?"
- Fields: First name (required) | Email (required) | Phone (optional) | Zip code (required for location-based estimate)
- Consent checkbox: "I agree to receive my assessment results and occasional solar tips. Unsubscribe anytime."

**Step indicator:** "Step X of 5" with amber progress bar (20% per step).  
**Progress persistence:** Save answers to localStorage on each step. On return within 7 days: "Welcome back! Continue where you left off?" toast.

**Motion:** Each step transition: slide-out left (current) + slide-in from right (next). Back: reverse direction. 350ms ease-in-out.  
**Motion Fallback:** Instant swap.

---

### Section 3: RESULTS SCREEN
**Purpose:** Deliver personalized value immediately — this is the payoff for completing the questionnaire.  
**Layout Intent:** Results replace the questionnaire card. Large results panel with amber accent. Metrics display with count-up animation. Below metrics: email capture CTA (if not already submitted in Step 5).  
**Surface Style:** White results card with amber top-border + celebration confetti burst (once, on mount, respects reduced-motion).  
**Results Content:**
- Headline: "Your Solar Savings Estimate is Ready!" (H2)
- Estimated Annual Savings: "$3,800 – $7,200" (range based on bill tier + region)
- System Size Estimate: "8 – 14 kW"
- Est. Federal Tax Credit: "$3,900 – $7,800"
- Payback estimate: "5–8 years"
- Disclaimer: "Estimates based on national averages for your area. An on-site assessment will provide exact figures."
- Below metrics: "Get your exact numbers — our expert will contact you within 24 hours."
- CTA: "Get My Exact Assessment →" (goes to contact form pre-filled or triggers advisor outreach)

**Trust strip below results:** "Your information is secure. We never sell your data. | NABCEP Certified | BBB A+"

---

### Section 4: SOCIAL PROOF STRIP
**Purpose:** Reassure users who have just submitted that they made the right decision.  
**Layout Intent:** Compact light strip (below the questionnaire card). 3 small testimonial chips in a row.  
**Copy Snapshot:**
- "Best decision I made. Saving $580/month." — Maria S., Sacramento
- "The assessment was totally free and fast." — Robert K., Modesto
- "No pressure, just real savings data." — Chen Family, Fresno

---

### Section 5: CTA BAND
**Purpose:** Capture users who skipped the questionnaire or want to go straight to contact.  
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Prefer to Talk to an Expert Directly?"
- Subheadline: "Skip the form — call us or send a message and we'll have your assessment ready within 24 hours."
- CTA Primary: "Call +1-555-766-2576"
- CTA Secondary: "Send a Message" → `/contact`

---

## Forbidden Patterns

- ✗ MUST NOT ask for email before delivering any value
- ✗ MUST NOT use more than 5 steps in the questionnaire
- ✗ MUST NOT show same hero as Contact page (Contact is action-minimal; Assessment is value-delivery)
- ✗ MUST NOT show a generic "Submit" button on any step

---

## Visual Differentiation vs. Other Routes

**vs. CONTACT:** Contact is minimal/functional direct lead capture; Assessment is value-first progressive discovery. Different hero and flow.  
**vs. SOLAR CALCULATOR:** Calculator shows real-time numbers while typing; Assessment is step-by-step questionnaire with gated results. Both lead to assessment CTA but via different user journeys.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `progressive-reveal` — each step should feel like an achievement. Light energy.  
**Key moments:**
- Step transition: directional slide (gives sense of progress)
- Results count-up: reward animation for completing
- Confetti: single celebratory burst on results reveal

**Reduced-motion:**
- Step transition: instant swap
- Count-up: instant final number
- Confetti: skip entirely

---

## State Requirements

| State | Behavior |
|-------|----------|
| Empty (no progress) | Step 1 card visible, progress bar empty |
| Returning user (localStorage) | Toast: "Welcome back! Continue your assessment?" with Resume / Start Over buttons |
| Mid-questionnaire abandon | Data saved, no disruption |
| Results pending | Loading spinner (800ms) then results reveal |
| API error (contact save) | "Couldn't save your results. Please try again." + fallback to phone CTA |
| Mobile sticky | Step indicator stays visible; progress bar sticky at top of card |

---

## SEO + Schema

- **Title:** "Free Solar Assessment — Find Out Your Savings | SunEnergy Pro"
- **Meta:** "Take our free 3-minute solar assessment. Get your personalized savings estimate, federal tax credit amount, and system size recommendation. No obligation."
- **H1:** "Find Out How Much Solar Can Save You"
- **Schema:** `WebApplication` for the interactive questionnaire; `BreadcrumbList`
- **Canonical:** `/free-assessment`

---

## Performance Plan

- LCP target: < 2.0s (no hero photography)
- Questionnaire: React state — no external data fetch
- Results calculation: Client-side formula (no API)
- Email save: API route POST (graceful error handling)
- JS budget: ≤ 60KB

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `assessment_start` | Click "See My Solar Potential" |
| `assessment_step_N` | Each step completed (N = 1–5) |
| `assessment_complete` | Results screen displayed |
| `assessment_email_submit` | Contact info submitted in Step 5 |
| `assessment_cta_click` | "Get My Exact Assessment" clicked |
| `assessment_skip_to_contact` | "Skip to Contact Form" clicked |
| `assessment_abandon` | User leaves page mid-flow (track last step reached) |

---

## Open Questions

1. Should the savings calculator use a real formula (location × bill tier × avg savings rate) or show static ranges?
2. Does the form submission go to CRM (e.g., HubSpot) or email/webhook?
3. Should renter prospects be redirected or just shown a different result message?
