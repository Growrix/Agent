# Page Design Briefs — Roofing MVP

---

## pages/home.md

**Route:** `/` | **Title:** Home | **Archetype:** Flagship marketing | **Latitude:** HIGH

### Page Definition
- **User intent:** Find fast contact option, confirm credibility, explore service options
- **Conversion outcome:** Inspection request form completion or phone contact
- **Primary CTA:** Schedule Inspection
- **Secondary CTA:** Browse Services or View Projects
- **KPI:** Inspection form completion rate; time-to-contact

### Outcomes (What Must Be True)
1. User reaches hero CTA within 15 seconds on mobile, 8 seconds on desktop
2. Trust signals visible before mid-page (certifications, years, response time, review aggregate)
3. Material comparison teases `/materials` page; user understands material options exist
4. Featured project proves recent work quality; before/after visible
5. Financing confidence strip appears near primary CTA; user reduces payment objection
6. Footer attribution clearly displays and links per brief requirement

### Required Content Slots
- Hero headline + subheading
- Trust badge strip (4 badges: licensed, insured, years, response-time)
- Review aggregate (rating, count, source badge)
- Service grid (4 service types: inspection, replacement, repair, maintenance)
- Featured project section (1–2 before/after examples)
- Material comparison preview (3 cards: asphalt, metal, tile — link to `/materials`)
- Financing strip (partner logos, benefit copy, CTA link to `/financing`)
- FAQ teaser (3–5 common questions, link to `/faq`)
- CTA band (inspection request call-to-action)
- Newsletter signup (optional email collection)

### Forbidden Patterns
- MUST NOT reuse Storm Damage hero composition; Home hero is calm, professional, not urgent
- MUST NOT hide phone number; always visible in header utility and hero
- MUST NOT use generic stock photos; real worksite imagery only
- MUST NOT defer trust signals below fold; visible in hero or first section

### Visual Differentiation
- vs. `/storm-damage`: Home hero calm (blue sky background), centered text, standard pacing; Storm is urgent (dramatic image), warm accent, fast-contact priority
- vs. `/projects`: Home teases projects in small section; Projects page is gallery-dominant (4-column grid, before/after toggle)
- vs. `/materials`: Home shows material cards; Materials page is detailed comparison with attributes + use-case guidance

**Composition primitives (developer guidance, not prescriptive):**
- Stack layout: hero → badge strip → service grid → featured project → material cards → financing → FAQ teaser → CTA band
- Hero: full-bleed background, overlay text, trust badges right-aligned or staggered entrance
- Grids: 3-column desktop (service cards), 4-column (project featured), 3-column (material preview)
- Surfaces: card stack with hairline borders, shadow-base on hover

### Motion Temperament
- Surface mood: `calm-precise` (reassuring, professional, 200–240ms durations)
- Key moments:
  - Text reveal: staggered per word/line, 200ms per element, ease-out
  - Badge entrance: slide-up + fade, 240ms ease-out, 40ms stagger
  - Service card hover: color + shadow shift, 200ms ease-out (desktop only)
  - Section scroll reveal: fade-in + slide-up, 280ms ease-out
  - CTA band: subtle entrance on scroll, 280ms ease-out
- Reduced-motion fallback: instant text/badge appearance, no slide animations

### State Requirements
- Loading: form submit spinner, disabled button state
- Error: form validation errors appear with shake (or instant color change on reduced-motion)
- Success: form replaced with confirmation message, fade-in 240ms
- Offline (if applicable): banner alert (red background, error message)

### Responsive Intent
- Desktop (≥ lg): 80px section padding, 3-column grids, full hero height 100svh, header sticky
- Tablet (md–lg): 56px section padding, 2-column grids, 80svh hero height
- Mobile (< md): 40px section padding, 1-column stack, 60svh hero height, larger touch targets (48px buttons)

### SEO & Schema.org
- `<h1>` in hero headline (only one per page)
- Schema.org/Organization (business name, phone, address, logo, social profiles)
- Open Graph meta tags (og:title, og:description, og:image)
- Canonical tag to prevent duplicate indexing

### Conversion Path
- Primary: Hero CTA → Inspection request form → confirmation
- Secondary: Browse services → Service detail → Contact
- Tertiary: View projects → Explore materials → Contact

