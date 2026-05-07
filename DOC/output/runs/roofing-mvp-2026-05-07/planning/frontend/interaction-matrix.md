# Interaction Matrix — Roofing MVP

**Status:** PLANNED | **Timestamp:** 2026-05-07

---

## Overview

Complete specification of interactive behaviors across all user input modes: hover (desktop), click/tap (all devices), scroll (all devices), form input, keyboard navigation, and mobile touch.

---

## Button Interactions

### Primary Button (`button.inspect_now`, `button.request_quote`, `button.contact_us`)

**Hover (Desktop only):**
- Cursor: pointer
- Background color: primary-500 → primary-600 (darker navy)
- Shadow: shadow-base → shadow-md (lift effect, optional)
- Duration: 200ms ease-out
- Exit: reverse on mouse leave

**Active/Press (All devices):**
- Background color: primary-600 → primary-700 (darkest)
- Scale: 0.98 (subtle press-down)
- Duration: 100ms (immediate feedback)

**Focus (Keyboard):**
- Outline: 2–3px solid primary-500, 4px offset
- Visible on Tab navigation

**Disabled:**
- Cursor: not-allowed
- Background: border-light (gray)
- Text color: text-tertiary (light gray)
- No hover effect; opacity 0.6

**Loading (form submit):**
- Text hidden (opacity 0)
- Spinner visible (rotating icon, 1500ms per rotation, linear)
- Disabled state applied
- Cursor: not-allowed

**Accessibility:**
- `aria-disabled="true"` when disabled
- `aria-label` for icon-only buttons
- `aria-busy="true"` during loading
- Keyboard: Enter, Space to activate

---

## Input / Form Interactions

### Text Input Fields

**Default:**
- Border: 1px border-light
- Background: white
- Text color: text-primary
- Cursor: text

**Focus:**
- Border: 2px border-primary-500
- Shadow: shadow-sm (optional depth)
- Outline: none (border provides focus indicator)
- Cursor: text
- Duration: 200ms ease-out (smooth transition)

**Filled (has value):**
- Border: 1px border-light (unchanged)
- Background: white (unchanged)
- Text color: text-primary (unchanged)

**Error:**
- Border: 2px border-error (red)
- Background: error/5% opacity (very light red tint)
- Error message appears below: text-error, 12px font
- Error message: `aria-describedby` links to error element
- Duration: 200ms ease-out
- Optional: subtle shake animation (±5px horizontal, 200ms) — removed on reduced-motion

**Disabled:**
- Border: 1px border-light
- Background: border-light (light gray)
- Text color: text-tertiary (gray)
- Cursor: not-allowed
- No focus effect

**Placeholder Text:**
- Color: text-tertiary (light gray)
- Disappears on focus

**Accessibility:**
- Associated `<label>` via `for` attribute
- `aria-required="true"` for required fields
- `aria-describedby` for error messages and hints
- Keyboard: Tab to focus, Shift+Tab to previous
- Enter submits form (text input only, not textarea)
- Font size ≥ 16px (prevents iOS zoom)

---

### Select / Dropdown

**Default:**
- Border: 1px border-light
- Background: white
- Arrow icon: text-secondary

**Focus:**
- Border: 2px border-primary-500
- Shadow: shadow-sm
- Arrow icon: text-primary
- Duration: 200ms ease-out

**Open:**
- Dropdown menu appears below (or above if bottom space limited)
- Background: white
- Options listed with padding 12px
- Max-height: 240px (scroll if more options)
- Z-index: dropdown-popover (7000)

**Option Hover (desktop):**
- Background: primary-50 (light tint)
- Text: text-primary
- Duration: 200ms ease-out

**Option Selected:**
- Background: primary-100 (darker tint)
- Checkmark icon visible (optional)
- Text: primary-600 (darker, bolder)

