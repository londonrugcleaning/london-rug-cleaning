
import { Resend } from 'resend';
import 'dotenv/config';

async function sendTestEmail() {
  // Check for required environment variables
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL || 'admin@londonrugcleaning.co.uk';
  const TO_EMAIL = process.env.TO_EMAIL || 'info@londonrugcleaning.co.uk';

  if (!RESEND_API_KEY) {
    console.error('Error: RESEND_API_KEY environment variable is missing');
    process.exit(1);
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `London Rug Cleaning <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: "Test Email from Resend Configuration",
      text: "This is a test email sent from the London Rug Cleaning Resend configuration.",
      html: "<b>This is a test email sent from the London Rug Cleaning Resend configuration.</b>",
      tags: [{ name: 'test_email' }]
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log('Test email sent:', data.id);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

sendTestEmail();
