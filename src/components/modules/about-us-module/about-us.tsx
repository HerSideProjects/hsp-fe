import React from 'react'
import Hero from '../landing-page-module/sections/Hero'
import VisiMisi from '@/components/modules/about-us-module/VisiMisi'
import TeamSection from './teamSection'

export const AboutUsModule = () => {
  return (
    <main className="flex-1 pt-32 pb-24 w-full mx-auto flex flex-col gap-12">
        <div className="px-8">
          <Hero />
        </div>
        <VisiMisi />
        <div className="px-8 overflow-scroll scroll-hidden">
          <TeamSection />
        </div>
      </main>
  )
}
