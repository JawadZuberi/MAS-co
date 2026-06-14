import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Icon,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/content/data";

export const metadata: Metadata = {
  title: "Industries We Serve | MAS & Co",
  description:
    "Deep domain knowledge across banking, manufacturing, real estate, healthcare, and more — enabling MAS & Co to deliver targeted, sector-specific accounting and advisory solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector Expertise"
        title="Industries We Serve"
        subtitle="Deep domain knowledge across diverse industries enables us to deliver targeted, sector-specific solutions."
      />

      <Section>
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
              Every sector carries its own regulatory landscape, risk profile, and
              growth dynamics. We pair specialist insight with hands-on experience to
              help organizations across these industries stay compliant, optimize
              performance, and build lasting value.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} delay={i * 0.05}>
                <article className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-8">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon name={industry.icon} className="h-6 w-6 text-accent" />
                    </span>
                    <h3 className="font-heading text-xl font-bold leading-snug text-primary">
                      {industry.name}
                    </h3>
                  </div>

                  <div className="mt-8 space-y-7">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Challenges
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {industry.challenges}
                      </p>
                    </div>

                    <div className="border-t border-border pt-6">
                      <p className="font-mono text-xs uppercase tracking-widest text-accent">
                        Our Solutions
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                        {industry.solutions}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="navy-deep" className="grid-overlay">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Tailored To Your Sector"
                title="Let's Talk About Your Industry"
                subtitle="Whatever your sector, our specialists translate domain knowledge into compliant, growth-focused solutions built around your business."
                light
                center
              />
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" withArrow>
                  Get in Touch
                </Button>
                <Button href="/services" variant="outline-light">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
