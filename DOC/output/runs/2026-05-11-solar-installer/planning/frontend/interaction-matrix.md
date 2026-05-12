# Interaction Matrix — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Status:** LOCKED  
**Date:** 2026-05-11  
**Spec Version:** 1.0

---

## Overview

This document maps every interaction class to its responsible component, state behavior, pointer/keyboard/touch parity, and motion reference. Every interaction is purposeful — no hover-only discovery on any viewport.

---

## Interaction Classes

### 1. Navigation Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Open primary nav | `MainNav` | Click desktop nav item | `hover` → highlight underline | `Tab` to item, `Enter` activates | N/A (desktop) | `underline-slide` (150ms) |
| Open mobile menu | `MobileMenu` | Hamburger button click | `closed` → `open` drawer | `Enter`/`Space` on button | Tap | `drawer-slide` (300ms, ease-out) |
| Close mobile menu | `MobileMenu` | Close button or outside tap | `open` → `closed` | `Escape` | Tap outside or swipe left | `drawer-slide` reverse |
| Mobile bottom nav tab | `MobileBottomNav` | Tap tab icon | `inactive` → `active` | `Tab` + `Enter` | Tap | `tab-bounce` (200ms, spring) |
| Active nav item | `MainNav` | Route match | `default` → `active` | N/A (route-driven) | N/A | Color shift instant |
| Scroll-triggered header | `Header` | Window scroll > 80px | `transparent` → `solid` | N/A | N/A | `shadow-add` (200ms) |
| Header disappear on scroll | `Header` | Scroll down fast | `solid` → `hidden` | N/A | N/A | `slide-up` (200ms) |
| Header reappear on scroll up | `Header` | Scroll direction reverses | `hidden` → `solid` | N/A | N/A | `slide-down` (200ms) |
| Theme toggle | `ThemeSwitcher` | Click toggle icon | `light` ↔ `dark` | `Enter`/`Space` | Tap | `icon-rotate` (300ms) + CSS var swap instant |

---

### 2. Hero Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Hero text entrance | `HeroSection` | Page load / route mount | `hidden` → `visible` (stagger) | N/A | N/A | `text-stagger` (40ms/word, 500ms total) |
| Hero CTA hover | `PrimaryButton` | Mouse enter | `default` → `hover` (scale 1.03, shadow) | `Tab` → `focus` ring | N/A | `scale-on-hover` (150ms) |
| Hero CTA click | `PrimaryButton` | Click / Enter | `hover` → `active` → navigate or scroll | `Enter` | Tap | `pressed` (80ms) |
| Hero image fade-in | `HeroSection` | Page mount | `opacity-0` → `opacity-1` | N/A | N/A | `fade-in-media` (600ms, delayed 100ms) |

---

### 3. Scroll & Entrance Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Section reveal on scroll | All sections | IntersectionObserver at 20% visible | `below-fold` → `visible` | N/A | N/A | `fade-in + slide-up` (300ms, ease-out) |
| Metric card count-up | `MetricCard` | Scroll into 30% viewport | `0` → target number | N/A | N/A | `count-up-animation` (1000ms, easeOut) |
| Card stagger on scroll | `ServiceCard`, `PortfolioCard`, `BlogCard` | Parent section visible | Cards reveal at 50ms offset each | N/A | N/A | `stagger-entrance` |
| Stats strip reveal | `MetricCard` row | Section enters viewport | 4 cards stagger (50ms each) | N/A | N/A | `stagger-entrance` |

---

