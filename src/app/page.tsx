import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { PeopleSection } from "@/components/people-section"
import { OurWork } from "@/components/our-work"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-dvh bg-cream">
      <Hero />
      <WhatWeDo />
      <PeopleSection />
      <OurWork />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
