import Hero from '@/components/modules/landing-page-module/Hero'
import React from 'react'
import FirstEventSection from './firstEventSection'
import Countdown from '@/components/modules/landing-page-module/Countdown'

export const LandingPageModule = () => {
  return (
    <main className="flex-1 pt-32 px-8 pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-12">
            <Hero />
            <FirstEventSection />
            <Countdown />
        </div>
    </main>
)
}
