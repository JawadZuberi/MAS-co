import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeading, Button, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { stats, values, timeline } from "@/content/data";

export const metadata: Metadata = {
  title: "About Us — MAS & Co | Chartered Accountants & Business Advisory",
  description:
    "Since 2017, MAS & Co has delivered chartered accountancy and business advisory across Pakistan — our vision, mission, core values, growth journey, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Overview"
        title="A Legacy of Financial Excellence"
        subtitle="Since 2017, MAS & Co has been at the forefront of chartered accountancy and business advisory in Pakistan."
      />

      {/* Intro */}
      <Section variant="light">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <div className="mb-4">
                  <span className="eyebrow inline-flex items-center gap-2 text-accent">
                    <span className="h-px w-6 bg-current opacity-60" />
                    Who We Are
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
                  Trusted advisors for Pakistan&rsquo;s most ambitious businesses
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our team of experienced chartered accountants and business consultants brings
                  deep expertise across audit, taxation, corporate advisory, outsourcing, and
                  international consultancy, delivering solutions that create lasting value for our
                  clients.
                </p>
                <div className="mt-8">
                  <Button href="/services" variant="outline" withArrow>
                    Explore our services
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-border bg-muted/30 p-6 text-center"
                    >
                      <div className="font-heading text-4xl font-bold text-accent md:text-5xl">
                        {s.value}
                      </div>
                      <div className="mt-2 text-sm font-medium text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section variant="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: "Eye",
                label: "Our Vision",
                copy: "To be the most trusted and respected chartered accountancy and business advisory firm in Pakistan, recognized for delivering innovative financial solutions and driving sustainable growth for our clients globally.",
              },
              {
                icon: "Target",
                label: "Our Mission",
                copy: "To provide exceptional financial, taxation, audit, and strategic consultancy services with the highest standards of integrity, professionalism, and client commitment, empowering businesses to achieve their full potential.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="card-hover h-full rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <Icon name={item.icon} className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-primary">
                    {item.label}
                  </h3>
                  <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section variant="light">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="Our Core Values"
              subtitle="Our core values define who we are and how we serve our clients."
              center
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <Icon name={v.icon} className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-primary">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Growth Timeline */}
      <Section variant="navy-deep">
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <Container className="relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Growth Timeline"
              subtitle="Eight years of building trust, capability, and lasting financial foundations."
              light
              center
            />
          </Reveal>

          <div className="relative mt-16">
            {/* center/left gold line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-0">
              {timeline.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={m.year} delay={i * 0.05}>
                    <div
                      className={`relative flex md:items-center ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* node */}
                      <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                        <span className="h-3 w-3 rounded-full border-2 border-accent bg-[#0d1b3e]" />
                      </div>

                      {/* content */}
                      <div
                        className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                          isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                        } ${i > 0 ? "md:-mt-6" : ""}`}
                      >
                        <div className="card-hover rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                          <span className="font-mono text-sm font-semibold tracking-wider text-accent">
                            {m.year}
                          </span>
                          <h3 className="mt-2 font-heading text-xl font-bold text-white">
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/60">{m.desc}</p>
                        </div>
                      </div>

                      {/* spacer for the other half on md+ */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Message */}
      <Section variant="light">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 shadow-sm md:p-12 lg:p-16">
              <div className="mb-6">
                <span className="eyebrow inline-flex items-center gap-2 text-accent">
                  <span className="h-px w-6 bg-current opacity-60" />
                  Leadership
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
                A Message from Our Managing Partner
              </h2>
              <div className="mt-8 space-y-6 text-lg italic leading-relaxed text-muted-foreground">
                <p>
                  &ldquo;When we founded MAS &amp; Co in 2017, we set out to build more than an
                  accountancy practice &mdash; we set out to build a firm our clients could trust
                  with their most important decisions. Integrity has never been negotiable for us;
                  it is the foundation on which every engagement, every audit, and every piece of
                  advice we offer is built.&rdquo;
                </p>
                <p>
                  &ldquo;Excellence is a discipline we renew every single day. Whether we are
                  guiding a growing enterprise through a complex tax landscape or helping a
                  multinational navigate cross-border regulation, our commitment is the same: to
                  serve with rigour, candour, and care, and to leave every client on firmer
                  financial ground than we found them. That commitment to building lasting financial
                  foundations is, and will always remain, the heart of MAS &amp; Co.&rdquo;
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-accent/30 bg-primary shadow-sm">
                  <Image
                    src="/ceo.jpeg"
                    alt="Muhammad Adnan Siddiqui, Managing Partner at MAS & Co"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-primary">
                    Muhammad Adnan Siddiqui
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Managing Partner, {site.name}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="navy">
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Let&rsquo;s build your financial future together
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/55">
                Partner with a team that pairs deep technical expertise with a genuine commitment to
                your success.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="primary" withArrow>
                  Get in touch
                </Button>
                <Button href="/team" variant="outline-light">
                  Meet our team
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
