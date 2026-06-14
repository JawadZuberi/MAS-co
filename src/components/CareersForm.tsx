"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";
import { openings } from "@/content/data";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "h-11 w-full rounded-lg border border-border bg-white px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent";

export function CareersForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: openings[0]?.title ?? "Other / General Application",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        position: openings[0]?.title ?? "Other / General Application",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
      <h3 className="font-heading text-2xl font-bold text-primary">Submit Your Application</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Fill in your details and our team will get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
              placeholder="+92 300 0000000"
            />
          </div>
          <div>
            <label htmlFor="position" className="mb-2 block text-sm font-medium text-primary">
              Position
            </label>
            <select
              id="position"
              value={form.position}
              onChange={(e) => update("position", e.target.value)}
              className={inputClass}
            >
              {openings.map((o) => (
                <option key={o.title} value={o.title}>
                  {o.title}
                </option>
              ))}
              <option value="Other / General Application">Other / General Application</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tell us about yourself and why you'd like to join MAS & Co..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-medium text-accent-foreground shadow-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Submitting..." : "Submit Application"}
          <Icon name="Send" className="h-4 w-4" />
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-primary">
            <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
            Thank you — your application has been received.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600">
            <Icon name="AlertCircle" className="h-5 w-5 text-red-600" />
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
