import React from 'react'
import { NextEventSection } from './sections/next-event-section'
import { PreviousEvent } from './sections/previous-event'
import Review from './sections/review'
import Hero from './sections/hero'
import Countdown from './sections/Countdown'


export const LandingPageModule = () => {
  return (
    <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto flex flex-col gap-12">
            <Hero />
            <PreviousEvent />
            <Review />
            <NextEventSection />
            <Countdown />
        </div>
    </main>
)
}
