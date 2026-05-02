import { resend } from '@/lib/resend'
import { createEmailLog, updateEmailLogByProviderId } from '@/server/repositories/email-logs'
import { logger } from '@/lib/logger'
import { env } from '@/env'
import { LeadEnquiryNotification } from '../../../emails/lead-enquiry-notification'
import { CallbackRequestNotification } from '../../../emails/callback-request-notification'
import React from 'react'

type EmailTemplate =
  | { template: 'lead-enquiry-notification'; props: LeadEnquiryNotificationProps }
  | { template: 'callback-request-notification'; props: CallbackRequestNotificationProps }

export interface LeadEnquiryNotificationProps {
  name: string
  phone: string
  email: string
  suburb: string
  serviceSlug: string
  urgency: string
  message: string
  leadId: string
}

export interface CallbackRequestNotificationProps {
  name: string
  phone: string
  preferredTime?: string
  suburb?: string
  message?: string
  callbackId: string
}

const subjectMap: Record<string, string> = {
  'lead-enquiry-notification': '🔧 New Quote Request Received',
  'callback-request-notification': '📞 New Callback Request',
}

export async function sendEmail(options: EmailTemplate & { to: string }) {
  const subject = subjectMap[options.template]

  let reactElement: React.ReactElement
  if (options.template === 'lead-enquiry-notification') {
    reactElement = React.createElement(LeadEnquiryNotification, options.props)
  } else {
    reactElement = React.createElement(CallbackRequestNotification, options.props)
  }

  const log = await createEmailLog({
    template: options.template,
    toAddress: options.to,
    status: 'pending',
  })

  try {
    const result = await resend.emails.send({
      from: env.RESEND_FROM_ADDRESS,
      replyTo: env.RESEND_REPLY_TO,
      to: options.to,
      subject,
      react: reactElement,
    })

    if (result.error) {
      await updateEmailLogByProviderId(log.id, { status: 'failed', error: result.error.message })
      logger.error({ message: 'Resend send failed', error: result.error.message, template: options.template })
      return
    }

    await updateEmailLogByProviderId(log.id, { status: 'sent' })
    logger.info({ message: 'Email sent', template: options.template, messageId: result.data?.id })
  } catch (err) {
    await updateEmailLogByProviderId(log.id, { status: 'failed', error: String(err) })
    logger.error({ message: 'Email send exception', error: String(err) })
  }
}

export async function handleResendWebhookEvent(event: {
  type: string
  data: { email_id: string }
}) {
  const statusMap: Record<string, string> = {
    'email.delivered': 'delivered',
    'email.bounced': 'bounced',
    'email.complained': 'complained',
    'email.opened': 'opened',
    'email.clicked': 'clicked',
  }

  const newStatus = statusMap[event.type]
  if (!newStatus) return

  await updateEmailLogByProviderId(event.data.email_id, { status: newStatus as 'delivered' | 'bounced' })
}
