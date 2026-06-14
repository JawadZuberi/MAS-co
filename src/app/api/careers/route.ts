import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotification } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("A valid email is required."),
  phone: z.string().optional().default(""),
  position: z.string().optional().default("General Application"),
  message: z.string().min(1, "Message is required."),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const error = parsed.error.issues[0]?.message ?? "Invalid submission.";
      return NextResponse.json({ error }, { status: 400 });
    }

    const { name, email, phone, position, message } = parsed.data;

    await sendNotification("New career application — " + position, {
      Name: name,
      Email: email,
      Phone: phone || "—",
      Position: position,
      Message: message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
