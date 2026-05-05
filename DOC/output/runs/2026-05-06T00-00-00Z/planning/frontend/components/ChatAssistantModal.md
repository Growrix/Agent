# Component Spec: ChatAssistantModal

- Class: organism
- Variants: compact, expanded_with_citations
- Content keys: assistant.*
- Data source: integration.chatAssistant.stream(payload)
- ARIA: role dialog, aria-modal true, labelledby title, describedby subtitle
- Live region: assistant responses polite, critical errors assertive
- Responsive: full-height sheet on mobile, centered modal on desktop
- Motion: motion.modal.assistant.open; reduced_motion static open
- States:
  - default
  - hover
  - focus-visible
  - active
  - disabled
  - loading (stream connecting)
  - success (response completed)
  - error (stream failure)
  - empty (no conversation)
