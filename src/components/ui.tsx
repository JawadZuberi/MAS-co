import Link from "next/link";
import { icons } from "lucide-react";
import { ArrowRight } from "lucide-react";

/* ---------------- Icon ---------------- */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name as keyof typeof icons] ?? icons.Sparkles;
  return <Cmp className={className} strokeWidth={1.6} />;
}

/* ---------------- Container ---------------- */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

/* ---------------- Section ---------------- */
export function Section({
  children,
  className = "",
  variant = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "muted" | "navy" | "navy-deep";
  id?: string;
}) {
  const bg =
    variant === "navy"
      ? "navy-section"
      : variant === "navy-deep"
        ? "navy-section-deep"
        : variant === "muted"
          ? "bg-muted/40"
          : "bg-background";
  return (
    <section id={id} className={`relative ${bg} py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${light ? "text-accent-soft" : "text-accent"}`}>
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 ${center ? "flex justify-center" : ""}`}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/55" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------- Button ---------------- */
type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "outline-light";
  className?: string;
  withArrow?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", withArrow }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-7 h-12 text-sm font-medium font-body transition-all duration-300";
  const styles = {
    primary: "bg-accent text-accent-foreground hover:bg-accent-soft shadow-sm hover:shadow-md",
    outline: "border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
    "outline-light": "border border-white/25 text-white hover:bg-white/10",
    ghost: "text-accent hover:text-accent-soft",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
