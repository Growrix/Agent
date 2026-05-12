# Page Design Brief: TEAM

**Route:** `/team`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Personal trust building; humanizes the brand  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** Low  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `team::person-grid::bio-expand::warm-personal-trust`

---

## Page Definition

**User Intent:** Meet the people who will work on their home — confirm they're qualified, professional, and trustworthy before inviting them onto the property.

**Conversion Outcome:** Personal connection established → user books assessment with confidence.

**Primary CTA:** "Work with Our Team — Get Free Assessment"  
**Secondary CTA:** "See Our Certifications"

**KPI:** Time on page > 90s; team bio expand interactions; assessment clicks.

---

## Outcomes (What Must Be True)

1. ✓ Every team member shown has a name, title, and at least one credential listed.
2. ✓ The founder/CEO is featured first and most prominently.
3. ✓ Certifications relevant to each role are shown (NABCEP for installers, etc.).
4. ✓ Team culture and values are visible — not just org chart headshots.
5. ✓ Mobile browsing of team profiles is tap-friendly with bio expand.
6. ✓ CTA leads to assessment booking — not just contact.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | team.hero.headline | Human Trust |
| Founder feature | team.founder.* | Personal Authority |
| Team members (6+) | team.members.* | Human Trust |
| Company culture section | team.culture.* | Values |
| Hiring CTA (optional) | team.hiring.* | Community |
| CTA band | team.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO
**Purpose:** Immediate warmth — team-first, not product-first.  
**Layout Intent:** Compact hero (45svh desktop, 35svh mobile). Background: team group photo (candid, on a job site or in the office — not staged corporate). Warm gradient overlay.  
**Copy Snapshot:**
- H1: "The Experts Behind Every Installation" — 40px desktop, 26px mobile
- Subheadline: "Our team of NABCEP-certified professionals is dedicated to one thing: delivering solar that works, on time and on budget."
- Team stats: "25 team members | 12 NABCEP certifications | 15,000+ installations completed"

---

### Section 2: FOUNDER FEATURE
**Purpose:** Prominently introduce the founder — the human face of the brand decision.  
**Layout Intent:** 2-column (desktop): large founder photo (left) + bio + credentials (right). Mobile: photo above bio.  
**Surface Style:** Light teal surface `var(--color-secondary-50)`.  
**Copy Snapshot:**
- Photo: [Founder Name] — professional headshot, 400×400 circular
- Name + title: "[Founder Name], Founder & CEO"
- Credentials: NABCEP Certified | Licensed Electrical Contractor | 12 years in solar
- Bio: "[Founder Name] founded SunEnergy Pro in 2012 with a simple belief: every homeowner deserves access to clean, affordable solar energy. Starting with a team of 3 and a single service van, he built SunEnergy Pro into [region]'s most trusted solar contractor. [He/She] personally oversees every commercial installation and is available to consult with homeowners who have complex system requirements."
- LinkedIn icon link (if applicable)

---

### Section 3: FULL TEAM GRID
**Purpose:** Show the breadth of the team — enough people to handle volume, specialized enough to handle complexity.  
**Layout Intent:** 4-column grid (desktop), 2-col (tablet), 2-col (mobile). Each card: circular headshot (200px) + name + title + 1-line expertise + expand button.  
**Card expand:** Click "View Bio" → card expands in-place showing 2-3 sentence bio + certification badges.  
**Surface Style:** White cards, subtle shadow, amber "View Bio" link.

**Team Members (draft — 8 minimum):**
- [Founder Name] — Founder & CEO (see Section 2)
- [Operations Lead] — Installation Manager — "NABCEP-certified, led 500+ residential installs"
- [Sales Lead] — Customer Success Manager — "Guides homeowners from first question to activation"
- [Engineer Name] — Systems Design Engineer — "Designs optimized systems for maximum output"
- [Tech 1] — Senior Installation Technician — "NABCEP certified, specialized in commercial flat-roof systems"
- [Tech 2] — Installation Technician — "5+ years installing residential and tile-roof systems"
- [Admin] — Project Coordinator — "Handles all permits, HOA approvals, and utility applications"
- [Service] — Maintenance & Monitoring Specialist — "Manages all service calls, monitoring alerts, and annual inspections"

**Note:** All names are placeholder — client provides real names, headshots, and bios.

---

### Section 4: TEAM CULTURE
**Purpose:** Show the company's internal values — recruitment signal + customer trust signal.  
**Layout Intent:** 3 culture values (icon + title + 2-sentence description). Teal strip background.  
**Copy Snapshot:**
- 🔧 **Craft over shortcuts:** "Every installation is done right the first time. We don't cut corners on safety, compliance, or quality of materials."
- 🤝 **Customer-first always:** "We answer our phones. We show up on time. We clean up after ourselves. The small things matter."
- 🌱 **Committed to clean energy:** "This isn't just a job — it's our mission. Every system we install removes CO₂ from the atmosphere and saves our customers money."

---

### Section 5: CTA BAND
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Ready to Work with Our Team?"
- Subheadline: "Schedule a free assessment and meet the expert who'll design your system."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "See Our Certifications →"

---

## Forbidden Patterns

- ✗ MUST NOT show anonymous team members (every person needs a name and title)
- ✗ MUST NOT use overly formal "corporate bio" tone — this is a local contractor, keep it personal
- ✗ MUST NOT omit the founder feature section

---

## Visual Differentiation vs. Other Routes

**vs. ABOUT:** About gives a preview team section (4 members) + company story; Team is the full roster with bios + culture section.  
**vs. CERTIFICATIONS:** Team shows who the people are; Certifications shows what licenses they hold.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `warm-personal` — human, approachable. Gentle card entrances.  
**Key moments:** Team card bio expand (smooth height animation). Grid stagger on scroll.  
**Reduced-motion:** Instant expand/collapse; simultaneous grid fade.

---

## SEO + Schema

- **Title:** "Meet Our Solar Installation Team — NABCEP Certified Experts | SunEnergy Pro"
- **Meta:** "Meet the SunEnergy Pro team: NABCEP-certified solar installation experts with 12+ years of experience serving Sacramento, Central Valley, and beyond."
- **H1:** "The Experts Behind Every Installation"
- **Schema:** `Organization` with `employee` list; `Person` per team member; `BreadcrumbList`

---

## Open Questions

1. What are the actual team member names, titles, and headshots?
2. Is there a real hiring/careers opportunity to include?
3. How many team members will be shown at launch?