### 4. Card & Gallery Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Service card hover | `ServiceCard` | Mouse enter | `default` → `hover` (lift shadow, border tint) | `Tab` → focus ring | N/A | `card-lift` (200ms) |
| Portfolio card hover | `PortfolioCard` | Mouse enter | `default` → `hover` (image zoom 1.05) | `Tab` → focus ring | N/A | `image-zoom` (300ms) |
| Before/after slider drag | `BeforeAfterSlider` | Mouse drag or touch drag | Reveal % updates continuously | Arrow keys (5% per keypress) | Touch drag | `smooth-drag` |
| Portfolio card expand | `PortfolioCard` | Click | Opens `Lightbox` modal | `Enter` | Tap | `lightbox-scale-in` |
| Lightbox prev/next | `Lightbox` | Arrow button click | Image changes | Arrow keys | Swipe left/right | `slide-transition` (250ms) |
| Lightbox close | `Lightbox` | Click X or backdrop | Modal closes | `Escape` | Tap backdrop | `modal-slide` reverse |
| Testimonial carousel auto | `Carousel` | Timer (5000ms) | Card cross-fades | N/A | Swipe left/right | `cross-fade` (400ms) |
| Carousel pause on hover | `Carousel` | Mouse enter | Auto-rotation pauses | Focus stops rotation | Tap pauses | Instant |
| Carousel manual nav | `CarouselNav` | Arrow or dot click | Jumps to target card | `Enter` on arrow/dot | Tap | `cross-fade` (400ms) |

---

### 5. Form Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Form step advance | `ContactForm` | "Next" button or Enter on last field | Step transitions `step1` → `step2` → `step3` | `Enter` advances | Tap Next | `slide-step-transition` (350ms, ease-in-out) |
| Form step back | `ContactForm` | "Back" button | `step2` → `step1` / `step3` → `step2` | `Enter`/`Space` | Tap Back | `slide-step-transition` reverse |
| Field focus | `TextInput`, `TextArea` | Tab or click | `default` → `focus` (ring + underline slide) | `Tab` | Tap | `focus-ring` (150ms) |
| Field blur validation | `TextInput` | On blur (after touch) | If invalid: `focus` → `error` (red border + message) | On blur | On touch-end | `shake` (400ms, 3 cycles) |
| Field success | `TextInput` | Valid value on blur | `error` → `success` (green check) | On blur | On touch-end | `fade-in check` |
| Select open | `SelectDropdown` | Click / Space | `closed` → `open` (dropdown slides down) | `Space`/`Enter` to open, arrow keys to navigate | Tap | `dropdown-slide` (200ms) |
| Select option pick | `SelectDropdown` | Click item | `open` → `closed`, value set | `Enter` on option | Tap item | `dropdown-slide` close |
| Checkbox toggle | `CheckboxGroup` | Click label or box | `default` → `checked` / `checked` → `default` | `Space` | Tap | `check-animation` (200ms) |
| Radio select | `RadioGroup` | Click option | `default` → `selected` (prior deselects) | Arrow keys cycle, `Space` select | Tap | `radio-animation` (150ms) |
| Form submit | `ContactForm` | "Submit" / "Get Assessment" button | `step3` → `submitting` (spinner) → `success` or `error` | `Enter` | Tap | Spinner (800ms loop) + modal |
| Submit success | `FormSuccessModal` | API response 200 | Modal opens | `Escape` closes | Tap outside closes | `modal-slide + scale` (350ms) |
| Submit error | `Toast` | Network failure / API error | Toast slides in with error message, 6000ms auto-dismiss | Focus stays on form | Visible on touch | `slide-in-up` (300ms) |
| Form persistence | `ContactForm` | User navigates away mid-form | Data saved to localStorage | N/A | N/A | None |
| Form recovery | `ContactForm` | User returns to page | Data restored from localStorage, toast notifies | N/A | N/A | `Toast` slide-in |

---

### 6. Calculator Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Range slider drag | `RangeSlider` | Mouse drag | Value updates, label tracks thumb | Arrow keys (1 unit/step) | Touch drag | `thumb-drag` (continuous) |
| Calculator calculate | `ROICalculator` | "Calculate Savings" button | `input-stage` → `calculating` (1200ms) → `results-visible` | `Enter` | Tap | `animate-count-up` on results |
| Calculator reset | `ROICalculator` | "Start Over" link | `results-visible` → `input-stage` | `Enter`/click | Tap | Fields fade back in |
| Results appear | `ResultsDisplay` | Calculation complete | Slides up + number count-up | N/A | N/A | `scale-in` (400ms) + `count-up` (1000ms) |
| Feedback band appear | `FeedbackBand` | User views results for 3+ seconds | Band slides up from bottom | N/A | N/A | `slide-up` (400ms) |
| Feedback band dismiss | `FeedbackBand` | Close button | `visible` → `dismissed` (cookie set) | `Escape` | Tap X | `fade-out` (200ms) |

