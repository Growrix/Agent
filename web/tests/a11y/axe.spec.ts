import { test } from '@playwright/test'

// TODO: Install @axe-core/playwright (npm install -D @axe-core/playwright)
// then replace each stub with: const results = await new AxeBuilder({ page }).analyze();
// expect(results.violations).toHaveLength(0)

const KEY_PAGES = ['/', '/services', '/portfolio', '/about', '/contact', '/quote', '/blog']

for (const route of KEY_PAGES) {
  test.describe(`Accessibility: ${route}`, () => {
    test(`${route} loads without critical errors (axe stub)`, async ({ page }) => {
      await page.goto(route)
      // TODO: run AxeBuilder audit once package is installed
    })
  })
}
