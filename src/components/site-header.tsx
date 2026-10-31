"use client"

import { useEffect, useRef, useState } from "react"
import { navigation } from "@/lib/data"

const SCROLLSPY_OFFSET = 140

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)

        let current = "home"
        for (const item of navigation) {
          const el = document.getElementById(item.href.slice(1))
          if (el && el.getBoundingClientRect().top <= SCROLLSPY_OFFSET) {
            current = item.href.slice(1)
          }
        }
        setActive(current)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)")
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-line/70 bg-cream/90 shadow-[0_1px_12px_rgba(24,43,35,0.06)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16 xl:px-24">
          <a
            href="#home"
            aria-label="Serenity home"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <img src="/assets/fac4e.svg" alt="" />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-start gap-8 lg:flex xl:gap-14"
          >
            {navigation.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`pb-1 text-base leading-6 transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    isActive
                      ? "font-figtree font-medium border-b-[1.6px] border-primary text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-figtree font-medium rounded-full bg-primary px-4 py-2.5 text-sm leading-6 text-[#fbf8f1] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-7 sm:py-3 sm:text-base"
            >
              <span className="sm:hidden">Consultation</span>
              <span className="hidden sm:inline">Book a Consultation</span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute left-1/2 h-0.5 w-6 bg-heading transition-all duration-300 ${
                  open
                    ? "-translate-x-1/2 rotate-45"
                    : "-translate-x-1/2 -translate-y-[5px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute left-1/2 h-0.5 w-6 bg-heading transition-all duration-300 ${
                  open
                    ? "-translate-x-1/2 -rotate-45"
                    : "-translate-x-1/2 translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pt-28 pb-10 sm:px-10">
          <p className="font-figtree font-medium text-xs leading-[22.75px] tracking-[0.2em] text-primary-muted sm:text-sm">
            MENTAL HEALTH <span aria-hidden="true">•</span> RESEARCH{" "}
            <span aria-hidden="true">•</span> CONSULTANCY
          </p>

          <nav
            aria-label="Mobile navigation"
            className={`mt-10 flex flex-col gap-6 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {navigation.map((item, index) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 font-libre text-3xl leading-10 transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    isActive ? "text-primary" : "text-heading"
                  }`}
                >
                  <span className="font-instrument text-xs tracking-[0.18em] text-primary-muted-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="mt-auto pt-12">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-figtree font-medium flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-8 text-lg leading-7 text-[#fbf8f1] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
