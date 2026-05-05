# Component Spec: MobileSupportDock

- Class: organism
- Variants: marketing, auth, account
- Content keys: nav.home, nav.services, nav.quote, support.phone_label, assistant.launcher.label, nav.account
- ARIA: tablist semantics for dock tabs, aria-current for active tab
- Responsive: mobile-only primary surface; hidden on desktop in favor of header utilities
- Motion: motion.drawer.mobile-dock.expand; reduced_motion no transform
- States:
  - default
  - hover (where pointer exists)
  - focus-visible
  - active
  - disabled
  - loading
  - error
  - empty
