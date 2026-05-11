export function buildFrontendPlan({ brief, analysis, composition, runId }) {
  return {
    projectSlug: analysis.brief.projectSlug,
    appRoot: `generated/apps/${runId}/${analysis.brief.projectSlug}`,
    stack: {
      framework: 'Next.js',
      language: 'TypeScript',
      styling: 'Tailwind CSS',
      motion: 'CSS transitions with reduced-motion-aware runtime markers'
    },
    routes: analysis.routes,
    components: [
      'ThemeSwitcher',
      'MobileBottomNav',
      'AuthModal',
      'LiveStatusPanel',
      'SiteHeader',
      'SiteFooter'
    ],
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
      smokeJourneys: [
        'home route renders without console or hydration errors',
        'primary navigation works on desktop and mobile',
        'ThemeSwitcher changes theme and persists preference',
        'MobileBottomNav renders on mobile breakpoints and routes correctly',
        'AuthModal opens, switches mode, closes, and fallback auth routes resolve',
        'primary conversion surface is reachable in two interactions or less from home',
        'one content route, one conversion route, and one contact/support route all resolve with 200-equivalent app responses'
      ],
      requiredChecks: [
        'runtime-detect',
        'dependency-check',
        'lint',
        'typecheck',
        'test:unit',
        'test:a11y',
        'e2e:smoke',
        'build',
        'e2e:full',
        'audit:frontend'
      ],
      publicRouteCoverage: composition.frontendSummary.publicRoutes
    },
    metadata: {
      projectName: brief.projectName,
      primaryCta: brief.primaryCta,
      supportEmail: brief.contactEmail
    }
  };
}