---

### 7. FAQ Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Accordion expand | `AccordionItem` | Click header | `collapsed` → `expanded` (content height animates) | `Enter`/`Space` | Tap | `content-slide` (250ms, ease-out) + `rotate-arrow` (180deg, 250ms) |
| Accordion collapse | `AccordionItem` | Click open header | `expanded` → `collapsed` | `Enter`/`Space` | Tap | Reverse `content-slide` |
| FAQ search filter | `FAQAccordion` | Type in search input | Items filter in real-time (300ms debounce) | `Tab` to input, type | Tap + type | Items fade in/out |
| Expand all | `FAQAccordion` | "Expand All" button | All items → `expanded` | `Enter` | Tap | Stagger expand (20ms per item) |
| Collapse all | `FAQAccordion` | "Collapse All" button | All items → `collapsed` | `Enter` | Tap | Stagger collapse |

---

### 8. Map Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Map lazy load | `ServiceAreaMap` | Element enters viewport (IntersectionObserver) | `loading` → `map-loaded` | N/A | N/A | `fade-in` (400ms) |
| Map click marker | `ServiceAreaMap` | Click on map marker | Info window opens | `Tab` to map, arrow keys | Tap | Google Maps default |
| Map error fallback | `ServiceAreaMap` | API load failure | Static image placeholder + "View on Google Maps" link | N/A | N/A | `fade-in` |

---

### 9. Trust & Social Proof Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Certification badge hover | `CertificationBadge` | Mouse enter | `default` → `hover` (tooltip appears, scale 1.05) | `Tab` → `focus` → tooltip | Long-press | `tooltip-fade` (150ms) + `scale-on-hover` |
| Rating badge hover | `RatingBadge` | Mouse enter | `default` → `hover` (pulse) | `Tab` → `focus` | N/A | `pulse-on-hover` |
| Social icon hover | `SocialLink` | Mouse enter | `default` → `hover` (scale, color) | `Tab` → focus ring | N/A | `scale-on-hover` (150ms) |

---

### 10. Sticky CTA & Floating Button

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Float button appear | `FloatingActionButton` | Scroll past 300px | `hidden` → `visible` | N/A | N/A | `fade-in` (300ms) |
| Float button click | `FloatingActionButton` | Click | Opens WhatsApp link or phone intent | `Enter` | Tap | `pulse` (on appear) |
| Float button minimize | `FloatingActionButton` | Scroll back to top | `visible` → `hidden` | N/A | N/A | `fade-out` (200ms) |
| WhatsApp CTA | `WhatsAppButton` | Click | Opens WhatsApp in new tab (mobile: app deeplink) | `Enter` | Tap | `pulse` once |
| Phone CTA | `PhoneButton` | Click | `tel:` link triggers native dialer | `Enter` | Tap | `pulse` once |

---

### 11. Modal & Overlay Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Open modal | `Modal` | Trigger button click | `closed` → `open` (backdrop + panel) | `Enter`/`Space` | Tap trigger | `modal-slide` (350ms) + `backdrop-fade` (250ms) |
| Close modal | `Modal` | X button or backdrop click | `open` → `closed` | `Escape` | Tap backdrop | Reverse `modal-slide` |
| Focus trap in modal | `Modal` | Modal open | Focus cycles within modal | `Tab` / `Shift+Tab` cycle | N/A | None |
| Drawer open | `Drawer` | Hamburger button | `closed` → `open` | `Enter` on trigger | Tap | `drawer-slide` (300ms, ease-out) |
| Drawer close | `Drawer` | Close button or swipe | `open` → `closed` | `Escape` | Swipe left or tap X | Reverse `drawer-slide` |
| Toast appear | `Toast` | Event trigger | `hidden` → `visible` | N/A | N/A | `slide-in-up` (300ms) |
| Toast dismiss | `Toast` | Auto (6000ms) or X | `visible` → `hidden` | N/A | N/A | `fade-out` (200ms) |
| Tooltip show | `Tooltip` | Mouse enter / focus | `hidden` → `visible` | `Tab` to parent | Long-press | `fade-in + scale` (150ms) |
| Popover open | `Popover` | Click trigger | `closed` → `open` | `Enter`/`Space` | Tap | `scale-in + fade-in` (200ms) |

