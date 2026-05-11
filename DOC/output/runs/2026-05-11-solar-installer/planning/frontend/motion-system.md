# Motion System — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Version:** 1.0  
**Status:** LOCKED  
**Date:** 2026-05-11

---

## Motion Temperament

**Measured Confidence:** Solar energy is about trust and expertise. Motion should feel smooth, intentional, and never frivolous. Entrances are staggered and elegant. Interactions provide clear feedback. Reduced-motion support is mandatory.

**Duration Band:** 150-800ms (fast feedback to dramatic reveals)  
**Easing Philosophy:** Ease-out for arrivals, ease-in-out for continuous, ease-in for departures  
**Decorative Motion:** Forbidden (motion must serve clarity or feedback)

---

## Macro Animations (Section-Level, Page-Level)

### M1 — Hero Text Reveal
**Trigger:** Page load, hero section scroll-into-view  
**Target:** Hero headline, subtitle, body copy  
**Duration:** 500ms total (staggered per word)  
**Easing:** var(--ease-smooth) [cubic-bezier(0.25, 0.46, 0.45, 0.94)]  
**Animation:**
```css
@keyframes heroTextReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Stagger:** 40ms between words (5 words = 160ms total stagger + 500ms duration = ~660ms end-to-end)  
**Implementation:** Framer Motion `staggerContainer` + `item` variants, or CSS with `--stagger-delay` per element  
**Reduced Motion Fallback:** Instant opacity: 1, transform: none  
**Use Cases:** Home hero, Services hero, Portfolio hero, Contact page hero

---

### M2 — Portfolio Gallery Entrance (Masonry Reveal)
**Trigger:** Portfolio page load or scroll-into-view  
**Target:** Image cards in grid  
**Duration:** 300ms per image, 50ms stagger between items  
**Easing:** var(--ease-out)  
**Animation:**
```css
@keyframes portfolioCardReveal {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```
**Stagger:** 50ms between cards (4x3 grid = 600ms total)  
**Reduced Motion Fallback:** Instant full opacity and scale  
**Use Cases:** Portfolio gallery, case studies grid, blog post list

---

### M3 — Testimonial Carousel Auto-Rotation
**Trigger:** Testimonials section load, auto-rotate every 5000ms  
**Animation:** Cross-fade between cards + optional scale  
**Duration:** 400ms per transition  
**Easing:** var(--ease-in-out)  
**Animation:**
```css
@keyframes carouselCrossFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1.02);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}

@keyframes carouselFadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
**Auto-Pause:** On hover or focus (carousel must pause when user interacts)  
**Keyboard Nav:** Arrow left/right to manually navigate (no auto-rotation during manual control)  
**Reduced Motion Fallback:** Instant fade (no scale), carousel auto-rotation disabled  
**Use Cases:** Testimonials, featured projects, brand logos

---

### M4 — Form Multi-Step Transition
**Trigger:** "Next" button click, step advance  
**Target:** Form step container  
**Duration:** 250ms  
**Easing:** var(--ease-out)  
**Animation (Current Step Out):**
```css
@keyframes formStepOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}
```
**Animation (Next Step In):**
```css
@keyframes formStepIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
**Parallel:** Outgoing step slides left while incoming step slides from right  
**Reduced Motion Fallback:** Instant opacity switch, no translate  
**Use Cases:** Contact form, assessment questionnaire, multi-step wizard

---

### M5 — Calculator Results Reveal (Count-Up Animation)
**Trigger:** Calculator submission, results display  
**Target:** Large metric numbers (e.g., "$8,450 annual savings")  
**Duration:** 1000ms total (count-up)  
**Easing:** var(--ease-out)  
**Implementation:** JavaScript number animator (framer-motion `useMotionValue` or Recharts animation)  
**Code Example:**
```typescript
// Pseudo-code: animate from 0 to finalValue over 1000ms
const animateValue = (start, end, duration) => {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs((duration / range));
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    updateDisplay(current);
    if (current === end) clearInterval(timer);
  }, stepTime);
};
```
**Reduced Motion Fallback:** Instant display of final value, no animation  
**Use Cases:** ROI calculator results, metric cards (15,000+ installations), testimonial ratings

---

### M6 — Modal / Dialog Entrance
**Trigger:** Modal open action (lead form CTA, gallery lightbox, video modal)  
**Target:** Backdrop + modal panel  
**Duration:** 300ms  
**Easing:** var(--ease-smooth)  
**Animation (Backdrop Fade):**
```css
@keyframes backdropFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
**Animation (Modal Slide + Scale):**
```css
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```
**Exit Animation:** Reverse (scale 0.95, translate-y 20px, opacity 0, duration 200ms)  
**Reduced Motion Fallback:** Instant full opacity and scale  
**Use Cases:** Lead capture form, image lightbox, video player, success confirmation

---

## Micro-Animations (Component-Level, < 300ms)

