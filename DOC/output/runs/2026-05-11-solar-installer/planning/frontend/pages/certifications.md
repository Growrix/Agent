# Page Design Brief: CERTIFICATIONS

**Route:** `/certifications`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Credibility + safety assurance; removes last-minute trust barriers  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** Medium  
**Visual Latitude:** LOW  
**Visual Signature Hash:** `certifications::credential-grid::authority-formal::trust-anchor`

---

## Page Definition

**User Intent:** Verify professional credentials, licenses, and certifications before committing to a significant home investment.

**Conversion Outcome:** Trust fully established → user requests assessment with confidence.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "View Our Portfolio"

**KPI:** Time on page > 60s; bounce rate < 45%; assessment clicks post-certification-page visit.

---

## Outcomes (What Must Be True)

1. ✓ Every certification is shown with a visual badge/logo, not just a text list.
2. ✓ NABCEP certification is prominently featured (industry gold standard).
3. ✓ License number and insurance details are visible.
4. ✓ Manufacturer partnerships are shown (SunPower, Tesla, Generac).
5. ✓ Each certification has a brief explanation of what it means for the customer.
6. ✓ CTA to assessment is accessible without leaving this page.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | certs.hero.headline | Trust Anchor |
| Certification cards | certs.certifications.* | Credibility |
| Manufacturer partnerships | certs.partnerships.* | Authority |
| License details | certs.license.* | Legal Trust |
| Insurance details | certs.insurance.* | Legal Trust |
| CTA band | certs.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Credential Authority — Minimal)
**Purpose:** Set the page tone as formal, authoritative, professional — this isn't a sales page.  
**Layout Intent:** Compact hero (45svh desktop, 35svh mobile). Dark surface (no photography). Left amber accent bar.  
**Surface Style:** `var(--color-surface-dark-900)`. Content: center-aligned (desktop), center-aligned (mobile).  
**Copy Snapshot:**
- H1: "Licensed, Certified & Insured — Our Credentials" — 40px desktop, 26px mobile
- Subheadline: "We earn the right to work on your home every day. Here's what our certifications mean for you."
- Trust line: "NABCEP Certified | CSLB Licensed #XXXXXXX | BBB Accredited A+"

---

### Section 2: PRIMARY CERTIFICATIONS GRID
**Purpose:** Display top-tier industry certifications with visual badges and explanations.  
**Layout Intent:** 3-column grid (desktop), 2-col (tablet), 1-col (mobile). Each card: cert logo (SVG, 120px max width) + cert name + "What this means for you:" explanation (2–3 sentences) + verification link.  
**Surface Style:** White cards + soft shadow + amber hover border.

**Certifications to display:**

**Card 1 — NABCEP PV Installation Professional:**
- Logo: NABCEP official badge
- Title: "NABCEP Certified PV Installation Professional"
- Meaning: "The North American Board of Certified Energy Practitioners (NABCEP) certification is the solar industry's highest credential. It requires rigorous technical training, field experience, and examination. You can verify our certification at nabcep.org."
- Link: "Verify Certificate →" (nabcep.org)

**Card 2 — California CSLB License:**
- Logo: CSLB seal / California state seal
- Title: "CSLB Licensed Contractor — Class C-46"
- Meaning: "Every solar installation in California requires a C-46 Solar Contractor license from the Contractors State License Board (CSLB). Our license #XXXXXXX confirms we're legally authorized, bonded, and accountable to California's contractor regulations."
- Link: "Verify License →" (cslb.ca.gov)

**Card 3 — BBB Accredited Business (A+):**
- Logo: BBB seal
- Title: "BBB Accredited Business — A+ Rating"
- Meaning: "The Better Business Bureau A+ rating reflects our commitment to resolving customer issues quickly and transparently. It's an independent verification of our business ethics and customer service record."
- Link: "View BBB Profile →"

**Card 4 — OSHA Safety Trained:**
- Logo: OSHA shield
- Title: "OSHA 10-Hour Safety Certified"
- Meaning: "All our installation technicians are OSHA 10-Hour safety certified. This means your roof and property are in the hands of professionals trained in electrical safety, fall protection, and equipment handling."

**Card 5 — NEC Compliance:**
- Logo: NFPA/NEC shield
- Title: "NEC National Electrical Code Compliant"
- Meaning: "Every installation follows the National Electrical Code (NEC) standards, which govern all electrical installations in the US. NEC compliance is required for utility interconnection and ensures your system is safe and insurable."

---

### Section 3: MANUFACTURER PARTNERSHIPS
**Purpose:** Show that leading solar brands trust SunEnergy Pro to install their products.  
**Layout Intent:** Logo bar (horizontal, centered). 6 manufacturer logos at 140px max width each. Tooltip on hover shows partnership level.  
**Surface Style:** Light surface, logos in grayscale → color on hover.

**Partners:**
- SunPower: "Authorized SunPower Dealer"
- Tesla Energy: "Certified Tesla Powerwall Installer"
- Generac: "Certified Generac PWRcell Installer"
- LG Solar: "LG Authorized Partner"
- Enphase: "Enphase Authorized Installer"
- GAF: "GAF Master Elite Roofing Contractor"

---

### Section 4: LICENSE & INSURANCE DETAILS
**Purpose:** Remove final trust barriers for high-scrutiny prospects — show the paper trail.  
**Layout Intent:** 2-column grid (desktop), 1-column (mobile). Each detail block: icon + label + value + copy-button for license number.

**Details to display:**
- Contractor License: CSLB #XXXXXXX — Class C-46 Solar
- Bond: $15,000 contractor bond — State of California
- General Liability Insurance: $2,000,000 per occurrence
- Workers' Compensation: Active coverage for all employees
- Electrical Classification: EC Permit authorization

**Disclaimer:** "Documentation available upon request. Insurance certificates provided before project commencement."

---

### Section 5: CTA BAND
**Purpose:** Convert credential-verified visitors into leads.  
**Layout Intent:** Full-width dark teal band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Work with the Most Credentialed Solar Team in [Region]"
- Subheadline: "Every installation is backed by NABCEP-certified expertise and full liability coverage."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "View Our Portfolio"

---

## Forbidden Patterns

- ✗ MUST NOT show certification logos without explanations (users don't know what NABCEP means)
- ✗ MUST NOT list credentials without verification links where available
- ✗ MUST NOT use photography hero (formal credentials page should be minimal and authoritative)

---

## Visual Differentiation vs. Other Routes

**vs. ABOUT:** About tells the company story with team photos; Certifications is purely formal credentials with no personal narrative.  
**vs. TEAM:** Team shows people; Certifications shows credentials.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `authority-formal` — restrained. No playful motion here.  
**Key moments:** Cert card hover (scale + amber border). Manufacturer logo color reveal on hover.  
**Reduced-motion:** Color-only hover state (no scale).

---

## SEO + Schema

- **Title:** "Certifications & Licenses — NABCEP Certified Solar Installers | SunEnergy Pro"
- **Meta:** "SunEnergy Pro holds NABCEP, CSLB C-46, BBB A+, and full liability insurance. Verify our credentials before trusting us with your solar installation."
- **H1:** "Licensed, Certified & Insured — Our Credentials"
- **Schema:** `LocalBusiness` with `hasCredential`; `Certification`; `BreadcrumbList`
- **Canonical:** `/certifications`

---

## Open Questions

1. Is the real CSLB license number available for publication?
2. Is the insurance amount ($2M) confirmed and current?
3. Which manufacturer partner certifications are active at launch?
