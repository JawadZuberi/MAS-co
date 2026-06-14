import { Resend } from "resend";

const FROM = process.env.MAIL_FROM ?? "MAS & Co <onboarding@resend.dev>";
const TO = process.env.MAIL_TO ?? "info@masandco.com";

/**
 * Sends a notification email via Resend.
 * If RESEND_API_KEY is not configured, the submission is logged server-side
 * and treated as a success so the site works end-to-end without a key.
 */
export async function sendNotification(subject: string, lines: Record<string, string>) {
  const body = Object.entries(lines)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info(`[mailer] (no RESEND_API_KEY) ${subject}\n${body}`);
    return { delivered: false as const };
  }

  const resend = new Resend(key);
  const html = `<h2>${subject}</h2>${Object.entries(lines)
    .map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`)
    .join("")}`;

  await resend.emails.send({ from: FROM, to: TO, subject, html, text: body });
  return { delivered: true as const };
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}
