function section(sectionId, purpose, contentSlots, archetypeId) {
  return { sectionId, purpose, contentSlots, archetypeId };
}

function pageBrief(routeId, title, heroVariant, primaryGoal, sectionIds, sectionArchetypes) {
  return {
    routeId,
    title,
    heroVariant,
    primaryGoal,
    mandatoryUx: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'],
    sectionIds,
    sectionArchetypes,
    openQuestions: []
  };
}

function toRouteId(routePath) {
  if (routePath === '/') {
    return 'home';
  }

  return routePath.replace(/^\//, '').replace(/\//g, '-');
}

function toRouteLabel(routePath) {
  if (routePath === '/') {
    return 'Home';
  }

  return routePath
    .replace(/^\//, '')
    .split('/')
    .map((part) => part.replace(/-/g, ' '))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function hashSeed(input) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickBySeed(candidates, seed) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return null;
  }

  return candidates[seed % candidates.length];
}

function routeIntent(routePath, productType) {
  const map = {
    '/': 'Understand the core offer quickly and move to a qualified conversion path.',
    '/product': 'Inspect depth and operational capability with confidence.',
    '/pricing': 'Evaluate trade-offs and choose a conversion lane.',
    '/contact': 'Reach support or sales with minimum friction.',
    '/sign-in': 'Use fallback sign-in flow when modal auth is not used.',
    '/sign-up': 'Use fallback sign-up flow when modal auth is not used.'
  };

  if (map[routePath]) {
    return map[routePath];
  }

  if (productType === 'marketing') {
    return 'Learn this offer and move toward a contact or quote action.';
  }

  return 'Explore this route and move to the next validated conversion step.';
}

function routePrimaryGoal(routePath, projectName) {
  const map = {
    '/': `Explain ${projectName} clearly and drive primary CTA action.`,
    '/product': 'Prove the system handles real operational scenarios.',
    '/pricing': 'Turn commercial curiosity into decision-ready intent.',
    '/contact': 'Provide direct communication paths and response expectations.',
    '/sign-in': 'Provide deterministic fallback sign-in route.',
    '/sign-up': 'Provide deterministic fallback sign-up route.'
  };

  return map[routePath] ?? 'Deliver route-specific value and preserve conversion continuity.';
}

function baseSectionSequence(routePath) {
  if (routePath === '/') {
    return ['hero', 'trust-strip', 'feature-grid', 'workflow', 'proof', 'faq', 'cta-band', 'footer'];
  }

  if (routePath === '/product') {
    return ['hero', 'feature-grid', 'workflow', 'proof', 'cta-band', 'footer'];
  }

  if (routePath === '/pricing') {
    return ['hero', 'comparison', 'proof', 'faq', 'cta-band', 'footer'];
  }

  if (routePath === '/contact') {
    return ['hero', 'trust-strip', 'workflow', 'cta-band', 'footer'];
  }

  return ['hero', 'footer'];
}

function randomFromBucket(bucket, key, fallback) {
  if (!Array.isArray(bucket) || bucket.length === 0) {
    return fallback;
  }

  return pickBySeed(bucket, hashSeed(key)) ?? fallback;
}

function heroCandidates({ brief, analysis, experienceLibrary }) {
  const allArchetypes = experienceLibrary?.heroArchetypes ?? [];
  const productType = analysis.productType ?? 'saas';

  const filtered = allArchetypes.filter((entry) => {
    if (!Array.isArray(entry.industry) || entry.industry.length === 0) {
      return true;
    }

    if (entry.industry.includes(productType)) {
      return true;
    }

    const summary = `${brief.summary ?? ''} ${(brief.requestedFeatures ?? []).join(' ')}`.toLowerCase();
    return entry.industry.some((token) => summary.includes(String(token).toLowerCase()));
  });

  return filtered.length > 0 ? filtered : allArchetypes;
}

function assignHeroArchetypes({ routes, brief, analysis, experienceLibrary }) {
  const candidates = heroCandidates({ brief, analysis, experienceLibrary });
  const fallback = { id: 'hero-editorial-split', mediaPolicy: 'optional' };

  if (candidates.length === 0) {
    return Object.fromEntries(routes.map((route) => [route, fallback]));
  }

  const used = new Set();
  const assignments = {};
  const baseSeed = hashSeed(`${analysis.brief.projectSlug}:${routes.join('|')}`);

  routes.forEach((routePath, index) => {
    let selected = candidates[(baseSeed + index * 7) % candidates.length];
    let attempts = 0;

    while (used.has(selected.id) && attempts < candidates.length) {
      attempts += 1;
      selected = candidates[(baseSeed + index * 7 + attempts) % candidates.length];
    }

    assignments[routePath] = selected;
    used.add(selected.id);
  });

  return assignments;
}

function pickHeroArchetype({ routePath, heroAssignments }) {
  const selected = heroAssignments?.[routePath];

  return selected ?? {
    id: 'hero-editorial-split',
    mediaPolicy: 'optional'
  };
}

function sectionArchetypesForRoute({ routePath, heroArchetype, experienceLibrary, projectSlug }) {
  const buckets = experienceLibrary?.sectionArchetypes ?? {};
  const graph = experienceLibrary?.compatibilityGraph ?? {};
  const graphEntries = graph[heroArchetype.id] ?? [];

  const pull = (bucketName, fallback) => {
    const graphMatch = graphEntries.find((entry) => entry.startsWith(bucketName));
    if (graphMatch) {
      return graphMatch;
    }

    return randomFromBucket(buckets[bucketName], `${projectSlug}:${routePath}:${bucketName}`, fallback);
  };

  return {
    trust: pull('trust', 'trust-logo-cloud'),
    feature: pull('feature', 'feature-grid-classic'),
    workflow: pull('workflow', 'workflow-journey'),
    proof: pull('proof', 'proof-story-cards'),
    faq: pull('faq', 'faq-objection-stack'),
    cta: pull('cta', 'cta-single-assertive'),
    pricing: pull('pricing', 'comparison-plan-matrix'),
    footer: pull('footer', 'footer-4-column-structured')
  };
}

function mediaForRoute(routePath, heroArchetype, isServiceSite) {
  const mediaMap = {
    '/': {
      src: isServiceSite
        ? 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1360&q=80'
        : 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1360&q=80',
      alt: isServiceSite
        ? 'Solar installation team working on rooftop panels'
        : 'Team collaborating on product delivery'
    },
    '/product': {
      src: isServiceSite
        ? 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1360&q=80'
        : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1360&q=80',
      alt: isServiceSite
        ? 'Technical crew preparing service rollout'
        : 'Product operations dashboard and planning board'
    },
    '/pricing': {
      src: isServiceSite
        ? 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1360&q=80'
        : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1360&q=80',
      alt: isServiceSite
        ? 'Advisor presenting a service estimate'
        : 'Commercial planning and pricing worksheet'
    },
    '/contact': {
      src: isServiceSite
        ? 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1360&q=80'
        : 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1360&q=80',
      alt: isServiceSite
        ? 'Support specialist helping a customer'
        : 'Customer success specialist on a support call'
    }
  };

  if (heroArchetype.mediaPolicy === 'none') {
    return undefined;
  }

  const selected = mediaMap[routePath] ?? mediaMap['/'];
  return {
    ...selected,
    badge: heroArchetype.id
  };
}

function buildRoutePlan({ routePath, brief, analysis, experienceLibrary, heroAssignments }) {
  const routeId = toRouteId(routePath);
  const hero = pickHeroArchetype({ routePath, heroAssignments });
  const sectionArchetypes = sectionArchetypesForRoute({
    routePath,
    heroArchetype: hero,
    experienceLibrary,
    projectSlug: analysis.brief.projectSlug
  });

  const sequence = baseSectionSequence(routePath);
  const sectionSequence = sequence.map((sectionId) => {
    const archetypeMap = {
      'trust-strip': sectionArchetypes.trust,
      'feature-grid': sectionArchetypes.feature,
      workflow: sectionArchetypes.workflow,
      proof: sectionArchetypes.proof,
      faq: sectionArchetypes.faq,
      'cta-band': sectionArchetypes.cta,
      comparison: sectionArchetypes.pricing,
      footer: sectionArchetypes.footer,
      hero: hero.id
    };

    const purposeMap = {
      hero: 'Route opener and conversion anchor',
      'trust-strip': 'Trust and credibility reinforcement',
      'feature-grid': 'Capability and value breakdown',
      comparison: 'Trade-off and package clarity',
      workflow: 'Process and expectation setting',
      proof: 'Evidence and outcomes',
      faq: 'Objection handling',
      'cta-band': 'Conversion reinforcement',
      footer: 'Navigation and support'
    };

    const contentSlotMap = {
      hero: ['eyebrow', 'headline', 'body', 'primaryCta', 'secondaryCta', 'media', 'stats'],
      'trust-strip': ['proofStatement', 'logos'],
      'feature-grid': ['cards'],
      comparison: ['plans'],
      workflow: ['steps'],
      proof: ['outcomes', 'quote'],
      faq: ['items'],
      'cta-band': ['headline', 'body', 'primaryCta'],
      footer: ['links', 'contact', 'resources']
    };

    return section(sectionId, purposeMap[sectionId] ?? 'Route section', contentSlotMap[sectionId] ?? [], archetypeMap[sectionId]);
  });

  return {
    routeId: routePath,
    routeKey: routeId,
    userIntent: routeIntent(routePath, analysis.productType),
    creativeLatitude: routePath === '/' ? 'MEDIUM' : 'LOW',
    heroArchetype: hero.id,
    sectionArchetypes,
    sectionSequence,
    responsiveStrategy: {
      mobile: 'Single-column stack with persistent utility access and conversion visibility.',
      desktop: 'Route-specific composition density with preserved hierarchy and conversion pacing.'
    },
    media: mediaForRoute(
      routePath,
      hero,
      /solar|roof|service|installation|electrical/i.test(`${brief.summary ?? ''} ${(brief.requestedFeatures ?? []).join(' ')}`)
    )
  };
}

function contentByRoute(routePlans, brief, analysis) {
  const serviceSite = /solar|roof|service|installation|electrical/i.test(
    `${brief.summary ?? ''} ${(brief.requestedFeatures ?? []).join(' ')}`
  );

  const contactEmail = brief.contactEmail ?? 'hello@example.com';
  const supportEmail = contactEmail.replace(/^hello@/i, 'support@');
  const phoneLabel = brief.contactPhone ?? '+1 (800) 555-1234';
  const phoneHref = `tel:${phoneLabel.replace(/[^+\d]/g, '')}`;
  const whatsAppHref = brief.whatsAppLink ?? 'https://wa.me/18005551234';

  const byPath = Object.fromEntries(routePlans.map((routePlan) => [routePlan.routeId, routePlan]));

  return {
    brand: {
      name: brief.projectName,
      summary: brief.summary,
      supportEmail,
      primaryCta: brief.primaryCta,
      secondaryCta: brief.secondaryCta,
      primaryCtaRoute: '/pricing',
      phoneLabel,
      phoneHref,
      whatsAppHref,
      productType: analysis.productType
    },
    home: {
      hero: {
        eyebrow: serviceSite ? 'Trusted local delivery' : 'Route-aware execution system',
        title: serviceSite
          ? `${brief.projectName} helps buyers move from first inquiry to installation confidence.`
          : `${brief.projectName} turns locked plans into conversion-ready product surfaces.`,
        description: brief.summary,
        primaryCta: brief.primaryCta,
        primaryHref: '/pricing',
        secondaryCta: brief.secondaryCta,
        secondaryHref: whatsAppHref,
        media: byPath['/']?.media,
        stats: brief.highlightMetrics ?? [
          { value: '22', label: 'live signal streams unified' },
          { value: '2.7x', label: 'faster triage response' },
          { value: '11 days', label: 'brief to release-ready frontend' }
        ]
      },
      trust: {
        proofStatement: serviceSite
          ? 'Built for trust-first buying decisions with clear process and direct communication.'
          : 'Built for teams that need architectural clarity and deterministic delivery gates.',
        logos: serviceSite
          ? ['Licensed Team', 'Insured Work', 'Fast Response', 'Warranty Support']
          : ['Northbank Ventures', 'RelayOps', 'Atlas AI', 'Signal Forge']
      },
      features: [
        {
          title: 'Composition, not copy-paste templates',
          body: 'Every route gets its own archetype mix selected from a compatibility graph.'
        },
        {
          title: 'Deterministic variation',
          body: 'The same brief always yields stable results; different briefs yield visibly different surfaces.'
        },
        {
          title: 'Production gates included',
          body: 'Generated apps ship with lint, typecheck, accessibility, smoke, full E2E, and audit checks.'
        }
      ],
      workflow: [
        'Lock the brief and route inventory.',
        'Compose archetypes with compatibility constraints.',
        'Generate route-aware code and content contracts.',
        'Validate the app with deterministic release checks.'
      ],
      proof: {
        quote: 'We replaced repetitive layouts with constrained variation that still stays stable in production.',
        speaker: 'Factory V2 preview',
        outcomes: ['Distinct route narratives', 'CTA overload prevention', 'Structured footer and contact depth']
      },
      faq: [
        {
          question: 'Does every site now look the same?',
          answer: 'No. Archetype selection and compatibility mapping prevent single-layout collapse.'
        },
        {
          question: 'Is this freeform random generation?',
          answer: 'No. It is constrained composition with deterministic selection and validation.'
        },
        {
          question: 'Can we scale this across industries?',
          answer: 'Yes. Industry-aware archetypes are selected per brief and route context.'
        }
      ],
      cta: {
        title: 'Move from locked brief to production-shaped frontend without layout collapse.',
        body: 'Use route-aware archetypes, compatibility checks, and deterministic gates.',
        primaryCta: brief.primaryCta
      }
    },
    product: {
      hero: {
        eyebrow: serviceSite ? 'Service scope and delivery model' : 'Product depth',
        title: serviceSite
          ? 'A route-aware services surface that balances trust, clarity, and conversion.'
          : 'A route-aware product page that proves depth beyond hero copy.',
        description: 'This route focuses on capability pillars, runtime readiness, and proof-backed outcomes.',
        primaryCta: serviceSite ? 'Review packages' : 'Review pricing',
        primaryHref: '/pricing',
        media: byPath['/product']?.media
      },
      pillars: [
        { title: 'Archetype-driven composition', body: 'Hero, feature, proof, and CTA units are selected from the library with compatibility checks.' },
        { title: 'State-aware confidence', body: 'Loading, error, empty, offline, and live surfaces stay explicit and testable.' },
        { title: 'Operational UX coverage', body: 'Theme, navigation, auth, and contact systems are treated as baseline infrastructure.' }
      ],
      workflow: [
        'Select route archetypes from compatibility graph.',
        'Map section pacing and conversion hierarchy.',
        'Generate implementation and run deterministic tests.',
        'Promote only when audit and release gates pass.'
      ],
      states: [
        { id: 'live', title: 'Live signal sync', description: 'All source adapters are healthy.' },
        { id: 'loading', title: 'Awaiting source handoff', description: 'System is still preparing data.' },
        { id: 'error', title: 'Source adapter mismatch', description: 'A blocking integration issue is visible with a clear next action.' },
        { id: 'empty', title: 'No signal yet', description: 'The route explains how to seed the pipeline.' },
        { id: 'offline', title: 'Offline continuity', description: 'Critical route guidance stays readable when disconnected.' }
      ],
      proof: {
        quote: 'Variation is now intentional and bounded by quality constraints.',
        speaker: 'Factory V2 preview',
        outcomes: ['Route-specific hero behavior', 'Stable fallback states', 'No global wrapper collapse']
      },
      cta: {
        title: 'Inspect the commercial lane once capability confidence is established.',
        primaryCta: 'See plans'
      }
    },
    pricing: {
      hero: {
        eyebrow: serviceSite ? 'Pricing and packages' : 'Commercial clarity',
        title: serviceSite
          ? 'Package options that turn comparison into a clear decision.'
          : 'Commercial structure that supports decision quality.',
        description: 'This route keeps pricing decisions short, differentiated, and reachable from home.',
        primaryCta: serviceSite ? 'Request quote' : 'Book strategy call',
        primaryHref: '/contact',
        media: byPath['/pricing']?.media
      },
      plans: [
        { name: 'Starter', price: '$1.5k', cadence: '/month', summary: 'Validate one conversion narrative.', features: ['Single brief stream', 'One generated app', 'Local release gate'] },
        { name: 'Growth', price: '$4k', cadence: '/month', summary: 'Iterate multiple conversion lanes.', features: ['Parallel brief streams', 'Route differentiation', 'Deeper section coverage'] },
        { name: 'Scale', price: 'Custom', cadence: '', summary: 'Productize factory workflows.', features: ['Custom validators', 'Knowledge graph extensions', 'Operational audit support'] }
      ],
      proof: {
        outcomes: ['Distinct pricing route from home', 'No CTA ambiguity', 'Audit evidence emitted per run']
      },
      faq: [
        { question: 'Can pricing stay visually unique per project?', answer: 'Yes. Pricing route uses selected archetypes rather than a fixed template.' },
        { question: 'What proves release readiness?', answer: 'Generated app must pass lint, typecheck, test, build, E2E, and audit gates.' }
      ],
      cta: {
        title: 'Ready to turn this into a real brief-backed rollout?',
        primaryCta: 'Contact sales'
      }
    },
    contact: {
      hero: {
        eyebrow: serviceSite ? 'Call, chat, or request callback' : 'Support and sales',
        title: serviceSite
          ? 'Reach the right team immediately through phone, chat, or structured request.'
          : 'Reach the right team without dead-end routes.',
        description: 'Contact is treated as a first-class conversion path with explicit response expectations.',
        primaryCta: serviceSite ? 'Call now' : 'Email support',
        primaryHref: serviceSite ? phoneHref : `mailto:${contactEmail}`,
        secondaryCta: 'Chat on WhatsApp',
        secondaryHref: whatsAppHref,
        media: byPath['/contact']?.media
      },
      channels: [
        { title: 'Direct advisor line', detail: 'Speak with a specialist about scope and delivery timing.', action: phoneLabel },
        { title: 'WhatsApp support', detail: 'Use chat for quick qualification and routing.', action: whatsAppHref },
        { title: 'Email response lane', detail: 'Share requirement details and receive structured follow-up.', action: contactEmail }
      ],
      workflow: ['Choose a channel', 'Share brief or blockers', 'Receive route-aware next actions'],
      supportWindow: 'Responses within one business day for active projects.',
      sla: 'Critical release blockers are triaged the same day.'
    },
    auth: {
      signIn: {
        title: 'Sign in to the demo workspace',
        description: 'Modal-first auth remains primary; this route is deterministic fallback.'
      },
      signUp: {
        title: 'Create a demo workspace',
        description: 'Fallback route remains in sync with modal auth flow.'
      }
    },
    footer: {
      attribution: 'Generated by AI Product Factory with archetype-driven composition and deterministic quality gates.',
      links: routePlans.filter((plan) => !plan.routeId.startsWith('/sign-')).map((plan) => toRouteLabel(plan.routeId)),
      columns: {
        services: ['Core Services', 'Process', 'Proof', 'FAQs'],
        resources: ['Case Notes', 'Pricing Guide', 'Delivery FAQs', 'Contact'],
        contact: [contactEmail, phoneLabel, whatsAppHref]
      }
    }
  };
}

export function composeExperiencePlan({ brief, analysis, designTokens, sectionCatalog, primitivesCatalog, motionTokens, experienceLibrary }) {
  const routes = Array.isArray(analysis.routes) && analysis.routes.length > 0
    ? analysis.routes
    : ['/', '/product', '/pricing', '/contact', '/sign-in', '/sign-up'];

  const heroAssignments = assignHeroArchetypes({
    routes,
    brief,
    analysis,
    experienceLibrary
  });

  const routePlans = routes.map((routePath) =>
    buildRoutePlan({ routePath, brief, analysis, experienceLibrary, heroAssignments })
  );

  const visualDifferentiationMap = routePlans.map((plan) => ({
    routeId: plan.routeId,
    heroVariant: plan.heroArchetype,
    mood: plan.creativeLatitude === 'MEDIUM' ? 'expressive structured' : 'focused structured',
    density: plan.creativeLatitude === 'MEDIUM' ? 'comfortable' : 'balanced'
  }));

  const pageBriefs = routePlans.map((plan) =>
    pageBrief(
      plan.routeId,
      toRouteLabel(plan.routeId),
      plan.heroArchetype,
      routePrimaryGoal(plan.routeId, brief.projectName),
      plan.sectionSequence.filter((entry) => entry.sectionId !== 'footer').map((entry) => entry.sectionId),
      plan.sectionSequence.filter((entry) => entry.sectionId !== 'footer').map((entry) => entry.archetypeId)
    )
  );

  const siteInventory = {
    projectName: brief.projectName,
    projectSlug: analysis.brief.projectSlug,
    routes: routePlans.map((plan) => ({
      routeId: plan.routeId,
      intent: plan.userIntent,
      sections: plan.sectionSequence.map((entry) => entry.sectionId),
      sectionArchetypes: plan.sectionSequence.map((entry) => entry.archetypeId)
    })),
    navigation: routePlans
      .filter((plan) => !plan.routeId.startsWith('/sign-'))
      .map((plan) => ({ path: plan.routeId, label: toRouteLabel(plan.routeId) }))
  };

  const contentLibrary = contentByRoute(routePlans, brief, analysis);

  const componentSystem = {
    primitives: primitivesCatalog,
    sectionCatalog: sectionCatalog.sections,
    criticalComponents: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal', 'LiveStatusPanel'],
    dynamicSurfaces: ['auth-modal', 'theme-switcher', 'live-status-panel'],
    accessibilityFocus: ['semantic headings', 'aria labels', 'focus-visible states', 'dialog semantics'],
    selectedArchetypes: routePlans.map((plan) => ({
      routeId: plan.routeId,
      hero: plan.heroArchetype,
      sections: plan.sectionSequence.map((entry) => entry.archetypeId)
    }))
  };

  const motionSystem = {
    tokens: motionTokens,
    direction: designTokens.motion.personality,
    reducedMotion: designTokens.motion.reducedMotionBehavior,
    choreography: ['hero reveal based on archetype', 'card stagger on safe motion', 'theme toggle micro feedback', 'cta emphasis transitions']
  };

  const frontendSummary = {
    publicRoutes: routePlans.filter((plan) => !plan.routeId.startsWith('/sign-')).map((plan) => plan.routeId),
    authRoutes: routePlans.filter((plan) => plan.routeId.startsWith('/sign-')).map((plan) => plan.routeId),
    routeCoverage: routePlans.map((plan) => ({
      routeId: plan.routeId,
      covered: true,
      heroVariant: plan.heroArchetype,
      sectionArchetypes: plan.sectionSequence.map((entry) => entry.archetypeId)
    })),
    openQuestions: [],
    mandatoryUx: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'],
    variationEvidence: {
      heroArchetypeCount: new Set(routePlans.map((plan) => plan.heroArchetype)).size,
      sectionArchetypeCount: new Set(routePlans.flatMap((plan) => plan.sectionSequence.map((entry) => entry.archetypeId))).size
    },
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
      responsivePrinciple: 'Mobile-first with persistent utility access and route-specific pacing.',
      orchestrationMode: 'archetype-composition-with-compatibility-graph'
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
