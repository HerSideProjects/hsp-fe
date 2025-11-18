import Hero from '@/components/modules/landing-page-module/sections/Hero'
import React from 'react'
import Countdown from '@/components/modules/landing-page-module/sections/Countdown'
import { NextEventSection } from './sections/next-event-section'

export const LandingPageModule = () => {
  return (
    <main className="flex-1 pt-32 px-8 pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-12">
            <Hero />
            <NextEventSection />
            <Countdown />
        </div>
    </main>
)
}
