# Page Design Brief: SERVICE AREA

**Route:** `/service-area`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Local SEO + geographic qualification; confirm coverage before contact  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (local SEO, geo-targeting)  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `service-area::map-primary::local-seo::geo-authority`

---

## Page Definition

**User Intent:** Confirm that SunEnergy Pro serves their specific address or city before investing time in a consultation request.

**Conversion Outcome:** User confirms they're in the service area → requests assessment or calls.

**Primary CTA:** "Check If We Serve Your Area"  
**Secondary CTA:** "Get Free Assessment"

**KPI:** Map interactions; zip code lookups; assessment leads attributed to local search → `/service-area`.

---

## Outcomes (What Must Be True)

1. ✓ User can enter their zip code and immediately confirm service availability.
2. ✓ The service area map shows coverage visually — not just a text list.
3. ✓ Local incentives (by state/county) are shown alongside coverage confirmation.
4. ✓ Cities/regions served are listed for local SEO keyword coverage.
5. ✓ CTA appears immediately after service area is confirmed.
6. ✓ Page uses `LocalBusiness` schema and city-specific meta content.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | service_area.hero.headline | Local Authority |
| Zip code checker | service_area.checker.* | Interactive |
| Coverage map | service_area.map.* | Visual |
| City list | service_area.cities.* | Local SEO |
| Local incentives | service_area.incentives.* | Education |
| Trust strip | service_area.trust.* | Trust |
| CTA band | service_area.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Local Authority)
**Purpose:** Immediately signal "we're local, we serve YOUR area" — confidence for geo-specific visitors.  
**Layout Intent:** Compact hero (55svh desktop, 45svh mobile). Background: aerial view of a California/regional neighborhood with solar panels visible on multiple rooftops. Warm teal-amber gradient overlay. Center-aligned content.  
**Surface Style:** Dark overlay with teal tint.  
**Copy Snapshot:**
- Eyebrow: "SERVICE AREA"
- H1: "Solar Installation Across [Region] — Your Neighborhood, Our Specialty" — 46px desktop, 28px mobile
- Subheadline: "SunEnergy Pro serves homeowners and businesses within a 50+ mile radius. Check if your address is covered."
- Zip code checker: Inline input — "Enter your zip code" + "Check Coverage" button (amber)
- Trust: "50+ mile radius | 12 years local experience | 15,000+ installs in your region"

**Interaction:** Zip code submit → shows "✓ Great news! We serve [City Name]!" (green checkmark, inline) or "We may not serve that area yet — call us to confirm." with phone CTA.

---

### Section 2: SERVICE AREA MAP
**Purpose:** Visual proof of geographic coverage — map is more convincing than a text list.  
**Layout Intent:** Full-width map panel (500px height desktop, 350px mobile). Google Maps embed showing the service radius with highlighted coverage zone. Branch location marker + "Headquarters: Sacramento, CA" label.  
**Surface Style:** Embedded Google Map with a custom amber/teal color scheme marker.  
**Fallback (map load failure):** Static PNG map image with coverage shading + "View on Google Maps →" link.  
**Lazy loading:** Map loads when section scrolls into viewport (IntersectionObserver).

---

### Section 3: CITIES & REGIONS SERVED
**Purpose:** Local SEO keyword coverage — every city in the service area mentioned by name.  
**Layout Intent:** 3-column grid (desktop) / 2-column (mobile) of city name tags. Grouped by region (Greater Sacramento Area | Bay Area | Central Valley | etc.).  
**Surface Style:** Light surface, city tags in gray pills, region labels as H3 headings.  
**Cities to include (draft — confirm with client):**
- **Greater Sacramento Area:** Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Rocklin, Lincoln, Auburn, Davis, Woodland
- **Central Valley:** Stockton, Modesto, Fresno, Turlock, Merced, Visalia, Bakersfield
- **Bay Area (partial):** San Jose, Fremont, Concord, Walnut Creek, Antioch

**Total: 20+ cities. Each city is anchor-linkable for local SEO.**

**Micro-copy per region:** "Serving [X]+ cities in [Region] with same NABCEP-certified installation quality."

---

### Section 4: LOCAL INCENTIVES BY STATE/COUNTY
**Purpose:** Personalized incentive information based on where the user is located — increases conversion for local visitors.  
**Layout Intent:** 2-column (desktop) / 1-column (mobile). Left: state selector tabs (CA | NV | TX | FL). Right: incentive list for selected state.  
**Copy Snapshot (California — default):**
- **Federal:** 26% Investment Tax Credit
- **California:** Self-Generation Incentive Program (SGIP) — battery storage rebates up to $400/kWh
- **Net Metering (NEM 3.0):** Export credits for excess energy — varies by utility
- **Property Tax Exclusion:** Solar additions exempt from property tax reassessment
- **Utility Rebates:** PG&E, SCE, SMUD rebates — varies by program year

**Disclaimer:** "Incentives change regularly. Your free assessment will confirm current availability for your address."

---

### Section 5: CTA BAND
**Purpose:** Convert geo-qualified visitors into assessment leads.  
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Your Area Is Covered — Let's Get You a Free Assessment"
- Subheadline: "One of our local NABCEP-certified advisors will contact you within 24 hours."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Call +1-555-766-2576"

---

## Forbidden Patterns

- ✗ MUST NOT show a generic map without coverage shading — map must show the service radius
- ✗ MUST NOT omit a text list of cities (map alone is insufficient for SEO)
- ✗ MUST NOT use the same full-bleed photography hero as Services or Home

---

## Visual Differentiation vs. Other Routes

**vs. CONTACT:** Contact is action-capture; Service Area is geographic verification. Different purpose, different hero, different content density.  
**vs. CERTIFICATIONS:** Certifications is credential display; Service Area is geographic coverage.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `calm-precise` — functional page, not a marketing showcase. Clean entrances.  
**Key moments:** Zip code result appear (300ms fade); city grid stagger on scroll.  
**Reduced-motion:** Instant visibility.

---

## SEO + Schema

- **Title:** "Solar Installation Service Area — Sacramento & Central Valley | SunEnergy Pro"
- **Meta:** "SunEnergy Pro serves Sacramento, Fresno, Modesto, Stockton, and 20+ cities. Check if we cover your address. NABCEP certified local solar installation."
- **H1:** "Solar Installation Across [Region] — Your Neighborhood, Our Specialty"
- **Schema:** `LocalBusiness` with `areaServed` (list of cities + PostalCode ranges); `GeoCoordinates`; `BreadcrumbList`
- **Canonical:** `/service-area`
- **Hreflang:** Not needed (single market)

---

## Performance Plan

- LCP target: < 2.5s (hero image ≤ 180KB WebP, `priority`)
- Google Maps: Lazy-loaded with IntersectionObserver; no load until in viewport
- City grid: Static (no API needed)
- Zip code check: Client-side lookup against a static JSON zip code → city mapping file (< 50KB)

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `zip_code_check` | Zip code submitted |
| `zip_code_result_covered` | Positive coverage result shown |
| `zip_code_result_uncovered` | Negative/uncertain result shown |
| `map_interact` | User interacts with Google Map |
| `city_tag_click` | User clicks a city tag |
| `service_area_cta_click` | Assessment CTA clicked from this page |

---

## Open Questions

1. What is the exact 50-mile radius center point (Sacramento headquarters address)?
2. Is the service area expansion planned (more cities)?
3. Should the zip code checker use a real database or a simplified JSON lookup?
4. Are Bay Area cities included at launch or future phase?
