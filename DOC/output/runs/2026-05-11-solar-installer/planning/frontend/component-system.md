# Component System Index — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Version:** 1.0  
**Date:** 2026-05-11  
**Status:** LOCKED

---

## Component Catalog (30+ Shared Components)

This document indexes every shared component used across SunEnergy Pro. Each component is defined in a separate spec file (`components/<ComponentName>.md`) with full state matrices, ARIA requirements, responsive behavior, and motion declarations.

---

### GLOBAL COMPONENTS (Header, Footer, Navigation)

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **Header** | Main navigation, branding, CTAs | sticky, transparent, solid | sm, md, lg+ | slide-down/up, shadow-add |
| **Footer** | Site-wide footer, links, contact, attribution | standard, dark-theme | mobile, desktop | fade-in on scroll |
| **MobileBottomNav** | 5-tab mobile navigation (Home, Services, Portfolio, Contact, More) | active-tab, inactive | xs, sm, (hidden lg+) | tab-bounce, scale |
| **ThemeSwitcher** | Light/dark mode toggle | light, dark | header-mounted, mobile-toolbar | icon-rotate |
| **MainNav** | Desktop primary navigation menu | default, hover, active | desktop (lg+) | underline-slide |
| **MobileMenu** | Hamburger menu drawer (top/left slide) | open, closed | mobile (xs, sm) | drawer-slide |

---

### HERO & SECTION COMPONENTS

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **HeroSection** | Full-bleed hero with text reveal, media overlay | default, dark-overlay, text-reveal, video-hero | mobile (60vh), tablet (80vh), desktop (100vh) | text-stagger, fade-in-media |
| **TrustChip** | Dark pill badge (e.g., "NABCEP Certified") | default, hover | all | scale-on-hover |
| **TrustBadge** | Light background badge with icon | default, hover | all | fade-in |
| **MetricCard** | Large number + label (e.g., "15,000+ Installations") | default, highlighted | grid-responsive | count-up-animation |
| **CTABand** | Full-width call-to-action section | single-cta, dual-cta, stacked | mobile (stacked), desktop (dual) | fade-in-on-scroll |
| **SectionHeading** | Large section title with optional subheading | h1, h2, h3 variants | responsive sizes | text-reveal |

---

### CARD COMPONENTS (Services, Portfolio, Testimonials)

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **ServiceCard** | Icon + title + description + CTA | default, hover, active | 1-col (mobile), 2-col (tablet), 3-col (desktop) | card-lift, scale |
| **PortfolioCard** | Image gallery card with before/after slider | default, hover, expanded | 2-col (mobile), 3-col (tablet), 4-col (desktop) | slide-up, image-zoom |
| **BeforeAfterSlider** | Interactive before/after image comparison | drag-ready, touch-ready | all | smooth-drag, reveal |
| **TestimonialCard** | Quote + customer name/photo + stars | default, expanded, video-ready | 1-col (mobile), 2-col (tablet), 3-col (desktop) | fade-in, scale |
| **BlogCard** | Featured image + title + excerpt + read-time | default, hover, featured-variant | 1-col (mobile), 2-col (tablet), 3-col (desktop) | card-lift |
| **TeamCard** | Team member photo + name + role + bio-expand | collapsed, expanded, bio-visible | 2-col (mobile), 3-col (tablet), 4-col (desktop) | bio-slide-down |
| **CaseStudyCard** | Project thumbnail + metrics + CTA | default, hover | 1-col (mobile), 2-col (tablet), 3-col (desktop) | card-lift |

---

### FORM COMPONENTS

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **ContactForm** | Multi-step lead capture (email → details → method) | step1, step2, step3, submitting, success, error | full-width, responsive inputs | slide-step-transition |
| **TextInput** | Standard text input (email, name, phone) | default, focus, error, disabled | all | underline-slide, focus-ring |
| **TextArea** | Message textarea | default, focus, error, disabled | all | underline-slide, focus-ring |
| **SelectDropdown** | Dropdown select (contact method, service type) | closed, open, selected | all | dropdown-slide |
| **CheckboxGroup** | Service selection checkboxes | default, checked, disabled | all | check-animation |
| **RadioGroup** | Contact preference radio buttons | default, selected, disabled | all | radio-animation |
| **FormStepIndicator** | Multi-step form progress (1, 2, 3) | active, completed, pending | all | step-connect-animation |
| **FormErrorMessage** | Inline field error messages | visible, hidden | all | shake, fade-in |
| **FormSuccessModal** | Confirmation modal after submission | visible, hidden | all | modal-slide + scale |

