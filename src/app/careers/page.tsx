import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CareersForm } from "@/components/CareersForm";
import { benefits, openings } from "@/content/data";

export const metadata: Metadata = {
  title: "Careers — MAS & Co",
  description:
    "Join MAS & Co, one of Pakistan's leading chartered accountancy and advisory firms. Explore current openings and submit your application.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Growing Team"
        subtitle="Build your career with one of Pakistan's leading chartered accountancy and advisory firms."
      />

      {/* Culture + benefits */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why MAS & Co"
              title="A culture built for growth"
              subtitle="At MAS & Co, we foster a culture of excellence, growth, and professional development."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-xl border border-border bg-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon name={b.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Current openings */}
      <Section variant="muted">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Opportunities"
              title="Current Openings"
              subtitle="Explore our open roles and find where your expertise fits best."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {openings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="card-hover flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary">{o.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                        <Icon name="Briefcase" className="h-3.5 w-3.5 text-accent" />
                        {o.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                        <Icon name="Clock" className="h-3.5 w-3.5 text-accent" />
                        {o.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                        <Icon name="MapPin" className="h-3.5 w-3.5 text-accent" />
                        {o.location}
                      </span>
                    </div>
                  </div>
                  <Button href="#apply" variant="outline" withArrow className="shrink-0">
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application form */}
      <Section id="apply">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <CareersForm />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Closing navy accent */}
      <Section variant="navy" className="grid-overlay">
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                center
                light
                eyebrow="Let's Talk"
                title="Don't see the right role?"
                subtitle="We're always looking for exceptional talent. Send us a general application and we'll reach out when the right opportunity opens up."
              />
              <div className="mt-8 flex justify-center">
                <Button href="#apply" variant="primary" withArrow>
                  Submit a General Application
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
