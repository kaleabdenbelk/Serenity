import { Eyebrow } from "@/components/ui/eyebrow"
import Image from "next/image"
import { highlights } from "@/lib/data"

export function OurWork() {
  return (
    <section
      id="our-work"
      aria-labelledby="impact-heading"
      className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24 xl:pb-28"
    >
      <Eyebrow>OUR WORK IN PRACTICE</Eyebrow>

      <h2
        id="impact-heading"
        className="font-fraunces mt-4 text-[clamp(2.6rem,5vw,3.5rem)] leading-[1.12] text-heading-dark"
      >
        Real support. Lasting impact.
      </h2>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(390px,1fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <div className="relative aspect-[868/511] overflow-hidden rounded-lg">
            <Image
              src="/assets/60aa2.png"
              alt="A Serenity facilitator leading a trauma-informed care training for healthcare professionals"
              fill
              sizes="(min-width: 1024px) 868px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            aria-label="Slide 1 of 3"
            className="mt-6 flex items-center gap-2 text-sm leading-5 text-foreground"
          >
            <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />
            <span aria-hidden="true" className="h-0.5 w-10 bg-[#e2e8f0]" />
            <span aria-hidden="true" className="h-0.5 w-10 bg-[#e2e8f0]" />
            <span className="ml-4">01 / 03</span>
          </div>
        </div>

        <div>
          <Eyebrow>PROGRAMME HIGHLIGHT</Eyebrow>

          <h3 className="font-fraunces mt-5 max-w-[530px] text-[clamp(2.25rem,4vw,3.2rem)] leading-[1.1] text-heading-dark">
            Strengthening trauma-informed care
          </h3>

          <p className="mt-6 max-w-[530px] text-base leading-[1.625] text-foreground sm:text-lg sm:leading-[29.25px]">
            Serenity announced trauma-informed care and therapy training for
            48 healthcare professionals from health centres and hospitals
            serving North Wollo and Wag Himra.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 min-[480px]:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.icon} className="flex min-w-0 items-start gap-4">
                <img
                  src={`/assets/${item.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="mt-1 h-7 w-7 shrink-0"
                />
                <div className="min-w-0">
                  {item.secondary === "In collaboration with" ||
                  item.secondary === "Supported by" ? (
                    <>
                      <dt className="text-sm leading-5 text-foreground">
                        {item.secondary}
                      </dt>
                      <dd className="font-fraunces text-lg leading-7 text-heading-dark">
                        {item.primary}
                      </dd>
                    </>
                  ) : (
                    <>
                      <dd className="font-fraunces text-lg leading-7 text-heading-dark">
                        {item.primary}
                      </dd>
                      <dt className="text-sm leading-5 text-foreground">
                        {item.secondary}
                      </dt>
                    </>
                  )}
                </div>
              </div>
            ))}
          </dl>

          <a
            href="#our-work"
            className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-base leading-6 text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Explore our work
            <img
              src="/assets/f2a41.svg"
              alt=""
              aria-hidden="true"
              className="h-4 w-4"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
