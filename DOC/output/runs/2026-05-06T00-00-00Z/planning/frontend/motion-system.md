# Motion System

## Motion Posture
- Purpose-gated motion only: clarity, feedback, hierarchy.
- Decorative-only effects are prohibited.
- Every catalog entry below includes a `framer-motion-variant` name. The developer MUST use this exact variant key (or a CSS equivalent where noted). Vague or unnamed transitions are a F14 violation.

## Macro Catalog

### motion.page.enter.fade-slide
- token: motion.duration.base + motion.easing.enter
- framer-motion-variant: `pageEnter` — `{ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: var(--motion-base), ease: var(--motion-easing-enter) } }`
- trigger: route mount (layout.tsx `AnimatePresence` wrapper)
- target: page root `<main>` element
- purpose: hierarchy
- reduced_motion: `{ initial: { opacity: 0 }, animate: { opacity: 1 } }` — no translation

### motion.section.reveal.stagger
- token: motion.duration.base + motion.easing.standard
- framer-motion-variant: `sectionReveal` — parent container uses `staggerChildren: 0.08`; each child uses `{ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } }`
- trigger: `useInView` with `once: true, margin: "-10%"` on the section container
- target: section container as `motion.section`; direct children as `motion.div`
- purpose: hierarchy
- reduced_motion: `{ initial: { opacity: 0 }, animate: { opacity: 1 } }` — no stagger, no translation; `staggerChildren: 0`
- per-page variant aliases: `heroReveal`, `storyReveal`, `badgeReveal`, `aboutHeroReveal`, `contactHeroReveal`, `footerReveal` — all use the same variant shape; alias name used in component for readability

### motion.modal.assistant.open
- token: motion.duration.slow + motion.easing.enter
- framer-motion-variant: `assistantModalOpen` — `{ initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 } }`
- trigger: `isOpen` state change; wrapped in `AnimatePresence`
- target: modal content `<div>` (not the backdrop)
- purpose: clarity
- reduced_motion: `{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }` — no scale, no translation

### motion.drawer.mobile-dock.expand
- token: motion.duration.base + motion.easing.standard
- framer-motion-variant: `dockExpand` — `{ initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 } }`
- trigger: `isExpanded` state change
- target: dock expansion panel wrapper `<motion.div>`
- purpose: feedback
- reduced_motion: CSS `display: none` / `display: block` toggle — no height animation

### motion.toast.status.pop
- token: motion.duration.fast + motion.easing.enter
- framer-motion-variant: `toastPop` — `{ initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } }`
- trigger: toast queue push; wrapped in `AnimatePresence`
- target: individual toast item `<motion.li>`
- purpose: feedback
- reduced_motion: `{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }` — no translation

## Micro Catalog

### motion.button.press
- token: motion.duration.fast + motion.easing.standard
- framer-motion-variant: `ctaPress` — `whileTap: { scale: 0.97 }`, `whileHover: { scale: 1.01 }`
- trigger: `whileTap` / `whileHover` on `motion.button` or `motion.a`
- target: the button/anchor element itself
- purpose: feedback
- reduced_motion: no scale; color-state change via CSS `active:` and `hover:` only (Tailwind active/hover utilities)
- alias: `channelPress` used on contact channel rows — same shape

### motion.card.hover-lift
- token: motion.duration.base + motion.easing.standard
- framer-motion-variant: `cardHover` — `whileHover: { y: -4, boxShadow: "var(--shadow-hover)" }`, `transition: { duration: var(--motion-base) }`
- trigger: `whileHover` on card `motion.div`
- target: card container `motion.div`
- purpose: clarity
- reduced_motion: CSS `hover:border-[var(--color-brand-primary)]` only — no translate, no shadow change
- alias: `teamCardHover`, `areaCardHover` — same shape

### motion.input.focus-ring
- token: motion.duration.fast + motion.easing.enter
- implementation: CSS-only (`focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]`) — NOT framer-motion
- framer-motion-variant: n/a (CSS transition on `box-shadow`)
- trigger: `:focus-visible` pseudo-class
- target: `<input>`, `<textarea>`, `<select>` elements
- purpose: feedback
- reduced_motion: ring appears immediately (no CSS `transition` property in reduced-motion media query)
- alias: `inputFocusRing`

### motion.counter.quote-update
- token: motion.duration.base + motion.easing.standard
- framer-motion-variant: `quoteCountUp` — use `useMotionValue` + `useTransform` to animate numeric display; or `react-countup` library if declared in deps
- trigger: estimate value changes in quote calculator state
- target: numeric output `<span>` inside `QuoteCalculatorPanel`
- purpose: clarity (shows the number is live and responsive to inputs)
- reduced_motion: direct `textContent` swap without animation

### motion.assistant.typing-stream
- token: motion.duration.fast + motion.easing.standard
- implementation: CSS cursor blink (`@keyframes blink`) + JS token append interval
- framer-motion-variant: n/a — CSS keyframe animation for cursor; JS interval for text streaming
- trigger: AI stream `onChunk` callback
- target: message bubble `<p>` + trailing cursor `<span aria-hidden="true">`
- purpose: feedback (communicates that the AI is actively generating)
- reduced_motion: batched text chunks without cursor; append full sentences at once

## Component Motion Map
- Header: `pageEnter`, `ctaPress`
- Hero sections: `sectionReveal` (aliased per page — `heroReveal`, `aboutHeroReveal`, `contactHeroReveal`)
- QuoteCalculatorPanel: `quoteCountUp`, `inputFocusRing`
- SupportFabCluster: `dockExpand`, `ctaPress`
- ChatAssistantModal: `assistantModalOpen`, `motion.assistant.typing-stream`
- Cards (all): `cardHover`, `sectionReveal`
- AuthFormCard: `pageEnter`, `inputFocusRing`
- Toasts: `toastPop`

## Reduced Motion Matrix
- All transforms (translate, scale) degrade to opacity-only transitions.
- All stagger effects degrade to simultaneous render (staggerChildren: 0).
- Streaming visuals degrade to grouped text updates without cursor animation.
- No layout displacement allowed in any reduced-motion state.
- CSS `@media (prefers-reduced-motion: reduce)` must wrap every `transition:` declaration on interactive elements.
