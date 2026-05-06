import content from '@/content/en-US'

/**
 * Typed content accessor.
 * Usage: t('home.hero.title') → "Switch to clean energy with confidence"
 *
 * Falls back to the key string itself if the path is not found.
 */
export function t(path: string): string {
  const result = path
    .split('.')
    .reduce((obj: any, key) => (obj != null ? obj[key] : undefined), content)
  return typeof result === 'string' ? result : path
}

export default content
