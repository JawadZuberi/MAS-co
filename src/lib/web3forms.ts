/**
 * Web3Forms — static-friendly form delivery (no backend needed).
 * Get a free access key at https://web3forms.com (just enter your email),
 * then set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local before building,
 * or replace the fallback string below.
 *
 * The access key is safe to expose publicly — it only allows sending email
 * to the address you verified, nothing else.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

export async function submitWeb3Form(subject: string, fields: Record<string, string>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "MAS & Co Website",
      ...fields,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}
