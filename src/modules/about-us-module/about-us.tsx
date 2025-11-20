import React from 'react'
import VisiMisi from './sections/visi-misi'
import TeamSection from './sections/team-section'
import { AboutUsHero } from './sections/about-us-hero'


export const AboutUsModule = () => {
  return (
    <main className="flex-1 pt-32 pb-24 w-full mx-auto flex flex-col gap-12">
        <div className="px-8">
          <AboutUsHero />
        </div>
        <VisiMisi />
        <div className="px-8 overflow-scroll scroll-hidden">
          <TeamSection />
        </div>
      </main>
  )
}