---

### 12. Theme Interactions

| Interaction | Component | Trigger | State Behavior | Keyboard | Touch | Motion Ref |
|-------------|-----------|---------|----------------|----------|-------|------------|
| Dark mode activate | `ThemeSwitcher` | Click moon icon | `data-theme="dark"` set on `<html>`, localStorage written | `Enter`/`Space` | Tap | `icon-rotate` (300ms) |
| Light mode activate | `ThemeSwitcher` | Click sun icon | `data-theme` removed from `<html>`, localStorage written | `Enter`/`Space` | Tap | `icon-rotate` reverse |
| System preference sync | App init | OS `prefers-color-scheme` | Reads localStorage first, falls back to system pref | N/A | N/A | Instant on init |

---

## Interaction Accessibility Contract

| Rule | Requirement |
|------|-------------|
| **No hover-only** | Every hover-triggered action has equivalent tap/keyboard action |
| **Focus order** | Logical DOM order matches visual order; skip-to-main link present |
| **Escape key** | All modals, drawers, tooltips, popovers close on `Escape` |
| **Arrow key nav** | Carousels, accordions, dropdowns support arrow key navigation |
| **Touch targets** | All tap targets ≥ 44×44px; no adjacent targets with < 8px spacing |
| **Animation timing** | All animations respect `prefers-reduced-motion: reduce` |
| **ARIA live regions** | Form errors, toast notifications, loading states announced to screen readers |
| **Focus management** | Focus moves into modal on open; returns to trigger on close |

---

## Mobile-Specific Interaction Patterns

| Pattern | Implementation | Components Affected |
|---------|----------------|---------------------|
| **Bottom nav** | 5-tab fixed bar, always visible on `< lg` breakpoints | `MobileBottomNav` |
| **Touch scroll** | `-webkit-overflow-scrolling: touch` on carousels | `Carousel`, `ImageGallery` |
| **Swipe to dismiss** | Horizontal swipe dismisses carousel items | `Carousel`, `Lightbox` |
| **Tap to expand** | Cards expand to detail view on tap (no hover required) | `ServiceCard`, `PortfolioCard`, `TeamCard` |
| **Pull-to-reveal** | Contact strip accessible within 1 tap from any page | `FloatingActionButton`, `MobileBottomNav` |
| **Double tap zoom prevention** | `touch-action: manipulation` on all buttons | All `Button` variants |
| **Overscroll bounce suppression** | `overscroll-behavior: none` on fixed panels | `Modal`, `Drawer`, `MobileMenu` |

---

## Reduced Motion Fallback Table

| Animation Class | Normal Behavior | Reduced Motion Fallback |
|-----------------|----------------|-------------------------|
| `text-stagger` | Staggered word reveal | Instant full opacity |
| `fade-in-media` | Opacity 0→1 over 600ms | Instant full opacity |
| `card-lift` | Shadow + translate on hover | Color-only change |
| `count-up-animation` | 0 → N over 1000ms | Instant final number |
| `modal-slide` | Slide + scale entrance | Instant opacity |
| `drawer-slide` | Slide from left 300ms | Instant visibility |
| `slide-step-transition` | Slide next step in 350ms | Instant swap |
| `stagger-entrance` | 50ms stagger | All appear at once, 200ms fade |
| `accordion-slide` | Height from 0 → auto | Instant visibility |
| `cross-fade (carousel)` | 400ms fade transition | Auto-rotation OFF; instant swap |
| `lightbox-scale-in` | Scale 0.9 → 1 + fade | Instant appear |
| `thumb-drag` | Smooth continuous | Maintained (not animation) |
| `icon-rotate` | 300ms rotation | Instant icon swap |
| `tooltip-fade` | 150ms fade | Instant appear |
| `slide-in-up (toast)` | Slide 300ms | Fade-in only |