---

### CALCULATOR & INTERACTIVE

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **ROICalculator** | Zip code + property details → savings estimate | input-stage, calculating, results-visible | full-width, responsive | animate-count-up |
| **RangeSlider** | Input slider (e.g., roof size, annual usage) | default, active, disabled | all | thumb-drag |
| **ResultsDisplay** | Large results card with CTAs | visible, hidden, error | all | number-count-up, scale-in |
| **FeedbackBand** | Quick lead capture after calculator | visible, hidden, dismissed | all | slide-up, fade-in |

---

### CONTENT COMPONENTS (Gallery, FAQ, Carousel)

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **ImageGallery** | Masonry or grid image gallery with lightbox | grid-view, lightbox-open, lightbox-nav | responsive grid | lightbox-scale-in |
| **Lightbox** | Full-screen image viewer | open, closed, prev, next | all breakpoints | slide-transition |
| **FAQAccordion** | Expandable Q&A items | collapsed, expanded, all-open, all-closed | all | accordion-slide-down |
| **AccordionItem** | Single FAQ item | collapsed, expanded | all | content-slide + rotate-arrow |
| **Carousel** | Rotating testimonials, featured projects | auto-playing, paused, manual-nav | responsive | cross-fade, scale |
| **CarouselNav** | Carousel prev/next buttons + dots | default, hover, disabled | all | button-scale |

---

### MAP & CONTACT

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **ServiceAreaMap** | Google Maps embed showing service region | map-loaded, loading, error | responsive-embed | fade-in |
| **ContactInfoStrip** | Hours, phone, WhatsApp, emergency contact | default, hours-visible, offline | mobile-sticky, desktop | fade-in |
| **GoogleBusinessCard** | Embedded Google Business Profile (reviews, rating) | loaded, loading, error | responsive | fade-in |
| **HoursDisplay** | Current status (Open/Closed) + hours | open, closed, after-hours | all | status-fade |

---

### CTA & BUTTONS

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **PrimaryButton** | "Get Free Assessment", "Schedule Now" | default, hover, active, loading, disabled | all | scale-on-hover |
| **SecondaryButton** | "Learn More", "Explore Services" | default, hover, active, disabled | all | scale-on-hover |
| **OutlineButton** | Outlined variant for secondary CTAs | default, hover, active, disabled | all | border-animate, scale |
| **IconButton** | Icon-only button (close, menu, etc.) | default, hover, active, disabled | all | scale, icon-rotate |
| **WhatsAppButton** | Green WhatsApp CTA | default, hover, active | mobile + desktop | pulse, scale |
| **PhoneButton** | Phone call CTA (click-to-call) | default, hover, active | mobile + desktop | pulse, scale |
| **FloatingActionButton** | Sticky "Chat Now" or "Call Us" button | visible, hidden, minimized | mobile | fade-in, pulse |

---

### TRUST & SOCIAL

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **CertificationBadge** | NABCEP, manufacturer, warranty badges | default, hover, tooltip | all | scale-on-hover, tooltip-fade |
| **RatingStars** | 5-star rating display | 0-5 stars, half-star, disabled | all | fade-in |
| **RatingBadge** | "4.9/5 from 1,200+ reviews" | default, hover | all | pulse-on-hover |
| **SocialIconRow** | Footer social links (Facebook, Instagram, YouTube, LinkedIn) | default, hover, visited | responsive | icon-scale |
| **SocialLink** | Individual social icon link | default, hover, visited | all | scale-on-hover |

---

