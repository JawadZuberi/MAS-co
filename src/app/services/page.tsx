import type { Metadata } from "next";
import { Container, Section, Icon, Button, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { services } from "@/content/data";

export const metadata: Metadata = {
  title: "Our Services — MAS & Co",
  description:
    "A full spectrum of audit, taxation, advisory, outsourcing, and digital transformation services tailored to the unique needs of each client.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Professional Services"
        subtitle="We deliver a full spectrum of financial, advisory, and consultancy solutions tailored to the unique needs of each client."
      />

      {/* Quick nav */}
      <Section variant="light" className="!py-10">
        <Container>
          <Reveal>
            <nav aria-label="Service quick navigation" className="flex flex-wrap items-center gap-3">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  <Icon name={service.icon} className="h-4 w-4 text-accent" />
                  {service.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </Section>

      {/* Detail rows */}
      {services.map((service, index) => {
        const zebra = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-16 md:py-20 ${zebra ? "bg-muted/40" : "bg-background"}`}
          >
            <Container>
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left: intro */}
                <Reveal className={zebra ? "lg:order-2" : ""}>
                  <Eyebrow>{`Service 0${index + 1}`}</Eyebrow>
                  <div className="mt-6 flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                      <Icon name={service.icon} className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold leading-tight text-primary md:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{service.long}</p>
                  <div className="mt-8">
                    <Button href="/contact" variant="outline" withArrow>
                      Discuss this service
                    </Button>
                  </div>
                </Reveal>

                {/* Right: features card */}
                <Reveal delay={0.1} className={zebra ? "lg:order-1" : ""}>
                  <div className="card-hover rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <h3 className="font-heading text-lg font-semibold text-primary">What we deliver</h3>
                    <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                            <Icon name="Check" className="h-3.5 w-3.5 text-accent" />
                          </span>
                          <span className="text-sm leading-relaxed text-primary/85">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* CTA band */}
      <Section variant="navy-deep" className="relative overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-60" />
        <Container className="relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow light>Let&apos;s Talk</Eyebrow>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Not sure which service fits?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              Our partners will help you map the right combination of audit, tax, and advisory services to your
              business goals. Book a no-obligation consultation today.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" withArrow>
                Book Consultation
              </Button>
              <Button href="/contact" variant="outline-light">
                Contact Our Team
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