### Accessibility Plan
- Landmarks: `<header>`, `<main>`, `<footer>` structural landmarks
- Heading outline: H1 hero headline, H2 for each section (services, projects, materials, financing, FAQ, CTA)
- ARIA: service cards have roles, badges have aria-labels, form inputs have associated labels
- Contrast: all fg/bg pairs ≥ 4.5:1 (AAA)
- Motion: all animations have reduced-motion fallback
- Focus: visible 2–3px outline on all interactive elements

### Performance Plan
- LCP target: ≤ 2.5s (hero image is critical)
- Hero image: preload on route entry
- Route JS budget: ≤ 150KB (home page)
- Client component reasons: ThemeSwitcher, MobileBottomNav, form submission (client-side validation)

### Data Fetching Plan
- Services: fetch from CMS on build (static), revalidate every 1 hour
- Projects (featured): fetch from CMS on build
- Reviews: fetch from Google Business or native CMS, revalidate every 24 hours
- Contact phone/hours: hardcoded in CMS or environment variables

### Form Plan
- Inspection request form (primary conversion)
- Fields: name, email, phone, service type (dropdown), address/postcode, brief description
- Validation: all fields required; email format; phone format
- Success flow: form submission → confirmation page (or inline success message)
- Error recovery: preserve entered values, display specific error per field

### Analytics Plan
- Events:
  - `button.clicked.inspect_now` (hero CTA)
  - `button.clicked.service_detail` (service card link)
  - `button.clicked.learn_more` (material card)
  - `form.submitted.inspection_request`
  - `form.completed.success`
  - `form.error.validation` (with field names)

### Quality Bar Scoring (per quality-bar-scoring.md)
| Dimension | Target Score | Notes |
|---|---|---|
| Hero composition | 3/3 | Real photo, locality, CTA must land |
| Trust signal placement | 3/3 | License, years, areas, response-time, reviews visible before mid-page |
| Narrative density | 2/3 | Spacious hero, balanced content sections |
| Motion temperament | 2/3 | Reassuring restraint, no decorative motion |
| Micro-detail quality | 2/3 | Consistent typography, spacing, no raw values |
| Content punch | 2/3 | Clear copy, no filler, benefit-focused messaging |

**Overall target:** 14/18 (premium band for local-business-trust archetype)

### Open Questions for Human
- Specific business name, license number, areas served?
- Team member names and photos for About?
- Review source and rating (Google Business, Yelp, native)?
- Featured projects (2–3 best recent jobs for gallery preview)?
- Financing partner details and logos?
- Preferred color palette (default: navy + amber)?

---

## pages/storm-damage.md

**Route:** `/storm-damage` | **Title:** Emergency: Storm Damage | **Archetype:** Urgent conversion | **Latitude:** HIGH

### Page Definition
- **User intent:** Report storm damage, get fast inspection, understand insurance process
- **Conversion outcome:** Emergency contact form completion or phone contact within session
- **Primary CTA:** Emergency Contact / Call Now
- **Secondary CTA:** None (minimize distractions)
- **KPI:** Emergency contact form completion rate; time-to-contact (< 60 seconds)

### Outcomes (What Must Be True)
1. Emergency CTA visible on hero (top-of-page, 8px scroll max)
2. Phone number clickable (tel: link) prominent on hero
3. Insurance claim explainer accessible (not mandatory reading; optional scroll)
4. Form fields: name, phone, address, description (minimal, no email to speed up)
5. Confirmation message immediately after submission
6. NO secondary navigation or distraction (minimal menu, no browse links)

### Required Content Slots
- Urgent hero headline + subheading (messaging: "Storm damage? We respond same-day.")
- Emergency CTA button (accent color, large 48–56px height)
- Clickable phone number (warm accent color)
- Insurance explainer section (2 paragraphs on claim documentation process)
- Emergency contact form (name, phone, address, description)
- FAQ section (3 storm-specific questions: "What do I do after a storm?", "How do insurance claims work?", "What if my roof is damaged?")
- Bottom CTA band (reinforce emergency contact or phone call)

### Forbidden Patterns
- MUST NOT show unrelated content (no services grid, no projects, no financing)
- MUST NOT hide phone number or bury it
- MUST NOT use calm hero (home page style); urgency is required
- MUST NOT require email for form submission (phone + name + address sufficient)
- MUST NOT use light backgrounds or passive copy

### Visual Differentiation
- vs. Home: Hero is warm accent + dramatic imagery (storm clouds or damage), urgent messaging, fast-contact priority
- vs. Services: No service grid; form-focused only
- Color dominance: Warm accent (amber/orange) instead of navy; urgent red on badges

