
import { Resend } from 'resend';

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
    const RESEND_API_KEY = context.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const FROM_EMAIL = context.env.FROM_EMAIL || process.env.FROM_EMAIL || "admin@londonrugcleaning.co.uk";
    const TO_EMAIL = context.env.TO_EMAIL || process.env.TO_EMAIL || "info@londonrugcleaning.co.uk";

    // Check for environment variables
    if (!RESEND_API_KEY) {
      console.error("Missing Resend API key");
      
      return new Response(
        JSON.stringify({ 
          error: "Email service is not properly configured", 
          message: "Please call us directly at 02034888344",
          technical: "Missing environment variable: RESEND_API_KEY"
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

    // Initialize Resend
    const resend = new Resend(RESEND_API_KEY);

    // Construct email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Email HTML template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `;

    // Try to send the email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: `London Rug Cleaning <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `New Quote Request from ${name}`,
        text: emailContent,
        html: htmlContent,
        tags: [{ name: 'quote_request' }]
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Return success response
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Email sent successfully",
          messageId: data.id 
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
