import { existsSync } from 'node:fs';
import path from 'node:path';

function makeCheck(id, condition, evidence, reason) {
  return {
    id,
    status: condition ? 'passed' : 'failed',
    ...(condition ? {} : { reason }),
    evidence
  };
}

export function validateProductionReadiness({ brief, runRoot, appRoot, buildPlan, composition, plannedExecution = null }) {
  const plannedMode = buildPlan.mode === 'planned_frontend';

  const requiredRunArtifacts = plannedMode
    ? [
        'planning/factory-frontend.json',
        'planning/frontend-contract.json',
        'planning/experience-contract.json',
        'planning/route-coverage-plan.json',
        'planning/e2e-journeys.json',
        'planning/roots.json',
        'planning/factory-context.json',
        'planning/build-plan.json',
        'planning/content.en.json',
        'specs/retrieval-manifest.json',
        'specs/scope-manifest.json',
        'reports/frontend-summary.json'
      ]
    : [
        'planning/site-inventory.json',
        'planning/master-ui-architecture.json',
        'planning/design-system.json',
        'planning/motion-system.json',
        'planning/visual-differentiation-map.json',
        'planning/page-briefs.json',
        'specs/component-system.json',
        'specs/content-library.json',
        'reports/frontend-summary.json'
      ];

  const routeArtifacts = (buildPlan.routes ?? []).map((routePath) => {
    if (routePath === '/') {
      return 'src/app/page.tsx';
    }

    return `src/app/${routePath.replace(/^\//, '')}/page.tsx`;
  });

  const requiredAppArtifacts = plannedMode
    ? [
        'package.json',
        'RUN.generated.md',
        'dev-server-checklist.md',
        ...routeArtifacts,
        'src/components/theme-switcher.tsx',
        'src/components/site-header.tsx',
        'src/components/site-footer.tsx',
        'src/components/planned-route-page.tsx',
        'src/components/factory-registry.tsx',
        'src/lib/site-content.ts',
        'src/lib/route-registry.ts',
        'tests/e2e/smoke.spec.ts',
        'tests/e2e/full.spec.ts',
        'tests/e2e/a11y.spec.ts'
      ]
    : [
        'package.json',
        'RUN.generated.md',
        ...routeArtifacts,
        'src/components/theme-switcher.tsx',
        'src/components/mobile-bottom-nav.tsx',
        'src/components/auth-modal.tsx',
        'tests/e2e/smoke.spec.ts',
        'tests/e2e/full.spec.ts',
        'tests/e2e/a11y.spec.ts'
      ];

  if (plannedMode && buildPlan.invariants.mobile_bottom_nav === true) {
    requiredAppArtifacts.push('src/components/mobile-bottom-nav.tsx');
  }

  if (plannedMode && buildPlan.invariants.modal_first_auth === true) {
    requiredAppArtifacts.push('src/components/auth-modal.tsx');
  }

  const checks = [];
  checks.push(
    makeCheck(
      'brief-locked',
      brief.lock_status === 'LOCKED',
      `lock_status=${brief.lock_status}`,
      'The factory only runs against LOCKED briefs.'
    )
  );

  const routeCoverage = plannedMode
    ? (plannedExecution?.routeCoveragePlan?.routes?.length ?? 0) === buildPlan.routes.length
    : composition.routePlans.length === buildPlan.routes.length;
  checks.push(
    makeCheck(
      'route-coverage',
      routeCoverage,
      plannedMode
        ? `planned=${buildPlan.routes.length}; scoped=${plannedExecution?.routeCoveragePlan?.routes?.length ?? 0}`
        : `planned=${buildPlan.routes.length}; composed=${composition.routePlans.length}`,
      'Every declared route must have a composition plan.'
    )
  );

  const uniqueHeroVariants = plannedMode
    ? new Set(buildPlan.routeDefinitions.map((route) => `planned-${route.id}`)).size === buildPlan.routeDefinitions.length
    : new Set(composition.visualDifferentiationMap.map((entry) => entry.heroVariant)).size === composition.visualDifferentiationMap.length;
  checks.push(
    makeCheck(
      'visual-differentiation',
      uniqueHeroVariants,
      plannedMode
        ? `heroVariants=${buildPlan.routeDefinitions.map((route) => `planned-${route.id}`).join(',')}`
        : `heroVariants=${composition.visualDifferentiationMap.map((entry) => entry.heroVariant).join(',')}`,
      'Public routes must keep distinct hero variants.'
    )
  );

  const mandatoryComponents = plannedMode
    ? [
        ...(buildPlan.invariants.theme_switcher ? ['ThemeSwitcher'] : []),
        ...(buildPlan.invariants.mobile_bottom_nav ? ['MobileBottomNav'] : []),
        ...(buildPlan.invariants.modal_first_auth ? ['AuthModal'] : [])
      ]
    : ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'];
  const hasMandatoryUx = mandatoryComponents.every((component) => buildPlan.components.includes(component) || !plannedMode);
  checks.push(
    makeCheck(
      'mandatory-ux',
      hasMandatoryUx,
      `components=${buildPlan.components.join(',')}`,
      'Mandatory UX components are missing from the build plan.'
    )
  );

  if (plannedMode) {
    const plannedRoutes = plannedExecution?.routeCoveragePlan?.routes?.map((route) => route.path) ?? [];
    const hasRouteAlignment = JSON.stringify(plannedRoutes) === JSON.stringify(buildPlan.routes);
    checks.push(
      makeCheck(
        'planned-route-alignment',
        hasRouteAlignment,
        `planned=${plannedRoutes.join(',')}; emitted=${buildPlan.routes.join(',')}`,
        'Build plan routes must match the bridged planner route inventory exactly.'
      )
    );

    const plannedComponents = (plannedExecution?.scopeManifest?.scopes ?? [])
      .filter((scope) => scope.kind === 'component')
      .map((scope) => scope.id.replace(/^component\./, ''));
    const hasComponentAlignment = JSON.stringify(plannedComponents) === JSON.stringify(buildPlan.components);
    checks.push(
      makeCheck(
        'planned-component-alignment',
        hasComponentAlignment,
        `planned=${plannedComponents.length}; emitted=${buildPlan.components.length}`,
        'Build plan components must match the bridged component scope inventory.'
      )
    );
  }

  for (const relativePath of requiredRunArtifacts) {
    checks.push(
      makeCheck(
        `artifact:${relativePath}`,
        existsSync(path.join(runRoot, relativePath)),
        path.join(runRoot, relativePath),
        `Missing run artifact: ${relativePath}`
      )
    );
  }

  for (const relativePath of requiredAppArtifacts) {
    checks.push(
      makeCheck(
        `app:${relativePath}`,
        existsSync(path.join(appRoot, relativePath)),
        path.join(appRoot, relativePath),
        `Missing generated app artifact: ${relativePath}`
      )
    );
  }

  const blockers = checks.filter((check) => check.status === 'failed').map((check) => check.id);

  return {
    status: blockers.length === 0 ? 'passed' : brief.lock_status === 'LOCKED' ? 'failed' : 'blocked',
    checks,
    blockers,
    evidence: checks.map((check) => `${check.id}: ${check.evidence}`)
  };
}
