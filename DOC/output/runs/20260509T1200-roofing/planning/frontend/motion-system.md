# Motion System — Apex Roofing Co.

**Run:** 20260509T1200-roofing

---

## 1. Motion Philosophy

Motion on this site serves one mandate: **reinforce the brand's authority without slowing down the user's conversion path.** Every animation is deliberate, controlled, and purposeful. We never animate to decorate. We animate to:

1. **Hierarchy** — guide the eye to what matters (headline first, CTA second, proof third)
2. **Feedback** — confirm that the user's action was received
3. **Clarity** — signal state changes (loading, success, error)

Motion that does not serve one of these three is forbidden and will fail the audit.

---

## 2. Surface Temperaments

### Hero Surfaces — `restrained-cinematic`
Used on: Home hero, Roof Replacement hero, About team section.

- Duration band: 260–320ms (`--motion-duration-cinematic`)
- Easing: `--motion-easing-cinematic` (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Character: Slow, confident, unhurried. Like a master craftsman setting the first tile with care.
- Key technique: Word-by-word or line-by-line staggered reveal on display headlines. Each word/word-group enters with `opacity: 0 → 1` + `translateY: 12px → 0`.
- Stagger: `--motion-stagger-headline` (80ms per word/group)
- Purpose: hierarchy (guides eye through headline before CTA becomes prominent)

### Standard Content Surfaces — `calm-precise`
Used on: All section reveals, service cards, testimonial cards, FAQ accordion, navigation.

- Duration band: 180–240ms (`--motion-duration-base` to `--motion-duration-slow`)
- Easing: `--motion-easing-out` (`cubic-bezier(0, 0, 0.2, 1)`)
- Character: Competent, professional, no flair. Motion confirms competence.
- Key technique: Fade + slight upward translate for section entry. Stagger between grid items.

### Emergency Service Surface — `alive-energetic`
Used on: `/services/emergency-repair` hero CTA button only.

- Duration band: 160–200ms (`--motion-duration-base`)
- Easing: spring on CTA press (`stiffness: 300, damping: 20`)
- Character: Responsive, urgent, direct. The button snaps to press like it's already moving.
- Used ONLY on the emergency page CTA — not the standard primary button.

---

## 3. Macro Effects (by category)

### A. Hero Text Reveal (restrained-cinematic)

**Trigger:** Page/route mount  
**Target:** Display headline words on hero surfaces  
**Purpose:** hierarchy  

Choreography:
1. Overline eyebrow enters first: `opacity: 0 → 1`, `letterSpacing: 0.25em → 0.12em`, 300ms, `--motion-easing-cinematic`. Delayed 0ms.
2. Headline words enter sequentially: each word wraps in `<span style="display: inline-block">`. `opacity: 0 → 1`, `translateY: 12px → 0`, `--motion-duration-cinematic`, `--motion-easing-cinematic`. Stagger: 80ms per word-group.
3. Lead subhead enters after last word + 120ms delay: `opacity: 0 → 1`, `translateY: 8px → 0`, 280ms.
4. CTA cluster enters after subhead + 80ms: `opacity: 0 → 1`, `translateY: 8px → 0`, 260ms.
5. Trust badges enter after CTAs + 60ms: `opacity: 0 → 1`, 220ms.

**Reduced-motion fallback:** All elements render at final opacity/position instantly. No translate, no stagger, no letterSpacing animation. Visual outcome is identical — only the reveal sequence is removed.

---

### B. Section Reveal (calm-precise)

**Trigger:** `IntersectionObserver` threshold 0.15, once: true  
**Target:** Section containers and grid items  
**Purpose:** hierarchy  

Choreography:
- Container: `opacity: 0 → 1`, `translateY: 24px → 0`, `--motion-duration-slow` (280ms), `--motion-easing-out`
- Grid children stagger: each child delayed `index × --motion-stagger-base` (60ms)

**Reduced-motion fallback:** Instant opacity + position. `translate` removed entirely.

---

### C. Modal / Drawer Open (calm-precise)

**Trigger:** User action (hamburger, quote modal, image lightbox)  
**Target:** Panel surface  
**Purpose:** clarity + hierarchy  

Choreography:
- Backdrop: `opacity: 0 → 1`, 200ms
- Panel (right drawer): `translateX: 100% → 0`, 280ms, `--motion-easing-out`
- Panel (bottom sheet on mobile): `translateY: 100% → 0`, 300ms, `--motion-easing-cinematic`
- Close: reverse with `--motion-easing-in`, 200ms

**Reduced-motion fallback:** Backdrop and panel appear instantly (no translate). Close is instant.

---

### D. Count-Up (calm-precise → cinematic)

**Trigger:** `IntersectionObserver` on CounterCluster, threshold 0.3, once: true  
**Target:** Counter number text  
**Purpose:** hierarchy (draws attention to proof numbers)  

Choreography:
- Count from 0 to final value over 1800ms, `easeOut` curve (rapid start, slow finish)
- Stagger between counters: 120ms per counter
- Suffix stays constant — only the number animates

**Reduced-motion fallback:** Numbers jump to final value with no animation.

---

### E. Before/After Slider Initial Pulse

**Trigger:** First render of BeforeAfterSlider, once  
**Target:** Drag handle  
**Purpose:** feedback (communicates interactivity to the user)  

Choreography:
- Keyframe breathe: `scale: 1 → 1.10 → 1`, over 1200ms, ease-in-out, once
- Handle arrows: subtle `translateX: 0 → ±4px → 0`, same timing

**Reduced-motion fallback:** No pulse. Handle is stationary. The Before/After labels still communicate purpose.

---

## 4. Micro-Effects (by category)

### Hover — Service Card
- `translateY: 0 → -4px`, `--shadow-md → --shadow-lg`
- `--motion-duration-base`, `--motion-easing-out`
- Purpose: feedback

### Hover — Primary Accent Button (CTA)
- `translateY: 0 → -2px`, `--shadow-accent` appears
- `--motion-duration-base`
- Purpose: feedback

### Press — Primary Accent Button
- `scale: 1 → 0.97`, `translateY: -2px → 0`
- `--motion-duration-fast` (120ms)
- Purpose: feedback

### Press — Emergency CTA (alive-energetic)
- Spring: `stiffness: 300, damping: 20`
- `scale: 1 → 0.94 → 1`
- Purpose: feedback (more responsive feel signals urgency)

### Focus-Visible (all interactive)
- `outline: 3px solid --color-focus-ring`, `outline-offset: 2px`
- Instant (no duration — focus ring must appear without delay for accessibility)
- Purpose: clarity

### Inline State Change — Form Field Focus
- Border color: `--color-border → --color-ring`, `--shadow-sm` appears
- `--motion-duration-fast`
- Purpose: feedback

### Form Error Appear
- `opacity: 0 → 1`, no translate
- `--motion-duration-fast`
- Purpose: clarity

### Toast Notification
- Slide in from right: `translateX: 120% → 0`, `opacity: 0 → 1`, 280ms, `--motion-easing-out`
- Auto-dismiss: `opacity: 1 → 0`, 200ms, after 4s
- Purpose: clarity

### Accordion (FAQ) Open
- Height: `0 → content-height`, `--motion-duration-slow` (280ms), `--motion-easing-out`
- Chevron: `rotate: 0 → 180deg`, same duration
- Purpose: clarity

### Mobile Nav Sheet Open
- `translateX: 100% → 0`, `--motion-duration-slow` (280ms), `--motion-easing-cinematic`
- Backdrop: `opacity: 0 → 1`, 200ms
- Purpose: hierarchy

---

## 5. Per-Component Motion Declaration

| Component | Categories used | Temperament |
|-----------|----------------|------------|
| `SiteHeader` | Topbar hide: Macro-C (condensed), Hover (links) | calm-precise |
| `HeroCinematic` | Macro-A (text reveal) | restrained-cinematic |
| `ServiceCard` | Micro hover, Macro-B (grid reveal) | calm-precise |
| `CounterCluster` | Macro-D (count-up), Macro-B (reveal) | calm-precise → cinematic |
| `BeforeAfterSlider` | Macro-E (pulse), Micro hover (handle) | restrained-cinematic |
| `TestimonialCard` | Macro-B (section reveal), Micro hover | calm-precise |
| `QuoteFormWidget` | Micro field focus, form error, success panel | calm-precise |
| `MobileBottomNav` | Micro press, active state | calm-precise |
| `StickyCallPill` | Macro appear, Micro press | calm-precise |
| `FaqAccordion` | Micro accordion open/close | calm-precise |
| `MobileNavSheet` | Macro-C (drawer) | calm-precise |
| `EmergencyCTABand` | Micro press (spring) | alive-energetic |
| `ThemeSwitcher` | Icon swap: `opacity` crossfade, 140ms | calm-precise |
| `Toast` | Micro toast | calm-precise |

---

## 6. Reduced-Motion Policy (Global)

All animation is wrapped in a `useReducedMotion()` check (Framer Motion built-in, reads `prefers-reduced-motion: reduce`).

| Effect type | Reduced-motion behavior |
|------------|------------------------|
| `translate` (any direction) | Removed. Element renders at final position. |
| `opacity` fade | Removed. Element renders at full opacity. |
| `scale` | Removed. Element renders at final scale. |
| `count-up` | Jump to final value. |
| `stagger` | All items appear simultaneously. |
| `accordion height` | Still transitions (interaction) but at `--motion-duration-fast` (120ms) |
| `slider drag` | Fully functional (interaction-required) |
| `focus ring` | Always instant (accessibility mandatory) |

**No reduced-motion fallback may show different content or a different layout.** Only the animation is removed. Visual outcome must be identical.

---

## 7. Performance Budget

- All animations use `transform` and `opacity` only — no `top`, `left`, `width`, `height`, `border-radius` animation during motion sequences.
- `will-change: transform` added only to actively animating elements; removed after animation completes.
- Target: 60fps on mid-range Android (Moto G Power class device).
- Hero video backgrounds: not used. Static photography only. `next/image` for all hero media.
- Framer Motion code-split: `LazyMotion` + `domAnimation` feature set only (no full motion bundle on initial load).

