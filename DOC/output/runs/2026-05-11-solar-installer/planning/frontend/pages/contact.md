# Page Design Brief: CONTACT

**Route:** `/contact`  
**Status:** LOCKED  
**Lead Gen Role:** PRIMARY (Direct lead capture point)  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**Form Integration:** Multi-step contact form, calendar embed, map, WhatsApp/call CTAs

---

## Page Definition

**Intent:** Lead capture endpoint. Provide multiple contact methods (form, phone, WhatsApp), confirm service availability (map + zip code), and reduce friction before conversion.

**Conversion Outcome:** Lead email + phone captured, consultation scheduled or WhatsApp conversation initiated.

**Primary CTA:** "Send My Information" (multi-step form submission)  
**Secondary CTAs:** "Call Now" (phone), "Message on WhatsApp"

---

## Outcomes (What Must Be True)

1. ✓ Contact form is visible above fold with first step (email input) prominently displayed
2. ✓ Phone + WhatsApp CTAs are accessible within 1 tap (mobile) or 1 click (desktop)
3. ✓ Service area map confirms ZIP code availability before form submission
4. ✓ Form submission succeeds within 3 seconds; success confirmation is clear
5. ✓ Multi-step form progression is intuitive (no field validation traps)
6. ✓ All form fields are keyboard-accessible and have clear labels

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page Hero | contact.hero.* | Intent Setting |
| Contact Form (Steps 1-3) | contact.form.* | Lead Capture |
| Service Area Map | contact.map.* | Qualification |
| Business Hours | contact.info_strip.* | Trust + Availability |
| Social Proof (mini) | testimonials.stats.* | Credibility |

---

## Section Blueprint (Visual Order)

