# Page Design Brief: FAQ

**Route:** `/faq`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Reduce pre-conversion friction; answer objections before sales call  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (FAQ schema drives rich results / PAA snippets)  
**Visual Latitude:** LOW  
**Visual Signature Hash:** `faq::minimal-accordion::functional-clarity::sparse-smooth`

---

## Page Definition

**User Intent:** Find answers to specific questions about solar installation, cost, process, warranty, or eligibility — without needing to call.

**Conversion Outcome:** Objections answered → user books assessment or calls.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "Call Us"

**KPI:** FAQ search interactions; accordion engagement; assessment clicks attributed to `/faq`; bounce rate < 40%.

---

## Outcomes (What Must Be True)

1. ✓ User can search FAQ content and get results within 2 keystrokes (client-side search, no page reload).
2. ✓ Questions are organized into clear categories (Cost, Process, Equipment, Warranties, Financing, Maintenance).
3. ✓ Minimum 24 Q&A pairs published at launch.
4. ✓ Each answer is 2–4 sentences — enough to inform, short enough to scan.
5. ✓ CTA to assessment appears after every 3rd answer (or as sticky CTA on mobile).
6. ✓ FAQ schema is implemented for Google rich results.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | faq.hero.headline | Navigation |
| Search placeholder | faq.search.placeholder | UX Copy |
| Category labels | faq.categories.* | Navigation |
| Q&A pairs (24+) | faq.items.* | Education |
| Mid-page CTA strip | faq.mid_cta.* | Conversion |
| CTA band | faq.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Informational Minimal)
**Purpose:** Orient user to FAQ page instantly — zero-friction entry to content.  
**Layout Intent:** Compact hero (40svh desktop, 30svh mobile). Light surface (light mode: `var(--color-surface-50)`, dark mode: `var(--color-surface-dark-800)`). NO photography. Left-edge amber accent bar on content panel.  
**Copy Snapshot:**
- H1: "Frequently Asked Questions" — 40px desktop, 28px mobile
- Subheadline: "Everything you need to know before going solar." — 18px
- Search bar: Full-width input, placeholder "Search questions... (e.g. 'how much does solar cost?')", magnifying glass icon, amber focus ring
- Popular searches row (below search): "How much does solar cost?" | "How long does installation take?" | "What warranties are included?" — clickable chips that fill search input

**Motion:** H1 fades in (200ms). Search bar slides in from below (300ms, ease-out).  
**Motion Fallback:** Instant visibility.

---

### Section 2: CATEGORY NAVIGATION
**Purpose:** Let users jump to a relevant category without scrolling the full accordion.  
**Layout Intent:** Horizontal pill tabs (desktop) / 2-col grid of chips (mobile). Categories: All | Cost & Pricing | Installation Process | Equipment | Warranties | Financing | Maintenance & Monitoring | Eligibility.  
**Interaction:** Click category → smooth-scroll to that section + filter accordion to show only that category's items.  
**Accessibility:** `role="tablist"`, `aria-selected`, keyboard-navigable with arrow keys.

---

### Section 3: FAQ ACCORDION (Full Content)
**Purpose:** The core content of the page — organized expandable Q&A.  
**Layout Intent:** Full-width accordion stack. Category headers are sticky sub-headings (H2). Each accordion item: question (bold) + expand icon → expanded answer (14–16px, line-height 1.6). 100% content width, not card-boxed.  
**Surface Style:** White accordion items with bottom border divider. Expanded state: light amber left-border accent.  

**FAQ Content (draft — 24 minimum):**

