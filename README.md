# MAS & Co — Website

Premium marketing site for **MAS & Co**, a Karachi-based Chartered Accountancy &
Business Advisory firm. Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.
Content is reproduced from the firm's reference site; the design is an original premium build.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Structure

```
src/
  app/                 # routes: / about services industries team partnerships insights careers contact
    api/contact        # POST handler for the contact form
    api/careers        # POST handler for the careers form
    globals.css        # design tokens (Tailwind v4 @theme) + utilities
    layout.tsx         # fonts (Playfair + Inter), Header, Footer, metadata
  components/          # Header, Footer, PageHero, Reveal, ui primitives, forms
  content/
    site.ts            # brand, nav, contact details
    data.ts            # services, industries, team, insights, careers, testimonials…  (edit copy here)
  lib/mailer.ts        # Resend email helper (graceful no-key fallback)
```

**To edit copy**, change `src/content/site.ts` and `src/content/data.ts` — pages render from these.

## Forms / email

Contact and Careers forms POST to API routes that email via [Resend](https://resend.com).
Set `RESEND_API_KEY` in `.env.local` (see `.env.example`). Without a key, submissions are
logged to the server console and still return success, so the site works end-to-end.

## Design tokens

Defined in `src/app/globals.css` under `@theme`: deep **navy** (`--color-primary`) +
warm **gold** (`--color-accent`) on a light canvas. Utility classes: `navy-section`,
`navy-section-deep`, `glass`, `grid-overlay`, `text-gradient-gold`, `card-hover`,
`eyebrow`, `animate-marquee`.
