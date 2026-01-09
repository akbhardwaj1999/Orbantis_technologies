'use client'

import Hero from '@/components/sections/Hero'
import WhoWeAre from '@/components/sections/WhoWeAre'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SkillsSection from '@/components/sections/SkillsSection'
import Testimonials from '@/components/sections/Testimonials'
import ClientReviews from '@/components/sections/ClientReviews'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <WhoWeAre />
      <ClientReviews />
      <SkillsSection />
    </div>
  )
}
