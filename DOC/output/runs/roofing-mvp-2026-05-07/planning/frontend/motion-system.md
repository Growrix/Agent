# Motion System — Roofing MVP

**Archetype:** local-business-trust (calm-precise temperament) | **Status:** PLANNED | **Timestamp:** 2026-05-07

---

## Duration Band

Local-business-trust archetype uses a reassuring, deliberate motion temperament (220–280ms durations). Every animation serves functional clarity or guidance; no decorative motion.

- **Fast:** 120ms (micro-feedback, quick acknowledgment)
- **Standard:** 200ms (entrance, hover effects, state changes)
- **Deliberate:** 240ms (careful reveals, scroll-triggered sections, drawer/modal entrance)
- **Slow:** 280ms (staggered sequences, reassuring calm tempo)

---

## Easing Curves

- **ease-out:** `cubic-bezier(0, 0, 0.2, 1)` — natural, confident entrance
- **ease-in-out:** `cubic-bezier(0.4, 0, 0.2, 1)` — smooth, controlled transitions
- **ease-in:** `cubic-bezier(0.4, 0, 1, 1)` — gradual exit
- **ease-linear:** `linear` — continuous motion (progress, spinners)

---

## Macro Animations (Full-Screen & Large Sections)

### Page Entrance

**Trigger:** Route navigation or initial page load.
**Duration:** 240ms per staggered element.
**Easing:** ease-out.
**Fallback (reduced-motion):** Instant rendering (0ms delay per element).

**Hero Text Reveal:**
- Headline: fade-in + slide-up from bottom (-20px), 200ms ease-out
- Subheading: fade-in + slide-up from bottom (-20px), 200ms ease-out at +80ms
- Stagger: 80ms between headline and subheading
- Trust badges: fade-in + slide-up from bottom (-12px), 240ms ease-out at +200ms (staggered 40ms apart if multiple)

**CTA Button Entrance:**
- Fade-in + scale (0.95 → 1), 200ms ease-out at +300ms

**Section Scroll Reveal:**
- Trigger: element enters viewport (IntersectionObserver)
- Animation: fade-in + slide-up, 280ms ease-out
- Stagger: if multiple elements in section, 60ms apart
- Fallback: instant fade-in (no slide)

### Modal / Drawer Entrance

**Trigger:** User clicks modal trigger (e.g., "Emergency Contact").
**Duration:** 240ms ease-out.
**Animations:**
- Backdrop: fade-in (0 → 0.5 opacity), 240ms
- Panel (modal): scale (0.95 → 1) + fade-in (0 → 1), 240ms ease-out
- Content inside panel: fade-in at +120ms (staggered entrance)

**Exit:**
- Reverse animations: 200ms ease-in
- Focus returns to trigger button

**Reduced-motion:** Instant visibility (no scale/slide animation), only opacity change.

### Sticky Header Scroll Effect

**Trigger:** Scroll position changes.
**Duration:** 200ms ease-out.
**Animations:**
- Transparent state (at top of hero): no background shadow
- Opaque state (scrolled past hero): full background color + shadow-base
- Transition: smooth 200ms on bg-color and shadow

**Reduced-motion:** Instant state change (no transition); always visible.

### Mobile Drawer Navigation

**Trigger:** User clicks hamburger menu icon.
**Duration:** 240ms ease-out (entrance), 200ms ease-in (exit).
**Animations:**
- Backdrop: fade-in 0 → 0.6 opacity, 240ms
- Drawer panel: slide-in from left (-100% → 0%), 240ms ease-out
- Menu items inside: fade-in + staggered (40ms apart) at +80ms

**Reduced-motion:** Instant visibility; backdrop opacity instant.

---

## Micro-Animations (Component-Level)

### Button Hover (Desktop Only)

**Trigger:** Mouse enters button.
**Duration:** 200ms ease-out.
**Animations:**
- Primary button: background color darker (primary-500 → primary-600)
- Accent button: background color darker (accent-500 → accent-600)
- Secondary button: background tint appears (transparent → primary-50)
- Tertiary: background tint appears (transparent → primary-50)
- Shadow lift (optional): shadow-base on hover for elevated feel
- Text: no change

**Exit:** Reverse animation 200ms ease-out on mouse leave.
**Mobile:** No hover (touch-friendly; no state change on :hover).
**Reduced-motion:** Instant color change (no transition).

### Input Focus

**Trigger:** Input receives focus (Tab key or click).
**Duration:** 200ms ease-out.
**Animations:**
- Border color: border-light → border-primary-500
- Shadow: shadow-none → shadow-sm
- Outline: visible 2–3px outline in primary color

**Exit:** Reverse animation 200ms ease-out on blur.
**Mobile:** Same animation (important for accessibility).
**Reduced-motion:** Instant border color and outline change.

### Form Field Error State

**Trigger:** Validation fails or error message appears.
**Duration:** 200ms ease-out.
**Animations:**
- Border color: current → error (red)
- Text color (hint/error message): text-secondary → error
- Background tint: transparent → error/5% opacity
- Optional: subtle shake (±5px horizontal) for 200ms

