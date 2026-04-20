import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();
    const { name, email, phone, company, projectType, projectSize, location, turnaround, description } = data;

    if (!name || !email || !phone || !projectType || !projectSize || !location || !turnaround || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Alpha Estimation <noreply@alphaestimation.com>",
      to: ["contact@alphaestimation.com"],
      replyTo: email,
      subject: `Quote Request: ${projectType} — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px;font-weight:bold">Name</td><td style="padding:6px">${name}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Email</td><td style="padding:6px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px;font-weight:bold">Phone</td><td style="padding:6px">${phone}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Company</td><td style="padding:6px">${company || "—"}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Project Type</td><td style="padding:6px">${projectType}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Project Size</td><td style="padding:6px">${projectSize}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Location</td><td style="padding:6px">${location}</td></tr>
          <tr><td style="padding:6px;font-weight:bold">Turnaround</td><td style="padding:6px">${turnaround}</td></tr>
        </table>
        <h3>Project Description</h3>
        <p style="white-space:pre-wrap;">${description}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.error(err);
    return NextResponse.json({ error: "Failed to send quote request" }, { status: 500 });
  }
}
