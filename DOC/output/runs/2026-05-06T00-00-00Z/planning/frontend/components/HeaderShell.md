# Component Spec: HeaderShell

- Class: organism
- Variants: marketing_default, scrolled, compact_mobile
- Content keys: nav.*, cta.get_quote, cta.open_ai_assistant
- ARIA: nav landmark, current page indication, disclosure attributes on mobile menu
- Responsive: desktop horizontal nav, mobile collapsible panel with persistent Home route
- Motion: motion.page.enter.fade-slide; reduced_motion immediate style swap
- States:
  - default
  - hover (links and icon actions)
  - focus-visible
  - active (current route and pressed states)
  - disabled (action unavailable)
  - loading (auth/account slot pending)
  - error (menu data unavailable fallback)
  - empty (fallback nav model)