**Duration of shake:** 200ms (two full vibrations).
**Reduced-motion:** No shake; only color change (instant).

### Form Submit Loading State

**Trigger:** User clicks submit button.
**Duration:** continuous (until success/error).
**Animations:**
- Button text: hide (opacity 0)
- Spinner icon: appear + spin (infinite rotation, 1500ms per full rotation, linear)
- Button disabled: cursor not-allowed, opacity 0.8

**Exit:**
- Success: spinner fade-out (240ms), success checkmark fade-in (240ms)
- Error: spinner fade-out (240ms), error message slide-in (240ms ease-out)

**Reduced-motion:** No spinner; just "Loading..." text or inline status message (instant).

### Form Success State

**Trigger:** Form submission succeeds.
**Duration:** 240ms ease-out.
**Animations:**
- Form fields: fade-out (opacity 1 → 0)
- Success message slides in from top: transform: translateY(-20px) → 0, opacity: 0 → 1, 240ms ease-out
- Checkmark icon: scale-in (0.5 → 1) + fade-in, 240ms ease-out

**Reduced-motion:** Instant visibility of success message; no scale/slide.

### Card Hover Effect (Service, Project, Material Cards)

**Trigger:** Mouse enters card.
**Duration:** 200ms ease-out.
**Animations:**
- Shadow: shadow-base → shadow-md (lift effect)
- Scale: 1 → 1.02 (subtle 2% scale-up)
- Text color (CTA link): text-secondary → accent (warm color)

**Exit:** Reverse animation 200ms ease-out.
**Mobile:** No hover effect; active state only (tap).
**Reduced-motion:** No scale/shadow; only color change (200ms).

### Link Underline on Hover

**Trigger:** Mouse enters link.
**Duration:** 200ms ease-out.
**Animations:**
- Underline: width 0% → 100% (animated reveal from left)
- OR opacity: 0 → 1 (fade-in underline)
- Text color: primary → accent

**Exit:** Reverse animation.
**Mobile:** Underline persistent on active state; no hover.
**Reduced-motion:** Instant underline; color change 200ms.

### Accordion Expand / Collapse

**Trigger:** User clicks accordion question (or keyboard Enter/Space).
**Duration:** 240ms ease-out.
**Animations:**
- Panel height: collapsed-height (0) → expanded-height (auto), 240ms ease-out
- Chevron icon: rotate(0deg) → rotate(180deg), 200ms ease-out
- Content opacity (inside panel): fade-in (0 → 1) at +80ms

**Reverse (collapse):**
- Height: expanded → 0, 240ms ease-out
- Chevron: 180deg → 0deg, 200ms ease-out

**Reduced-motion:** Instant height change (no animation); chevron rotates instant.

### Carousel / Slider Transition

**Trigger:** User clicks prev/next button or timer advances.
**Duration:** 240ms ease-out.
**Animations:**
- Current slide: opacity 1 → 0, 240ms ease-out
- Next slide: opacity 0 → 1, 240ms ease-out (begins at same time; crossfade)
- Auto-advance timer: every 5 seconds (5000ms)

**Manual advance (prev/next click):** Pause auto-timer for 5 seconds after click, then resume.
**Reduced-motion:** Crossfade slower (280ms); auto-advance paused (manual only).

### Before/After Image Toggle

**Trigger:** User clicks toggle button.
**Duration:** 200ms ease-out.
**Animations:**
- Current image: opacity 1 → 0, 200ms ease-out
- Next image: opacity 0 → 1, 200ms ease-out (crossfade)
- Toggle button: background color change, text update (instant)

**Reduced-motion:** Instant image swap (opacity instant).

### Star Rating Entrance

**Trigger:** Rating component enters viewport or renders.
**Duration:** 200ms ease-out, staggered per star.
**Animations:**
- Each star: scale (0 → 1) + fade-in, 200ms ease-out, staggered 40ms apart
- Overall: 5 stars take ~360ms total (40ms + 200ms stagger)

**Reduced-motion:** All stars appear instantly.

### Badge Entrance (Hero or Section)

**Trigger:** Page load or scroll into viewport.
**Duration:** 240ms ease-out, staggered.
**Animations:**
- Each badge: slide-up from bottom (-12px) + fade-in (0 → 1), 240ms ease-out
- Stagger: 40ms between badges
- If 4 badges: 240ms + (3 × 40ms) = 360ms total

**Reduced-motion:** Instant appearance (all badges visible at page load).

### Notification Toast

**Trigger:** Form success, error, or info message.
**Duration:** 
- Entrance: 240ms ease-out
- Duration on screen: 4000ms (auto-dismiss)
- Exit: 200ms ease-in

**Animations:**
- Entrance: slide-in from bottom-right or top-right + fade-in, 240ms ease-out
- Exit: slide-out (reverse) + fade-out, 200ms ease-in

**Reduced-motion:** Instant appearance and disappearance (4000ms duration unchanged).

---

## Reduced-Motion Fallback Table

