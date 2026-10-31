"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { people } from "@/lib/data"

export function PeopleSection() {
  const [activePerson, setActivePerson] = useState(1)
  const [openBiography, setOpenBiography] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const featured = people[activePerson]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let frame = 0
    const updateActiveCard = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (carousel.clientWidth === 0) return
        const carouselCenter =
          carousel.getBoundingClientRect().left + carousel.clientWidth / 2
        const cards = Array.from(
          carousel.querySelectorAll<HTMLElement>("[data-person-card]"),
        )
        const closestIndex = cards.reduce(
          (closest, card, index) => {
            const bounds = card.getBoundingClientRect()
            const cardCenter = bounds.left + bounds.width / 2
            const distance = Math.abs(carouselCenter - cardCenter)
            return distance < closest.distance ? { index, distance } : closest
          },
          { index: 0, distance: Number.POSITIVE_INFINITY },
        ).index
        setActivePerson(closestIndex)
      })
    }

    carousel.addEventListener("scroll", updateActiveCard, { passive: true })
    updateActiveCard()
    return () => {
      carousel.removeEventListener("scroll", updateActiveCard)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="our-team"
      aria-labelledby="team-heading"
      className="bg-cream-light pt-2.5"
    >
      <h2 id="team-heading" className="sr-only">
        Our multidisciplinary team
      </h2>

      <div className="mx-auto hidden w-full max-w-[1280px] lg:block">
        <div
          className="grid min-h-[452px] grid-cols-2 bg-cream-warm"
          aria-live="polite"
        >
          <div className="relative min-h-[452px] overflow-hidden">
            <div className="absolute inset-x-0 top-[-35.5%] h-[177%]">
              <Image
                key={featured.image}
                src={`/assets/${featured.image}`}
                alt={featured.name}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover transition-opacity duration-500"
              />
            </div>
            <span className="font-libre absolute bottom-0 left-6 bg-cream-light/85 px-3 py-1 text-sm leading-5 text-heading backdrop-blur-lg">
              {String(activePerson + 1).padStart(2, "0")} / 04
            </span>
          </div>

          <div className="flex min-h-[452px] flex-col items-start justify-center px-12 py-12 xl:px-16">
            <div className="flex items-center gap-3">
              <p className="font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
                Featured professional
              </p>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-primary-muted-light/60"
              />
            </div>
            <h3 className="font-libre mt-6 text-[clamp(2.3rem,3.5vw,3rem)] leading-[1.25] text-heading">
              {featured.name}
            </h3>
            <p className="font-instrument mt-3 text-lg leading-7 text-muted-blue">
              {featured.role}
            </p>
            <p className="font-instrument mt-6 max-w-[512px] text-base leading-[26px] text-muted-blue">
              {featured.biography}
            </p>
            <a
              href={`#${featured.name.toLowerCase().replaceAll(" ", "-")}`}
              className="font-instrument font-medium mt-8 inline-flex items-center gap-3 border-b border-primary-muted-light pb-1 text-base leading-6 text-primary-muted-light transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-muted-light"
            >
              Read full biography
              <img src="/assets/44528.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex gap-6 px-14 pt-[30px] pb-16">
          <div className="w-[317px] shrink-0 pr-6">
            <div className="flex items-center gap-3">
              <p className="font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
                Our team
              </p>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-primary-muted-light/60"
              />
            </div>
            <p className="font-libre mt-6 text-4xl leading-[45px] text-heading">
              A multidisciplinary team with shared purpose.
            </p>
            <p className="font-instrument mt-6 text-base leading-[26px] text-muted-blue">
              Psychiatrists, clinical psychologists, researchers and mental
              health professionals, committed to evidence-based, culturally
              responsive care.
            </p>
            <p className="font-instrument font-medium mt-6 text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
              Hover a card to spotlight →
            </p>
          </div>

          <div className="flex min-w-0 flex-1 gap-6">
            {people.map((person, index) => {
              const isActive = activePerson === index
              return (
                <button
                  key={person.name}
                  type="button"
                  onMouseEnter={() => setActivePerson(index)}
                  onFocus={() => setActivePerson(index)}
                  onClick={() => setActivePerson(index)}
                  aria-pressed={isActive}
                  className={`min-w-0 basis-0 text-left transition-[flex,opacity,transform] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-muted-light ${
                    isActive
                      ? "flex-[1.18] -translate-y-2 opacity-100"
                      : "flex-1 opacity-60 hover:opacity-85"
                  }`}
                >
                  <span className="relative block aspect-[4/5] overflow-hidden">
                    <Image
                      src={`/assets/${person.image}`}
                      alt={person.name}
                      fill
                      sizes="240px"
                      className={`object-cover transition-transform duration-700 ${
                        isActive ? "scale-[1.04]" : "scale-100"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-primary-muted-light transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </span>
                  <span className="font-instrument mt-4 block text-[11px] leading-[16.5px] tracking-[0.18em] text-primary-muted-light uppercase">
                    {person.role}
                  </span>
                  <span className="font-libre mt-1 block text-xl leading-7 text-heading">
                    {person.name}
                  </span>
                  <span className="font-instrument mt-2 block text-sm leading-[22.75px] text-muted-blue">
                    {person.summary}
                  </span>
                  <span className="font-instrument mt-3 inline-flex items-center gap-2 text-sm leading-5 text-heading">
                    View profile
                    <img src="/assets/d51e9.svg" alt="" aria-hidden="true" />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="py-16 lg:hidden">
        <div className="px-5 sm:px-10">
          <div className="flex items-center gap-3">
            <p className="font-instrument font-medium text-xs leading-4 tracking-[0.2em] text-primary-muted-light uppercase">
              Our team
            </p>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-primary-muted-light/60"
            />
          </div>
          <p className="font-libre mt-6 max-w-xl text-[clamp(2rem,7vw,2.75rem)] leading-[1.22] text-heading">
            A multidisciplinary team with shared purpose.
          </p>
          <p className="font-instrument mt-5 max-w-xl text-base leading-[26px] text-muted-blue">
            Psychiatrists, clinical psychologists, researchers and mental health
            professionals, committed to evidence-based, culturally responsive
            care.
          </p>
          <p className="font-instrument font-medium mt-6 text-xs tracking-[0.18em] text-primary-muted-light uppercase">
            Swipe to meet the team →
          </p>
        </div>

        <div
          ref={carouselRef}
          aria-label="Team members"
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[9vw] pb-2 sm:px-10"
        >
          {people.map((person, index) => {
            const isActive = activePerson === index
            const isOpen = openBiography === index
            return (
              <article
                key={person.name}
                data-person-card
                className="w-[82vw] max-w-[430px] shrink-0 snap-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e4da]">
                  <Image
                    src={`/assets/${person.image}`}
                    alt={person.name}
                    fill
                    sizes="(min-width: 640px) 430px, 82vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isActive ? "scale-[1.045]" : "scale-100"
                    }`}
                  />
                </div>
                <div
                  className={`h-1 origin-left bg-primary-muted-light transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <p className="font-instrument mt-5 text-xs leading-4 tracking-[0.18em] text-primary-muted-light uppercase">
                  {person.role}
                </p>
                <h3 className="font-libre mt-2 text-2xl leading-8 text-heading">
                  {person.name}
                </h3>
                <p className="font-instrument mt-3 text-sm leading-[22.75px] text-muted-blue">
                  {person.summary}
                </p>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`bio-${index}`}
                  onClick={() => setOpenBiography(isOpen ? null : index)}
                  className="font-instrument font-medium mt-5 inline-flex items-center gap-2 border-b border-primary-muted-light pb-1 text-sm leading-5 text-primary-muted-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-muted-light"
                >
                  {isOpen ? "Close biography" : "Read full biography"}
                  <span
                    aria-hidden="true"
                    className={`text-lg leading-none transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`bio-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-instrument pt-4 text-sm leading-6 text-muted-blue">
                      {person.biography}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex items-center gap-5 px-5 sm:px-10">
          <p
            className="font-libre w-14 text-sm leading-5 text-heading"
            aria-live="polite"
          >
            {String(activePerson + 1).padStart(2, "0")} / 04
          </p>
          <div className="h-px flex-1 overflow-hidden bg-line">
            <div
              className="h-full origin-left bg-primary-muted-light transition-[width] duration-500 ease-out"
              style={{
                width: `${((activePerson + 1) / people.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
