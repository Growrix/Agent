# Page Brief — Contact (`/contact`)

**Visual Signature:** `VD-CON-J10`  
**Creative Latitude:** LOW  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 3

---

## Page Definition

- **User intent:** Get in touch via their preferred channel — form, phone, or address.
- **Conversion outcome:** Message sent or phone call
- **Primary CTA:** Form submit
- **Secondary CTA:** Phone call
- **KPI:** Form submission rate

---

## Outcomes

1. All contact channels (phone, form, address, hours) are visible above the fold on desktop.
2. Form submit confirms receipt with a clear success message.
3. Business hours are stated clearly.
4. The page communicates expected response time.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Page heading | `contact.hero.heading` | `locality_outcome_statement` |
| Contact form | Form fields: name, email, phone, service type, message | `multi_channel_conversion` |
| Phone + hours | `brand.phone`, `brand.hours.*` | `multi_channel_conversion` |
| Address | `brand.address.*` | `local_proof` |
| Response time note | `contact.response_time` | `trust_signal_cluster` |
| Map embed | Google Maps embed | `local_proof` |
| Emergency escalation | "Need emergency help?" → `/services/emergency-repair` | `urgency_evidence` |

---

## Composition Guidance (LOW — prescribed)

**Layout:** `Grid(50/50)` on desktop. Left panel: contact form. Right panel: contact info (phone, address, hours, map embed). Full-width stacked on mobile (form on top).

**No hero media. No dark hero section. No decorative elements.** Clean utility layout.

**Emergency escalation:** Small `Surface(destructive-muted)` banner above the form: "Roofing emergency? Call [phone]" — not a full section.

---

## Form Plan

| Field | Type | Validation | Content key |
|-------|------|-----------|-------------|
| Name | text | required, 2–100 chars | `form.contact.name` |
| Email | email | required, valid email | `form.contact.email` |
| Phone | tel | optional | `form.contact.phone` |
| Service type | select | optional | `form.contact.service_type` |
| Message | textarea | required, 10–2000 chars | `form.contact.message` |
| Honeypot | hidden | must be empty | — |

**Success state:** Inline success message + "We'll respond within [X] business hours."  
**Error state:** Inline field errors via Zod schema + network error fallback message.  
**Submission:** `POST /api/contact` → Resend email to admin.

---

## State Requirements

| State | Handling |
|-------|---------|
| Form idle | Default empty state |
| Form submitting | Submit button shows spinner, disabled |
| Form success | Success panel replaces form |
| Form error (network) | Error message below form |

---

## SEO

- Title: `seo.contact_title`
- Description: `seo.contact_description`
- Schema.org: `LocalBusiness` with `contactPoint`
- Canonical: `/contact`

---

## Accessibility

- Form: each input has `<label>` element (not placeholder-only)
- Required fields: `aria-required="true"`
- Error messages: `role="alert"` + `aria-describedby` on invalid inputs

---

## Performance

- Map: lazy iframe
- Form: client component (React Hook Form + Zod)
- No heavy above-fold resources

---

## Analytics

| Event | Trigger |
|-------|---------|
| `contact_form_start` | Any form field interaction |
| `contact_form_submit` | Form submit success |
| `contact_phone_click` | Phone CTA click |
| `emergency_escalation_click` | Emergency banner CTA |
