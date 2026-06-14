import { Container, Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="navy-section-deep relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
