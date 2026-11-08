import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Right Tech Website <onboarding@resend.dev>",
      to: ["contact@righttechconsulting.com"],
      replyTo: email,
      subject: subject || `Website inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (result.error) {
      return Response.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}