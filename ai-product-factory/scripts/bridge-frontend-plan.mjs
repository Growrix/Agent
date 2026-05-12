import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const factoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(factoryRoot, '..');

const DEFAULT_TARGET_MODE = 'standalone_factory';
const DEFAULT_FOOTER_ATTRIBUTION = {
  enabled: true,
  text: 'Built and maintenance by',
  link_text: 'Growrix OS',
  url: 'https://www.growrixos.com',
  placement: 'footer_bottom_bar',
  new_tab: true,
  aria_label: 'Built and maintenance by Growrix OS (opens in a new tab)'
};

const GLOBAL_SHARED_COMPONENTS = [
  'Header',
  'Footer',
  'MobileBottomNav',
  'ThemeSwitcher',
  'MainNav',
  'MobileMenu',
  'SocialIconRow',
  'SocialLink',
  'Container',
  'Grid',
  'Stack',
  'Cluster',
  'Divider',
  'PrimaryButton',
  'SecondaryButton',
  'OutlineButton',
  'IconButton',
  'WhatsAppButton',
  'PhoneButton',
  'FloatingActionButton'
];

const ROUTE_CLASS_MAP = {
  home: 'marketing',
  services: 'marketing',
  about: 'marketing',
  contact: 'conversion',
  financing: 'conversion',
  'free-assessment': 'conversion',
  'solar-calculator': 'conversion',
  portfolio: 'content',
  testimonials: 'content',
  blog: 'content',
  certifications: 'content',
  'case-studies': 'content',
  team: 'content',
  resources: 'content',
  news: 'content',
  faq: 'utility',
  'service-area': 'utility'
};

const ROUTE_COMPONENT_RULES = [
  { test: /(hero|headline|subheadline)/i, components: ['HeroSection'] },
  { test: /(trust|metric|installations|satisfaction|warranty)/i, components: ['TrustChip', 'TrustBadge', 'MetricCard'] },
  { test: /(service|solutions)/i, components: ['ServiceCard', 'SectionHeading'] },
  { test: /(portfolio|featured projects|project gallery)/i, components: ['PortfolioCard', 'ImageGallery', 'SectionHeading'] },
  { test: /(before\/?after|before after|slider)/i, components: ['BeforeAfterSlider', 'Lightbox'] },
  { test: /(testimonial|customer|quote|review)/i, components: ['TestimonialCard', 'Carousel', 'CarouselNav', 'RatingStars', 'RatingBadge'] },
  { test: /(blog|resource|news|article)/i, components: ['BlogCard'] },
  { test: /(team)/i, components: ['TeamCard'] },
  { test: /(case study)/i, components: ['CaseStudyCard'] },
  { test: /(faq|accordion)/i, components: ['FAQAccordion', 'AccordionItem'] },
  { test: /(contact form|multi-step|step|email address|message \(optional\)|send my information)/i, components: ['ContactForm', 'TextInput', 'TextArea', 'SelectDropdown', 'CheckboxGroup', 'RadioGroup', 'FormStepIndicator', 'FormErrorMessage', 'FormSuccessModal', 'Toast'] },
  { test: /(calculator|roi|savings estimate|range slider)/i, components: ['ROICalculator', 'RangeSlider', 'ResultsDisplay', 'FeedbackBand'] },
  { test: /(map|service area|zip code|availability)/i, components: ['ServiceAreaMap', 'ContactInfoStrip', 'GoogleBusinessCard', 'HoursDisplay'] },
  { test: /(whatsapp)/i, components: ['WhatsAppButton', 'FloatingActionButton'] },
  { test: /(phone|call)/i, components: ['PhoneButton', 'FloatingActionButton'] },
  { test: /(modal|drawer|overlay)/i, components: ['Modal', 'Drawer'] },
  { test: /(cta band|final conversion trigger|get free assessment|get free quote)/i, components: ['CTABand'] },
  { test: /(certification|warranty|bbb|nabcep)/i, components: ['CertificationBadge'] }
];

function toPosix(targetPath) {
  return targetPath.replace(/\\/g, '/');
}

function toWorkspaceRelative(targetPath) {
  return toPosix(path.relative(workspaceRoot, targetPath));
}

