import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotification } from "@/lib/mailer";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().optional().default(""),
  service: z.string().trim().optional().default("General Inquiry"),
  message: z.string().trim().min(1, "Message is required"),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  const { name, email, phone, service, message } = parsed.data;

  try {
    await sendNotification(`New contact enquiry — ${service}`, {
      Name: name,
      Email: email,
      Phone: phone || "—",
      Service: service,
      Message: message,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