### Composition Primitives
- Hero: full-bleed dramatic image, center-aligned text, warm accent gradient overlay (50%+ opacity for urgency), large CTA button, prominent phone number
- Form: stripped down, 4 fields only, large submit button
- FAQ: minimal, storm-specific questions only

### Motion Temperament
- Surface mood: `urgent-alert` (faster pacing, 160–200ms durations, warm accent emphasis)
- Key moments:
  - Text reveal: staggered, 160ms per element (faster than home)
  - CTA entrance: scale + fade, 200ms ease-out
  - Form submission: spinner 1000ms, success message fade-in 240ms
- Reduced-motion fallback: instant text/button appearance

### State Requirements
- Loading: form disabled, spinner visible on submit button
- Error: form validation errors instant; preserve entered values
- Success: form hidden, confirmation message ("We'll call you within 10 minutes")
- Network error: inline error message; retry button

### Responsive Intent
- Mobile: 100% width form, single-column, 48px buttons, large touch targets
- Desktop: form constrained to 600px max-width, centered
- Header: minimal (no secondary nav visible; mobile hamburger only)

### SEO & Schema.org
- `<h1>` in urgent headline
- Schema.org/EmergencyService (if applicable for emergency paths)
- OpenGraph: og:title "Storm Damage Response", og:description rapid response promise

### Conversion Path
- Single path: Hero CTA → Emergency form → Confirmation
- Fallback: Phone link → outbound call (no page submission needed)

### Accessibility Plan
- Heading outline: H1 hero, H2 insurance explainer, H2 FAQ, H2 confirmation
- Form: all labels associated, required marked, error messages aria-describedby
- Focus: Emergency CTA and phone link highly visible
- Contrast: ≥ 4.5:1 (AAA) on warm accent background

### Performance Plan
- LCP target: ≤ 2s (hero image critical)
- Route JS budget: ≤ 100KB (minimal scripts)
- Hero image: preload, eager load

### Data Fetching Plan
- Static form handler (no external API calls)
- Phone number: hardcoded environment variable
- Response time promise: hardcoded in copy

### Form Plan
- Emergency contact form: name, phone, address, description
- Validation: phone required (format check), address required
- Email optional (no email field if possible; collect via follow-up CRM)
- Success: confirmation message + "We'll call you soon" with expected timeframe
- Ops notification: form submission triggers internal email to roofing team

### Analytics Plan
- Events:
  - `emergency.cta.clicked`
  - `emergency.phone.clicked`
  - `emergency.form.submitted`
  - `emergency.form.error`
  - `emergency.confirmation.viewed`
- Session duration on storm-damage page (track abandonment)

### Quality Bar Scoring
| Dimension | Target Score |
|---|---|
| Hero composition (urgency) | 3/3 |
| Conversion clarity | 3/3 |
| Trust signal placement | 2/3 |
| Motion tempo (urgent) | 3/3 |

**Overall target:** 11/12 (premium for urgency path)

### Open Questions
- Expected emergency response time (for "We'll call you" message)?
- Which team members handle emergency calls?
- Storm season duration (seasonal messaging)?

---

**Additional page briefs (abbreviated):**

## pages/materials.md
- **Route:** `/materials` | **Latitude:** MEDIUM
- **Outcomes:** User understands 3 material options; can articulate pros/cons per material
- **Content slots:** Material cards (asphalt, metal, tile) + attributes matrix + CTA band
- **Unique element:** Attribute comparison matrix (desktop table view)

## pages/projects.md
- **Route:** `/projects` | **Latitude:** HIGH
- **Outcomes:** User sees recent local work; can filter by job type + area; increases confidence
- **Content slots:** Filter bar + before/after gallery + project detail modal (optional)
- **Unique element:** Before/after image toggle on each project card

## pages/financing.md
- **Route:** `/financing` | **Latitude:** MEDIUM
- **Outcomes:** User learns financing options exist; warrant partners provide credibility
- **Content slots:** Financing cards grid + warranty partner showcase + benefit copy

## pages/contact.md
- **Route:** `/contact` | **Latitude:** LOW
- **Outcomes:** User finds form + contact info + map; completes contact request
- **Content slots:** Contact form + hours + address + map embed

---

See `visual-differentiation-map.md` for per-route composition templates.
