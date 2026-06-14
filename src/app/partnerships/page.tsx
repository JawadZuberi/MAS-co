import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { partnerships, regions } from "@/content/data";

export const metadata: Metadata = {
  title: "International Partnerships & Global Advisory | MAS & Co",
  description:
    "MAS & Co extends its chartered accountancy and advisory expertise across borders through strategic alliances, global outsourcing, and international service delivery.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Reach"
        title="International Partnerships & Global Advisory"
        subtitle="Extending our expertise across borders through strategic alliances and international service delivery."
      />

      {/* Partnership pillars */}
      <Section variant="light">
        <Container>
          <SectionHeading
            eyebrow="How We Partner"
            title="A Network Built for Borderless Advisory"
            subtitle="Our alliances connect Pakistani enterprise with global markets — and global firms with trusted local execution."
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {partnerships.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="card-hover h-full rounded-xl border border-border bg-card p-8">
                  <div className="flex items-center justify-center rounded-xl bg-muted h-14 w-14">
                    <Icon name={item.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Regions we serve */}
      <Section variant="muted">
        <Container>
          <SectionHeading
            eyebrow="Worldwide Coverage"
            title="Regions We Serve"
            subtitle="Our international network spans key business hubs across the globe."
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, i) => (
              <Reveal key={region} delay={i * 0.05}>
                <div className="card-hover flex h-full items-center gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex shrink-0 items-center justify-center rounded-full bg-accent/10 h-12 w-12">
                    <Icon name="MapPin" className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-heading text-lg font-semibold text-primary">{region}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Global value highlight band */}
      <Section variant="navy-deep" className="grid-overlay">
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 h-16 w-16">
                <Icon name="Globe" className="h-7 w-7 text-accent" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Local Insight, Global Standards
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-white/55">
                Partnering across borders means our clients gain seamless advisory, audit, and
                taxation support wherever they operate — backed by Pakistan&rsquo;s deep talent pool
                and our commitment to international professional standards. Whether you are expanding
                into the region or sourcing skilled finance professionals abroad, MAS &amp; Co is
                your trusted bridge to global opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex justify-center">
                <Button href="/contact" variant="primary" withArrow>
                  Start a Global Conversation
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