function normalizeInputPath(inputPath) {
  if (!inputPath) {
    return null;
  }

  return path.isAbsolute(inputPath) ? inputPath : path.resolve(factoryRoot, inputPath);
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function readText(filePath) {
  return readFile(filePath, 'utf8');
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function writeText(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, value, 'utf8');
}

function parseArgs(argv) {
  const options = {
    sourcePlanningRoot: null,
    outputPlanningRoot: null,
    targetMode: DEFAULT_TARGET_MODE,
    runId: 'planned-bridge-run'
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--source-planning-root') {
      options.sourcePlanningRoot = argv[index + 1];
      index += 1;
    } else if (argument === '--output-planning-root') {
      options.outputPlanningRoot = argv[index + 1];
      index += 1;
    } else if (argument === '--target-mode') {
      options.targetMode = argv[index + 1];
      index += 1;
    } else if (argument === '--run-id') {
      options.runId = argv[index + 1];
      index += 1;
    }
  }

  return options;
}

function routePathFromPageFile(fileName) {
  const routeId = path.basename(fileName, '.md');
  return routeId === 'home' ? '/' : `/${routeId}`;
}

function routeIdFromPageFile(fileName) {
  return path.basename(fileName, '.md');
}

function routeClassForId(routeId) {
  return ROUTE_CLASS_MAP[routeId] ?? 'marketing';
}

function safeMatch(markdown, expression, fallback = null) {
  const match = markdown.match(expression);
  return match ? match[1].trim() : fallback;
}

function pageOutputPath(appRootRelative, routePath) {
  if (routePath === '/') {
    return `${appRootRelative}/src/app/page.tsx`;
  }

  return `${appRootRelative}/src/app/${routePath.replace(/^\//, '')}/page.tsx`;
}

function componentOutputPath(appRootRelative, componentName) {
  return `${appRootRelative}/src/components/factory/${componentName}.tsx`;
}

function addComponentsIfPresent(targetSet, componentIndex, componentNames) {
  for (const componentName of componentNames) {
    if (componentIndex.has(componentName)) {
      targetSet.add(componentName);
    }
  }
}

function inferRouteComponents(routeId, markdown, componentNames) {
  const componentIndex = new Set(componentNames);
  const detected = new Set();

  addComponentsIfPresent(detected, componentIndex, GLOBAL_SHARED_COMPONENTS);

  for (const rule of ROUTE_COMPONENT_RULES) {
    if (rule.test.test(markdown) || rule.test.test(routeId)) {
      addComponentsIfPresent(detected, componentIndex, rule.components);
    }
  }

  if (routeId === 'home') {
    addComponentsIfPresent(detected, componentIndex, ['HeroSection', 'CTABand', 'PortfolioCard', 'TestimonialCard', 'BeforeAfterSlider']);
  }

  if (routeId === 'contact') {
    addComponentsIfPresent(detected, componentIndex, ['ContactForm', 'ContactInfoStrip', 'GoogleBusinessCard', 'HoursDisplay', 'ServiceAreaMap']);
  }

  if (routeId === 'solar-calculator') {
    addComponentsIfPresent(detected, componentIndex, ['ROICalculator', 'RangeSlider', 'ResultsDisplay']);
  }

  if (routeId === 'portfolio' || routeId === 'case-studies') {
    addComponentsIfPresent(detected, componentIndex, ['PortfolioCard', 'CaseStudyCard', 'ImageGallery', 'BeforeAfterSlider', 'Lightbox']);
  }

  return [...detected].sort((left, right) => left.localeCompare(right));
}

function footerAttributionFromBrief(brief) {
  const override = brief.brand?.footer_attribution ?? {};

  return {
    enabled: override.enabled ?? DEFAULT_FOOTER_ATTRIBUTION.enabled,
    text: override.text ?? DEFAULT_FOOTER_ATTRIBUTION.text,
    link_text: override.link_text ?? DEFAULT_FOOTER_ATTRIBUTION.link_text,
    url: override.url ?? DEFAULT_FOOTER_ATTRIBUTION.url,
    placement: override.placement ?? DEFAULT_FOOTER_ATTRIBUTION.placement,
    new_tab: override.new_tab ?? DEFAULT_FOOTER_ATTRIBUTION.new_tab,
    aria_label: override.aria_label ?? DEFAULT_FOOTER_ATTRIBUTION.aria_label
  };
}