**COST & PRICING (6 items):**
- Q: "How much does a residential solar system cost?" → A: "A typical residential system costs $15,000–$30,000 before incentives. After the 26% federal tax credit, most homeowners pay $11,000–$22,000. Exact cost depends on system size, roof type, and local labor rates. We provide a free, detailed quote after your site assessment."
- Q: "Are there hidden fees?" → A: "No. Our quote includes equipment, installation, permits, and interconnection fees. The only variable is post-installation utility application fees, which we also disclose upfront."
- Q: "How much can I save on electricity?" → A: "Most residential customers reduce their electricity bill by 60–80%. Actual savings depend on your current bill size, local utility rates, and system production. Our calculator provides an estimate; your free assessment gives exact numbers."
- Q: "Does solar add value to my home?" → A: "Yes. Studies show solar adds approximately 4% to home resale value. In most states, this added value is exempt from property tax reassessment."
- Q: "What is the payback period?" → A: "The average payback period for our customers is 6–8 years for cash purchases. Loan customers often achieve cash-flow positive status from Month 1 (savings exceed monthly payment)."
- Q: "Are there any ongoing costs?" → A: "Solar systems have minimal ongoing costs. Monitoring is included for 25 years. Annual inspection is recommended ($149/yr). Inverter replacement is typically needed at Year 15–20 (~$1,200)."

**INSTALLATION PROCESS (4 items):**
- Q: "How long does installation take?" → A: "Most residential installations are completed in 1–3 days. The full process — from assessment to system activation — takes 4–8 weeks (assessment, design, permits, install, utility approval)."
- Q: "What happens during the free assessment?" → A: "A certified technician visits your property to evaluate your roof condition, orientation, shading, and current energy usage. The assessment takes 60–90 minutes and is completely free with no obligation."
- Q: "Will I need to stay home during installation?" → A: "You don't need to be home during installation, but we ask that someone be available for the pre-installation walkthrough (30 minutes) and final sign-off."
- Q: "Do you handle permits and utility approvals?" → A: "Yes. We manage all permits, HOA approvals (where applicable), and utility interconnection paperwork. This is included in your installation price."

**EQUIPMENT (4 items):**
- Q: "What solar panels do you install?" → A: "We install premium panels from leading manufacturers including SunPower, REC, and LG. All panels are rated for 25+ years of production with output guarantees."
- Q: "What inverter types do you offer?" → A: "We offer string inverters (cost-effective for unshaded roofs), microinverters (optimal for partially shaded roofs), and hybrid inverters (for battery storage systems)."
- Q: "Do you offer battery storage?" → A: "Yes. We are Tesla Powerwall Certified and Generac PWRcell Certified installers. Battery storage adds energy independence and backup capability during outages."
- Q: "Is my roof compatible with solar?" → A: "Most roofs are compatible. We assess composition shingle, tile, and metal roofs. We'll identify any repairs needed before installation. If your roof is near end-of-life, we recommend replacing it first."

**WARRANTIES (3 items):**
- Q: "What warranty comes with my system?" → A: "Your system includes a 25-year manufacturer warranty on panels, 10–25 year inverter warranty, and a 10-year SunEnergy Pro workmanship warranty on installation. All warranty claims are handled by our team — you never deal with the manufacturer directly."
- Q: "What if a panel fails?" → A: "If any panel underperforms within warranty, we replace it at no cost. Our 24/7 monitoring system alerts us before you even notice performance loss."
- Q: "Are you insured and licensed?" → A: "Yes. SunEnergy Pro is fully licensed (CSLB #XXXXXXX), bonded, and insured with $2M liability coverage. Our technicians are NABCEP-certified — the gold standard in solar installation."

**FINANCING (4 items):**
- Q: "Can I go solar with no money down?" → A: "Yes. We offer $0-down solar loan options with competitive APR. In many cases, your monthly loan payment is less than your current electricity bill — making you cash-flow positive from Day 1."
- Q: "What is a Power Purchase Agreement (PPA)?" → A: "A PPA means you don't own the system — instead, you pay a fixed per-kWh rate for the solar electricity it produces, typically 20–30% below utility rates. $0 upfront, no ownership responsibility."
- Q: "What is the Federal Solar Tax Credit?" → A: "The federal Investment Tax Credit (ITC) lets you deduct 26% of your solar system cost from your federal taxes in the year of installation. This applies to purchased systems (cash or loan). PPA and lease customers don't qualify."
- Q: "Do you help with financing applications?" → A: "Yes. Our advisors guide you through every financing option and help you apply. We work with multiple lenders to find the best rate for your situation."

