import { z } from 'zod'
import { createLeadEnquiry, updateLeadEnquiryStatus, findLeadEnquiryById, getLeadEnquiriesPaginated } from '@/server/repositories/lead-enquiries'
import { createAuditLog } from '@/server/repositories/audit-logs'
import { sendEmail } from '@/server/services/email'
import { captureEvent } from '@/server/services/analytics'
import { NotFoundError, ValidationError } from '@/server/errors'
import { AnalyticsEvents } from '@/lib/analytics-events'
import type { LeadStatus } from '@prisma/client'

export const createLeadEnquirySchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Enter a valid Australian phone number'),
  email: z.string().email(),
  suburb: z.string().min(2).max(100),
  serviceSlug: z.string().min(1),
  urgency: z.enum(['emergency', 'today', 'this_week', 'flexible']),
  message: z.string().max(2000).optional().default(''),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must consent to be contacted' }) }),
  honeypot: z.string().max(0, 'Bot detected').optional(),
  sourcePage: z.string().optional().default('/'),
})

export type CreateLeadEnquiryInput = z.infer<typeof createLeadEnquirySchema>

export const updateLeadStatusSchema = z.object({
  status: z.enum(['new', 'contacted', 'quoted', 'converted', 'closed']),
})

export async function createLeadEnquiryService(input: CreateLeadEnquiryInput) {
  if (input.honeypot) {
    throw new ValidationError('Submission rejected')
  }

  const lead = await createLeadEnquiry({
    name: input.name,
    phone: input.phone,
    email: input.email,
    suburb: input.suburb,
    serviceSlug: input.serviceSlug,
    urgency: input.urgency,
    message: input.message,
    consent: input.consent,
    sourcePage: input.sourcePage,
    status: 'new',
  })

  await Promise.allSettled([
    sendEmail({
      template: 'lead-enquiry-notification',
      to: process.env.RESEND_REPLY_TO!,
      props: {
        name: input.name,
        phone: input.phone,
        email: input.email,
        suburb: input.suburb,
        serviceSlug: input.serviceSlug,
        urgency: input.urgency,
        message: input.message,
        leadId: lead.id,
      },
    }),
    captureEvent({
      event: AnalyticsEvents.QUOTE_REQUEST_SUBMITTED,
      distinctId: 'anonymous',
      properties: {
        service_slug: input.serviceSlug,
        suburb: input.suburb,
        urgency: input.urgency,
        source_page: input.sourcePage,
      },
    }),
  ])

  return lead
}

export async function listLeadEnquiriesService(opts: {
  page: number
  limit: number
  status?: LeadStatus
}) {
  return getLeadEnquiriesPaginated(opts)
}

export async function updateLeadStatusService(
  id: string,
  status: LeadStatus,
  actorId: string,
  ipAddress?: string,
) {
  const lead = await findLeadEnquiryById(id)
  if (!lead) throw new NotFoundError('Lead')

  const updated = await updateLeadEnquiryStatus(id, status)

  await Promise.allSettled([
    createAuditLog({
      action: `lead_status_changed_to_${status}`,
      actorId,
      targetId: id,
      targetType: 'lead_enquiry',
      ipAddress,
    }),
    captureEvent({
      event: AnalyticsEvents.ADMIN_LEAD_STATUS_UPDATED,
      distinctId: actorId,
      properties: { lead_id: id, new_status: status },
    }),
  ])

  return updated
}
