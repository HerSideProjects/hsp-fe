import React from 'react'
import { LineBackground } from '../../../../../public/assets/images/prev-event-vol1/line-background'
import { Carousel } from '../module-element/carousel'

const carouselImages = [
  '/assets/images/prev-event-vol1/carousel/foto1.png',
  '/assets/images/prev-event-vol1/carousel/foto2.png',
  '/assets/images/prev-event-vol1/carousel/foto3.png',
  '/assets/images/prev-event-vol1/carousel/foto4.png',
  '/assets/images/prev-event-vol1/carousel/foto5.png',
  '/assets/images/prev-event-vol1/carousel/foto6.png',
  '/assets/images/prev-event-vol1/carousel/foto7.png',
]

export const PreviousEvent = () => {

  return (
    <div className="relative w-full">
      <LineBackground className="absolute min-w-[1503px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full"/>
      <section 
        className="py-16 relative bg-cover bg-center overflow-hidden md:min-h-[750px] min-h-[670px] md:max-w-[1100px] left-1/2 -translate-x-1/2 flex flex-col" 
        style={{ backgroundImage: "url('/assets/images/prev-event-vol1/cardboard.png')" }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-center font-lostaMasta font-medium text-[#FEF6EB] md:text-5xl text-4xl shadow-previous-event px-3">
            Previously on Her Side Project...
          </p>
          <p className="md:text-3xl text-xl font-medium">First Event #GetInside Vol.1</p>
        </div>

        <Carousel images={carouselImages} />
      </section>
    </div>
  )
}