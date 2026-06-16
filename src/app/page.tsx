import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeading, Eyebrow, Button, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { services, industries, whyChooseUs, clients, stats, testimonials } from "@/content/data";

export const metadata: Metadata = {
  title: "MAS & Co — Chartered Accountants & Business Advisory in Karachi",
  description:
    "MAS & Co is a leading Pakistan-based chartered accountancy and business advisory firm delivering audit, taxation, corporate advisory, outsourcing, and international consultancy solutions to businesses worldwide.",
};

const aboutHighlights = [
  {
    icon: "Scale",
    title: "Ethical Standards",
    desc: "Uncompromising integrity and professional ethics in every engagement.",
  },
  {
    icon: "Award",
    title: "Expert Leadership",
    desc: "Guided by seasoned chartered accountants with decades of expertise.",
  },
  {
    icon: "Globe2",
    title: "International Reach",
    desc: "Cross-border advisory serving clients across global markets.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1) HERO */}
      <Section variant="navy-deep" className="overflow-hidden">
        {/* Office photo background + navy overlay for readability */}
        <div className="absolute inset-0">
          <Image
            src="/hero-office.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <Container className="relative z-10">
          <Reveal className="max-w-3xl">
            <Eyebrow light>Chartered Accountants • Karachi</Eyebrow>

            <div className="mt-6 flex flex-wrap gap-2">
              {services.slice(0, 4).map((s) => (
                <span key={s.slug} className="glass rounded-lg px-4 py-2 text-sm text-white/70">
                  {s.title}
                </span>
              ))}
            </div>

            <h1 className="mt-8 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Your Trusted Partner in
              <br />
              <span className="text-gradient-gold">Financial Excellence</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              MAS &amp; Co is a leading Pakistan-based chartered accountancy and business advisory firm
              delivering audit, taxation, corporate advisory, outsourcing, and international consultancy
              solutions to businesses worldwide.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" withArrow>
                Schedule Consultation
              </Button>
              <Button href="/services" variant="outline-light">
                Explore Services
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["International Clients", "Chartered Accountants", "Corporate Advisory Experts"].map((chip) => (
                <span
                  key={chip}
                  className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white/70"
                >
                  <Icon name="Check" className="h-4 w-4 text-accent" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2) STATS */}
      <Section variant="muted" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.05} className="text-center lg:text-left">
                  <div className="font-heading text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3) ABOUT PREVIEW */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Company Overview</Eyebrow>
              <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
                Building Trust Through Financial Intelligence
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                MAS &amp; Co is a Pakistan-based chartered accountancy and business advisory firm committed to
                delivering exceptional financial, taxation, audit, and strategic consultancy services. Since
                2017, the firm has established itself as a trusted advisor for corporations, SMEs, international
                businesses, and institutional clients.
              </p>

              <div className="mt-8 space-y-5">
                {aboutHighlights.map((h) => (
                  <div key={h.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon name={h.icon} className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-primary">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Button href="/about" variant="outline" withArrow>
                  Learn More About Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                <div className="relative">
                  <Icon name="Quote" className="h-9 w-9 text-accent" />
                  <p className="mt-6 font-heading text-2xl font-semibold leading-snug text-primary">
                    Eight years of disciplined, principled advisory — built on trust and delivered with
                    precision.
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                    <div>
                      <div className="font-heading text-4xl font-bold text-accent">8+</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        Years of Excellence
                      </div>
                    </div>
                    <div>
                      <div className="font-heading text-4xl font-bold text-primary">{site.foundedYear}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        Founded in Karachi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4) SERVICES */}
      <Section variant="muted">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="What We Do"
              title="Comprehensive Professional Services"
              subtitle="We deliver a full spectrum of financial, advisory, and consultancy solutions tailored to the unique needs of each client."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <a
                  href={`/services#${s.slug}`}
                  className="card-hover group flex h-full flex-col rounded-xl border border-border bg-card p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon name={s.icon} className="h-6 w-6 text-accent" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Learn more
                    <Icon
                      name="ArrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5) INDUSTRIES */}
      <Section variant="navy-deep" className="overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-60" />
        <Container className="relative z-10">
          <Reveal>
            <SectionHeading
              light
              center
              eyebrow="Industries We Serve"
              title="Multi-Sector Expertise"
              subtitle="Deep domain knowledge across diverse industries enables us to deliver targeted solutions that address sector-specific challenges."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 5) * 0.05}>
                <div className="glass flex h-full flex-col items-center justify-center gap-3 rounded-xl px-5 py-8 text-center transition-colors duration-300 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15">
                    <Icon name={ind.icon} className="h-6 w-6 text-accent" />
                  </span>
                  <span className="text-sm font-medium text-white/80">{ind.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6) WHY CHOOSE US */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why Us"
              title="Why Choose MAS & Co"
              subtitle="Our commitment to excellence and client-centric approach sets us apart as a trusted financial partner."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((card, i) => (
              <Reveal key={card.title} delay={(i % 3) * 0.05}>
                <div className="card-hover flex h-full gap-4 rounded-xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon name={card.icon} className="h-6 w-6 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7) CLIENTS MARQUEE */}
      <Section variant="muted" className="overflow-hidden py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Trusted By"
              title="Our Distinguished Clients"
              subtitle="We are proud to serve leading corporations, multinationals, and institutions across diverse sectors."
            />
          </Reveal>
        </Container>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee w-max gap-4">
              {[...clients, ...clients].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-primary"
                >
                  <Icon name="Building2" className="h-4 w-4 text-accent" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 8) TESTIMONIALS */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Client Voices"
              title="What Our Clients Say"
              subtitle="Trusted by industry leaders for delivering reliable, strategic financial advisory."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.05}>
                <figure className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-8">
                  <span className="font-heading text-5xl leading-none text-accent" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 text-base italic leading-relaxed text-primary/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9) FINAL CTA */}
      <Section variant="navy" className="overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <Container className="relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Let&apos;s Build Stronger Financial Foundations Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
              Partner with MAS &amp; Co for comprehensive financial solutions that drive growth, ensure
              compliance, and build lasting value.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" withArrow>
                Book Consultation
              </Button>
              <Button href="/contact" variant="outline-light">
                Contact Our Experts
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
