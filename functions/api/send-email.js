
// Cloudflare Worker for sending emails
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

    // Read environment variables (Cloudflare)
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const FROM_EMAIL = context.env.FROM_EMAIL || "info@londonrugcleaning.co.uk";
    const TO_EMAIL = context.env.TO_EMAIL || "info@londonrugcleaning.co.uk";

    // Validate API Key
    if (!RESEND_API_KEY) {
      console.error("Missing Resend API key");
      return new Response(
        JSON.stringify({ error: "Server misconfiguration", message: "Please call us directly at 02034888344" }),
        { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      );
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

    // Construct email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Send email using Cloudflare Email Routing or a third-party email service
    // This example uses the Web Standards Fetch API that Cloudflare Workers support
    const emailSent = await fetch(`https://${SMTP_HOST}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`${SMTP_USER}:${SMTP_PASS}`)}`,
      },
      body: JSON.stringify({
        from: `London Rug Cleaning <noreply@londonrugcleaning.co.uk>`,
        to: TO_EMAIL,
        subject: `New Quote Request from ${name}`,
        text: emailContent,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    // Check if email was sent successfully
    if (!emailSent.ok) {
      console.error("Failed to send email:", await emailSent.text());
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
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
