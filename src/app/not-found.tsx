import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.28),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <p className="font-heading text-7xl font-bold leading-none text-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" withArrow>
            Back to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
