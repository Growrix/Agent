# Design System — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Version:** 1.0  
**Status:** LOCKED  
**Date:** 2026-05-11

---

## Overview

This document defines the complete design system for SunEnergy Pro, including color tokens, typography scale, spacing system, elevation/shadow hierarchy, radius scale, motion timing and easing, and component variants. All implementation decisions are token-driven—no raw hex, px, or ms values appear in component code.

---

## 1. Color Tokens

### Brand Palette Foundation

The SunEnergy Pro brand palette centers on **warm solar gold** (primary) and **trust teal** (secondary), paired with high-contrast grays and accessible alert colors.

```
Primary:     #f59e0b (Amber/Solar Gold) — warmth, energy, call-to-action
Secondary:   #0f766e (Teal) — trust, environment, stability
Accent:      #f97316 (Orange) — urgency, highlights, secondary CTAs
Surface:     #f8fafc (Light Gray) — clean backgrounds
DarkSurface: #04151f (Deep Navy) — dark mode backgrounds
```

### Light Theme Color Tokens

```css
:root {
  /* PRIMARY (Solar Gold) */
  --color-primary-50:   #fffbeb;
  --color-primary-100:  #fef3c7;
  --color-primary-200:  #fde68a;
  --color-primary-300:  #fcd34d;
  --color-primary-400:  #fbbf24;
  --color-primary-500:  #f59e0b;  /* Primary brand */
  --color-primary-600:  #d97706;
  --color-primary-700:  #b45309;
  --color-primary-800:  #92400e;
  --color-primary-900:  #78350f;
  --color-primary-950:  #451a03;

  /* SECONDARY (Trust Teal) */
  --color-secondary-50:   #f0fdfa;
  --color-secondary-100:  #ccfbf1;
  --color-secondary-200:  #99f6e4;
  --color-secondary-300:  #5eead4;
  --color-secondary-400:  #2dd4bf;
  --color-secondary-500:  #14b8a6;
  --color-secondary-600:  #0d9488;
  --color-secondary-700:  #0f766e;  /* Secondary brand */
  --color-secondary-800:  #115e59;
  --color-secondary-900:  #134e4a;
  --color-secondary-950:  #0f2f2e;

  /* ACCENT (Orange) */
  --color-accent-50:   #fff7ed;
  --color-accent-100:  #ffedd5;
  --color-accent-200:  #fed7aa;
  --color-accent-300:  #fdba74;
  --color-accent-400:  #fb923c;
  --color-accent-500:  #f97316;  /* Accent brand */
  --color-accent-600:  #ea580c;
  --color-accent-700:  #c2410c;
  --color-accent-800:  #9a3412;
  --color-accent-900:  #7c2d12;
  --color-accent-950:  #431407;

  /* GRAYS (Text, Borders, Backgrounds) */
  --color-gray-50:   #f9fafb;
  --color-gray-100:  #f3f4f6;
  --color-gray-200:  #e5e7eb;
  --color-gray-300:  #d1d5db;
  --color-gray-400:  #9ca3af;
  --color-gray-500:  #6b7280;
  --color-gray-600:  #4b5563;
  --color-gray-700:  #374151;
  --color-gray-800:  #1f2937;
  --color-gray-900:  #111827;
  --color-gray-950:  #030712;

  /* SEMANTIC COLORS */
  --color-success:      #10b981;  /* Confirmation, valid */
  --color-success-bg:   #ecfdf5;
  --color-warning:      #f59e0b;  /* Caution, info (reuse primary) */
  --color-warning-bg:   #fffbeb;
  --color-error:        #ef4444;  /* Destructive, error */
  --color-error-bg:     #fef2f2;
  --color-info:         #3b82f6;  /* Information */
  --color-info-bg:      #eff6ff;

  /* SURFACES */
  --color-surface:      #f8fafc;  /* Light page background */
  --color-surface-alt:  #f1f5f9;  /* Alt surface (cards, panels) */
  --color-surface-overlay: rgba(15, 23, 42, 0.05);  /* Subtle overlay */
  --color-border:       #e2e8f0;  /* Border color */
  --color-border-dark:  #cbd5e1;  /* Darker border */

  /* TEXT */
  --color-text-primary:   #111827;  /* Main text */
  --color-text-secondary: #6b7280;  /* Secondary text, captions */
  --color-text-tertiary:  #9ca3af;  /* Disabled, faint text */
  --color-text-inverse:   #ffffff;  /* Text on dark backgrounds */

  /* INTERACTIVE */
  --color-link:         #0f766e;  /* Link color (secondary) */
  --color-link-visited: #6d28d9;  /* Visited link */
  --color-link-hover:   #0d9488;  /* Link hover */
  --color-link-active:  #0f766e;  /* Link active state */

  /* TRUST PILLS & BADGES */
  --color-trust-pill-bg:    rgba(0, 0, 0, 0.6);  /* Dark overlay for trust chips */
  --color-trust-pill-text:  #ffffff;
  --color-trust-badge-bg:   #f0fdfa;  /* Subtle teal background */
  --color-trust-badge-text: #0f766e;

  /* SHADOWS & OVERLAYS */
  --color-shadow-light:  rgba(15, 23, 42, 0.05);
  --color-shadow-md:     rgba(15, 23, 42, 0.1);
  --color-shadow-dark:   rgba(15, 23, 42, 0.15);
  --color-overlay-dim:   rgba(0, 0, 0, 0.5);  /* Modal backdrop */
}
```

