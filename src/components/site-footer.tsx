import Image from "next/image"
import { navigation } from "@/lib/data"

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shimeket+Commercial+Center+Mekanisa+Addis+Ababa"

const labelClasses =
  "font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-cream/60 uppercase"

const linkClasses =
  "font-instrument text-base leading-6 text-cream/80 transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-cream">
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-10 pt-16 sm:px-10 sm:pt-20 lg:px-16 xl:px-24">
        <p className="font-fraunces max-w-[900px] text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.12]">
          Better mental health. A stronger Ethiopia.
        </p>

        <div className="mt-14 grid gap-12 border-t border-cream/15 pt-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-cream px-3.5 py-2">
                <Image
                  src="/assets/fac4e.svg"
                  alt=""
                  width={64}
                  height={34}
                  className="h-auto w-16"
                />
              </span>
              <span className="font-fraunces text-2xl leading-8">Serenity</span>
            </div>
            <p className="font-instrument mt-6 max-w-[360px] text-base leading-[26px] text-cream/70">
              Culturally adapted, evidence-based mental health interventions
              for individuals and communities across Ethiopia.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className={labelClasses}>Navigate</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={linkClasses}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={labelClasses}>Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="tel:+251946841200" className={linkClasses}>
                  +251 94 684 1200
                </a>
              </li>
              <li>
                <a href="mailto:info@serenityethiopia.org" className={linkClasses}>
                  info@serenityethiopia.org
                </a>
              </li>
              <li className="font-instrument text-base leading-6 text-cream/80">
                Shimeket Commercial Center
                <br />
                10th Floor · Office 103
                <br />
                Mekanisa, Addis Ababa
              </li>
              <li>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClasses}
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-instrument text-sm leading-5 text-cream/60">
            © 2026 Serenity Mental Health Services. All
            rights reserved.
          </p>
          <p className="font-instrument text-sm leading-5 text-cream/60">
            If you are in crisis, please call us directly at{" "}
            <a
              href="tel:+251946841200"
              className="text-cream/80 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              +251 94 684 1200
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