function buildExcludedRoutes(brief) {
  const exclusions = [];

  if (brief.constraints?.no_auth === true) {
    exclusions.push(
      {
        path: '/sign-in',
        class: 'auth-fallback',
        reason: 'Stable LOCKED frontend bundle explicitly sets constraints.no_auth = true.'
      },
      {
        path: '/sign-up',
        class: 'auth-fallback',
        reason: 'Stable LOCKED frontend bundle explicitly sets constraints.no_auth = true.'
      },
      {
        path: 'auth-modal',
        class: 'auth-fallback',
        reason: 'Stable LOCKED frontend bundle explicitly excludes auth modal surfaces.'
      }
    );
  }

  exclusions.push(
    {
      path: '/privacy',
      class: 'legal',
      reason: 'Stable LOCKED frontend bundle does not contain a privacy page brief.'
    },
    {
      path: '/terms',
      class: 'legal',
      reason: 'Stable LOCKED frontend bundle does not contain a terms page brief.'
    }
  );

  return exclusions;
}

function parsePageBrief(markdown, fileName, componentNames) {
  const routeId = routeIdFromPageFile(fileName);
  const routePath = safeMatch(markdown, /\*\*Route:\*\*\s+`([^`]+)`/m, routePathFromPageFile(fileName));
  const status = safeMatch(markdown, /\*\*Status:\*\*\s+([^\n]+)/m, 'LOCKED');
  const leadGenRole = safeMatch(markdown, /\*\*Lead Gen Role:\*\*\s+([^\n]+)/m, 'SUPPORTING');
  const sectionDensity = Number.parseInt(safeMatch(markdown, /\*\*Section Density:\*\*\s+(\d+)/m, '0'), 10);
  const seoCritical = safeMatch(markdown, /\*\*SEO Critical:\*\*\s+([^\n]+)/m, 'No') === 'Yes';
  const intent = safeMatch(markdown, /\*\*Intent:\*\*\s+([^\n]+)/m, 'Planner intent unavailable');
  const primaryCta = safeMatch(markdown, /\*\*Primary CTA:\*\*\s+"([^"]+)"/m, null);
  const componentHints = inferRouteComponents(routeId, markdown, componentNames);

  return {
    id: routeId,
    file: `pages/${fileName}`,
    path: routePath,
    status,
    lead_gen_role: leadGenRole,
    section_density: Number.isNaN(sectionDensity) ? 0 : sectionDensity,
    seo_critical: seoCritical,
    route_class: routeClassForId(routeId),
    intent,
    primary_cta: primaryCta,
    component_hints: componentHints
  };
}

function buildJourneyArtifacts(routes, brief) {
  const hasRoute = (routePath) => routes.some((route) => route.path === routePath);

  const journeys = [
    {
      id: 'primary-conversion',
      entry_route: '/',
      steps: [
        { route: '/', action: 'open primary CTA', expected_ui_checkpoint: 'home hero CTA visible above the fold' },
        { route: hasRoute('/free-assessment') ? '/free-assessment' : '/contact', action: 'continue lead capture flow', expected_ui_checkpoint: 'assessment/contact form is available' },
        { route: '/contact', action: 'confirm direct support options', expected_ui_checkpoint: 'phone and WhatsApp CTAs are visible' }
      ],
      required_assertions: ['no console errors', 'CTA visible without hover', 'lead capture flow reachable in two interactions or less'],
      critical_components: ['Header', 'PrimaryButton', 'ContactForm', 'WhatsAppButton', 'PhoneButton']
    },
    {
      id: 'trust-to-conversion',
      entry_route: hasRoute('/portfolio') ? '/portfolio' : '/',
      steps: [
        { route: hasRoute('/portfolio') ? '/portfolio' : '/', action: 'review proof surfaces', expected_ui_checkpoint: 'portfolio or featured project proof is visible' },
        { route: hasRoute('/case-studies') ? '/case-studies' : '/testimonials', action: 'validate proof depth', expected_ui_checkpoint: 'case study or testimonial content is present' },
        { route: '/contact', action: 'enter conversion route', expected_ui_checkpoint: 'contact CTA remains accessible' }
      ],
      required_assertions: ['proof surfaces render with real content', 'trust signals appear before final CTA'],
      critical_components: ['PortfolioCard', 'BeforeAfterSlider', 'TestimonialCard', 'CTABand']
    },
    {
      id: 'theme-and-mobile-nav',
      entry_route: '/',
      steps: [
        { route: '/', action: 'toggle theme', expected_ui_checkpoint: 'theme switcher updates mode state' },
        { route: hasRoute('/services') ? '/services' : '/', action: 'navigate via mobile bottom nav', expected_ui_checkpoint: 'mobile bottom navigation reaches services route' },
        { route: '/contact', action: 'reach support route from mobile nav or header', expected_ui_checkpoint: 'contact route resolves successfully' }
      ],
      required_assertions: ['ThemeSwitcher present', 'MobileBottomNav present on mobile breakpoints', 'reduced motion remains respected'],
      critical_components: ['ThemeSwitcher', 'MobileBottomNav', 'Header', 'Footer']
    }
  ];

  if (brief.constraints?.no_auth !== true) {
    journeys.push({
      id: 'auth-fallback',
      entry_route: '/',
      steps: [
        { route: '/', action: 'open auth surface', expected_ui_checkpoint: 'modal-first auth opens' },
        { route: '/sign-in', action: 'follow auth fallback route', expected_ui_checkpoint: 'sign-in route resolves' },
        { route: '/sign-up', action: 'follow account creation route', expected_ui_checkpoint: 'sign-up route resolves' }
      ],
      required_assertions: ['auth modal available', 'auth fallback routes resolve'],
      critical_components: ['Modal']
    });
  }

  return { journeys };
}

export async function bridgeFrontendPlan({
  sourcePlanningRoot,
  outputPlanningRoot = null,
  targetMode = DEFAULT_TARGET_MODE,
  runId = 'planned-bridge-run'
} = {}) {
  if (!sourcePlanningRoot) {
    throw new Error('Bridge blocked: --source-planning-root is required.');
  }

  const sourceRoot = normalizeInputPath(sourcePlanningRoot);
  const targetRoot = outputPlanningRoot
    ? normalizeInputPath(outputPlanningRoot)
    : path.join(path.dirname(sourceRoot), 'frontend-factory');

  const briefPath = path.join(sourceRoot, 'brief.json');
  const frontendSummaryPath = path.join(sourceRoot, 'frontend.json');
  const pageDir = path.join(sourceRoot, 'pages');

  const [brief, frontendSummary, pageEntries] = await Promise.all([
    readJson(briefPath),
    readJson(frontendSummaryPath),
    readdir(pageDir)
  ]);

  if (brief.lock_status !== 'LOCKED') {
    throw new Error(`Bridge blocked: expected LOCKED stable frontend brief, received ${brief.lock_status}.`);
  }

  const pageFiles = pageEntries.filter((entry) => entry.endsWith('.md')).sort((left, right) => left.localeCompare(right));
  const componentArtifacts = (frontendSummary.artifacts?.list ?? []).filter((entry) => entry.startsWith('components/') && entry.endsWith('.md'));
  const componentNames = componentArtifacts.map((entry) => path.basename(entry, '.md'));

  const projectRootSlug = frontendSummary.project_root_slug ?? `${brief.projectSlug ?? 'site'}-website`;
  const appRootRelative = targetMode === 'standalone_factory'
    ? `ai-product-factory/generated/apps/${runId}/${projectRootSlug}`
    : projectRootSlug;
  const runRootRelative = targetMode === 'standalone_factory'
    ? `ai-product-factory/generated/runs/${runId}`
    : null;
  const targetRootRelative = toWorkspaceRelative(targetRoot);
  const sourceRootRelative = toWorkspaceRelative(sourceRoot);

  const routeDefinitions = await Promise.all(
    pageFiles.map(async (fileName) => {
      const markdown = await readText(path.join(pageDir, fileName));
      return parsePageBrief(markdown, fileName, componentNames);
    })
  );

  const footerAttribution = footerAttributionFromBrief(brief);
  const excludedRoutes = buildExcludedRoutes(brief);
  const journeys = buildJourneyArtifacts(routeDefinitions, brief);

  const roots = {
    target_mode: targetMode,
    source_planning_root: sourceRootRelative,
    planning_root: targetRootRelative,
    runtime_app_root: appRootRelative,
    standalone_run_root: runRootRelative,
    final_product_root: appRootRelative,
    project_root_slug: projectRootSlug,
    brief_path: toWorkspaceRelative(briefPath)
  };

  const frontendContract = {
    project: {
      name: brief.projectName,
      slug: brief.projectSlug,
      project_root_slug: projectRootSlug,
      summary: brief.summary,
      product_type: brief.productType,
      business_type: brief.businessType,
      industry_vertical: brief.industryVertical,
      target_mode: targetMode,
      runtime_app_root: appRootRelative
    },
    routes: routeDefinitions,
    features: brief.requestedFeatures ?? [],
    runtime_invariants: {
      theme_switcher: true,
      dark_theme_default_available: true,
      mobile_bottom_nav: true,
      modal_first_auth: brief.constraints?.no_auth !== true,
      auth_fallback_routes: brief.constraints?.no_auth !== true,
      whatsapp_cta: true,
      phone_cta: true,
      footer_attribution: footerAttribution.enabled,
      content_keys_required: true,
      tokens_required: true,
      reduced_motion_required: true
    },
    rendering: {
      framework: 'Next.js App Router',
      language: 'TypeScript',
      styling: 'Tailwind CSS',
      seo_critical: brief.constraints?.seo_critical === true,
      local_seo_required: brief.constraints?.local_seo_required === true,
      deployment_platform: brief.constraints?.deployment_platform ?? 'vercel'
    },
    runtime_root_requirements: {
      app_root: appRootRelative,
      run_root: runRootRelative,
      package_manager: 'npm'
    }
  };

  const experienceContract = {
    visual_direction: {
      voice: brief.brand?.voice ?? 'professional',
      tone: brief.brand?.tone ?? 'confident',
      density: brief.brand?.density ?? 'comfortable',
      motion: brief.brand?.motion ?? 'measured',
      style: brief.brand?.style ?? 'local-business-trust'
    },
    theme_system: {
      supported_modes: ['light', 'dark'],
      switcher_location: ['header', 'mobile_toolbar'],
      dark_theme_required: true
    },
    layout_structure: {
      shared_shell: ['Header', 'Footer', 'MobileBottomNav', 'ThemeSwitcher'],
      social_slots: ['header_topbar', 'footer', 'hero_side_area_when_declared'],
      footer_attribution: footerAttribution
    },
    motion_temperament: {
      posture: brief.brand?.motion ?? 'measured',
      reduced_motion_required: true,
      hero_animation_style: 'restrained_cinematic'
    },
    route_section_density: routeDefinitions.map((route) => ({
      route: route.path,
      section_density: route.section_density,
      lead_gen_role: route.lead_gen_role
    }))
  };

  const routeCoveragePlan = {
    routes: routeDefinitions.map((route) => ({
      id: route.id,
      path: route.path,
      class: route.route_class,
      lead_gen_role: route.lead_gen_role,
      section_density: route.section_density,
      seo_critical: route.seo_critical,
      source_file: route.file
    })),
    intentionally_excluded: excludedRoutes
  };

  const componentScopes = componentNames.map((componentName) => ({
    id: `component.${componentName}`,
    kind: 'component',
    source_files: [
      `components/${componentName}.md`,
      'component-system.md',
      'design-system.md',
      'design-system.tokens.json',
      'motion-system.md',
      'content-library.md',
      'content.en-US.json'
    ],
    allowed_outputs: [componentOutputPath(appRootRelative, componentName)],
    required_checks: ['typecheck', 'lint'],
    depends_on: ['foundation.design-system']
  }));

  const foundationScope = {
    id: 'foundation.design-system',
    kind: 'style',
    source_files: ['design-system.md', 'design-system.tokens.json', 'motion-system.md', 'visual-reference-pack.md'],
    allowed_outputs: [
      `${appRootRelative}/src/app/globals.css`,
      `${appRootRelative}/src/lib/design-tokens.ts`
    ],
    required_checks: ['typecheck', 'lint'],
    depends_on: []
  };

  const layoutScope = {
    id: 'layout.app-shell',
    kind: 'layout',
    source_files: [
      'master-ui-architecture.md',
      'site-inventory.md',
      'interaction-matrix.md',
      'components/Header.md',
      'components/Footer.md',
      'components/MobileBottomNav.md',
      'components/ThemeSwitcher.md',
      'components/MainNav.md',
      'components/MobileMenu.md',
      'components/SocialIconRow.md',
      'components/SocialLink.md'
    ],
    allowed_outputs: [
      `${appRootRelative}/src/app/layout.tsx`,
      componentOutputPath(appRootRelative, 'Header'),
      componentOutputPath(appRootRelative, 'Footer'),
      componentOutputPath(appRootRelative, 'MobileBottomNav'),
      componentOutputPath(appRootRelative, 'ThemeSwitcher'),
      componentOutputPath(appRootRelative, 'MainNav'),
      componentOutputPath(appRootRelative, 'MobileMenu'),
      componentOutputPath(appRootRelative, 'SocialIconRow'),
      componentOutputPath(appRootRelative, 'SocialLink')
    ],
    required_checks: ['typecheck', 'lint', 'smoke'],
    depends_on: ['foundation.design-system']
  };

  const contentScope = {
    id: 'content.site-data',
    kind: 'provider',
    source_files: [
      'brief.json',
      'frontend.json',
      'content-library.md',
      'content.en-US.json',
      'site-inventory.md',
      'master-ui-architecture.md'
    ],
    allowed_outputs: [
      `${appRootRelative}/src/lib/site-content.ts`,
      `${appRootRelative}/src/lib/route-registry.ts`,
      `${appRootRelative}/src/lib/planning-manifest.json`
    ],
    required_checks: ['typecheck', 'lint'],
    depends_on: ['foundation.design-system']
  };

  const routeScopes = routeDefinitions.map((route) => ({
    id: `route.${route.id}`,
    kind: 'route',
    source_files: [
      'frontend-contract.json',
      'experience-contract.json',
      'route-coverage-plan.json',
      'e2e-journeys.json',
      'content-library.md',
      'content.en-US.json',
      'motion-system.md',
      route.file,
      ...route.component_hints.map((componentName) => `components/${componentName}.md`)
    ],
    allowed_outputs: [pageOutputPath(appRootRelative, route.path)],
    required_checks: ['typecheck', 'lint', 'smoke'],
    depends_on: ['foundation.design-system', 'layout.app-shell', 'content.site-data', ...route.component_hints.map((componentName) => `component.${componentName}`)],
    metadata: {
      route_path: route.path,
      route_class: route.route_class,
      lead_gen_role: route.lead_gen_role,
      section_density: route.section_density,
      component_hints: route.component_hints
    }
  }));

  const scopePackets = [foundationScope, layoutScope, contentScope, ...componentScopes, ...routeScopes];

  const retrievalManifest = {
    source_planning_root: sourceRootRelative,
    planning_root: targetRootRelative,
    shared_docs: [
      'brief.json',
      'frontend.json',
      'site-inventory.md',
      'master-ui-architecture.md',
      'component-system.md',
      'design-system.md',
      'design-system.tokens.json',
      'motion-system.md',
      'content-library.md',
      'content.en-US.json',
      'interaction-matrix.md',
      'visual-differentiation-map.md',
      'visual-reference-pack.md'
    ],
    page_briefs: routeDefinitions.map((route) => route.file),
    component_specs: componentNames.map((componentName) => `components/${componentName}.md`),
    allowed_component_families: componentNames,
    route_component_hints: routeDefinitions.map((route) => ({
      route: route.path,
      components: route.component_hints
    })),
    scope_ids: scopePackets.map((scope) => scope.id)
  };

  const scopeManifest = {
    target_mode: targetMode,
    app_root: appRootRelative,
    scope_count: scopePackets.length,
    scopes: scopePackets.map(({ id, kind, source_files, allowed_outputs, required_checks, depends_on }) => ({
      id,
      kind,
      source_files,
      allowed_outputs,
      required_checks,
      depends_on
    }))
  };

  const factoryContext = {
    mode: targetMode,
    run_root: runRootRelative,
    app_root: appRootRelative,
    scopes: scopeManifest.scopes
  };

  const factoryFrontendSummary = {
    status: 'passed',
    source: 'stable_frontend_bridge',
    lock_status: brief.lock_status,
    source_status: frontendSummary.status,
    source_planning_root: sourceRootRelative,
    planning_root: targetRootRelative,
    target_mode: targetMode,
    project_root_slug: projectRootSlug,
    route_count: routeDefinitions.length,
    component_count: componentNames.length,
    roots,
    route_coverage: {
      planned_routes: routeDefinitions.length,
      scoped_routes: routeScopes.length,
      excluded_routes: excludedRoutes.length
    },
    quality: {
      frontend_constraints_passed: (frontendSummary.frontend_constraints ?? []).every((constraint) => constraint.status === 'passed'),
      accessibility_constraints_passed: (frontendSummary.accessibility_constraints ?? []).every((constraint) => constraint.status === 'passed')
    }
  };

  const readme = [
    '# Frontend Factory Bridge Bundle',
    '',
    `Source stable planning root: ${sourceRootRelative}`,
    `Factory planning root: ${targetRootRelative}`,
    `Target mode: ${targetMode}`,
    `Runtime app root: ${appRootRelative}`,
    '',
    'This bundle was generated from the stable LOCKED frontend planner output so ai-product-factory can execute against explicit contracts and scoped packets.',
    '',
    'Key files:',
    '- factory-frontend.json',
    '- frontend-contract.json',
    '- experience-contract.json',
    '- route-coverage-plan.json',
    '- e2e-journeys.json',
    '- retrieval-manifest.json',
    '- scope-manifest.json',
    '- roots.json',
    '- factory-context.json',
    '',
    'Example runner invocation from ai-product-factory/:',
    `node scripts/run-factory.mjs --target-mode planned_frontend --brief ../${toWorkspaceRelative(briefPath)} --planning-root ../${targetRootRelative} --factory-context ../${targetRootRelative}/factory-context.json --run-id ${runId}`,
    ''
  ].join('\n');

  const aiContext = [
    'version: 1',
    `source_planning_root: ${sourceRootRelative}`,
    `planning_root: ${targetRootRelative}`,
    `runtime_app_root: ${appRootRelative}`,
    'required_files:',
    '  - factory-frontend.json',
    '  - frontend-contract.json',
    '  - experience-contract.json',
    '  - route-coverage-plan.json',
    '  - e2e-journeys.json',
    '  - retrieval-manifest.json',
    '  - scope-manifest.json',
    '  - roots.json',
    '  - factory-context.json',
    'scope_root: scopes/',
    'developer_mode: packet_driven',
    ''
  ].join('\n');

  await Promise.all([
    writeJson(path.join(targetRoot, 'factory-frontend.json'), factoryFrontendSummary),
    writeJson(path.join(targetRoot, 'frontend-contract.json'), frontendContract),
    writeJson(path.join(targetRoot, 'experience-contract.json'), experienceContract),
    writeJson(path.join(targetRoot, 'route-coverage-plan.json'), routeCoveragePlan),
    writeJson(path.join(targetRoot, 'e2e-journeys.json'), journeys),
    writeJson(path.join(targetRoot, 'footer-attribution-contract.json'), footerAttribution),
    writeJson(path.join(targetRoot, 'retrieval-manifest.json'), retrievalManifest),
    writeJson(path.join(targetRoot, 'scope-manifest.json'), scopeManifest),
    writeJson(path.join(targetRoot, 'roots.json'), roots),
    writeJson(path.join(targetRoot, 'factory-context.json'), factoryContext),
    writeText(path.join(targetRoot, 'README.md'), `${readme}\n`),
    writeText(path.join(targetRoot, 'ai-context.yaml'), aiContext)
  ]);

  await Promise.all(
    scopePackets.map((scope) => writeJson(path.join(targetRoot, 'scopes', `${scope.id}.json`), scope))
  );

  return {
    status: 'passed',
    target_mode: targetMode,
    source_planning_root: sourceRootRelative,
    planning_root: targetRootRelative,
    runtime_app_root: appRootRelative,
    factory_context: `${targetRootRelative}/factory-context.json`,
    scope_count: scopePackets.length,
    route_count: routeDefinitions.length,
    component_count: componentNames.length
  };
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const options = parseArgs(process.argv.slice(2));
  const summary = await bridgeFrontendPlan({
    sourcePlanningRoot: options.sourcePlanningRoot,
    outputPlanningRoot: options.outputPlanningRoot,
    targetMode: options.targetMode,
    runId: options.runId
  });
  console.log(JSON.stringify(summary, null, 2));
}