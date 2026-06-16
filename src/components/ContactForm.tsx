"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";
import { services } from "@/content/data";
import { submitWeb3Form } from "@/lib/web3forms";

type Status = "idle" | "loading" | "success" | "error";

const serviceOptions = ["General Inquiry", ...services.map((s) => s.title)];

const inputClass =
  "h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-primary placeholder:text-muted-foreground/70 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

const labelClass = "mb-1.5 block text-sm font-medium text-primary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await submitWeb3Form(`New contact enquiry — ${service}`, {
        name,
        email,
        phone,
        service,
        message,
      });

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService(serviceOptions[0]);
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
      <h2 className="font-heading text-2xl font-bold text-primary">Send Us a Message</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Fill out the form below and our team will respond within 24 hours.
      </p>

      {status === "success" ? (
        <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-accent/30 bg-accent/5 p-10 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <Icon name="CheckCircle2" className="h-7 w-7 text-accent" />
          </span>
          <p className="mt-5 font-heading text-lg font-semibold text-primary">
            Thank you — we&apos;ll be in touch within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-medium text-accent transition hover:text-accent-soft"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className={labelClass}>
                Full Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="cf-email" className={labelClass}>
                Email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-phone" className={labelClass}>
                Phone
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 300 1234567"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="cf-service" className={labelClass}>
                Service Interest
              </label>
              <select
                id="cf-service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230948f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                }}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="cf-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help…"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/70 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>

          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
              <Icon name="AlertCircle" className="h-4 w-4 text-red-600" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-medium text-accent-foreground shadow-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Icon name="Loader2" className="h-4 w-4 animate-spin text-accent-foreground" />
                Sending…
              </>
            ) : (
              <>
                <Icon name="Send" className="h-4 w-4 text-accent-foreground" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
