function routeLabel(routePath) {
  if (routePath === '/') {
    return 'Home';
  }

  return routePath
    .replace(/^\//, '')
    .split('/')
    .map((segment) => segment.replace(/-/g, ' '))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function stripFactoryPrefix(relativePath) {
  return relativePath.replace(/^ai-product-factory\//, '');
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

export function buildPlannedFrontendPlan({
  brief,
  factoryFrontendSummary,
  frontendContract,
  routeCoveragePlan,
  e2eJourneys,
  roots,
  scopeManifest
}) {
  const routeDefinitions = (frontendContract.routes ?? []).map((route) => ({
    ...route,
    label: route.label ?? routeLabel(route.path)
  }));

  const components = (scopeManifest.scopes ?? [])
    .filter((scope) => scope.kind === 'component')
    .map((scope) => scope.id.replace(/^component\./, ''));

  const requiredChecks = uniqueValues([
    'runtime-detect',
    'dependency-check',
    ...(scopeManifest.scopes ?? []).flatMap((scope) => scope.required_checks ?? []),
    'test:unit',
    'test:a11y',
    'e2e:smoke',
    'build',
    'e2e:full',
    'audit:frontend'
  ]);

  const publicRouteCoverage = (routeCoveragePlan.routes ?? [])
    .filter((route) => route.class !== 'legal' && route.class !== 'auth-fallback')
    .map((route) => route.path);

  return {
    mode: 'planned_frontend',
    projectSlug: frontendContract.project?.project_root_slug ?? frontendContract.project?.slug ?? brief.projectSlug,
    appRoot: stripFactoryPrefix(roots.runtime_app_root),
    stack: {
      framework: 'Next.js',
      language: 'TypeScript',
      styling: 'Tailwind CSS',
      motion: 'Planner-defined motion with reduced-motion fallbacks'
    },
    routes: routeDefinitions.map((route) => route.path),
    routeDefinitions,
    components,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'node scripts/lint.mjs',
      typecheck: 'tsc --noEmit',
      test: 'npm run test:unit && npm run test:a11y && npm run e2e:smoke',
      'test:unit': 'vitest run --config vitest.config.mjs',
      'test:a11y': 'node scripts/run-playwright.mjs a11y',
      'e2e:smoke': 'node scripts/run-playwright.mjs smoke',
      'e2e:full': 'node scripts/run-playwright.mjs full',
      'audit:frontend': 'node scripts/audit-frontend.mjs',
      'release:check': 'npm run runtime:detect && npm run dependency:check && npm run lint && npm run typecheck && npm run test:unit && npm run test:a11y && npm run e2e:smoke && npm run build && npm run e2e:full && npm run audit:frontend'
    },
    releaseGate: {
      smokeJourneys: (e2eJourneys.journeys ?? []).map((journey) => `${journey.id}: ${journey.steps.map((step) => step.route).join(' -> ')}`),
      requiredChecks,
      publicRouteCoverage
    },
    metadata: {
      projectName: brief.projectName,
      primaryCta: brief.primaryCta,
      supportEmail: brief.contactEmail
    },
    invariants: frontendContract.runtime_invariants ?? {},
    planning: {
      planningRoot: factoryFrontendSummary.planning_root,
      sourcePlanningRoot: factoryFrontendSummary.source_planning_root,
      status: factoryFrontendSummary.status,
      roots
    }
  };
}