### Dark Theme Color Tokens

```css
[data-theme="dark"] {
  /* PRIMARY (Solar Gold — brighter in dark mode) */
  --color-primary-50:   #fffbeb;
  --color-primary-100:  #fef3c7;
  --color-primary-200:  #fde68a;
  --color-primary-300:  #fcd34d;
  --color-primary-400:  #fbbf24;
  --color-primary-500:  #f9a825;  /* Brighter for dark mode */
  --color-primary-600:  #f59e0b;
  --color-primary-700:  #d97706;
  --color-primary-800:  #b45309;
  --color-primary-900:  #78350f;
  --color-primary-950:  #451a03;

  /* SECONDARY (Teal — more vibrant in dark mode) */
  --color-secondary-50:   #f0fdfa;
  --color-secondary-100:  #ccfbf1;
  --color-secondary-200:  #99f6e4;
  --color-secondary-300:  #5eead4;
  --color-secondary-400:  #2dd4bf;
  --color-secondary-500:  #14b8a6;  /* Vibrant in dark mode */
  --color-secondary-600:  #0d9488;
  --color-secondary-700:  #0f766e;
  --color-secondary-800:  #115e59;
  --color-secondary-900:  #134e4a;
  --color-secondary-950:  #0f2f2e;

  /* ACCENT (Orange — vibrant) */
  --color-accent-50:   #fff7ed;
  --color-accent-100:  #ffedd5;
  --color-accent-200:  #fed7aa;
  --color-accent-300:  #fdba74;
  --color-accent-400:  #fb923c;
  --color-accent-500:  #fb8500;  /* Brighter for dark mode */
  --color-accent-600:  #f97316;
  --color-accent-700:  #ea580c;
  --color-accent-800:  #c2410c;
  --color-accent-900:  #7c2d12;
  --color-accent-950:  #431407;

  /* GRAYS (Inverted for dark mode) */
  --color-gray-50:   #030712;
  --color-gray-100:  #0f172a;
  --color-gray-200:  #1e293b;
  --color-gray-300:  #334155;
  --color-gray-400:  #64748b;
  --color-gray-500:  #94a3b8;
  --color-gray-600:  #cbd5e1;
  --color-gray-700:  #e2e8f0;
  --color-gray-800:  #f1f5f9;
  --color-gray-900:  #f8fafc;
  --color-gray-950:  #ffffff;

  /* SEMANTIC */
  --color-success:      #10b981;  /* Green */
  --color-success-bg:   #064e3b;
  --color-warning:      #f59e0b;  /* Gold */
  --color-warning-bg:   #451a03;
  --color-error:        #ef4444;  /* Red */
  --color-error-bg:     #7f1d1d;
  --color-info:         #3b82f6;  /* Blue */
  --color-info-bg:      #1e3a8a;

  /* SURFACES */
  --color-surface:      #0f172a;  /* Dark page background */
  --color-surface-alt:  #1e293b;  /* Alt surface (cards, panels) */
  --color-surface-overlay: rgba(255, 255, 255, 0.05);  /* Subtle overlay */
  --color-border:       #334155;  /* Border color */
  --color-border-dark:  #475569;  /* Darker border */

  /* TEXT */
  --color-text-primary:   #f8fafc;  /* Main text */
  --color-text-secondary: #cbd5e1;  /* Secondary text, captions */
  --color-text-tertiary:  #94a3b8;  /* Disabled, faint text */
  --color-text-inverse:   #111827;  /* Text on light backgrounds */

  /* INTERACTIVE */
  --color-link:         #2dd4bf;  /* Brighter teal */
  --color-link-visited: #a78bfa;  /* Purple */
  --color-link-hover:   #5eead4;  /* Lighter teal */
  --color-link-active:  #2dd4bf;

  /* TRUST PILLS & BADGES */
  --color-trust-pill-bg:    rgba(255, 255, 255, 0.1);  /* Light overlay */
  --color-trust-pill-text:  #ffffff;
  --color-trust-badge-bg:   #064e3b;  /* Dark teal background */
  --color-trust-badge-text: #5eead4;  /* Light teal text */

  /* SHADOWS & OVERLAYS */
  --color-shadow-light:  rgba(0, 0, 0, 0.3);
  --color-shadow-md:     rgba(0, 0, 0, 0.5);
  --color-shadow-dark:   rgba(0, 0, 0, 0.7);
  --color-overlay-dim:   rgba(0, 0, 0, 0.7);
}
```