### μ1 — Button Hover (Scale + Shadow)
**Duration:** 150ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
.btn:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-lg);
  transition: all 150ms var(--ease-out);
}
```
**Reduced Motion:** No scale, shadow only or no change

---

### μ2 — Button Active (Press)
**Duration:** 100ms  
**Easing:** var(--ease-in)  
**Animation:**
```css
.btn:active {
  transform: scale(0.98);
  transition: transform 100ms var(--ease-in);
}
```

---

### μ3 — Card Hover (Lift + Shadow)
**Duration:** 200ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  transition: all 200ms var(--ease-out);
}
```

---

### μ4 — Link Hover (Underline Slide, Color Shift)
**Duration:** 200ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
.link {
  background: linear-gradient(
    to right,
    var(--color-link),
    var(--color-link)
  ) no-repeat 0 100%;
  background-size: 0 2px;
  transition: background-size 200ms var(--ease-out);
}

.link:hover {
  background-size: 100% 2px;
  color: var(--color-link-hover);
}
```

---

### μ5 — Focus Ring (Outline Glow)
**Duration:** 150ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
*:focus-visible {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
  transition: outline-offset 150ms var(--ease-out);
}
```
**No Animation for Accessibility:** Focus must be instant and persistent; only outline-offset animates (optional)

---

### μ6 — Checkbox / Radio Check
**Duration:** 150ms  
**Easing:** var(--ease-smooth)  
**Animation:**
```css
@keyframes checkboxCheck {
  0% {
    transform: scale(0) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
```
**Trigger:** User click, checked state change  
**Reduced Motion Fallback:** Instant scale(1) rotate(0), no animation

---

### μ7 — Accordion Expand/Collapse
**Duration:** 250ms  
**Easing:** var(--ease-in-out)  
**Animation (Content Slide):**
```css
@keyframes accordionSlideDown {
  from {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
  to {
    opacity: 1;
    max-height: 1000px; /* generous max */
    overflow: visible;
  }
}

@keyframes accordionSlideUp {
  from {
    opacity: 1;
    max-height: 1000px;
    overflow: hidden;
  }
  to {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
}
```
**Arrow Rotation:** Chevron icon rotates 180° simultaneously (180ms)

---

### μ8 — Input Focus / Underline Slide
**Duration:** 200ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
.input {
  border-bottom: 2px solid var(--color-border);
  transition: border-color 200ms var(--ease-out);
}

.input:focus {
  border-bottom-color: var(--color-primary-500);
  outline: none;
}
```
**Reduced Motion Fallback:** Instant color change

---

### μ9 — Form Error Shake
**Duration:** 400ms (4 oscillations x 100ms each)  
**Easing:** var(--ease-in-out)  
**Animation:**
```css
@keyframes formErrorShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}
```
**Trigger:** Form validation failure  
**Optional:** Combine with error background color change  
**Reduced Motion Fallback:** No shake, instant color change

---

### μ10 — Icon Rotation (Loader, Arrow on Hover)
**Duration:** Varies
- **Loader (infinite):** 800ms, linear, infinite  
- **Arrow on CTA hover:** 200ms, ease-out, 90° rotate  

**Animation (Loader):**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loader {
  animation: spin 800ms linear infinite;
}
```

---

### μ11 — Badge / Chip Pulse
**Duration:** 1500ms (gentle pulse)  
**Easing:** var(--ease-in-out)  
**Animation:**
```css
@keyframes badgePulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}
```
**Use Case:** CTA badges ("New", "Limited Offer", "Urgent"), but use sparingly (motion is not attention-grabbing)

---

### μ12 — Tooltip Fade
**Duration:** 150ms  
**Easing:** var(--ease-out)  
**Animation:**
```css
@keyframes tooltipFade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Trigger:** Hover or focus on help icon  
**Reduced Motion Fallback:** Instant full opacity

---

## Reduced Motion Compliance (Mandatory)

**CSS Rule:**
```css
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

**Per-Component Override:** Every component spec MUST declare its reduced-motion fallback explicitly.

**Testing:** Use DevTools > Rendering > Emulate CSS media feature prefers-reduced-motion: reduce

---

## Motion Checklist (Validation)

✓ Every animation has a purpose (clarity, feedback, hierarchy — never decoration)  
✓ All animations have duration <= 500ms (except count-up: 1000ms, carousel: 5000ms auto)  
✓ All entrance animations use ease-out  
✓ All continuous animations use ease-in-out  
✓ All exit animations use ease-in  
✓ Every animation has a reduced-motion fallback  
✓ No infinite loops (except loaders, carousels with auto-pause)  
✓ No motion on focus-ring (focus must be instant)  
✓ No motion that obscures content  
✓ No motion that distracts from CTAs (motion serves CTAs, not competes)

---

## Next Phase

**Phase 5 — Content Library** will define every visible string keyed for i18n, including content for animations (loading states, success messages, etc.).

