# Interaction Matrix — Apex Roofing Co.

**Run:** 20260509T1200-roofing

---

## Overview

This matrix maps every interaction class to the component that handles it, the state behavior, keyboard/touch/pointer parity, and the motion reference.

---

## 1. Navigation Interactions

### Desktop Nav Link (hover + click)
| Pointer | Keyboard | Touch |
|---------|---------|-------|
| Hover: underline slide-in `--motion-duration-base` | Tab: focus ring | Tap: navigate |
| Click: navigate | Enter/Space: navigate | — |

### Services Dropdown (desktop)
| Trigger | Behavior |
|---------|---------|
| Hover on "Services" link | Dropdown appears: `opacity: 0→1`, `translateY: -8px→0`, `--motion-duration-base` |
| Mouse leave nav | Dropdown dismisses with 150ms delay (prevents accidental close) |
| Keyboard Tab into dropdown | Dropdown opens, focus moves to first item |
| Escape key | Dropdown closes, focus returns to trigger |
| Click outside | Dropdown closes |

### Mobile Hamburger Sheet
| Trigger | Behavior |
|---------|---------|
| Tap hamburger | Sheet slides in from right, backdrop fades in |
| Tap close button | Sheet slides out, backdrop fades |
| Swipe right to left (gesture) | Sheet slides with finger, dismisses if distance > 40% |
| Tap backdrop | Sheet dismisses |
| Focus trap | Focus cycles within open sheet only |
| Escape | Closes sheet |

### MobileBottomNav Tab
| Trigger | Behavior |
|---------|---------|
| Tap | Navigate to route. Active state updates. Press scale feedback. |
| Keyboard focus | Focus ring visible on tab container |
| Enter / Space | Navigate |
| Active indicator | Dot above icon, color `--color-accent`, scale 1.05 on icon |

---

## 2. CTA Button Interactions

### Primary Accent Button (e.g., "Get Free Quote")
| Event | Behavior | Motion ref |
|-------|---------|-----------|
| Hover (pointer) | `translateY: -2px`, `--shadow-accent` | Micro: hover |
| Press (pointer/touch) | `scale: 0.97`, shadow removes | Micro: press |
| Focus visible | 3px `--color-focus-ring` ring, offset 2px | Instant |
| Click/Enter | Navigate or submit action | — |
| Loading state | Spinner replaces label, button disabled | Micro: state |
| Disabled | opacity 0.45, cursor not-allowed | — |

### Click-to-Call Link (phone number)
| Event | Behavior |
|-------|---------|
| Click (desktop) | Shows tooltip "Calling..." or copies number based on OS capability |
| Tap (mobile) | `tel:` opens native dialer |
| Keyboard Enter | Same as click |
| Focus | Underline emphasis + focus ring |

---

## 3. Form Interactions

### Text Input (`TextField`)
| Event | Behavior |
|-------|---------|
| Focus | Border: `--color-border → --color-ring`, `--shadow-sm`, label floats up |
| Blur (with value) | Label stays floated |
| Blur (empty) | Label returns to placeholder position |
| Invalid (blur/submit) | Red border `--color-destructive`, error message below with `role="alert"` |
| Disabled | `--color-inset` bg, no interaction |
| Keyboard | Full keyboard navigation, standard browser behavior |

### Service Type Chip Selection
| Event | Behavior |
|-------|---------|
| Click/Tap | Chip toggles selected: `--color-accent-muted` bg, `--color-accent` border + text, checkmark icon appears |
| Previous selection | Deselects (single-select) |
| Keyboard Tab + Space | Same as click |
| Focus ring | On chip when keyboard focused |

### Quote Form Submit
| State | Behavior |
|-------|---------|
| Submit (valid) | Button enters loading state, form fields read-only |
| Submit (invalid) | First invalid field receives focus, errors shown below each field |
| Success | Form replaced by success panel (see motion-system.md Macro-C success) |
| Network error | Error banner above submit, form remains editable |

### Form Navigation (multi-step quote, `/quote`)
| Trigger | Behavior |
|---------|---------|
| "Next" step | Validate current step fields, animate to next step with `translateX: 100% → 0` |
| "Back" step | No validation, animate to previous with `translateX: -100% → 0` |
| Trail step click | Jump to that step only if it's already completed |
| Keyboard | All form fields fully keyboard accessible; trail keyboard navigable |