| Animation | Duration | Easing | Reduced-Motion Fallback | Notes |
|---|---|---|---|---|
| Text reveal (staggered per word) | 200ms per word | ease-out | Instant (0ms delay) | All text visible immediately |
| Badge entrance (staggered) | 240ms per badge | ease-out | Instant; all badges visible | No slide-up animation |
| Modal entrance | 240ms | ease-out | Instant; backdrop instant | No scale/slide; opacity only |
| Button hover | 200ms | ease-out | Instant color change | No transition; instant state |
| Card hover (shadow lift + scale) | 200ms | ease-out | Instant color change only; no scale/shadow | Accessible to all users |
| Accordion expand | 240ms (height) | ease-out | Instant height; chevron instant | Content appears immediately |
| Carousel slide | 240ms | ease-out | Instant image swap; manual nav only | Auto-advance paused |
| Scroll-triggered reveal | 280ms | ease-out | Instant fade (no slide) | Elements visible when scrolled into view |
| Form error shake | 200ms | ease-out | No shake; color change instant | Visual feedback without motion |
| Success message entrance | 240ms | ease-out | Instant; no scale/slide | Message visible immediately |

### CSS Implementation

```css
/* Reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Or per-element */
  .hero-text {
    animation: none;
    opacity: 1; /* ensure visible */
  }
  
  .button {
    transition: none; /* instant color change */
  }
  
  .accordion-panel {
    max-height: none; /* no height animation */
    display: none; /* hidden until clicked */
  }
  
  .carousel {
    --advance-interval: 0; /* stop auto-advance */
  }
}
```

---

## Per-Component Motion Declarations

| Component | Motion | Duration | Trigger | Reduced-Motion |
|---|---|---|---|---|
| Button | hover color, focus outline | 200ms | hover/focus | instant |
| Input | focus border, outline | 200ms | focus | instant |
| Header | scroll effect (opacity/shadow) | 200ms | scroll | instant |
| Hero | text reveal (staggered), badge entrance | 200ms–240ms | page load | instant |
| Service Card | hover shadow + scale + text color | 200ms | hover | color only |
| Project Card | image toggle fade | 200ms | click toggle | instant |
| Form submit | spinner animation + success/error state | 1500ms + 240ms | submit event | instant; text status |
| Accordion | expand height + chevron rotate + content fade | 240ms–200ms | click | instant |
| Carousel | crossfade slide transition + auto-advance | 240ms + 5s | click/timer | instant swap; manual only |
| Toast | slide-in + auto-dismiss + slide-out | 240ms + 4s + 200ms | event trigger | instant; duration unchanged |
| ThemeSwitcher | icon color change | 200ms | click toggle | instant |
| MobileBottomNav | active tab highlight + scale | 200ms | route change | instant |

---

## Motion Purpose Matrix

Every motion moment must serve one of three purposes: **Clarity**, **Feedback**, or **Hierarchy**.

| Motion | Component | Purpose | Notes |
|---|---|---|---|
| Text reveal (staggered) | Hero | Clarity | Guides reading; establishes headline → subheading → CTA order |
| Button hover color | Button | Feedback | Confirms interactive element |
| Form success checkmark | Form | Feedback | Reassures user submission succeeded |
| Scroll reveal (fade-in) | Section | Hierarchy | Emphasizes section entry; guides attention |
| Modal entrance (scale) | Modal | Clarity | Indicates overlay state; directs focus |
| Accordion expand | Accordion | Clarity | Shows/hides content; reveals answer |
| Carousel crossfade | Carousel | Feedback | Guides user through testimonials; keeps pace measured |
| Sticky header scroll effect | Header | Hierarchy | De-emphasizes header on scroll; keeps focus on content |

**Forbidden:** Decorative motion unrelated to clarity, feedback, or hierarchy.

---

## Animation Library (Framer Motion Variants Reference)

```typescript
// Hero text stagger
export const heroHeadlineVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: i * 0.08,
    },
  }),
};

// Badge entrance
export const badgeVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: 'easeOut',
      delay: i * 0.04,
    },
  }),
};

// Button hover
export const buttonVariants = {
  rest: { shadow: 'var(--shadow-base)' },
  hover: { shadow: 'var(--shadow-md)', transition: { duration: 0.2 } },
};

// Accordion expand
export const accordionPanelVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.24 } },
};

// Reduced motion query helper
export const useReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

---

## Quality Assurance Checklist

- [ ] All durations in 220–280ms band (calm-precise archetype)
- [ ] Every animation has a documented purpose (clarity/feedback/hierarchy)
- [ ] Every animation has reduced-motion fallback (instant or opacity-only)
- [ ] No auto-play video or sound
- [ ] No decorative motion competing with functional CTAs
- [ ] Staggered animations use consistent delay increments (40–80ms apart)
- [ ] Scroll-triggered reveals tested via IntersectionObserver
- [ ] Reduced-motion CSS uses `@media (prefers-reduced-motion: reduce)`
- [ ] Framer Motion variants named consistently (`hidden`/`visible`, `rest`/`hover`)
- [ ] All motion tested in Chrome DevTools Motion simulator
- [ ] Dark theme motion contrast verified (animations visible in both themes)

---

**Next:** Frontend developer will implement all motion using Framer Motion + CSS transitions per spec above.