**MAINTENANCE (3 items):**
- Q: "Do solar panels require maintenance?" → A: "Solar panels are largely maintenance-free. They're self-cleaning in most climates. We recommend an annual visual inspection and periodic rinsing in dry climates. We offer a $149/year inspection plan."
- Q: "How do I monitor my system?" → A: "Your system comes with a free monitoring app. You'll see real-time production, historical data, and receive alerts if output drops. We also monitor remotely and proactively reach out if something looks off."
- Q: "What happens if my system is damaged?" → A: "SunEnergy Pro handles all warranty claims and can assist with insurance claims for storm or impact damage. Contact us and we'll schedule a same-week inspection."

**Motion:** Accordion items expand with `content-slide` (250ms, ease-out). Arrow icon rotates 180° on expand.  
**Accessibility:** Each accordion item: `<button>` trigger with `aria-expanded`, `aria-controls`, `id` on answer panel. Answer panel `role="region"`.

---

### Section 4: MID-PAGE CTA STRIP
**Purpose:** Intercept high-intent users who have read enough to act, without forcing them to scroll to the bottom.  
**Layout Intent:** Compact amber strip between FAQ section groups. Center-aligned. Desktop and mobile.  
**Copy Snapshot:**
- "Still have questions? Talk to a solar expert."
- CTA: "Schedule a Free Consultation" + "Call +1-555-766-2576"

---

### Section 5: CTA BAND
**Purpose:** Convert users who have finished reading FAQ — they're now informed and ready.  
**Layout Intent:** Full-width dark band. Desktop: text left + CTAs right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "You've Done Your Research. Now Take the Next Step."
- Subheadline: "Start with a free, no-obligation solar assessment — most homeowners get results in 48 hours."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Call +1-555-766-2576"

---

## Forbidden Patterns

- ✗ MUST NOT use a full-bleed photography hero (FAQ is functional — minimal visual)
- ✗ MUST NOT group all Q&As without category headings (users need navigational structure)
- ✗ MUST NOT use vague answers ("it depends") without a concrete range or example

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home is full-bleed photography + emotional tone; FAQ is minimal surface + functional tone.  
**vs. SERVICES:** Services explains what we offer with visuals; FAQ provides written answers to objections.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `smooth-collapse` — calm, functional, low-distraction. Users are reading.  
**Key moments:** Accordion expand/collapse (smooth height), search result filter (fade in/out).  
**Reduced-motion:** Instant visibility on expand; no transition.

---

## SEO + Schema

- **Title:** "Solar FAQ — Common Questions About Installation, Cost & Savings | SunEnergy Pro"
- **Meta:** "Get answers to 24+ frequently asked solar questions: costs, installation timeline, warranties, financing, and maintenance. From NABCEP-certified solar experts."
- **H1:** "Frequently Asked Questions"
- **Schema:** `FAQPage` with `Question` and `Answer` per item — critical for Google rich results
- **Canonical:** `/faq`

---

## Performance Plan

- LCP target: < 2.0s (no heavy imagery)
- Client-side FAQ search: 300ms debounce, no API call
- Accordion state: local React state (no server)
- FAQ data: Static JSON embedded at build-time
- JS budget: ≤ 45KB

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `faq_search` | User types in search input (debounced at 500ms) |
| `faq_item_expand` | Any accordion item expanded |
| `faq_category_click` | Category filter/tab clicked |
| `faq_cta_click` | Any CTA clicked on this page |
| `faq_mid_cta_click` | Mid-page CTA clicked specifically |

---

## Open Questions

1. Are the CSLB license number and insurance details confirmed for publication?
2. Is the $0-down loan option available at launch or in development?
3. Which specific states have confirmed PPA availability?
