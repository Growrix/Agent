# Component Spec: AuthFormCard

- Class: molecule
- Variants: sign_in, sign_up
- Content keys: auth.*
- Data source: integration.auth.submit(payload)
- ARIA: labels, helper text, error association, aria-required and aria-invalid behavior
- Responsive: centered card desktop, edge-to-edge card mobile
- Motion: motion.input.focus-ring; reduced_motion direct style updates
- States:
  - default
  - hover
  - focus-visible
  - active
  - disabled
  - loading
  - success
  - validation_error
  - server_error
  - empty
