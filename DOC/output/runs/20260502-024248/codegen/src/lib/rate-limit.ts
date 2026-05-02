import { RateLimitError } from '@/server/errors'

interface RateLimitOptions {
  windowMs: number
  max: number
}

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

function cleanup() {
  const now = Date.now()
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) {
      store.delete(key)
    }
  }
}

export function checkRateLimit(key: string, options: RateLimitOptions): void {
  cleanup()

  const now = Date.now()
  const entry = store.get(key)

  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + options.windowMs })
    return
  }

  if (entry.count >= options.max) {
    throw new RateLimitError()
  }

  entry.count += 1
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown'
  }
  return request.headers.get('x-real-ip') ?? 'unknown'
}
