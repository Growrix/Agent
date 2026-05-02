import { NextResponse } from 'next/server'
import { isAppError } from '@/server/errors'
import { logger } from '@/lib/logger'
import { ZodError } from 'zod'

export function successResponse<T>(data: T, status = 200): NextResponse {
  return NextResponse.json({ data }, { status })
}

export function errorResponse(
  err: unknown,
  route: string,
  requestId: string,
): NextResponse {
  if (err instanceof ZodError) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: err.errors[0]?.message ?? 'Validation failed' } },
      { status: 400 },
    )
  }

  if (isAppError(err)) {
    if (err.statusCode >= 500) {
      logger.error({ message: err.message, code: err.code, route, requestId })
    }
    return NextResponse.json(
      { error: { code: err.code, message: err.message } },
      { status: err.statusCode },
    )
  }

  logger.error({ message: 'Unhandled error', error: String(err), route, requestId })
  return NextResponse.json(
    { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' } },
    { status: 500 },
  )
}

export function requestId(): string {
  return crypto.randomUUID()
}
