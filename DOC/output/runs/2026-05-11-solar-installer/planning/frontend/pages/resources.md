# Page Design Brief: RESOURCES

**Route:** `/resources`  
**Status:** LOCKED  
**Lead Gen Role:** TERTIARY — Content nurturing; email capture via guide downloads  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (educational content SEO, long-tail queries)  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `resources::card-library::educational::lead-magnet-capture`

---

## Page Definition

**User Intent:** Self-educate before making a solar decision — download guides, watch explainer videos, and read reference material to feel informed and confident.

**Conversion Outcome:** Educational content consumed → email captured via guide download → re-engagement with assessment CTA.

**Primary CTA:** "Download the Free Guide"  
**Secondary CTA:** "Get Free Assessment"

**KPI:** Guide downloads (email captures); page scroll depth; video plays; resource-to-assessment conversion rate.

---

## Outcomes (What Must Be True)

1. ✓ At least 3 downloadable guides are available without requiring much friction (email for PDF download is acceptable).
2. ✓ Resources are categorized (Guides, Videos, Tools, FAQs) for easy scanning.
3. ✓ The featured guide is prominently displayed with a clear email capture form.
4. ✓ Educational content establishes expertise without being overwhelming.
5. ✓ Each resource links to a related page (e.g., guide on financing → `/financing`).
6. ✓ Page works as a hub for all free educational assets.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | resources.hero.headline | Educational Hook |
| Featured guide | resources.featured_guide.* | Lead Magnet |
| Resource categories | resources.categories.* | Navigation |
| Resource cards (8+) | resources.items.* | Educational Content |
| Email capture form | resources.email_capture.* | Lead Capture |
| CTA band | resources.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO
**Purpose:** Frame this as a knowledge hub — helpful, not pushy.  
**Layout Intent:** Compact hero (45svh desktop, 35svh mobile). Background: clean light surface with amber accent shapes. No photography.  
**Surface Style:** Light white surface + decorative amber vector elements (subtle sun/ray motif).  
**Copy Snapshot:**
- Eyebrow: "FREE RESOURCES"
- H1: "Everything You Need to Know About Going Solar" — 40px desktop
- Subheadline: "Free guides, videos, and tools to help you make the right solar decision for your home or business."
- Quick stat: "10,000+ homeowners educated | Updated quarterly"

---

### Section 2: FEATURED GUIDE (Lead Magnet)
**Purpose:** Convert visitors to email subscribers with a high-value downloadable guide.  
**Layout Intent:** 2-column (desktop): left = guide preview image (PDF cover mockup) + badges; right = title + 5-bullet benefit list + email capture form.  
**Surface Style:** Amber/dark gradient card. White text. Amber CTA.

**Featured Guide:**
- Title: "The 2025 California Solar Buyer's Guide"
- Subtitle: "Everything you need to know before signing any solar contract"
- Cover preview image: PDF booklet mockup (12-page guide)
- What's inside (5 bullets):
  - How to evaluate solar quotes and spot misleading claims
  - NEM 3.0 explained: how net metering works in 2025
  - Federal tax credit & SGIP guide — who qualifies and how to claim
  - 7 questions to ask before you hire any solar installer
  - How to calculate your payback period (with our worksheet)
- Email capture form: "Name" + "Email" + "Download Free Guide" button
- Privacy note: "No spam. Unsubscribe anytime."

---

### Section 3: CATEGORY FILTER + RESOURCE GRID
**Purpose:** Browse all resources by type.  
**Layout Intent:** Category filter tabs + 3-column grid (desktop), 2-col (tablet), 1-col (mobile).  
**Filter tabs:** All | Guides & eBooks | Videos | Tools | Checklists

**Resource Cards (8 items):**

**Guide 1:** "How Solar Financing Works in 2025" (PDF, 8 pages)  
- Tags: Financing, Guides  
- CTA: "Download Free" → email capture  
- Related: `/financing`

**Guide 2:** "Commercial Solar ROI Worksheet" (PDF + Excel)  
- Tags: Commercial, Tools  
- CTA: "Download Free" → email capture  
- Related: `/solar-calculator`

**Guide 3:** "Roof Solar Readiness Checklist" (PDF, 2 pages)  
- Tags: Residential, Checklists  
- CTA: "Download Free" → no gate (high frequency)  
- Related: `/free-assessment`

**Video 1:** "How a Solar Installation Works — Step by Step" (YouTube embed, 8 min)  
- Tags: Videos, Residential  
- CTA: "Watch Now" → embedded player expand

**Video 2:** "Understanding Your Solar Monitoring Dashboard" (YouTube embed, 5 min)  
- Tags: Videos, Maintenance  
- CTA: "Watch Now"

**Tool 1:** "Solar Savings Calculator" (interactive tool)  
- Tags: Tools  
- CTA: "Use Calculator →" → `/solar-calculator`

**Guide 4:** "Battery Storage Buyer's Guide" (PDF, 6 pages)  
- Tags: Battery Storage, Guides  
- CTA: "Download Free" → email capture

**Guide 5:** "How to Read Your PG&E Solar Bill (NEM 3.0)" (PDF, 4 pages)  
- Tags: Guides, Utility  
- CTA: "Download Free" → no gate

---

### Section 4: FAQ TEASER
**Purpose:** Surface the most common questions with a link to the full FAQ.  
**Layout Intent:** 3 mini FAQ accordion items + "View All FAQs →" link.  
**Questions:**
1. "How long does a solar installation take?"
2. "Do I need to replace my roof before going solar?"
3. "What happens during a power outage if I have solar?"

---

### Section 5: CTA BAND
**Layout Intent:** Full-width amber band.  
**Copy Snapshot:**
- Headline: "Ready to Move from Learning to Acting?"
- Subheadline: "A free on-site assessment turns everything you've learned into a personalized plan."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Talk to a Solar Expert →"

---

## Forbidden Patterns

- ✗ MUST NOT gate every resource behind email (some must be free/ungated to reduce friction)
- ✗ MUST NOT use same layout as Blog (Blog is editorial; Resources is a downloads/tools hub)

---

## SEO + Schema

- **Title:** "Free Solar Guides & Resources — California Solar Education Hub | SunEnergy Pro"
- **Meta:** "Free solar buyer guides, ROI worksheets, videos, and tools. Learn everything about going solar before signing any contract. Updated for 2025 California regulations."
- **Schema:** `Collection` of `DigitalDocument`; `BreadcrumbList`
- **Canonical:** `/resources`

---

## Open Questions

1. Are the PDF guides real or do they need to be created from scratch?
2. Should email captures go to a CRM (HubSpot, Mailchimp) — which one?
3. Are the YouTube videos already produced?
