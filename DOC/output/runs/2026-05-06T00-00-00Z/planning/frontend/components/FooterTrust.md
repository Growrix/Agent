# Component Spec: FooterTrust

- Class: organism
- Variants: marketing_full, legal_minimal
- Content keys: footer.*, support.*, legal.*
- Trust slots: business name, license, hours, address, support contacts
- ARIA: contentinfo landmark, grouped nav labels
- Responsive: multi-column desktop, stacked mobile with tap-safe links
- Motion: motion.section.reveal.stagger; reduced_motion direct render
- States:
  - default
  - hover
  - focus-visible
  - active
  - disabled
  - loading (trust content fetch)
  - error (trust data unavailable fallback)
  - empty (minimal legal fallback)
