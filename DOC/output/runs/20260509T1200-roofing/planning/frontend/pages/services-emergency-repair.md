# Page Brief — Emergency Roof Repair (`/services/emergency-repair`)

**Visual Signature:** `VD-EMRG-F6`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `alive-energetic` (CTAs only) + `calm-precise` (content)  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 5

---

## Page Definition

- **User intent:** Get help immediately — they have an active leak, storm damage, or structural failure happening now.
- **Conversion outcome:** Phone call (primary) — the fastest path to help.
- **Primary CTA:** Phone call — `brand.phone`
- **Secondary CTA:** Emergency quote form (short, ≤ 3 fields)
- **KPI:** Phone click rate — this is the highest-urgency conversion on the site

---

## Outcomes

1. The phone number is the first actionable element visible on any device — no scrolling required.
2. Visitor knows help is available 24/7 within the first paragraph.
3. Visitor understands what constitutes a roofing emergency.
4. Visitor understands the expected response time.
5. The page reduces panic — tone is calm authority, not alarm marketing.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Emergency headline + subhead | `service.emergency.hero.*` | `locality_outcome_statement` |
| 24/7 availability declaration | `service.emergency.availability.*` | `trust_signal_cluster` |
| Phone CTA — large, prominent | `brand.phone` | `multi_channel_conversion` |
| Response time commitment | `service.emergency.response_time` | `trust_signal_cluster` |
| Emergency scenario examples | `service.emergency.scenarios.*` | `capability_map` |
| What to do while waiting (safety tips) | `service.emergency.safety_tips.*` | `process_disclosure` |
| Insurance claim assistance note | `service.emergency.insurance_help.*` | `trust_signal_cluster` |
| Emergency testimonials | Sanity CMS | `customer_voice` |
| Trust badge cluster | `trust.badge.*` | `trust_signal_cluster` |
| FAQ (emergency-specific) | `faq.*` emergency subset | `process_disclosure` |
| Final call CTA band | Large phone + address | `multi_channel_conversion` |

---

## Forbidden Patterns

- Any hero media that uses warm or pastoral imagery — damage + dark sky reference only (or pure dark surface)
- Trust chips / testimonials buried below two full screens of content
- Animated countdown timers or pressure tactics (no "Respond in X minutes!" countdown clocks)
- Secondary informational content (blog links, related services) that delays the conversion path
- Identical dark surface treatment to `/services` overview (this page uses red-tinted dark, not pure slate)

---

## Visual Differentiation

- This is the ONLY page on the site with a red-tinted dark hero surface (`--color-destructive` tint at 20% over `--color-primary`).
- This is the ONLY page where the primary CTA (phone number) is styled as a `display-2` size element, not a standard button.
- Content sections are single-column urgency blocks — no decorative alternation or grid layouts.
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-EMRG-F6`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `Surface` + `Stack` + `Frame` + `Cluster` + `Reveal`

**Hero:** `Surface(dark)` with subtle red tint (`--color-destructive` at 12% overlay). NO background media. Centered layout. Emergency eyebrow label ("24/7 Emergency Service"). Large headline. `brand.phone` as `display-2` text with `--color-accent` color and phone icon (20×20). Subhead with response time. CTA row: phone (primary, large) + short form link (secondary).

**No hero slider, no aerial photo, no editorial split.**

**Scenario section:** `Surface(dark)` — list of emergency scenarios (active leak, wind damage, storm impact, structural damage, ice dam, fallen tree). Icon + label `Cluster`. Visually heavy icon treatment (24×24 outline icons, `--color-accent` tint).

**Safety tips section:** Light `Surface`. "While you wait for our team" — numbered list of safety actions. Calm `Surface(inset)` styling, not alarming.

**Insurance assistance:** `Surface(light)`. Brief note on insurance claim documentation. Trust-forward, not salesy.

**Testimonials:** `Surface(light-inset)`. 2–3 emergency testimonials — brief, real names, area served.

**FAQ accordion:** Emergency-specific questions. Light `Surface`.

**Final CTA band:** `Surface(dark)` — large phone number repeated. Address below. Hours confirmation. Minimal — no decorative elements.

---

## Motion

**CTAs only use `alive-energetic`:**
- Phone CTA in hero: subtle scale pulse every 4s (scale 1→1.02→1, `--motion-duration-fast`, `ease-out`), reduced-motion: no pulse.
- All other content sections: `calm-precise` `Reveal` on scroll, standard 60ms stagger.
- Reduced-motion: no pulse, instant reveals.

**Forbidden motion:** No flashing/blinking effects. No urgency-based animation loops (≠ the phone pulse which is calm, not alarming).

---

## State Requirements

| State | Handling |
|-------|---------|
| Testimonials loading/error | Gracefully hidden — phone CTA always shows |
| FAQ error | Static fallback FAQ array |
| Dark/light theme | Red-tinted hero preserves red tint in dark mode (no change needed — already dark) |

---

## Responsive Intent

- Mobile: phone number is the FIRST thing visible after the eyebrow. Large `display-1` on mobile. No information before the phone CTA. Sections below the fold for supporting content.
- Tablet: same priority — phone first.
- Desktop: centered layout, max-width `container-standard`.

---

## SEO

- Title: `seo.service_emergency_title`
- Description: `seo.service_emergency_description`
- Schema.org: `Service` (serviceType: "Emergency Roof Repair", availableChannel: 24/7 phone, provider: LocalBusiness)
- Canonical: `/services/emergency-repair`
- Internal links: `/services/roof-repair`, `/contact`, `/quote`

---

## Conversion Path

- Hero phone CTA → immediate call
- Hero secondary → short quote form (inline, 3 fields)
- Final band phone CTA → call (redundant, high-scroll recovery)
- "Non-emergency?" → `/services/roof-repair`

---

## Accessibility

- H1: `service.emergency.hero.heading`
- Phone CTA: `<a href="tel:+1XXXXXXXXXX">` with `aria-label="Call Apex Roofing emergency line"`
- Phone pulse animation: controlled by `useReducedMotion()` — disabled when preferred
- Scenario icons: `aria-hidden="true"`, text label carries meaning
- FAQ accordion: `aria-expanded` state, keyboard navigable

---

## Performance

- No hero image — LCP is text (fastest possible)
- No lazy-loaded above-fold content
- Minimal JS — phone CTA is a plain `<a>`, no hydration needed
- LCP target: ≤ 1.5s (text-only hero)

---

## Analytics

| Event | Trigger |
|-------|---------|
| `emergency_phone_click` | Any phone click on this page |
| `emergency_form_start` | Short emergency form interaction |
| `insurance_section_view` | Insurance section in viewport |
| `emergency_faq_open` | FAQ item expanded |
