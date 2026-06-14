import type { Metadata } from "next";
import { Container, Section, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — MAS & Co Chartered Accountants",
  description:
    "Get in touch with MAS & Co, a Karachi-based chartered accountancy and business advisory firm. Reach our team by phone, email, or WhatsApp — we respond within 24 hours.",
};

const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.contact.mapsQuery,
)}&output=embed`;

const whatsappDigits = site.contact.whatsapp.replace(/[^\d]/g, "");
const whatsappHref = `https://wa.me/${whatsappDigits}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Stronger Financial Foundations Together"
        subtitle="Reach out to our team of chartered accountants and advisors — we respond within 24 hours."
      />

      <Section variant="light">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            {/* LEFT — contact details */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon name="MapPin" className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-primary">
                        Visit Our Office
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {site.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon name="Mail" className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-primary">
                        Email Us
                      </h3>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="mt-1 inline-block text-sm text-muted-foreground transition hover:text-accent"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon name="Phone" className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-primary">
                        Call Us
                      </h3>
                      <div className="mt-1 flex flex-col gap-1">
                        {site.contact.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="text-sm text-muted-foreground transition hover:text-accent"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#1ebe5b] hover:shadow-md"
                  >
                    <Icon name="MessageCircle" className="h-5 w-5 text-white" />
                    Chat on WhatsApp
                  </a>

                  {/* Map */}
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <iframe
                      src={mapsSrc}
                      title="MAS & Co Office Location"
                      className="h-64 w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.05}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
