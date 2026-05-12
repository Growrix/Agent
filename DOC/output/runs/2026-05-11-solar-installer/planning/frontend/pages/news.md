# Page Design Brief: NEWS

**Route:** `/news`  
**Status:** LOCKED  
**Lead Gen Role:** TERTIARY — Brand authority; repeat engagement; local SEO  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** Medium (company news + local market updates)  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `news::editorial-minimal::press-cards::milestone-timeline`

---

## Page Definition

**User Intent:** Stay updated on company milestones, regional solar market news, incentive changes, and project highlights — especially for existing customers and local press.

**Conversion Outcome:** Brand credibility reinforced → converts fence-sitters or creates word-of-mouth.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "Subscribe to Updates"

**KPI:** Newsletter subscriptions; news page repeat visits; press coverage mentions.

---

## Outcomes (What Must Be True)

1. ✓ Company news and external solar industry news are clearly distinguished.
2. ✓ At least 6 news items are shown at launch.
3. ✓ A newsletter subscribe form is visible without heavy friction.
4. ✓ Major milestone highlights (projects completed, awards, anniversaries) are featured.
5. ✓ News items link out to full articles or expand in-page.
6. ✓ Press/media logos are shown if coverage exists.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | news.hero.headline | Brand Authority |
| Featured news | news.featured.* | Lead Story |
| News cards (6+) | news.items.* | Updates |
| Newsletter form | news.newsletter.* | Retention |
| Press coverage | news.press.* | Credibility |
| CTA band | news.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO
**Purpose:** Establish editorial credibility — this is the "real company news" hub.  
**Layout Intent:** Compact editorial hero (40svh desktop, 30svh mobile). Left-aligned editorial style (inspired by Bloomberg/press sections). Dark surface.  
**Copy Snapshot:**
- Eyebrow: "LATEST NEWS"
- H1: "SunEnergy Pro News & Updates" — 36px desktop, 24px mobile
- Subheadline: "Company milestones, project highlights, industry incentive updates, and press coverage."
- Latest date stamp: "Last updated: [date]"

---

### Section 2: FEATURED NEWS CARD
**Purpose:** Prominently showcase the most important recent story.  
**Layout Intent:** Full-width featured card (desktop: horizontal — image left, content right; mobile: stacked). Amber tag label + large headline + 2-sentence excerpt + "Read More →".  
**Surface Style:** Light surface with left amber accent border.

**Draft featured story:**
- Tag: "COMPANY MILESTONE"
- Headline: "SunEnergy Pro Completes 15,000th Solar Installation"
- Date: June 2025
- Excerpt: "We're proud to have reached the 15,000 installation milestone — a testament to the trust Central Valley homeowners and businesses have placed in us since 2012. The milestone project: a 22kW residential installation in El Dorado Hills."
- CTA: "Read Full Story →"

---

### Section 3: NEWS CARD GRID
**Purpose:** Browsable library of recent company news.  
**Filter tabs:** All | Company Updates | Incentive Alerts | Project Highlights | Press Coverage  
**Layout Intent:** 3-column grid (desktop), 2-col (tablet), 1-col (mobile).

**Draft news items (6):**

**Item 1:**
- Tag: INCENTIVE ALERT
- Headline: "SGIP Battery Rebates Available Through December 2025"
- Date: May 2025
- Excerpt: "California's SGIP battery rebate program has renewed funding. Eligible battery storage systems can receive up to $400/kWh in rebates. Limited availability — act before Q4."

**Item 2:**
- Tag: PROJECT HIGHLIGHT
- Headline: "100kW Commercial Installation for Valley Foods Co-op — 14-Day Complete"
- Date: April 2025
- Excerpt: "SunEnergy Pro completed a 100kW commercial solar array for Valley Foods Co-op in Stockton, CA, in just 14 days — our fastest commercial completion to date."

**Item 3:**
- Tag: PRESS COVERAGE
- Headline: "Sacramento Business Journal: '5 Top Solar Contractors in Central Valley 2025'"
- Date: March 2025
- Excerpt: "SunEnergy Pro was named among Sacramento Business Journal's top 5 solar contractors in the Central Valley for 2025, citing NABCEP certification rate and customer satisfaction scores."

**Item 4:**
- Tag: COMPANY UPDATE
- Headline: "SunEnergy Pro Expands Service Area to Include Bakersfield"
- Date: February 2025
- Excerpt: "We're expanding our service area to include Bakersfield and the greater Kern County region. Our Bakersfield team opens February 15."

**Item 5:**
- Tag: INCENTIVE ALERT
- Headline: "Federal Solar Tax Credit Remains at 30% Through 2032 — How to Claim It"
- Date: January 2025
- Excerpt: "The Inflation Reduction Act extended the federal solar investment tax credit (ITC) at 30% through 2032. Here's what you need to know to claim it on your 2025 tax return."

**Item 6:**
- Tag: PROJECT HIGHLIGHT
- Headline: "Case Study: How the Rodriguez Family Cut Their Electricity Bill by 87%"
- Date: December 2024
- Excerpt: "A 3-bedroom Sacramento home with a $320/month electricity bill is now paying $42/month. Read the full case study for system specs, timeline, and ROI."

---

### Section 4: NEWSLETTER SUBSCRIBE
**Purpose:** Retain visitors for future re-engagement — especially relevant when incentives change.  
**Layout Intent:** Centered card (desktop 600px max-width). Light amber background.  
**Copy Snapshot:**
- Headline: "Get Solar Incentive Alerts + Project Highlights Delivered to Your Inbox"
- Subheadline: "We send 1–2 emails per month. No fluff, no spam. Unsubscribe anytime."
- Form: Email field + "Subscribe" button
- Trust: "4,200+ subscribers"

---

### Section 5: CTA BAND
**Layout Intent:** Full-width teal/dark band.  
**Copy Snapshot:**
- Headline: "Seen Enough? Let's Talk Solar."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Call +1-555-766-2576"

---

## SEO + Schema

- **Title:** "Solar News & Updates — SunEnergy Pro | Sacramento & Central Valley"
- **Meta:** "Company news, project highlights, solar incentive alerts, and press coverage from SunEnergy Pro — Central Valley's top NABCEP certified solar installer."
- **Schema:** `NewsArticle` per item; `BreadcrumbList`
- **Canonical:** `/news`

---

## Open Questions

1. Is there real press coverage to display (Sacramento Business Journal, etc.)?
2. What CRM or email system handles newsletter subscriptions?
3. Should news items be CMS-managed at launch (Sanity, Contentful) or static?
