import Image from "next/image"
import { services } from "@/lib/data"

export function WhatWeDo() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-cream-light">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <p className="font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
            02 — What we do
          </p>
          <span
            aria-hidden="true"
            className="h-px w-12 bg-primary-muted-light/60"
          />
        </div>

        <h2
          id="services-heading"
          className="font-libre mt-8 max-w-[768px] text-[clamp(2rem,3vw,2.25rem)] leading-[1.33] text-heading"
        >
          Mental-health expertise, put into practice in two ways.
        </h2>
        <p className="font-instrument mt-1 max-w-[512px] text-base leading-[26px] text-muted-blue">
          Serenity provides clinical support to individuals and works with
          organisations to develop and deliver mental-health interventions.
        </p>

        <div className="mt-[30px] grid lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={
                index === 0
                  ? "border-b border-line pb-12 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0"
                  : "pt-12 lg:pt-0 lg:pl-8"
              }
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={`/assets/${service.image}`}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="font-instrument font-medium mt-8 text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
                {service.number} / {service.audience}
              </p>
              <h3 className="font-libre mt-2 text-[clamp(1.8rem,3vw,2.25rem)] leading-10 text-heading">
                {service.title}
              </h3>
              <p className="font-instrument mt-4 max-w-96 text-base leading-[26px] text-muted-blue">
                {service.description}
              </p>

              <ul className="font-instrument mt-6 space-y-2 text-base leading-6 text-muted-blue">
                {service.items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                      className="inline-flex items-center gap-3 transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-muted-light"
                    >
                      {item}
                      <img
                        src="/assets/a541a.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={index === 0 ? "#clinical-services" : "#organisational-work"}
                className="font-instrument font-medium mt-10 inline-flex items-center gap-3 border-b border-heading pb-1 text-base leading-6 text-heading transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-heading"
              >
                {service.link}
                <img src="/assets/d51e9.svg" alt="" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
