import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface CallbackRequestNotificationProps {
  requestId: string
  name: string
  phone: string
  preferredTime?: string
  suburb?: string
  message?: string
  sourcePage?: string
  submittedAt: string
  adminUrl: string
}

export function CallbackRequestNotification({
  requestId,
  name,
  phone,
  preferredTime,
  suburb,
  message,
  sourcePage,
  submittedAt,
  adminUrl,
}: CallbackRequestNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Callback request from {name} — {phone}</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '24px' }}>
          <Heading style={{ color: '#1a56db', marginBottom: '8px' }}>
            New Callback Request
          </Heading>
          <Text style={{ color: '#6b7280', marginBottom: '24px' }}>
            Submitted {submittedAt}
          </Text>
          <Hr />
          <Section style={{ marginTop: '16px' }}>
            <Row>
              <Text><strong>Name:</strong> {name}</Text>
              <Text><strong>Phone:</strong> <Link href={`tel:${phone}`}>{phone}</Link></Text>
              {preferredTime && <Text><strong>Best time to call:</strong> {preferredTime}</Text>}
              {suburb && <Text><strong>Suburb:</strong> {suburb}</Text>}
              {message && <Text><strong>Message:</strong> {message}</Text>}
              {sourcePage && <Text><strong>Source:</strong> {sourcePage}</Text>}
              <Text style={{ color: '#9ca3af', fontSize: '12px' }}>Request ID: {requestId}</Text>
            </Row>
          </Section>
          <Hr />
          <Link href={adminUrl} style={{ backgroundColor: '#1a56db', color: '#ffffff', padding: '10px 20px', borderRadius: '6px', display: 'inline-block', marginTop: '16px', textDecoration: 'none' }}>
            View in Admin
          </Link>
        </Container>
      </Body>
    </Html>
  )
}

export default CallbackRequestNotification
