import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden md:min-h-[745.6px]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/assets/6b20d.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-center"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(246,239,225,0.98) 0%, rgba(246,239,225,0.9) 58%, rgba(246,239,225,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(246,239,225,0.95) 0%, rgba(246,239,225,0.3) 50%, rgba(246,239,225,0) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-cream/70 to-cream" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1500px] flex-col px-5 md:min-h-[745.6px] sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-1 flex-col items-start justify-center pb-24 pt-32 sm:pb-28">
          <p className="font-figtree font-medium text-xs leading-[22.75px] tracking-[0.2em] text-primary-muted sm:text-sm">
            MENTAL HEALTH <span aria-hidden="true">•</span> RESEARCH{" "}
            <span aria-hidden="true">•</span> CONSULTANCY
          </p>

          <h1 className="font-fraunces mt-6 max-w-[733px] text-[clamp(3.25rem,5.2vw,4.5rem)] leading-[1.08] text-heading-dark">
            Mental health support, shaped by evidence and culture.
          </h1>

          <p className="mt-8 max-w-[448px] text-base leading-[1.625] text-foreground sm:text-lg sm:leading-[29.25px]">
            We develop and deliver culturally adapted, evidence-based mental
            health interventions for individuals and communities across
            Ethiopia.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <a
              href="#our-work"
              className="font-figtree font-medium inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg leading-7 text-[#fbf8f1] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explore our work
              <img src="/assets/e46c3.svg" alt="" aria-hidden="true" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-3 text-base leading-6 text-primary transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="border-b border-primary/50 pb-0.5">
                For organizations
              </span>
              <img src="/assets/f2a41.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
