import { test } from '@playwright/test'

const KEY_PAGES = ['/', '/services', '/portfolio', '/about', '/blog']
const THEMES = ['light', 'dark']
const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

for (const route of KEY_PAGES) {
  for (const theme of THEMES) {
    for (const vp of VIEWPORTS) {
      test.fixme(`Visual: ${route} — ${theme} — ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        if (theme === 'dark') {
          await page.emulateMedia({ colorScheme: 'dark' })
        }
        await page.goto(route)
        await page.screenshot({ fullPage: true, path: `tests/visual/snapshots/${route.replace(/\//g, '-')}-${theme}-${vp.name}.png` })
      })
    }
  }
}
