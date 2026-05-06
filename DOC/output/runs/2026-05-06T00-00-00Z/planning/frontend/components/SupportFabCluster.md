# Component Spec: SupportFabCluster

- Class: molecule
- Variants: collapsed, expanded
- Content keys: cta.open_whatsapp, cta.book_call, cta.open_ai_assistant
- ARIA: disclosure button with aria-expanded and labelled actions
- Keyboard: open via Enter or Space, close via Escape
- Responsive: fixed corner on desktop, above dock on mobile
- Motion: motion.button.press; reduced_motion opacity-only
- States:
  - default
  - hover
  - focus-visible
  - active
  - disabled
  - loading (channel availability check)
  - success (action open confirmed)
  - error (channel unavailable)
  - empty (single-action fallback)
