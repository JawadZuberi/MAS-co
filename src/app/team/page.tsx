import type { Metadata } from "next";
import { Container, Section, Button, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { team } from "@/content/data";

export const metadata: Metadata = {
  title: "Leadership & Professional Team | MAS & Co",
  description:
    "Meet the chartered accountants and advisors behind MAS & Co — a team of experienced professionals with diverse expertise across audit, taxation, and business advisory.",
};

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Leadership & Professional Team"
        subtitle="Our team of experienced professionals brings diverse expertise and a shared commitment to excellence."
      />

      <Section>
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              Behind every engagement is a team of seasoned chartered accountants, tax
              specialists, and advisors united by precision, integrity, and a relentless focus on
              client success.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.05}>
                <article className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  <div className="flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1c3066] font-heading text-lg font-bold text-white shadow-sm ring-1 ring-accent/30"
                    >
                      {initials(member.name)}
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-heading text-lg font-bold leading-snug text-primary">
                        {member.name}
                      </h2>
                      <p className="mt-0.5 text-sm font-medium text-accent">{member.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {member.specialty}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors"
                    >
                      <Icon name="Globe" className="h-4 w-4" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors"
                    >
                      <Icon name="Mail" className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="navy-deep" className="grid-overlay">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Want to join our team?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              We are always looking for ambitious professionals who share our commitment to
              excellence. Explore current opportunities and grow your career with MAS &amp; Co.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/careers" variant="primary" withArrow>
                View Careers
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
