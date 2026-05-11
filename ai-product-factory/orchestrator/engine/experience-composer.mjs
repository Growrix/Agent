function section(sectionId, purpose, contentSlots) {
  return { sectionId, purpose, contentSlots };
}

function pageBrief(routeId, title, heroVariant, primaryGoal, sectionIds) {
  return {
    routeId,
    title,
    heroVariant,
    primaryGoal,
    mandatoryUx: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'],
    sectionIds,
    openQuestions: []
  };
}

export function composeExperiencePlan({ brief, analysis, designTokens, sectionCatalog, primitivesCatalog, motionTokens }) {
  const supportsServiceMessaging = /solar|roof|electrical|service|installation/i.test(
    `${brief.summary ?? ''} ${(brief.requestedFeatures ?? []).join(' ')}`
  );
  const primaryContactEmail = brief.contactEmail ?? 'hello@example.com';
  const supportEmail = primaryContactEmail.replace(/^hello@/i, 'support@');
  const primaryPhone = brief.contactPhone ?? '+1 (800) 555-1234';
  const whatsAppLink = brief.whatsAppLink ?? 'https://wa.me/18005551234';
  const primaryCtaRoute = '/pricing';

  const routePlans = [
    {
      routeId: '/',
      userIntent: 'Understand product value quickly and move toward conversion.',
      creativeLatitude: 'MEDIUM',
      sectionSequence: [
        section('hero', 'Value proposition and fast orientation', ['eyebrow', 'headline', 'body', 'primaryCta', 'secondaryCta', 'stats']),
        section('trust-strip', 'Immediate trust and proof', ['logos', 'proofStatement']),
        section('feature-grid', 'Explain core capabilities', ['cards']),
        section('workflow', 'Show the operating model', ['steps']),
        section('proof', 'Reinforce credibility', ['outcomes', 'quote']),
        section('faq', 'Resolve objections', ['items']),
        section('cta-band', 'Close the conversion loop', ['headline', 'body', 'primaryCta']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Single-column stack with fixed bottom navigation and compressed trust strip.',
        desktop: 'Two-column hero with editorial card rail and centered proof bands.'
      }
    },
    {
      routeId: '/product',
      userIntent: 'Inspect product depth, UX states, and the system operating model.',
      creativeLatitude: 'LOW',
      sectionSequence: [
        section('hero', 'Position the product internals clearly', ['eyebrow', 'headline', 'body', 'primaryCta']),
        section('feature-grid', 'Break product into capability pillars', ['cards']),
        section('workflow', 'Show state-aware operational flow', ['steps', 'statePanel']),
        section('proof', 'Back product claims with outcomes', ['outcomes', 'quote']),
        section('cta-band', 'Convert technical confidence into action', ['headline', 'primaryCta']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Collapse pillars into cards with state panel stacked after workflow.',
        desktop: 'Editorial grid with persistent state panel and content rail.'
      }
    },
    {
      routeId: '/pricing',
      userIntent: 'Evaluate plans, compare trade-offs, and start a buying conversation.',
      creativeLatitude: 'LOW',
      sectionSequence: [
        section('hero', 'Frame commercial value and urgency', ['eyebrow', 'headline', 'body', 'primaryCta']),
        section('comparison', 'Compare plans and included outcomes', ['plans']),
        section('proof', 'Reduce commercial risk with proof', ['outcomes']),
        section('faq', 'Answer commercial objections', ['items']),
        section('cta-band', 'Push to demo or contact', ['headline', 'primaryCta']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Scrollable pricing cards with sticky CTA.',
        desktop: 'Three-column pricing matrix with anchored proof bar.'
      }
    },
    {
      routeId: '/contact',
      userIntent: 'Reach support or sales with minimal friction.',
      creativeLatitude: 'LOW',
      sectionSequence: [
        section('hero', 'Give contact clarity and service expectations', ['eyebrow', 'headline', 'body']),
        section('trust-strip', 'Set service standards', ['supportWindow', 'sla']),
        section('workflow', 'Clarify how outreach is handled', ['steps']),
        section('cta-band', 'Offer direct and assisted contact paths', ['headline', 'primaryCta']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Contact channels as cards above the form.',
        desktop: 'Split layout with channel rail and inquiry form.'
      }
    },
    {
      routeId: '/sign-in',
      userIntent: 'Reach the authenticated product quickly with fallback route certainty.',
      creativeLatitude: 'LOW',
      sectionSequence: [
        section('hero', 'Set expectation for authenticated access', ['headline', 'body', 'form']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Centered auth card with trust copy below.',
        desktop: 'Centered auth card with supporting benefits panel.'
      }
    },
    {
      routeId: '/sign-up',
      userIntent: 'Create an account from a direct fallback route.',
      creativeLatitude: 'LOW',
      sectionSequence: [
        section('hero', 'Drive account creation with clear commitments', ['headline', 'body', 'form']),
        section('footer', 'Navigation and support', ['links', 'contact'])
      ],
      responsiveStrategy: {
        mobile: 'Single auth card with short benefit list.',
        desktop: 'Centered auth card with compact benefits rail.'
      }
    }
  ];

  const visualDifferentiationMap = [
    { routeId: '/', heroVariant: 'signal-horizon', mood: 'confident editorial', density: 'comfortable' },
    { routeId: '/product', heroVariant: 'workflow-theater', mood: 'architectural clarity', density: 'balanced' },
    { routeId: '/pricing', heroVariant: 'conversion-ledger', mood: 'commercial precision', density: 'balanced' },
    { routeId: '/contact', heroVariant: 'support-atlas', mood: 'calm assistance', density: 'comfortable' },
    { routeId: '/sign-in', heroVariant: 'auth-portal', mood: 'focused entry', density: 'compact' },
    { routeId: '/sign-up', heroVariant: 'account-launch', mood: 'optimistic onboarding', density: 'compact' }
  ];

  const pageBriefs = [
    pageBrief('/', 'Home', 'signal-horizon', 'Explain the product and drive demo conversion.', ['hero', 'trust-strip', 'feature-grid', 'workflow', 'proof', 'faq', 'cta-band']),
    pageBrief('/product', 'Product', 'workflow-theater', 'Prove the product can handle real operational states.', ['hero', 'feature-grid', 'workflow', 'proof', 'cta-band']),
    pageBrief('/pricing', 'Pricing', 'conversion-ledger', 'Turn interest into a commercial conversation.', ['hero', 'comparison', 'proof', 'faq', 'cta-band']),
    pageBrief('/contact', 'Contact', 'support-atlas', 'Give fast support and sales contact paths.', ['hero', 'trust-strip', 'workflow', 'cta-band']),
    pageBrief('/sign-in', 'Sign In', 'auth-portal', 'Provide a dependable fallback auth route.', ['hero']),
    pageBrief('/sign-up', 'Sign Up', 'account-launch', 'Provide a dependable fallback account creation route.', ['hero'])
  ];

  const siteInventory = {
    projectName: brief.projectName,
    projectSlug: analysis.brief.projectSlug,
    routes: routePlans.map((plan) => ({
      routeId: plan.routeId,
      intent: plan.userIntent,
      sections: plan.sectionSequence.map((entry) => entry.sectionId)
    })),
    navigation: [
      { path: '/', label: 'Home' },
      { path: '/product', label: 'Product' },
      { path: '/pricing', label: 'Pricing' },
      { path: '/contact', label: 'Contact' }
    ]
  };

  const contentLibrary = {
    brand: {
      name: brief.projectName,
      summary: brief.summary,
      supportEmail: brief.contactEmail,
      primaryCta: brief.primaryCta,
      secondaryCta: brief.secondaryCta,
      primaryCtaRoute,
      supportEmail,
      phoneLabel: primaryPhone,
      phoneHref: `tel:${primaryPhone.replace(/[^+\d]/g, '')}`,
      whatsAppHref: whatsAppLink,
      hasServiceMessaging: supportsServiceMessaging
    },
    home: {
      hero: {
        eyebrow: supportsServiceMessaging ? 'Trusted local team, production-grade delivery' : 'AI product operations, framed for trust',
        title: supportsServiceMessaging
          ? `${brief.projectName} helps buyers move from first inquiry to signed work without conversion friction.`
          : `${brief.projectName} turns scattered AI signals into one accountable operating system.`,
        description: brief.summary,
        primaryCta: brief.primaryCta,
        secondaryCta: brief.secondaryCta,
        primaryHref: primaryCtaRoute,
        secondaryHref: whatsAppLink,
        media: {
          src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1360&q=80',
          alt: supportsServiceMessaging
            ? 'Solar panels installed on a residential rooftop under clear sky'
            : 'Professional team reviewing implementation plans and delivery metrics',
          badge: supportsServiceMessaging ? 'Field-ready execution' : 'Release-ready delivery'
        },
        stats: brief.highlightMetrics ?? [
          { value: '22', label: 'live signal streams unified' },
          { value: '2.7x', label: 'faster triage response' },
          { value: '11 days', label: 'from brief to release-ready frontend' }
        ]
      },
      trust: {
        proofStatement: supportsServiceMessaging
          ? 'Built for trust-first buying decisions: clear service scope, direct contact channels, and transparent turnaround expectations.'
          : 'Built for teams that need product clarity, auditability, and fast conversion without speculative redesign loops.',
        logos: supportsServiceMessaging
          ? ['Certified Team', 'Insured Projects', 'Financing Support', 'Local Response']
          : ['Northbank Ventures', 'RelayOps', 'Atlas AI', 'Signal Forge']
      },
      features: [
        {
          title: supportsServiceMessaging ? 'Lead path clarity' : 'Brief-to-build continuity',
          body: supportsServiceMessaging
            ? 'Visitors can request a quote, start a WhatsApp chat, or call directly without hunting through pages.'
            : 'Every route, section, and test surface comes from a locked planning bundle instead of freestyle generation.'
        },
        {
          title: supportsServiceMessaging ? 'Trust-first structure' : 'Conversion without guesswork',
          body: supportsServiceMessaging
            ? 'Service proof, process timeline, and objection-handling FAQs are placed where buyers expect them.'
            : 'Home, product, pricing, and contact journeys are planned with distinct intents and explicit CTA paths.'
        },
        {
          title: supportsServiceMessaging ? 'Production-shaped validation' : 'Production-shaped validation',
          body: 'The generated app ships with lint, typecheck, unit, accessibility, smoke, and full E2E gates.'
        }
      ],
      workflow: [
        'Lock the brief and define the route inventory.',
        'Compose the design system and per-page briefs.',
        'Generate the Next.js app with route-aware components.',
        'Run accessibility, smoke, full E2E, and audit gates before release.'
      ],
      proof: {
        quote: 'We stopped debating what the site should be and started shipping audited iterations.',
        speaker: 'Mina Chow, VP Product',
        outcomes: ['Distinct route narratives with no shared-wrapper collapse', 'Theme persistence across refreshes', 'Modal and fallback auth paths both covered']
      },
      faq: [
        {
          question: 'Is this a template generator?',
          answer: 'No. The factory builds from a locked planning bundle and keeps route, content, and test coverage aligned.'
        },
        {
          question: 'Can the generated app be validated locally?',
          answer: 'Yes. Every output includes a deterministic release gate with unit, accessibility, smoke, full E2E, build, and audit steps.'
        },
        {
          question: 'What happens when a narrow gate fails?',
          answer: 'The owning slice is fixed and the same gate is rerun before widening scope.'
        }
      ],
      cta: {
        title: 'Move from product brief to audited frontend without improvising the risky parts.',
        body: 'Start from a locked brief, inspect the generated planning bundle, and run the release gate before shipping.',
        primaryCta: brief.primaryCta
      }
    },
    product: {
      hero: {
        eyebrow: supportsServiceMessaging ? 'Service scope and delivery model' : 'Product depth',
        title: supportsServiceMessaging
          ? 'A route-aware services page that proves this is a real website system, not a placeholder shell.'
          : 'A route-aware product page that proves the factory handles more than glossy marketing copy.',
        description: supportsServiceMessaging
          ? 'The services route focuses on capability pillars, process visibility, and operational readiness for real buyers.'
          : 'The product route focuses on capability pillars, runtime state coverage, and the operating model behind the generated frontend.',
        primaryCta: supportsServiceMessaging ? 'Review packages' : 'Review pricing',
        primaryHref: '/pricing',
        media: {
          src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1360&q=80',
          alt: supportsServiceMessaging
            ? 'Installation team reviewing equipment and project plan'
            : 'Operations team validating system performance dashboards',
          badge: supportsServiceMessaging ? 'Scope certainty' : 'State-ready UX'
        }
      },
      pillars: [
        {
          title: supportsServiceMessaging ? 'Service route differentiation' : 'Route-aware composition',
          body: supportsServiceMessaging
            ? 'Each services-oriented route keeps its own narrative, hero treatment, and conversion objective.'
            : 'Each public route keeps its own hero variant, section pacing, and conversion intent.'
        },
        {
          title: supportsServiceMessaging ? 'Buyer-state readiness' : 'Dynamic state readiness',
          body: supportsServiceMessaging
            ? 'Uncertain buyers get financing clarity, comparison cues, and direct human assistance paths.'
            : 'Loading, error, empty, offline, and live states are declared and testable.'
        },
        {
          title: supportsServiceMessaging ? 'Operational UX coverage' : 'Operational UX coverage',
          body: 'Theme, navigation, auth entry, and contact support are treated as mandatory infrastructure, not optional polish.'
        }
      ],
      workflow: [
        'Model the key operational state.',
        'Map a UI surface for that state.',
        'Exercise it in the full E2E suite.',
        'Promote only when the production gate stays green.'
      ],
      states: [
        { id: 'live', title: 'Live signal sync', description: 'All upstream signals are healthy and routing correctly.' },
        { id: 'loading', title: 'Awaiting source handoff', description: 'The UI communicates progress without layout collapse.' },
        { id: 'error', title: 'Source adapter mismatch', description: 'A blocking issue is surfaced with the next safe action.' },
        { id: 'empty', title: 'No signal yet', description: 'The page explains how to seed the system rather than showing a void.' },
        { id: 'offline', title: 'Offline continuity', description: 'Critical guidance stays readable when connectivity drops.' }
      ],
      proof: {
        quote: 'The product page is where shallow generators break. This one stays honest about runtime states.',
        speaker: 'Adrian Voss, Staff Engineer',
        outcomes: ['Declared dynamic states', 'Testable fallback paths', 'No hidden state assumptions']
      },
      cta: {
        title: 'Inspect the commercial path once you trust the product path.',
        primaryCta: 'See plans'
      }
    },
    pricing: {
      hero: {
        eyebrow: supportsServiceMessaging ? 'Pricing and packages' : 'Commercial clarity',
        title: supportsServiceMessaging
          ? 'Package options that move buyers from comparison to decision without hidden trade-offs.'
          : 'Pricing that translates technical confidence into a buying decision.',
        description: supportsServiceMessaging
          ? 'The conversion route keeps package comparison concise, transparent, and connected to direct contact.'
          : 'The conversion route keeps the comparison surface short, differentiated, and easy to reach from home.',
        primaryCta: supportsServiceMessaging ? 'Request quote' : 'Book a strategy call',
        primaryHref: '/contact',
        media: {
          src: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1360&q=80',
          alt: supportsServiceMessaging
            ? 'Estimator reviewing energy and financing figures'
            : 'Team discussing commercial plan options',
          badge: 'Conversion focus'
        }
      },
      plans: [
        {
          name: 'Starter',
          price: '$1.5k',
          cadence: '/month',
          summary: 'For teams validating one product narrative.',
          features: ['One locked brief stream', 'One generated frontend', 'Local release gate']
        },
        {
          name: 'Growth',
          price: '$4k',
          cadence: '/month',
          summary: 'For teams iterating across multiple conversion paths.',
          features: ['Three parallel briefs', 'Spec-aligned route coverage', 'Design-system adaptation']
        },
        {
          name: 'Scale',
          price: 'Custom',
          cadence: '',
          summary: 'For teams productizing the factory itself.',
          features: ['Custom validators', 'Extended route matrices', 'Operational audit support']
        }
      ],
      proof: {
        outcomes: ['Conversion route reachable in one click from home', 'No pricing copy drift against the plan', 'Self-audit report emitted after release gate']
      },
      faq: [
        {
          question: 'Can the pricing route stay unique from the home route?',
          answer: 'Yes. The visual differentiation map locks a distinct hero variant and route intent.'
        },
        {
          question: 'What proves the route is production ready?',
          answer: 'The generated app must pass typecheck, accessibility smoke, Playwright coverage, build, and frontend audit.'
        }
      ],
      cta: {
        title: 'Want the generated app reviewed with your real brief next?',
        primaryCta: 'Contact sales'
      }
    },
    contact: {
      hero: {
        eyebrow: supportsServiceMessaging ? 'Call, chat, or submit request' : 'Support and sales',
        title: supportsServiceMessaging
          ? 'Reach the right team immediately through phone, WhatsApp, or structured request form.'
          : 'Reach the right team without bouncing between dead-end routes.',
        description: supportsServiceMessaging
          ? 'The contact route is designed as a primary conversion surface, not an afterthought.'
          : 'The support route is built as a first-class page, not an afterthought buried in the footer.',
        primaryCta: supportsServiceMessaging ? 'Call now' : 'Email support',
        primaryHref: supportsServiceMessaging ? `tel:${primaryPhone.replace(/[^+\\d]/g, '')}` : `mailto:${primaryContactEmail}`,
        secondaryCta: supportsServiceMessaging ? 'Chat on WhatsApp' : undefined,
        secondaryHref: supportsServiceMessaging ? whatsAppLink : undefined,
        media: {
          src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1360&q=80',
          alt: supportsServiceMessaging
            ? 'Customer support advisor helping a client'
            : 'Support specialist answering onboarding questions',
          badge: 'Fast response'
        }
      },
      channels: [
        {
          title: supportsServiceMessaging ? 'Direct advisor line' : 'Sales architecture review',
          detail: supportsServiceMessaging
            ? 'Talk directly with the project team for scope and timeline guidance.'
            : 'Walk through route coverage, design tokens, and validation expectations.',
          action: brief.contactEmail
        },
        {
          title: supportsServiceMessaging ? 'WhatsApp support' : 'Implementation support',
          detail: supportsServiceMessaging
            ? 'Use WhatsApp for quick pre-qualification and response routing.'
            : 'Review release gate failures and fix the owning slice directly.',
          action: supportsServiceMessaging ? whatsAppLink : supportEmail
        },
        {
          title: supportsServiceMessaging ? 'Callback request' : 'Executive briefing',
          detail: supportsServiceMessaging
            ? 'Share your basic requirements and request a scheduled callback.'
            : 'Translate the planning bundle into delivery milestones and quality gates.',
          action: supportsServiceMessaging ? primaryPhone : `leaders@${primaryContactEmail.split('@')[1] ?? 'example.com'}`
        }
      ],
      workflow: [
        'Choose the most relevant contact lane.',
        'Share the locked brief or failing gate.',
        'Receive a route-aware response with next actions.'
      ],
      supportWindow: 'Responses within one business day for active projects.',
      sla: 'Critical release-gate blockers are triaged the same day.'
    },
    auth: {
      signIn: {
        title: 'Sign in to the demo workspace',
        description: 'Use the modal first if you are browsing. This page is the deterministic fallback route.'
      },
      signUp: {
        title: 'Create a demo workspace',
        description: 'The modal and direct route stay aligned so sign-up is never blocked by client-side UI state.'
      }
    },
    footer: {
      attribution: 'Generated by the standalone AI Product Factory MVP.',
      links: ['Home', 'Product', 'Pricing', 'Contact'],
      columns: {
        services: ['Core Services', 'Process', 'Proof', 'FAQs'],
        resources: ['Case Notes', 'Pricing Guide', 'Delivery FAQs', 'Contact'],
        contact: [primaryContactEmail, primaryPhone, whatsAppLink]
      }
    }
  };

  const componentSystem = {
    primitives: primitivesCatalog,
    sectionCatalog: sectionCatalog.sections,
    criticalComponents: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal', 'LiveStatusPanel'],
    dynamicSurfaces: ['auth-modal', 'theme-switcher', 'live-status-panel'],
    accessibilityFocus: ['semantic headings', 'aria labels', 'focus-visible states', 'dialog semantics']
  };

  const motionSystem = {
    tokens: motionTokens,
    direction: designTokens.motion.personality,
    reducedMotion: designTokens.motion.reducedMotionBehavior,
    choreography: ['hero fade-up', 'card stagger on safe motion', 'theme toggle micro feedback']
  };

  const frontendSummary = {
    publicRoutes: ['/', '/product', '/pricing', '/contact'],
    authRoutes: ['/sign-in', '/sign-up'],
    routeCoverage: routePlans.map((plan) => ({
      routeId: plan.routeId,
      covered: true,
      heroVariant: visualDifferentiationMap.find((entry) => entry.routeId === plan.routeId)?.heroVariant
    })),
    openQuestions: [],
    mandatoryUx: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'],
    smokeJourneys: [
      'home route renders without console or hydration errors',
      'primary navigation works on desktop and mobile',
      'ThemeSwitcher changes theme and persists preference',
      'MobileBottomNav renders on mobile breakpoints and routes correctly',
      'AuthModal opens, switches mode, closes, and fallback auth routes resolve',
      'primary conversion surface is reachable in two interactions or less from home',
      'one content route, one conversion route, and one contact/support route all resolve with 200-equivalent app responses'
    ]
  };

  return {
    siteInventory,
    masterUiArchitecture: {
      framework: analysis.frontendArchitecture.framework,
      rendering: analysis.frontendArchitecture.rendering,
      mandatoryUx: analysis.frontendArchitecture.mandatoryUx,
      folderStrategy: analysis.frontendArchitecture.folders,
      designDirection: designTokens.narrative,
      responsivePrinciple: 'Mobile-first with persistent utility access and distinct page pacing.'
    },
    routePlans,
    visualDifferentiationMap,
    pageBriefs,
    contentLibrary,
    componentSystem,
    motionSystem,
    frontendSummary
  };
}
