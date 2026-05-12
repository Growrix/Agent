# Page Design Brief: CASE STUDIES

**Route:** `/case-studies`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — In-depth social proof; high-intent nurturing  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (long-tail SEO: "commercial solar case study California")  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `case-studies::story-cards::metric-led::before-after-narrative`

---

## Page Definition

**User Intent:** Read detailed, real-world project stories that demonstrate measurable ROI and professional execution — for high-consideration buyers who want deep proof before committing.

**Conversion Outcome:** High-confidence prospect requests assessment after reading 1+ case study.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "View More in Our Portfolio"

**KPI:** Case study detail views; time on page (target > 3 min); assessment leads with case study as last touchpoint.

---

## Outcomes (What Must Be True)

1. ✓ At least 6 case study cards are visible on the index page.
2. ✓ Each case study shows: customer type, system size, installation time, annual savings, and a 1-paragraph summary.
3. ✓ Clicking a card navigates to a detail view (modal or sub-page) with the full case study.
4. ✓ Real before/after photos are included in each case study.
5. ✓ Commercial and residential case studies are both represented.
6. ✓ ROI and payback period are shown for every case study.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | case_studies.hero.headline | Social Proof |
| Case study cards (6+) | case_studies.items.* | Deep Proof |
| Results strip | case_studies.results.* | Trust Signals |
| Filter labels | case_studies.filters.* | Navigation |
| CTA band | case_studies.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO
**Purpose:** Position case studies as the "prove it" section — high-credibility, results-focused.  
**Layout Intent:** Compact hero (50svh desktop, 40svh mobile). Background: split — left half dark surface, right half: project photo (commercial warehouse with solar). Left content panel.  
**Copy Snapshot:**
- Eyebrow: "CASE STUDIES"
- H1: "Real Projects. Real Numbers. Real Results." — 44px desktop
- Subheadline: "Deep-dive into 6+ completed installations — how we delivered, what we solved, and what customers saved."
- Metrics row: "15,000+ Projects | $180M+ in Customer Savings | 97% Satisfaction"

---

### Section 2: FILTER BAR
**Purpose:** Allow browsing by customer type.  
**Layout Intent:** Horizontal pill filters. Options: All | Residential | Commercial | Battery Storage | Large Scale (50kW+).

---

### Section 3: CASE STUDY CARD GRID
**Purpose:** Browsable library of case studies.  
**Layout Intent:** 3-column grid (desktop), 2-col (tablet), 1-col (mobile). Each card: project photo + customer name + location + system size + annual savings + 2-sentence summary + "Read Case Study →" CTA.  
**Surface Style:** White cards + hover lift + amber "Read More" link.

**Case Studies (6 draft entries):**

**Case Study 1 — Residential (Rodriguez Family):**
- Photo: Before/after rooftop
- Customer: Rodriguez Family — Sacramento, CA
- System: 8.4 kW Residential
- Savings: $6,200/year
- Payback: 7.2 years
- Summary: "A family of 4 with a $320/month electricity bill reduced costs to $42/month post-installation. System designed around partial shading from a large oak tree using microinverters."

**Case Study 2 — Commercial (Apex Logistics):**
- Photo: Commercial warehouse aerial
- Customer: Apex Logistics — Fresno, CA
- System: 120 kW Commercial
- Savings: $45,600/year
- Payback: 5.1 years
- Summary: "A 60,000 sq ft distribution center reduced energy costs by 64%. Complex rooftop layout required custom racking. ROI exceeded projections by 15%."

**Case Study 3 — Battery Storage (Chen Residence):**
- Photo: Battery wall installation
- Customer: Chen Family — Modesto, CA
- System: 10 kW + 2× Tesla Powerwall
- Savings: $5,400/year
- Backup: "72-hour outage backup capacity"
- Summary: "After two PG&E shutoff events in one year, the Chen family added battery storage to their existing solar. Now energy-independent during outages."

**Case Study 4 — Residential Large (Whitfield Estate):**
- Photo: Large luxury home rooftop
- Customer: Whitfield Family — El Dorado Hills, CA
- System: 22 kW Residential
- Savings: $12,400/year
- Payback: 5.8 years
- Summary: "A 4,800 sq ft home with pool and EV charger was converted to near-zero net energy. System design required split-roof configuration and three micro-inverter arrays."

**Case Study 5 — Commercial (Patel Medical):**
- Photo: Medical office building
- Customer: Patel Medical Center — Stockton, CA
- System: 75 kW Commercial
- Savings: $32,000/year
- Payback: 5.4 years
- Summary: "A medical office building with daytime-heavy load profile was ideal for solar generation. Federal tax credit covered 26% of the $280,000 system cost."

**Case Study 6 — Non-Profit (Valley Community Center):**
- Photo: Community center
- Customer: Valley Community Center — Visalia, CA
- System: 45 kW Commercial
- Savings: $18,000/year
- Payback: 4.2 years (with SGIP grant)
- Summary: "A non-profit leveraged SGIP and local utility rebates to achieve one of the region's fastest solar payback periods. SunEnergy Pro managed all grant applications."

**Motion:** Cards stagger-entrance on scroll (50ms stagger, 300ms each).

---

### Section 4: AGGREGATE RESULTS STRIP
**Purpose:** Summarize impact of all case studies combined.  
**Layout Intent:** 4-metric strip (light teal surface).  
**Metrics:** "$180M+ in Customer Savings | 6.5 Year Avg. Payback | 97% Customer Satisfaction | 15,000+ Projects Complete"  
**Motion:** Count-up on scroll.

---

### Section 5: CTA BAND
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Your Project Could Be Our Next Case Study"
- Subheadline: "Get a free assessment and see exactly how much SunEnergy Pro can save your home or business."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Browse Our Portfolio"

---

## Forbidden Patterns

- ✗ MUST NOT show case studies without real metrics (no "significant savings" — use actual dollar amounts)
- ✗ MUST NOT omit before/after photos
- ✗ MUST NOT use same hero as Portfolio (Portfolio is gallery; Case Studies is narrative)

---

## SEO + Schema

- **Title:** "Solar Installation Case Studies — Real Results | SunEnergy Pro"
- **Meta:** "Read 6+ in-depth solar case studies with real savings data. Residential and commercial projects in Sacramento, Fresno, Modesto, and Central Valley."
- **Schema:** `Article` per case study; `BreadcrumbList`
- **Canonical:** `/case-studies`

---

## Open Questions

1. Do we have real before/after photos for all 6 case studies?
2. Can we use real customer names or do we need anonymized versions?
3. Should case study detail be a modal, an accordion expand, or a sub-page at `/case-studies/[slug]`?