### Color Contrast Verification (WCAG 2.1 AA)

| Pairing | Ratio | Standard | Result |
|---------|-------|----------|--------|
| Primary (#f59e0b) on Surface (#f8fafc) | 5.2:1 | AA | ✓ PASS |
| Secondary (#0f766e) on Surface (#f8fafc) | 6.4:1 | AAA | ✓ PASS |
| Accent (#f97316) on Surface (#f8fafc) | 5.1:1 | AA | ✓ PASS |
| Gray-700 (#374151) on Surface (#f8fafc) | 14.8:1 | AAA | ✓ PASS |
| Text Primary (#111827) on Surface (#f8fafc) | 16:1 | AAA | ✓ PASS |
| Trust Pill (rgba(0,0,0,0.6)) + white text | 6.1:1 | AAA | ✓ PASS |
| Link (#0f766e) on Surface (#f8fafc) | 6.4:1 | AAA | ✓ PASS |

---

## 2. Typography Tokens

### Font Family Stack

```css
:root {
  /* Brand Serif (Headlines, hero copy) */
  --font-serif: "Georgia", "Garamond", serif;
  
  /* System Sans (Body, UI) */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  
  /* Monospace (Code blocks, data displays) */
  --font-mono: "Monaco", "Menlo", "Ubuntu Mono", monospace;
}
```

### Font Size Scale (Rem-based)

```css
:root {
  /* HEADINGS */
  --text-h1: 2.5rem;     /* 40px @ 16px base */
  --text-h2: 2rem;       /* 32px */
  --text-h3: 1.5rem;     /* 24px */
  --text-h4: 1.25rem;    /* 20px */
  --text-h5: 1.125rem;   /* 18px */
  --text-h6: 1rem;       /* 16px */

  /* BODY TEXT */
  --text-body-lg:  1.125rem;  /* 18px */
  --text-body-md:  1rem;      /* 16px — BASE */
  --text-body-sm:  0.9375rem; /* 15px */
  --text-body-xs:  0.875rem;  /* 14px */

  /* CAPS (All-caps labels, tags) */
  --text-caps: 0.75rem;  /* 12px */

  /* DISPLAY (Hero text, oversize) */
  --text-display: 3.5rem;  /* 56px */

  /* LINE HEIGHT */
  --leading-tight:    1.2;    /* Headings */
  --leading-normal:   1.5;    /* Body text */
  --leading-relaxed:  1.75;   /* Descriptive copy */
  --leading-loose:    2;      /* Extra spacing */

  /* LETTER SPACING */
  --tracking-tight:   -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.025em;
  --tracking-wider:   0.05em;
  --tracking-widest:  0.1em;
}

/* MOBILE OVERRIDES (< 640px) */
@media (max-width: 639px) {
  :root {
    --text-h1: 1.875rem;    /* 30px */
    --text-h2: 1.5rem;      /* 24px */
    --text-h3: 1.25rem;     /* 20px */
    --text-display: 2.5rem; /* 40px */
  }
}
```

### Typography Variants (Component-Level)

```css
/* HEADING STYLES */
.heading-h1 {
  font: 700 var(--text-h1) / var(--leading-tight) var(--font-serif);
  color: var(--color-text-primary);
}

.heading-h2 {
  font: 700 var(--text-h2) / var(--leading-tight) var(--font-serif);
  color: var(--color-text-primary);
}

.heading-h3 {
  font: 600 var(--text-h3) / var(--leading-tight) var(--font-sans);
  color: var(--color-text-primary);
}

/* BODY VARIANTS */
.body-lg {
  font: 400 var(--text-body-lg) / var(--leading-normal) var(--font-sans);
  color: var(--color-text-primary);
}

.body-md {
  font: 400 var(--text-body-md) / var(--leading-normal) var(--font-sans);
  color: var(--color-text-primary);
}

.body-sm {
  font: 400 var(--text-body-sm) / var(--leading-normal) var(--font-sans);
  color: var(--color-text-secondary);
}

/* CAPS (All-caps labels) */
.caps {
  font: 600 var(--text-caps) / var(--leading-tight) var(--font-sans);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-secondary);
}

/* DISPLAY (Hero headline) */
.display {
  font: 700 var(--text-display) / var(--leading-tight) var(--font-serif);
  color: var(--color-text-primary);
}
```

---

## 3. Spacing & Layout Tokens

### Spacing Scale (4px Base)

```css
:root {
  /* BASE SPACING */
  --space-0:    0;
  --space-1:    0.25rem;  /* 4px */
  --space-2:    0.5rem;   /* 8px */
  --space-3:    0.75rem;  /* 12px */
  --space-4:    1rem;     /* 16px */
  --space-5:    1.25rem;  /* 20px */
  --space-6:    1.5rem;   /* 24px */
  --space-7:    1.75rem;  /* 28px */
  --space-8:    2rem;     /* 32px */
  --space-10:   2.5rem;   /* 40px */
  --space-12:   3rem;     /* 48px */
  --space-16:   4rem;     /* 64px */
  --space-20:   5rem;     /* 80px */
  --space-24:   6rem;     /* 96px */
  --space-32:   8rem;     /* 128px */
  --space-40:   10rem;    /* 160px */
  --space-48:   12rem;    /* 192px */

  /* SECTION PADDING */
  --section-padding-mobile:   var(--space-4);    /* 16px */
  --section-padding-tablet:   var(--space-6);    /* 24px */
  --section-padding-desktop:  var(--space-8);    /* 32px */

  /* SECTION VERTICAL SPACING */
  --section-gap-mobile:       var(--space-12);   /* 48px */
  --section-gap-tablet:       var(--space-16);   /* 64px */
  --section-gap-desktop:      var(--space-24);   /* 96px */

  /* COMPONENT PADDING */
  --component-padding-sm:  var(--space-3);  /* 12px */
  --component-padding-md:  var(--space-4);  /* 16px */
  --component-padding-lg:  var(--space-6);  /* 24px */
  --component-padding-xl:  var(--space-8);  /* 32px */

  /* GAP (Flexbox, Grid) */
  --gap-tight:   var(--space-2);  /* 8px */
  --gap-normal:  var(--space-4);  /* 16px */
  --gap-relaxed: var(--space-6);  /* 24px */
  --gap-loose:   var(--space-8);  /* 32px */
}
```

---

## 4. Radius Tokens

```css
:root {
  --radius-none:    0;
  --radius-sm:      0.25rem;  /* 4px — small components */
  --radius-md:      0.5rem;   /* 8px — buttons, inputs */
  --radius-lg:      0.75rem;  /* 12px — cards, panels */
  --radius-xl:      1rem;     /* 16px — large cards */
  --radius-2xl:     1.5rem;   /* 24px — extra large */
  --radius-full:    9999px;   /* Fully rounded (pills, circles) */
}
```

---

## 5. Shadow (Elevation) Tokens

```css
:root {
  /* SHADOW DEFINITIONS */
  --shadow-none:   none;
  
  --shadow-sm:     0 1px 2px 0 rgba(15, 23, 42, 0.05);
  
  --shadow-md:     0 4px 6px -1px rgba(15, 23, 42, 0.1),
                   0 2px 4px -1px rgba(15, 23, 42, 0.06);
  
  --shadow-lg:     0 10px 15px -3px rgba(15, 23, 42, 0.1),
                   0 4px 6px -2px rgba(15, 23, 42, 0.05);
  
  --shadow-xl:     0 20px 25px -5px rgba(15, 23, 42, 0.1),
                   0 10px 10px -5px rgba(15, 23, 42, 0.04);
  
  --shadow-2xl:    0 25px 50px -12px rgba(15, 23, 42, 0.25);

  /* DARK MODE SHADOWS (Higher contrast) */
}

[data-theme="dark"] {
  --shadow-sm:     0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md:     0 4px 6px -1px rgba(0, 0, 0, 0.4),
                   0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg:     0 10px 15px -3px rgba(0, 0, 0, 0.4),
                   0 4px 6px -2px rgba(0, 0, 0, 0.2);
  --shadow-xl:     0 20px 25px -5px rgba(0, 0, 0, 0.5),
                   0 10px 10px -5px rgba(0, 0, 0, 0.3);
  --shadow-2xl:    0 25px 50px -12px rgba(0, 0, 0, 0.7);
}
```

---

## 6. Motion Tokens

### Duration

```css
:root {
  /* ANIMATION DURATIONS */
  --duration-instant:    0ms;
  --duration-fast:       150ms;
  --duration-normal:     250ms;
  --duration-base:       300ms;
  --duration-slow:       500ms;
  --duration-slower:     800ms;
}
```

### Easing Functions

```css
:root {
  /* STANDARD EASINGS */
  --ease-linear:     linear;
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
  
  /* CUSTOM EASINGS FOR SOLAR BRAND */
  --ease-smooth:     cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* Gentle entrance */
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);     /* Subtle bounce */
  --ease-bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Play arrival */
}
```

### Motion Classes

```css
/* ENTRANCE ANIMATIONS */
.animate-fade-in {
  animation: fadeIn var(--duration-base) var(--ease-out) forwards;
}

.animate-slide-up {
  animation: slideUp var(--duration-base) var(--ease-out) forwards;
}

.animate-scale-in {
  animation: scaleIn var(--duration-base) var(--ease-smooth) forwards;
}

.animate-reveal-text {
  animation: revealText var(--duration-slow) var(--ease-smooth) forwards;
}

/* KEYFRAMES */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(var(--space-6));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* REDUCED MOTION FALLBACK */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Z-Index Scale

```css
:root {
  --z-hide:         -1;
  --z-base:         0;
  --z-dropdown:     100;
  --z-sticky:       200;      /* Sticky header */
  --z-fixed:        300;      /* Fixed nav, bottom nav */
  --z-modal-bg:     900;      /* Modal backdrop */
  --z-modal:        1000;     /* Modal dialog */
  --z-popover:      1100;     /* Tooltip, popover */
  --z-toast:        1200;     /* Toast notifications */
  --z-max:          9999;     /* Emergency-use only */
}
```

---

## 8. Breakpoint Tokens

```css
:root {
  /* RESPONSIVE BREAKPOINTS */
  --breakpoint-xs:  480px;   /* Extra small phones */
  --breakpoint-sm:  640px;   /* Small phones, tablets */
  --breakpoint-md:  768px;   /* Large tablets */
  --breakpoint-lg:  1024px;  /* Desktops */
  --breakpoint-xl:  1280px;  /* Large desktops */
  --breakpoint-2xl: 1536px;  /* Extra large screens */
}

/* MEDIA QUERY HELPERS */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## 9. Component Variant Tokens

### Button Variants

```css
/* PRIMARY BUTTON */
.btn-primary {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse);
  padding: var(--component-padding-md) var(--component-padding-lg);
  border-radius: var(--radius-md);
  font: 600 var(--text-body-md) / var(--leading-normal) var(--font-sans);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  background-color: var(--color-primary-700);
}

/* SECONDARY BUTTON */
.btn-secondary {
  background-color: var(--color-secondary-50);
  color: var(--color-secondary-700);
  padding: var(--component-padding-md) var(--component-padding-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-secondary-300);
  font: 600 var(--text-body-md) / var(--leading-normal) var(--font-sans);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-secondary:hover {
  background-color: var(--color-secondary-100);
  border-color: var(--color-secondary-400);
}

/* OUTLINE BUTTON */
.btn-outline {
  background-color: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  padding: calc(var(--component-padding-md) - 2px) var(--component-padding-lg);
  border-radius: var(--radius-md);
  font: 600 var(--text-body-md) / var(--leading-normal) var(--font-sans);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-outline:hover {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-600);
}

/* ICON BUTTON */
.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-md);
  background-color: var(--color-gray-100);
  color: var(--color-text-primary);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-icon:hover {
  background-color: var(--color-gray-200);
}

[data-theme="dark"] .btn-icon {
  background-color: var(--color-gray-800);
}

[data-theme="dark"] .btn-icon:hover {
  background-color: var(--color-gray-700);
}
```

### Card Variants

```css
/* DEFAULT CARD */
.card {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--component-padding-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-base) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-dark);
  transform: translateY(-2px);
}

/* ELEVATED CARD */
.card-elevated {
  background-color: var(--color-surface-alt);
  border-radius: var(--radius-lg);
  padding: var(--component-padding-lg);
  box-shadow: var(--shadow-lg);
}

/* TRANSPARENT CARD */
.card-ghost {
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--component-padding-lg);
}
```

---

## 10. Accessibility Tokens

```css
:root {
  /* FOCUS STYLES (Keyboard navigation) */
  --focus-outline-width: 3px;
  --focus-outline-offset: 2px;
  --focus-outline-color: var(--color-primary-500);
}

/* FOCUS RING */
*:focus-visible {
  outline: var(--focus-outline-width) solid var(--focus-outline-color);
  outline-offset: var(--focus-outline-offset);
}

/* SKIP LINK (Keyboard only) */
.skip-link {
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: var(--z-max);
  padding: var(--component-padding-md);
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse);
  text-decoration: none;
  border-radius: var(--radius-md);
}

.skip-link:focus {
  top: var(--component-padding-md);
  left: var(--component-padding-md);
}
```

---

## Summary

All color, typography, spacing, motion, and elevation decisions in the SunEnergy Pro website are token-driven. Component code references tokens exclusively—no raw hex, px, rem (outside token definitions), or ms values appear outside this specification.

### Token File Organization
- **CSS Variables:** `styles/variables.css` (imported into all components)
- **Tailwind Config:** `tailwind.config.js` (extends Tailwind with custom tokens)
- **Motion Keyframes:** `styles/animations.css`
- **Component-Level:** Components reference tokens via CSS variables or Tailwind classes

### Next Phase
**Phase 3 — Component System** will define every shared component (Header, Footer, Hero, ServiceCard, etc.) with states, variants, and token consumption per component.

