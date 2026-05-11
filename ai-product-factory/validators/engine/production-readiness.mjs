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

export function validateProductionReadiness({ brief, runRoot, appRoot, buildPlan, composition }) {
  const requiredRunArtifacts = [
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

  const requiredAppArtifacts = [
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

  const checks = [];
  checks.push(
    makeCheck(
      'brief-locked',
      brief.lock_status === 'LOCKED',
      `lock_status=${brief.lock_status}`,
      'The factory only runs against LOCKED briefs.'
    )
  );

  const routeCoverage = composition.routePlans.length === buildPlan.routes.length;
  checks.push(
    makeCheck(
      'route-coverage',
      routeCoverage,
      `planned=${buildPlan.routes.length}; composed=${composition.routePlans.length}`,
      'Every declared route must have a composition plan.'
    )
  );

  const uniqueHeroVariants = new Set(composition.visualDifferentiationMap.map((entry) => entry.heroVariant)).size === composition.visualDifferentiationMap.length;
  checks.push(
    makeCheck(
      'visual-differentiation',
      uniqueHeroVariants,
      `heroVariants=${composition.visualDifferentiationMap.map((entry) => entry.heroVariant).join(',')}`,
      'Public routes must keep distinct hero variants.'
    )
  );

  const hasMandatoryUx = ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'].every((component) => buildPlan.components.includes(component));
  checks.push(
    makeCheck(
      'mandatory-ux',
      hasMandatoryUx,
      `components=${buildPlan.components.join(',')}`,
      'Mandatory UX components are missing from the build plan.'
    )
  );

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
