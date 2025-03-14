import nodemailer from 'nodemailer';
import 'dotenv/config';

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `"London Rug Cleaning" <${process.env.MAIL_FROM}>`,
      to: "hero2003@gmail.com",
      subject: "Test Email from SMTP Configuration",
      text: "This is a test email sent from the London Rug Cleaning SMTP configuration.",
      html: "<b>This is a test email sent from the London Rug Cleaning SMTP configuration.</b>"
    });

    console.log('Test email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

sendTestEmail();