### LAYOUT & UTILITIES

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **Container** | Responsive width wrapper (max-width: 1280px) | default | all | none |
| **Grid** | Responsive grid layout (1-4 columns) | 1-col, 2-col, 3-col, 4-col | responsive | none |
| **Stack** | Vertical flex stack (gap-responsive) | default | all | none |
| **Cluster** | Horizontal flex cluster | default, wrap | all | none |
| **Divider** | Horizontal line separator | default, gradient | all | fade-in |
| **Skeleton** | Loading placeholder (shimmer animation) | loading, loaded | all | shimmer-animate |
| **EmptyState** | No results / empty content message | visible, hidden | all | fade-in |
| **ErrorBoundary** | Error fallback UI | error, recovered | all | fade-in |

---

### MODAL & OVERLAY

| Component | Purpose | States | Breakpoints | Motion |
|-----------|---------|--------|-------------|--------|
| **Modal** | Full-screen dialog with backdrop | open, closed, fullscreen-mobile | responsive | modal-slide, backdrop-fade |
| **Drawer** | Side drawer for mobile menu | open, closed, left-slide, right-slide | mobile-focused | drawer-slide |
| **Toast** | Notification popup (success, error, info) | visible, hidden, auto-dismiss | all | slide-in-up, fade-out |
| **Tooltip** | Hover tooltip for help text | visible, hidden | all | fade-in, scale |
| **Popover** | Click-triggered content popover | open, closed, positioned | all | scale-in, fade-in |

---

## Component State Matrix (Universal)

Every component must support these states:

| State | Usage | Behavior |
|-------|-------|----------|
| **default** | Initial uninteracted state | Base styling, full interactivity |
| **hover** | Mouse over (desktop only) | Color shift, elevation increase, shadow add |
| **active** | User clicking/pressing | Darker tint, pressed effect, feedback |
| **focus** | Keyboard tab focus | 3px outline, color-primary, offset 2px |
| **disabled** | Disabled state (form fields) | Gray-out, pointer-events: none, opacity: 0.6 |
| **loading** | Async operation in progress | Spinner or skeleton, button disabled, reduced opacity |
| **error** | Validation or API error | Red border/background, error icon, error message |
| **success** | Completion or confirmation | Green checkmark, success message, optional toast |
| **empty** | No data to display | Placeholder text, icon, optional CTA |

---

## Accessibility Requirements (All Components)

✓ **ARIA Labels:** Every interactive element has descriptive `aria-label` or `aria-labelledby`  
✓ **Focus Management:** Tab order logical, focus visible (3px outline)  
✓ **Keyboard Navigation:** All interactions keyboard-accessible (Enter, Space, Arrow keys, Escape)  
✓ **Semantics:** Correct HTML elements (`<button>`, `<a>`, `<form>`, `<nav>`, `<main>`)  
✓ **Contrast:** Text >= 4.5:1 (AA), large text >= 3:1, trust chips >= 6:1 (AAA)  
✓ **Motion:** All animations support `prefers-reduced-motion` (instant fallback)  
✓ **Alternative Text:** Images have descriptive `alt` text; SVG icons use `aria-label`  
✓ **Form Validation:** Error messages linked to form fields via `aria-describedby`  

---

## Motion Principles (All Components)

- **Duration:** 150-300ms for micro (hover, focus), 300-500ms for macro (entrance, exit)
- **Easing:** `ease-out` for entrances, `ease-in-out` for continuous, `ease-in` for exits
- **Purposeful:** Every animation serves clarity (feedback, hierarchy, state change)
- **Reduced Motion:** `prefers-reduced-motion: reduce` disables all animations, instant state change
- **No Jitter:** Smooth, predictable curves; no unpredictable bounces on micro-interactions

---

## Component File Naming Convention

Each component has its own spec file: `components/<ComponentName>.md`

Example component spec sections:
- **Component Name & Purpose**
- **Variants** (e.g., primary, secondary, outline)
- **Props/Configuration**
- **State Matrix** (default, hover, active, focus, disabled, loading, error)
- **ARIA & A11y**
- **Responsive Behavior** (xs, sm, md, lg, xl, 2xl)
- **Motion & Micro-Animations**
- **Content Keys** (i18n references)
- **Implementation Notes** (React patterns, Tailwind classes)

---

## Next Steps

**Phase 4 — Motion System** will detail every animation used across these components, with timing, easing, and reduced-motion fallbacks.

**Phase 7 — Per-Page Briefs** will specify which components appear on each route and their composition.

