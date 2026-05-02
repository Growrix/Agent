// Shared TypeScript types for the application

export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'converted' | 'closed'
export type EmailStatus = 'pending' | 'sent' | 'delivered' | 'bounced' | 'complained' | 'opened' | 'clicked' | 'failed'
export type Urgency = 'standard' | 'urgent' | 'emergency'

export interface ApiSuccessResponse<T = unknown> {
  data: T
  requestId: string
}

export interface ApiErrorResponse {
  error: string
  requestId: string
  details?: unknown
}
