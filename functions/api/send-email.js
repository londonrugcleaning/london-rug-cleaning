
import nodemailer from 'nodemailer';

export async function onRequest(context) {
  try {
    // Handle CORS
    if (context.request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Only allow POST requests
    if (context.request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Get form data from request body
    const body = await context.request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Load environment variables
    const SMTP_HOST = context.env.SMTP_HOST || process.env.SMTP_HOST;
    const SMTP_PORT = context.env.SMTP_PORT || process.env.SMTP_PORT;
    const SMTP_USER = context.env.SMTP_USER || process.env.SMTP_USER;
    const SMTP_PASS = context.env.SMTP_PASS || process.env.SMTP_PASS;
    const MAIL_FROM = context.env.MAIL_FROM || process.env.MAIL_FROM || "admin@londonrugcleaning.co.uk";
    const TO_EMAIL = context.env.TO_EMAIL || process.env.TO_EMAIL || "info@londonrugcleaning.co.uk";

    // Check for environment variables
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing email configuration environment variables");
      
      // Log specific missing variables for debugging
      const missingVars = [];
      if (!SMTP_HOST) missingVars.push("SMTP_HOST");
      if (!SMTP_PORT) missingVars.push("SMTP_PORT");
      if (!SMTP_USER) missingVars.push("SMTP_USER");
      if (!SMTP_PASS) missingVars.push("SMTP_PASS");
      
      return new Response(
        JSON.stringify({ 
          error: "Email service is not properly configured", 
          message: "Please call us directly at 02034888344",
          technical: `Missing environment variables: ${missingVars.join(", ")}`
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Create transporter object using nodemailer
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false // Allows self-signed certs for local testing
      }
    });

    // Verify SMTP connection works before trying to send
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError);
      
      return new Response(
        JSON.stringify({ 
          error: "Email server connection failed", 
          message: "Please call us directly at 02034888344",
          technical: verifyError.message
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Construct email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Email options
    const mailOptions = {
      from: `"London Rug Cleaning" <${MAIL_FROM}>`,
      to: TO_EMAIL,
      subject: `New Quote Request from ${name}`,
      text: emailContent,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      headers: {
        "x-liara-tag": "quote_request", 
      },
    };

    // Try to send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      
      // Return success response
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Email sent successfully",
          messageId: info.messageId 
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email", 
          message: "Please call us directly at 02034888344",
          technical: emailError.message 
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error in request handler:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ 
        error: "Failed to process request", 
        message: "Please call us directly at 02034888344",
        details: error.message 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
