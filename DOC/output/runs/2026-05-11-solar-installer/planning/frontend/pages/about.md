# Page Design Brief: ABOUT

**Route:** `/about`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Build trust & credibility through company story and team authority  
**Section Density:** 6 sections  
**Mobile First:** Yes  
**SEO Critical:** Medium  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `about::story-bottom-anchor::reflective-flow::human-trust`

---

## Page Definition

**User Intent:** Verify the company is real, established, and trustworthy before committing to a consultation. Meet the team, understand the mission, confirm credentials.

**Conversion Outcome:** Increased confidence → CTA click for assessment or viewing portfolio.

**Primary CTA:** "Meet Our Team"  
**Secondary CTA:** "Get Free Assessment"

**KPI:** Time on page (target > 2 min), CTA clicks, bounce rate below 45%.

---

## Outcomes (What Must Be True)

1. ✓ User knows who founded the company, when, and why within 2 scrolls.
2. ✓ Certifications, licenses, and insurance are visibly confirmed — not buried.
3. ✓ Team member names and faces are shown (not just logos).
4. ✓ The company's values/mission are clear and differentiated from generic "we love solar" messaging.
5. ✓ Community involvement or local roots signal creates personal connection.
6. ✓ A conversion path (assessment or portfolio) is clearly available after reading the story.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | about.hero.headline | Brand Statement |
| Company story | about.story.* | Trust Building |
| Mission statement | about.mission.* | Values |
| Team preview | about.team.* | Human Trust |
| Certifications | about.certifications.* | Credibility |
| Timeline milestones | about.timeline.* | Authority |
| Community section | about.community.* | Local Trust |
| CTA band | about.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Company Story — Human Trust)
**Purpose:** Establish the company's identity as a local, experienced, and people-first business — not a faceless corporation.  
**Layout Intent:** Full-bleed hero 70svh (desktop) / 60svh (mobile). Background: real team photo — installation crew on a residential rooftop, professional, smiling. Bottom-weighted gradient.  
**Surface Style:** `linear-gradient(to bottom, rgba(4,21,31,0.20) 0%, rgba(4,21,31,0.75) 100%)`. Text sits bottom-left.  
**Copy Snapshot:**
- Eyebrow: "OUR STORY"
- H1: "12 Years. 15,000 Installations. One Mission." — 50px desktop, 30px mobile
- Subheadline: "We're SunEnergy Pro — your local solar experts dedicated to making clean energy accessible for every home and business."
- Trust bar inline: founder name badge + years in business + license badge (CSLB #XXXXXXX)
- CTA: "Meet Our Team" (primary) + "View Our Work" (secondary/outline)

**Motion:** Bottom-anchored text slides up gently (Y+20px → 0, 500ms, ease-out). H1 appears first, subheadline 200ms later, trust bar 400ms.  
**Motion Fallback:** Instant opacity, no translate.

---

### Section 2: THE COMPANY STORY
**Purpose:** Humanize the brand through an authentic founding narrative.  
**Layout Intent:** 2-column layout (desktop): left = large pull quote + story text; right = founder photo + year founded callout. Mobile: single column, photo above text.  
**Surface Style:** White background, amber left-border accent on pull quote.  
**Copy Snapshot:**
- Pull quote: "We started SunEnergy Pro because we believed everyone deserves affordable, clean energy — not just those who can pay cash upfront."
- Founding story: "In 2012, founder [Founder Name] installed their first residential solar system in Sacramento. With a background in electrical engineering and a passion for sustainable energy, they built SunEnergy Pro around one principle: do the job right, treat every customer like family, and never cut corners on safety."
- Body: "Today, 12 years and 15,000+ installations later, SunEnergy Pro is [region]'s most trusted solar contractor — NABCEP certified, fully licensed, and 100% committed to your satisfaction."

**Note:** Founder name is open question — placeholder used. See open questions below.

---

### Section 3: COMPANY MILESTONES TIMELINE
**Purpose:** Visualize growth and stability — 12 years of history builds confidence.  
**Layout Intent:** Horizontal timeline (desktop), vertical timeline (mobile). 6 key milestones with year + title + 1-sentence description. Amber circle markers on a teal line.  
**Copy Snapshot:**
- 2012: "Founded in Sacramento, CA — First 10 residential installations"
- 2014: "Expanded to commercial solar — First 100kW commercial system"
- 2016: "NABCEP Certification achieved — Rigorous industry standard"
- 2018: "1,000 installations milestone — Expanded service area to 50+ miles"
- 2021: "Battery storage services launched — First Tesla Powerwall partner"
- 2026: "15,000+ installations and growing"

**Motion:** Timeline items reveal left-to-right (desktop), top-to-bottom (mobile), 80ms stagger per item.

---

### Section 4: CERTIFICATIONS & PARTNERSHIPS
**Purpose:** Visual proof of credentials — the highest trust-builder for high-consideration purchases.  
**Layout Intent:** Logo grid (2 rows, 4-col desktop / 2-col mobile). Each logo: partner/cert name + hover tooltip with 1-sentence description. Amber border on hover.  
**Surface Style:** Light gray surface (`var(--color-surface-100)`), logo cards with white background + shadow.  
**Certifications to include:**
- NABCEP PV Installation Professional
- CSLB Licensed Contractor (CA)
- BBB Accredited Business (A+ Rating)
- SunPower Authorized Dealer
- Tesla Powerwall Certified Installer
- Generac PWRcell Certified
- GAF Master Elite Roofer
- NEC / OSHA Safety Certified

**Interaction:** Hover badge → tooltip with description. Badge links to certification verification page where available.

---

### Section 5: TEAM PREVIEW
**Purpose:** Put faces to the company name — humanizes the brand and builds personal trust.  
**Layout Intent:** 4-card row (desktop), 2-col (tablet), 1-col (mobile). Each card: headshot + name + title + 1-line bio + LinkedIn icon. "Meet Full Team →" link at bottom.  
**Copy Snapshot (team members, draft):**
- [Founder Name], Founder & CEO — "12 years making solar simple for California homeowners"
- [Lead Tech Name], Lead Installation Manager — "NABCEP-certified, 500+ residential installs"
- [Sales Name], Customer Success Manager — "Guides homeowners from question to solar in 48 hours"
- [Engineer Name], Systems Engineer — "Designs every system for maximum energy output"

**CTA:** "Meet the Full Team →" → `/team` page.

---

### Section 6: CTA BAND
**Purpose:** Convert the trust built on this page into an action.  
**Layout Intent:** Full-width teal band (`var(--color-secondary-700)`), white text. Desktop: text left + CTAs right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Ready to Work with Our Team?"
- Subheadline: "Get a free solar assessment from the company that has earned the trust of 15,000+ customers."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "View Our Portfolio"

---

## Forbidden Patterns

- ✗ MUST NOT use the same bottom-anchored text hero as Portfolio (Portfolio is gallery-focused; About has a team photo + bottom-anchored but different content weight)
- ✗ MUST NOT use generic "solar company values" buzzwords without specific backing claims
- ✗ MUST NOT show team headshots without names and titles

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home tells the customer's story (their savings); About tells the company's story (its history).  
**vs. TEAM:** About gives a preview (4 team members); Team is the full roster with extended bios.  
**vs. CERTIFICATIONS:** About shows cert logos as part of the trust narrative; Certifications page goes deep on each cert.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `reflective` — story-paced, warm. Slightly slower animations than Services or Portfolio.  
**Key moments:**
- Hero text slides up (bottom-anchored reveal — matches team photo energy)
- Timeline milestone reveal: sequential, building a sense of progress

**Reduced-motion:**
- Hero text: instant opacity
- Timeline: items appear all at once, 200ms fade

---

## SEO + Schema

- **Title:** "About SunEnergy Pro — 12 Years, 15,000+ Installations"
- **Meta description:** "Learn about SunEnergy Pro: our founding story, NABCEP certifications, team of experts, and commitment to quality solar installation since 2012."
- **H1:** "12 Years. 15,000 Installations. One Mission."
- **Schema:** `LocalBusiness`, `Organization`, `Person` for team members, `BreadcrumbList`

---

## Performance Plan

- LCP target: < 2.5s (team photo hero ≤ 180KB WebP, `priority`)
- Certification logos: SVG preferred (no raster)
- No dynamic data — fully static

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `about_story_scroll` | 50% and 100% scroll depth |
| `team_preview_click` | Click "Meet Full Team" |
| `cert_badge_hover` | Hover any certification badge |
| `about_cta_click` | Click either CTA |

---

## Open Questions

1. What is the founder's real name? (Currently using "[Founder Name]" placeholder)
2. Do we have real team headshots or will stock photos be used temporarily?
3. Is there a real CSLB license number to display?
4. Are all listed certification partnerships (Tesla Powerwall, GAF) current?