**Accessibility:**
- `role="listbox"` (or native `<select>`)
- Options have `role="option"` (or semantic)
- Keyboard: Arrow Up/Down to navigate, Enter to select, Escape to close
- Tab moves to next form field (doesn't cycle through options)

---

### Textarea

**Same as text input, with additional behaviors:**

**Value wrapping:**
- Text wraps at container width
- Min-height: 120px (allows multiple lines without scrolling)
- Max-height: 320px (scroll if content exceeds)
- Resize handle: visible on desktop, hidden on mobile (touch-friendly)

**Keyboard:**
- Tab inserts indent (optional; configurable)
- Enter creates new line (standard)

---

### Checkbox / Radio

**Default:**
- Checkbox icon: 20×20, outline border-light
- Radio: 20×20, outline circle
- Label: adjacent, clickable

**Hover (desktop):**
- Border: border-primary-500 (highlights)
- Cursor: pointer
- Duration: 200ms ease-out

**Checked:**
- Background: primary-500 (navy) or accent-500 (warm, for primary CTA checkbox)
- Checkmark or radio fill: white
- Text: text-primary (unchanged)

**Disabled:**
- Background: border-light
- Border: border-light
- Cursor: not-allowed
- Opacity: 0.6

**Accessibility:**
- Associated `<label>` via `for` attribute (or wrapping label)
- Keyboard: Space to toggle
- Focus outline: 2–3px outline-primary

---

## Link Interactions

### Text Links (inline)

**Default:**
- Color: primary-500 (navy) or accent-500 (warm, in CTA contexts)
- Text decoration: none (no underline)

**Hover (desktop):**
- Color: primary-600 (darker)
- Text decoration: underline
- Duration: 200ms ease-out

**Active (visited):**
- Color: primary-700 (darkest)
- Underline persistent

**Focus (keyboard):**
- Outline: 2–3px outline-primary-500
- Visible on Tab

**Mobile (touch):**
- Underline: persistent (no hover state)
- Minimum touch target: 44×44px

**Accessibility:**
- Semantic `<a>` element with `href`
- Link text descriptive (not "click here")
- `aria-current="page"` for active nav link
- External links: `target="_blank" rel="noopener noreferrer"` with `aria-label` indicating external

---

## Card Interactions

### Service Card, Project Card, Material Card

**Desktop Hover:**
- Shadow: shadow-base → shadow-md (lift)
- Scale: 1 → 1.02 (subtle 2% scale-up)
- Duration: 200ms ease-out
- CTA link color: text-secondary → accent-500 (warm)
- Cursor: pointer

**Mobile (touch):**
- No hover effect (prevents confusion with tap)
- Active/pressed state: same as hover (on tap)

**Exit:**
- Reverse animation 200ms ease-out (on mouse leave)

**Accessibility:**
- Card container: `role="article"` or semantic
- CTA link: semantic `<a>` with clear text
- Tab: focus visible on CTA link

---

## Form (Inspection Request)

### Form Field Flow

**Load:**
- All fields visible, empty
- Submit button enabled
- No error messages

**User enters field 1 (name):**
- Focus effect: border border-primary-500, shadow-sm
- Cursor: text
- No error

**User exits field 1 (Tab to next):**
- Blur event fires
- Validation checks if empty
- If empty and required: error state (border-error, error message appears)
- If filled: normal state (border-light)

**User leaves field empty and tries submit:**
- Submit button disabled (loading state)
- All required empty fields highlight in error
- Error messages appear below each empty field
- Duration: 200ms for all error highlights (staggered, 40ms apart)
- Keyboard focus moves to first error field (optional)

**User fills first error field:**
- Field becomes valid: error state clears (border-light)
- Error message fades out (200ms)
- Submit button remains disabled (other errors still present)

**All fields valid:**
- Submit button enabled (border-primary-600 highlight optional)

**User clicks submit:**
- All fields disabled (cursor not-allowed)
- Submit button: loading state (spinner visible, text hidden)
- Duration: depends on server response

**Server returns success:**
- Form fields fade-out (opacity 1 → 0, 240ms ease-out)
- Success message slides-in from top (transform: translateY(-20px) → 0, 240ms ease-out)
- Success message: green background, checkmark icon, confirmation text
- Optional: auto-hide form after 2 seconds; display link to "Submit another request"

**Server returns error:**
- Form fields remain visible
- Spinner fades-out (240ms)
- Error message slides-in from top (240ms ease-out)
- Error message: red background, error icon, "Something went wrong" text
- Submit button re-enabled (allow retry)
- Focus: moves to error message (for accessibility)

**Accessibility:**
- Loading state: `aria-busy="true"` on form
- Success/error message: `aria-live="polite"` (announced to screen readers)
- Error messages: `aria-describedby` on each field
- Required fields: `aria-required="true"` + visual indicator (*)

---

## Scroll Interactions

### Sticky Header

**Scroll position: top (0–50px):**
- Header: transparent background, no shadow
- Text: visible against hero background (or light tint)

**Scroll position: mid-page (50px+):**
- Header: opaque background (primary-50 or white)
- Shadow: shadow-base visible
- Transition: smooth 200ms ease-out (no jump)

**Scroll direction: down:**
- Header remains visible (sticky at top)
- z-index: 8000

**Scroll direction: up (optional enhancement):**
- Header slides-up from top on upward scroll (optional; hidden)
- Slides-down on downward scroll (optional re-reveal)
- Duration: 200ms ease-out

**Mobile:**
- Header always sticky
- Height: reduced (56px vs 64px desktop)
- Transparent on hero; opaque after scroll

### Scroll-Triggered Section Reveals

**Trigger:** Section enters viewport (when top of section is 80% down the screen).
**Animation:** Fade-in + slide-up from bottom.
- Opacity: 0 → 1
- Transform: translateY(20px) → 0
- Duration: 280ms ease-out
- Stagger: if multiple elements in section, 60ms apart

**Reduced-motion:** Instant fade (no slide).

### Lazy Loading

**Image scroll into view:**
- Placeholder background gradient shown initially
- Image fetches when 50px above viewport
- Fade-in: opacity 0 → 1, 200ms ease-out (once loaded)

**Video (if used):**
- Play button overlay visible until clicked
- No auto-play (policy)
- Plays inline on mobile

---

## Mobile-Specific Interactions

### Touch Events

**Tap button:**
- Active state triggers (same as hover on desktop)
- Duration: 100ms press effect

**Tap link / card CTA:**
- Color shift to accent (temporary)
- Navigation: link opens (instant)

**Tap form field:**
- Focus state: border-primary, shadow-sm
- Keyboard: on-screen keyboard appears
- Font size: ≥ 16px (prevents zoom)

**Swipe (carousel, if implemented):**
- Gesture recognized: horizontal swipe left/right
- Animation: slide 240ms ease-out to next slide
- Momentum scroll: enabled (native iOS/Android scrolling)

### Mobile Bottom Navigation

**Tap active tab:**
- Tab already active; no action
- Highlight persists

**Tap inactive tab:**
- Tab highlights (color + scale 1.05)
- Route navigates (instant, no animation)
- Previous tab highlight clears

**Active state per route:**
- Home tab active when on `/`
- Services tab active when on `/services`, `/services/[slug]`
- Materials tab active when on `/materials`
- Projects tab active when on `/projects`
- Contact tab active when on `/contact`, `/contact` any page with contact form

---

## Keyboard Navigation

### Tab Order

**Global tab order (logical left-to-right, top-to-bottom):**
1. Skip-to-main link (hidden, shown on Tab)
2. Header logo (home link)
3. Nav menu items (desktop) or hamburger (mobile)
4. Header utility buttons (contact CTA, theme switcher)
5. Hero CTA button(s)
6. Page content (in reading order)
7. Form fields (top-to-bottom)
8. Form submit button
9. Footer links

**Tab cycle:** Wraps from last focusable element to first.

### Keyboard Shortcuts (optional, documented)

**Global:**
- `?` — show keyboard shortcuts help (if implemented)
- `Escape` — close modal/drawer/menu

**Form:**
- `Enter` (from submit button) — submit form
- `Tab` — move to next field
- `Shift+Tab` — move to previous field

**Navigation (desktop menu):**
- `Arrow Down` (in menu) — next menu item
- `Arrow Up` (in menu) — previous menu item
- `Enter` — activate menu item

**Accessibility:** All keyboard shortcuts announced via help text or `aria-label`.

---

## Accessibility Parity

### Hover-Only Discovery (FORBIDDEN)

❌ **Bad:** CTA link appears only on card hover
✅ **Good:** CTA link always visible; hover changes color/underline

❌ **Bad:** Tooltip appears only on hover
✅ **Good:** Tooltip visible on focus or always persistent

### Touch Parity

**All hover effects must have non-hover equivalents:**
- Button hover → Button active/pressed (on tap)
- Link hover → Link focus outline (on Tab) or underline (persistent on mobile)
- Card hover → Card active state (on tap, temporary)

### Screen Reader Parity

**All interactive elements:**
- Named: `aria-label` if text not visible
- Described: `aria-describedby` for help text
- State announced: `aria-pressed`, `aria-expanded`, `aria-disabled`
- Live region: `aria-live="polite"` for dynamic content

---

## Quality Assurance Checklist

- [ ] All interactions tested on desktop (Chrome DevTools) and mobile (physical device)
- [ ] Hover effects disabled on touch devices (no `:hover` on touch)
- [ ] Tab order logical and comprehensive (no traps)
- [ ] Focus visible on all interactive elements (≥ 3px outline)
- [ ] Form validation preserves user input on error
- [ ] Success/error messages announced to screen readers
- [ ] Loading state visually indicated (spinner, text, or button disable)
- [ ] Scroll animations respect `prefers-reduced-motion`
- [ ] Mobile bottom nav active state syncs with route
- [ ] Touch targets ≥ 48×48px on mobile
- [ ] No decorative motion competing with functional interactions
- [ ] Keyboard shortcut labels documented if used

---

**Next:** Frontend developer implements per spec; QA validates all interaction flows across devices.
