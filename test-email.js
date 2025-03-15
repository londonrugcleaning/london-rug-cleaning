
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

  console.log('Using Resend API Key:', RESEND_API_KEY.substring(0, 10) + '...');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Working directory:', process.cwd());
  
  const resend = new Resend(RESEND_API_KEY);

  try {
    console.log(`Sending test email from ${FROM_EMAIL} to ${TO_EMAIL}...`);
    
    const { data, error } = await resend.emails.send({
      from: `London Rug Cleaning <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: "Test Email from Resend Configuration",
      text: "This is a test email sent from the London Rug Cleaning Resend configuration.",
      html: "<b>This is a test email sent from the London Rug Cleaning Resend configuration.</b>",
      tags: [{ name: 'test_email' }]
    });

    if (error) {
      console.error('Error details:', error);
      throw new Error(error.message);
    }

    console.log('Test email sent successfully!');
    console.log('Email ID:', data.id);
    console.log('Full response:', data);
  } catch (error) {
    console.error('Error sending test email:', error);
    console.error('Please check your Resend API key and network connection.');
  }
}

sendTestEmail();
