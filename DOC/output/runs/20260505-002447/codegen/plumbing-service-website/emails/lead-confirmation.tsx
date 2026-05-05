type LeadConfirmationEmailProps = {
  name: string;
};

export function renderLeadConfirmationEmail({ name }: LeadConfirmationEmailProps) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; color: #12263f; line-height: 1.6;">
        <h1>Thanks for contacting the plumbing team</h1>
        <p>${name}, your enquiry has been received and will be reviewed shortly.</p>
      </body>
    </html>
  `;
}