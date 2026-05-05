type LeadNotificationEmailProps = {
  lead: {
    id: string;
    source: string;
    name: string;
    phone: string;
    service: string;
    postcode: string;
    message: string;
  };
};

export function renderLeadNotificationEmail({ lead }: LeadNotificationEmailProps) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; color: #12263f; line-height: 1.6;">
        <h1>New plumbing lead received</h1>
        <p>A new ${lead.source} enquiry has been submitted through the website.</p>
        <ul>
          <li>Lead ID: ${lead.id}</li>
          <li>Name: ${lead.name}</li>
          <li>Phone: ${lead.phone}</li>
          <li>Service: ${lead.service}</li>
          <li>Postcode: ${lead.postcode}</li>
        </ul>
        <p>${lead.message}</p>
      </body>
    </html>
  `;
}