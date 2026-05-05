# Motion System

## Motion Posture
- Purpose-gated motion only: clarity, feedback, hierarchy.
- Decorative-only effects are prohibited.

## Macro Catalog
- motion.page.enter.fade-slide
  - token: motion.duration.base + motion.easing.enter
  - purpose: hierarchy
  - reduced_motion: instant opacity settle without translation
- motion.section.reveal.stagger
  - token: motion.duration.base + motion.easing.standard
  - purpose: hierarchy
  - reduced_motion: no stagger, immediate section paint
- motion.modal.assistant.open
  - token: motion.duration.slow + motion.easing.enter
  - purpose: clarity
  - reduced_motion: static modal swap and focus transfer
- motion.drawer.mobile-dock.expand
  - token: motion.duration.base + motion.easing.standard
  - purpose: feedback
  - reduced_motion: immediate expanded state
- motion.toast.status.pop
  - token: motion.duration.fast + motion.easing.enter
  - purpose: feedback
  - reduced_motion: no scale, opacity only

## Micro Catalog
- motion.button.press
  - token: motion.duration.fast + motion.easing.standard
  - purpose: feedback
  - reduced_motion: color-state change only
- motion.card.hover-lift
  - token: motion.duration.base + motion.easing.standard
  - purpose: clarity
  - reduced_motion: border-emphasis only
- motion.input.focus-ring
  - token: motion.duration.fast + motion.easing.enter
  - purpose: feedback
  - reduced_motion: static focus ring apply
- motion.counter.quote-update
  - token: motion.duration.base + motion.easing.standard
  - purpose: clarity
  - reduced_motion: direct value replacement
- motion.assistant.typing-stream
  - token: motion.duration.fast + motion.easing.standard
  - purpose: feedback
  - reduced_motion: batched text chunks without cursor pulse

## Component Motion Map
- HeaderShell: motion.page.enter.fade-slide, motion.button.press
- HeroMediaStack: motion.section.reveal.stagger, motion.card.hover-lift
- QuoteCalculatorPanel: motion.counter.quote-update, motion.input.focus-ring
- SupportFabCluster: motion.drawer.mobile-dock.expand, motion.button.press
- ChatAssistantModal: motion.modal.assistant.open, motion.assistant.typing-stream
- CmsCardGrid: motion.section.reveal.stagger, motion.card.hover-lift
- AuthFormCard: motion.page.enter.fade-slide, motion.input.focus-ring

## Reduced Motion Matrix
- All transforms degrade to direct state transition.
- All stagger effects degrade to simultaneous render.
- Streaming visuals degrade to grouped updates with no cursor animation.
- No layout displacement allowed in reduced mode.
