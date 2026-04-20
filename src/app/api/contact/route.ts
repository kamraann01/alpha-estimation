import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Alpha Estimation <noreply@alphaestimation.com>",
      to: ["contact@alphaestimation.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
