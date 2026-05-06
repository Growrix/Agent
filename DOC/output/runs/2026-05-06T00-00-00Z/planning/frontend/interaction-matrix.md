# Interaction Matrix

## Coverage
Interaction class -> component -> behavior -> parity -> motion reference

- primary navigation -> HeaderShell
  - behavior: route transition, active route indicator, keyboard arrow traversal
  - parity: pointer, keyboard, touch all supported
  - motion: motion.page.enter.fade-slide
- mobile navigation -> MobileSupportDock
  - behavior: tab change, sticky dock reveal on scroll direction
  - parity: touch-first with keyboard fallback
  - motion: motion.drawer.mobile-dock.expand
- support cluster -> SupportFabCluster
  - behavior: expand actions for call, whatsapp, ai-chat
  - parity: tap and click parity, no hover-only discovery
  - motion: motion.button.press
- ai assistant -> ChatAssistantModal
  - behavior: open modal, submit question, stream response, source chips
  - parity: pointer, keyboard submit, touch submit
  - motion: motion.modal.assistant.open, motion.assistant.typing-stream
- instant quote -> QuoteCalculatorPanel
  - behavior: step progression, slider/input sync, estimate update, submit lead form
  - parity: keyboard and touch controls for each field
  - motion: motion.counter.quote-update, motion.input.focus-ring
- cms grids -> CmsCardGrid
  - behavior: filter chips, sort select, pagination or load-more
  - parity: all controls available via touch and keyboard
  - motion: motion.card.hover-lift
- testimonials -> TestimonialRail
  - behavior: swipe, arrow nav, keyboard roving tab index
  - parity: swipe and button parity
  - motion: motion.section.reveal.stagger
- auth forms -> AuthFormCard
  - behavior: field validation, submit, error recovery, success redirect
  - parity: keyboard primary, touch complete
  - motion: motion.input.focus-ring

## Dynamic UX Patterns Activated
- Filterable CMS listing
- URL-synced filters for blog and portfolio
- Instant calculator workflow with progressive disclosure
- AI chat modal with streaming answer placeholder and citation chips
- Auth gateway surfaces with protected route handoff
- Mobile app-like dock and action rail
- Empty state and recovery affordances
- Undo/retry for calculator submission and chat send

## Form Interaction Contract
- Validation schema: zod on client and contract parity on API boundaries.
- States: pristine, dirty, validating, submitting, success, validation_error, server_error, offline_error.
- Recovery: inline correction + retry action + preserved user input.
