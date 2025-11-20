"use client"

import { useEffect, useRef } from 'react'
import { GridBackground } from '../../../../public/assets/images/prev-event-vol1/grid-background'
import { Review1 } from '../../../../public/assets/images/prev-event-vol1/reviews/review1'
import { Review2 } from '../../../../public/assets/images/prev-event-vol1/reviews/review2'
import { Review3 } from '../../../../public/assets/images/prev-event-vol1/reviews/review3'
import { Review4 } from '../../../../public/assets/images/prev-event-vol1/reviews/review4'
import { Review5 } from '../../../../public/assets/images/prev-event-vol1/reviews/review5'
import { Review6 } from '../../../../public/assets/images/prev-event-vol1/reviews/review6'

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollContent = scrollContainer.firstElementChild
    if (!scrollContent) return

    scrollContainer.appendChild(scrollContent.cloneNode(true))

    const animate = () => {
      if (!scrollContainer) return
      
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1 // Adjust speed here
      }
    }

    const animation = setInterval(animate, 30) // Adjust interval for speed
    return () => clearInterval(animation)
  }, [])

  return (
     <div className="relative w-full h-full flex justify-center items-center md:py-12 overflow-hidden">
          <GridBackground className="absolute left-1/2 -translate-x-1/2 w-full md:min-w-[2700px] min-w-[2000px] z-0"/>
          <div ref={scrollRef} className="flex gap-4 z-20 overflow-x-hidden py-4">
            <Review1 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
            <Review2 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
            <Review3 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
            <Review4 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
            <Review5 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
            <Review6 className="md:min-w-[433px] min-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full"/>
          </div>
    </div>
  )
}