### Section 1: HERO
**Purpose:** Set intent (contact us, let's talk)  
**Layout Intent:** Simplified hero (60vh mobile, 80vh tablet/desktop), light background, centered text.  
**Composition:** Headline + description, centered, light color palette (primary color accents).  
**Copy Snapshot:**
- Headline: "Let's Talk Solar"
- Description: "Have questions? Ready to go solar? Get in touch with our team. We're here to help!"

**Motion:** Fade in on page load (300ms, ease-out).

---

### Section 2: CONTACT FORM (Multi-Step)
**Purpose:** Lead capture  
**Layout Intent:** Form container (max-width: 600px, centered, card-style) with step indicator at top.  
**Steps:**

**Step 1 — Email Capture (Initial Gate)**
```
Label: "Step 1: Your Email"
Description: "Start by sharing your email address so we can follow up with your results."
Field: Email input (placeholder: "you@example.com")
Validation: Required, email format
Button: "Next →"
```

**Step 2 — Property Details**
```
Label: "Step 2: Your Details"
Description: "Tell us a bit about your property and energy needs."
Fields:
  - Name (text input, required)
  - Phone (tel input, required, E.164 format for WhatsApp link)
  - Property Type (radio: Residential | Commercial, required)
Button: "Next →" (also "Back" to previous step)
```

**Step 3 — Message + Contact Preference**
```
Label: "Step 3: Your Message"
Description: "Any specific questions or preferences?"
Fields:
  - Message (textarea, optional, 500-char limit)
  - Preferred Contact Method (radio: Phone Call | Email | WhatsApp, required)
Button: "Send My Information" (primary CTA)
```

**Form Behavior:**
- Auto-advance to next step on "Next" button (smooth slide transition, 250ms, ease-out)
- Form data preserved in localStorage during session (auto-fill on refresh)
- Validation errors inline per field (red border + error message)
- Submitting state shows spinner + disabled button
- Success state shows confirmation modal with thank-you message + next steps

**Accessibility:**
- Labels properly associated with inputs via `<label for="id">`
- Error messages linked via `aria-describedby`
- Form progress tracked via `aria-current="step"` on current step indicator
- Keyboard nav: Tab through fields, Enter to submit, Escape to close (optional modal)

**Motion:**
- Step transition: Current step fades out left (200ms), next step fades in from right (250ms, staggered)
- Field focus: Underline slides in (200ms)
- Validation error: Red outline (instant) + optional shake animation (400ms, ease-in-out)
- Success: Modal scale-in + fade (300ms, ease-smooth)

**Responsive:**
- Mobile: Full-width form, buttons full-width, single-column fields
- Desktop: Form container max-width 600px, centered, buttons sized for comfort

---

### Section 3: SERVICE AREA MAP + ZIP LOOKUP
**Purpose:** Qualify leads (confirm we service their area)  
**Layout Intent:** Google Maps embed (full-width, 400px height mobile, 500px desktop) with ZIP code input overlay.  
**Composition:**
- Map showing service region (50+ mile radius)
- Overlay input: "Enter your ZIP code to check availability"
- After input: Either "We service your area!" (green) or "Outside service area" (red)

**Content Snapshot:**
- Label: "Our Service Area"
- Description: "We serve over 50 miles across Northern California"
- ZIP Code Placeholder: "Enter your ZIP code"

**Behavior:**
- User enters ZIP → Instant validation against service area polygon
- If inside: Green checkmark + "We service your area!"
- If outside: Red X + "We're currently expanding to your area. Enter email for updates."

**Motion:** Map loads on scroll-into-view (fade-in, 300ms).

---

### Section 4: BUSINESS HOURS + EMERGENCY SUPPORT
**Purpose:** Set expectations (response time, availability)  
**Layout Intent:** 2-column card layout (1-col mobile, 2-col desktop).  
**Card 1 — Hours**
```
Title: "Business Hours"
Content:
  Monday - Friday: 8 AM - 6 PM
  Saturday: 9 AM - 3 PM
  Sunday: Closed
Current Status: "Currently Open" (green) or "Closed" (gray) — real-time logic
```

**Card 2 — Emergency Support**
```
Title: "Emergency Support"
Content:
  Available 24/7 for system issues
  Response Time: We typically respond within 24 hours
```

**Motion:** Cards fade in on scroll (300ms stagger).

---

### Section 5: SOCIAL PROOF MINI-BAND
**Purpose:** Confidence boost before final CTA  
**Layout Intent:** 2-3 metric display (inline or stacked).  
**Content Snapshot:**
- "97% Customer Satisfaction"
- "1,200+ Google Reviews"
- "4.9 out of 5 stars"

**Motion:** Numbers animate count-up on scroll-into-view (1000ms total).

---

## Forbidden Patterns

- ✗ NO "message sent" success page redirect (stay on same page, show inline confirmation modal)
- ✗ NO phone/email field validation errors on every keystroke (validate on blur or submit)
- ✗ NO CTA that requires scrolling (form + call/WhatsApp buttons must be sticky)
- ✗ NO form fields hidden behind accordions (all steps visible in sequence)

---

## Visual Differentiation (vs Other Routes)

| Route | Delta |
|-------|-------|
| /home | Home hero is narrative; Contact hero is minimalist action-focused |
| /services | Services is grid-heavy; Contact is form-heavy |
| /portfolio | Portfolio is visual/gallery; Contact is functional/form-focused |

---

## Motion Temperament

**Functional Precision:** Form interactions should feel snappy and responsive (100-250ms), not leisurely. Step transitions are smooth (slide + fade), validation feedback is instant (no delay).

**Key Moments:**
- Form step transition (slide + cross-fade, 250ms total)
- Field focus underline (200ms, ease-out)
- Validation error shake (optional, 400ms, ease-in-out)
- Success modal entrance (scale + fade, 300ms, ease-smooth)

---

## State Requirements

| State | Behavior |
|-------|----------|
| Loading | Form fields disabled, spinner on submit button |
| Error (field) | Red border, error message below field, focus remains on field |
| Error (network) | Toast: "Network error. Please try again." |
| Error (validation) | Toast: "Please check the fields highlighted in red." |
| Success | Inline confirmation modal: "Thank you! We'll contact you within 24 hours." |
| Offline | Toast: "Some features may not work while offline." |

---

## Responsive Intent

- **Mobile:** Single-column form, full-width fields, sticky header with phone/WhatsApp CTAs, bottom nav always visible
- **Desktop:** Form max-width 600px, centered, sidebar widget with "Chat with Expert" on right (lg+)

---

## SEO + Schema.org

**Title:** "Contact SunEnergy Pro | Free Solar Consultation"  
**Meta Description:** "Ready to go solar? Contact SunEnergy Pro for a free consultation. Call, WhatsApp, or fill out our quick form."  
**Schema Markup:**
- `LocalBusiness` (address, serviceArea, contactPoint)
- `ContactPoint` (contactType: "customer service", phone, areaServed)

---

## Conversion Path

1. **Entry:** User clicks CTA from any page (home, services, portfolio) → Contact page
2. **Qualification:** Zip code check confirms service availability
3. **Capture:** Multi-step form captures email (gate 1) → details → submission
4. **Action:** Lead routed to sales team; confirmation email sent; optional calendar link for scheduling

---

## Performance Plan

- **LCP Target:** < 2.5s (form must render quickly)
- **Map Lazy Load:** Google Maps embed loads on scroll-into-view (not on page load)
- **Form State:** Stored in localStorage (auto-fill on refresh)
- **JS Budget:** 80KB (includes form validation, map integration)

---

## Accessibility Plan

- **Landmarks:** `<main>` wraps all content, form is `<form role="main">`
- **Heading Outline:** H1 (page title) → H2 (section: Form, Map, Hours) → H3 (card titles if needed)
- **Form Labels:** All inputs have visible labels + `aria-label`  
- **Step Indicator:** Current step marked with `aria-current="step"`
- **Errors:** Linked to fields via `aria-describedby`, error list announced via `aria-live="polite"`
- **Motion:** All animations respect `prefers-reduced-motion: reduce`
- **Focus Management:** Focus moves to error field on validation failure, success modal on submission success

---

## Quality Bar Scoring

**Target:** 94/100

| Dimension | Target | Rationale |
|-----------|--------|-----------|
| **Clarity** | 95 | Form steps are intuitive, labels clear, no jargon |
| **Conversion** | 96 | Multi-step form reduces friction, ZIP check qualifies leads |
| **Mobile UX** | 94 | Sticky header, touch-friendly buttons, form scrollable |
| **Accessibility** | 93 | Full keyboard nav, proper labels, error handling clear |
| **Performance** | 92 | Map lazy-loads, form renders instantly, <2.5s LCP |

---

## Open Questions for Client

1. Should we embed a live chat widget (e.g., Intercom) for real-time support?
2. Do we need Calendly embed for direct scheduling, or is sales team callback preferred?
3. Should we auto-trigger a welcome email on successful form submission?
4. Do we track which contact method (phone vs email vs WhatsApp) converts best?

