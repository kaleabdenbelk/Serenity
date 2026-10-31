import Image from "next/image"
import { ContactForm } from "@/components/ui/contact-form"

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shimeket+Commercial+Center+Mekanisa+Addis+Ababa"

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Shimeket%20Commercial%20Center%2C%20Mekanisa%2C%20Addis%20Ababa%2C%20Ethiopia&z=16&output=embed"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-cream-soft"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24 xl:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3">
              <p className="font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
                05 — Get in touch
              </p>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-primary-muted-light/60"
              />
            </div>

            <h2
              id="contact-heading"
              className="font-libre mt-8 text-[clamp(2rem,3vw,2.25rem)] leading-[1.33] text-heading"
            >
              Let&rsquo;s start a conversation.
            </h2>
            <p className="font-instrument mt-1 max-w-[512px] text-base leading-[26px] text-muted-blue">
              Whether you&rsquo;re seeking support or exploring a
              collaboration, we&rsquo;d be glad to hear from you.
            </p>

            <address className="font-instrument mt-6 space-y-1.5 not-italic text-base leading-6 text-foreground">
              <p>
                <a
                  href="tel:+251946841200"
                  className="transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  +251 94 684 1200
                </a>
                {" · "}
                <a
                  href="mailto:info@serenityethiopia.org"
                  className="transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  info@serenityethiopia.org
                </a>
              </p>
              <p>Shimeket Commercial Center, 10th Floor · Office 103</p>
              <p>Mekanisa, Addis Ababa</p>
            </address>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-line bg-cream-light">
              <iframe
                title="Map showing Serenity at Shimeket Commercial Center, Mekanisa, Addis Ababa"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[320px] w-full border-0 sm:h-[380px] lg:h-[420px]"
              />

              <div className="flex flex-col gap-4 border-t border-line px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-libre text-xl leading-7 text-heading">
                    Shimeket Commercial Center
                  </h3>
                  <p className="font-instrument mt-1 text-base leading-6 text-muted-blue">
                    10th Floor · Office 103, Mekanisa, Addis Ababa
                  </p>
                </div>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-instrument font-medium inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-base leading-6 text-primary transition-colors hover:bg-[#e4efdf] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Get directions
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <figure className="mt-6 overflow-hidden rounded-2xl border border-line bg-cream-light">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/assets/contact-building.jpg"
                  alt="Serenity's office building — Shimeket Commercial Center in Mekanisa, Addis Ababa"
                  fill
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-instrument border-t border-line px-6 py-4 text-sm leading-5 text-muted-blue">
                Look for the Serenity sign at the main entrance — 10th Floor,
                Office 103.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
