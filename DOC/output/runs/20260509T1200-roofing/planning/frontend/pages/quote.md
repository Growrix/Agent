# Page Brief — Get a Quote (`/quote`)

**Visual Signature:** `VD-QUO-K11`  
**Creative Latitude:** LOW  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 2 (form + confirmation; `min_sections_exempt: true`)

---

## Page Definition

- **User intent:** Submit project details to receive a price estimate.
- **Conversion outcome:** Completed multi-step quote form submission
- **Primary CTA:** Form submit ("Get My Quote")
- **Secondary CTA:** Phone call (visible at all times in header)
- **KPI:** Form completion rate (start-to-submit)

---

## Outcomes

1. Visitor can complete the form in ≤ 3 minutes on mobile.
2. Progress is visible — visitor knows how many steps remain.
3. Draft is preserved if the browser is closed mid-form.
4. Submission confirms receipt with specific next-step information.
5. The form does not overwhelm — each step shows only relevant fields.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Page heading | `form.quote.page_heading` | `multi_channel_conversion` |
| Step progress indicator | Steps 1–3 labels | `process_disclosure` |
| Step 1: Service type + area | Field labels/errors | `capability_map` |
| Step 2: Contact info | Field labels/errors | `multi_channel_conversion` |
| Step 3: Project details + photos | Field labels/errors | `capability_map` |
| Submission success message | `form.quote.success.*` | `multi_channel_conversion` |
| Trust note below form | "Licensed & Insured — Free, no-obligation estimate" | `trust_signal_cluster` |
| Phone fallback CTA | `brand.phone` | `multi_channel_conversion` |

---

## Forbidden Patterns

- Any decorative hero section or background media (this page is pure focus — maximum signal, minimum noise)
- Progress bar that does not update in real-time
- Form fields that appear before previous step is validated
- Autoscroll to next step that disorients the user

---

## Composition Guidance (LOW — prescribed)

**Layout:** Centered single-column. Max-width `container-narrow` (640px). No sidebars. No hero.

**Header:** Minimal — logo only + phone CTA (no full nav). See `QuoteFormWidget` component spec.

**Step progress:** Horizontal step indicator above the form card. 3 steps. Active step: `--color-accent` filled circle. Completed: checkmark. Upcoming: muted.

**Form card:** `Surface(white)`, `--shadow-card`, `--radius-lg`. Form content inside.

**Trust strip below form:** Single line: lock icon + "Free, no-obligation estimate · Licensed & Insured · Respond within 24h".

**Success state:** Replaces form card. Confirmation heading + "What happens next" 3-step mini-timeline + phone number.

---

## Section Blueprint (E2E)

1. `quote_intro`: Purpose: explain outcome and commitment. Draft copy: "Get Your Free Quote" + "We'll call you back within 1 business hour." Layout: centered heading stack. Surface: clean white.
2. `step_progress`: Purpose: reduce abandonment anxiety. Draft copy: step labels (Service & Area, Contact, Project Details). Layout: horizontal progress rail; sticky compact on mobile.
3. `step_1_service_area`: Purpose: scope request quickly. Draft copy from service options and urgency labels. Layout: single-column form group. Interaction: required validation before next.
4. `step_2_contact`: Purpose: capture response channel. Draft copy from name/email/phone/preferred method labels. Layout: single-column form group.
5. `step_3_details_upload`: Purpose: improve quote accuracy. Draft copy for description, roof age, upload helper text. Layout: textarea + file input stack.
6. `trust_note`: Purpose: reinforce safety and no-obligation promise. Draft copy: "Free, no-obligation estimate · Licensed & Insured · Respond within 24h". Layout: line below form card.
7. `success_panel`: Purpose: close conversion loop. Draft copy from `form.quote.success.*` with next-step timeline and phone fallback. Layout: card replacement state.

---

## Form Plan

**Step 1 — Service & Area:**
| Field | Type | Validation |
|-------|------|-----------|
| Service type | radio group (4 options) | required |
| Your area / city | text | required, 2–100 chars |
| Urgency level | select (normal / urgent / emergency) | required |

**Step 2 — Contact:**
| Field | Type | Validation |
|-------|------|-----------|
| Full name | text | required, 2–100 chars |
| Email | email | required, valid |
| Phone | tel | required, valid phone |
| Preferred contact method | radio (email / phone) | required |

**Step 3 — Project Details:**
| Field | Type | Validation |
|-------|------|-----------|
| Project description | textarea | required, 10–2000 chars |
| Approximate roof age | select (< 5yr / 5–15yr / 15–25yr / 25yr+) | optional |
| Photo uploads | file input (multi, images only) | optional, max 5 files, max 5MB each |
| How did you hear about us? | select | optional |
| Honeypot | hidden | must be empty |

**Persistence:** `sessionStorage` draft after each step change.  
**Submission:** `POST /api/quote` → Resend email to admin + confirmation email to user.  
**Rate limiting:** `--api-rate-limit-quote` (5 submissions per IP per hour).

---

## State Requirements

| State | Handling |
|-------|---------|
| Step idle | Default field state |
| Step validation error | Inline field errors, focus first error |
| Submitting | Submit button spinner, all fields disabled |
| Success | Form replaced by success panel |
| Network error | Error message + retry button |
| Draft recovered | Toast: "We saved your progress" |

---

## Responsive Intent

- Mobile: single column, touch-friendly radio buttons and selects. File upload uses native picker. Progress bar stays visible (sticky top, minimal height).
- Desktop: same layout, wider card, keyboard-optimized (tab order, enter-to-submit).

---

## SEO

- Title: `seo.quote_title`
- Description: `seo.quote_description`
- No Schema.org needed (conversion page, not informational)
- Canonical: `/quote`
- `noindex` if desired for A/B testing purposes (defer to client)

---

## Conversion Path

- Linear: Step 1 → Step 2 → Step 3 → Submit → Success
- Exit recovery: Phone number always in minimal header

---

## Accessibility

- Progress indicator: `aria-valuenow`, `aria-valuemin`, `aria-valuemax` or step labels with `aria-current="step"`
- All inputs: `<label>` elements (no placeholder-only)
- Error messages: `role="alert"`
- File upload: accessible native `<input type="file">` with `aria-label`

---

## Performance

- No images above fold
- Client component: entire form (React Hook Form + Zod)
- Lazy-load file upload functionality
- LCP: heading text — ≤ 1.0s

---

## Analytics

| Event | Trigger |
|-------|---------|
| `quote_step_1_complete` | Step 1 next clicked |
| `quote_step_2_complete` | Step 2 next clicked |
| `quote_form_submit` | Form submitted successfully |
| `quote_form_abandon` | User exits mid-form (session end) |
| `quote_draft_recovered` | Session restored with prior draft |

