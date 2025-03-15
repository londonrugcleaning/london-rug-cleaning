import { Resend } from 'resend';


export async function onRequest(context) {
  try {
    // Handle CORS preflight request
    if (context.request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Allow only POST requests
    if (context.request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    // Read environment variables (Cloudflare)
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const FROM_EMAIL = context.env.FROM_EMAIL || "admin@londonrugcleaning.co.uk";
    const TO_EMAIL = context.env.TO_EMAIL || "info@londonrugcleaning.co.uk";

    // Validate API Key
    if (!RESEND_API_KEY) {
      console.error("Missing Resend API key");
      return new Response(
        JSON.stringify({ error: "Server misconfiguration", message: "Please call us directly at 02034888344" }),
        { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      );
    }

    // Parse request body
    const body = await context.request.json();
    const { name, email, phone, message } = body;

    // Validate request data
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      );
    }

    // Construct email content
    const emailOptions = {
      from: `London Rug Cleaning <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    // Send email with Resend
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("Resend API error:", error);
      throw new Error(error.message);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully", messageId: data.id }),
      { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    );

  } catch (error) {
    console.error("Request handling error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    );
  }
}
