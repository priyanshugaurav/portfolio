// Cloudflare Worker / Edge Function to relay contact messages via Resend
// Deploy this to Cloudflare Workers (free tier) if you want to route form submissions through Resend
export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://priyanshugaurav.space",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const formData = await request.formData();
      const name = formData.get("name") || "Anonymous";
      const email = formData.get("email");
      const subject = formData.get("subject") || "New Message from Portfolio";
      const message = formData.get("message") || "";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "contact@priyanshugaurav.space",
          to: "priyanshugaurav01@gmail.com",
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
        }),
      });

      const data = await resendRes.json();
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
        status: resendRes.status,
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};
