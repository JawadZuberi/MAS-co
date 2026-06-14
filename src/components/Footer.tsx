import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Share2, AtSign } from "lucide-react";
import { nav, site } from "@/content/site";
import { services } from "@/content/data";

export function Footer() {
  return (
    <footer className="navy-section-deep relative overflow-hidden">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">Stay informed</h3>
            <p className="mt-1 text-sm text-white/50">
              Receive the latest insights on taxation, compliance, and business advisory.
            </p>
          </div>
          <form className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent md:w-72"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-heading text-lg font-bold text-white">
              M
            </span>
            <span className="font-heading text-lg font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/50">
            A leading Pakistan-based chartered accountancy and business advisory firm delivering
            world-class financial solutions since {site.foundedYear}.
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe, AtSign, Share2].map((I, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all hover:bg-accent/20 hover:text-accent"
              >
                <I className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-heading text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/50 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-heading text-sm font-semibold text-white">Services</h4>
          <ul className="space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-sm text-white/50 transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-heading text-sm font-semibold text-white">Get in touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-white/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/50">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-accent">
                {site.contact.email}
              </a>
            </li>
            {site.contact.phones.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-accent">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-white/30">
            © {site.foundedYear}–2025 {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
