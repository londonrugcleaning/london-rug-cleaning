
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

    // Get environment variables
    const SMTP_HOST = context.env.SMTP_HOST;
    const SMTP_PORT = context.env.SMTP_PORT;
    const SMTP_USER = context.env.SMTP_USER;
    const SMTP_PASS = context.env.SMTP_PASS;
    const TO_EMAIL = context.env.TO_EMAIL || "info@londonrugcleaning.co.uk";

    // Create transporter object using nodemailer
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Construct email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Email options
    const mailOptions = {
      from: `"London Rug Cleaning" <admin@londonrugcleaning.co.uk>`,
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
          details: emailError.message 
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
      JSON.stringify({ error: "Failed to process request", details: error.message }),
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