---

## 4. BeforeAfterSlider Interaction

| Input | Behavior |
|-------|---------|
| Mouse drag | Clip-path updates in real-time at pointer X position |
| Touch pan | Same as drag; no scroll conflict (pointer-events on handle only) |
| Arrow key Left | Move slider 5% left per press |
| Arrow key Right | Move slider 5% right per press |
| Focus (Tab) | Handle receives focus ring |
| ARIA role | `role="slider"` on handle, `aria-valuenow` updates live |

---

## 5. FAQ Accordion Interaction

| Trigger | Behavior |
|---------|---------|
| Click item header | Toggle open/close; one item open at a time (exclusive mode) |
| Keyboard Enter/Space | Same as click |
| Keyboard Tab | Move between item headers |
| Arrow Down/Up | Move to next/previous item header |
| Open | Height animates from 0 to content height, chevron rotates 180°, `--motion-duration-slow` |
| Close | Reverse, `--motion-duration-base` |
| ARIA | `aria-expanded` on trigger button, `aria-controls` pointing to panel `id` |

---

## 6. Scroll Interactions

### Sticky Header Condense
| Trigger | Behavior |
|---------|---------|
| Scroll down > 80px | Topbar hides, header condenses to 64px, backdrop-blur activates |
| CSS transition | All changes via CSS transition, `--motion-duration-base` |
| No JS scroll listener needed for visual | Use `position: sticky` + CSS scroll-driven animation in modern browsers |

### StickyCallPill (mobile)
| Trigger | Behavior |
|---------|---------|
| Fast scroll down > 300px | Pill hides (`translateY: 80px`, opacity 0) — prevents blocking content during scroll |
| Scroll stop or up | Pill re-appears |
| On `/quote` page | Pill hidden entirely |

### Section Reveal
| Trigger | Behavior |
|---------|---------|
| Section enters viewport (threshold 0.15) | `Reveal` triggers: `opacity: 0→1`, `translateY: 24px→0` |
| Once only | Does not re-animate on scroll back up |
| Reduced-motion | Instant, no translate |

---

## 7. Image / Media Interactions

### MediaFrame (standard)
| State | Behavior |
|-------|---------|
| Loading | Shimmer skeleton at exact aspect ratio (no layout shift) |
| Broken/error | Fallback placeholder: `--color-inset` bg + `ImageOff` icon centered |
| Hover (within ServiceCard) | Scale 1.04 on image, `overflow: hidden` on container clips scale |

### Image Lightbox (gallery)
| Trigger | Behavior |
|---------|---------|
| Click gallery item | `Surface(modal)` opens with full-size image, backdrop overlay |
| Swipe left/right | Navigate to prev/next image |
| Escape | Close lightbox |
| Click backdrop | Close lightbox |
| Keyboard arrows | Navigate images |
| Focus trap | While open, focus stays in lightbox |

---

## 8. Area Coverage Lookup

| Trigger | Behavior |
|---------|---------|
| Type in postcode input | No action on type |
| Submit / Enter | POST to `/api/check-area` (or client-side match against data array) |
| Found | Green success chip: `coverage_found` message |
| Not found | Amber chip: `coverage_not_found` message + "Contact us" CTA |
| Loading | Spinner in input right slot |

---

## 9. ThemeSwitcher

| Trigger | Behavior |
|---------|---------|
| Click/Tap | Toggle `data-theme` on `<html>`, write to `localStorage` |
| Icon swap | Sun ↔ Moon crossfade: `opacity: 0→1`, 140ms |
| Keyboard Enter/Space | Same as click |
| aria-pressed | Updates on every toggle |

---

## 10. Touch + Mobile Parity Summary

Every interaction above has documented touch/pointer behavior. The following patterns are mobile-specific non-discoveries (i.e., no hover-only affordances):

- All CTAs and links respond to `touchstart` + standard click events (no hover-only discovery)
- Dropdown nav is replaced by hamburger sheet on mobile — no hover dependency
- Slider interaction uses touch pan events
- No tooltips used as primary information delivery — all information is in visible text
- FAQ accordion is touch-friendly (44px min tap targets)
- All form inputs use appropriate `inputmode` attributes: `tel` for phone, `text` for name, `numeric` for postcode (numeric keyboard)
