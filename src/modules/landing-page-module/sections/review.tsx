"use client"

import { GridBackground } from '../../../../public/assets/images/prev-event-vol1/grid-background'
import { Review1 } from '../../../../public/assets/images/prev-event-vol1/reviews/review1'
import { Review2 } from '../../../../public/assets/images/prev-event-vol1/reviews/review2'
import { Review3 } from '../../../../public/assets/images/prev-event-vol1/reviews/review3'
import { Review4 } from '../../../../public/assets/images/prev-event-vol1/reviews/review4'
import { Review5 } from '../../../../public/assets/images/prev-event-vol1/reviews/review5'
import { Review6 } from '../../../../public/assets/images/prev-event-vol1/reviews/review6'

export default function ReviewSection() {
  return (
     <div className="relative w-full h-full flex justify-center items-center md:py-12 py-5 overflow-hidden">
          <GridBackground className="absolute left-1/2 -translate-x-1/2 w-full md:min-w-[2700px] min-w-[2000px] z-0"/>
          <div className="flex whitespace-nowrap overflow-x-hidden py-2 gap-4">
            <div className="flex items-center space-x-4 animate-scroll">
              <Review1 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review2 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review3 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review4 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review5 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review6 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
            </div>
            <div className="flex items-center space-x-4 animate-scroll" aria-hidden="true">
              <Review1 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review2 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review3 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review4 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review5 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
              <Review6 className="md:max-w-[433px] max-w-[310px] transition-transform duration-100 hover:scale-[1.02] hover:rotate-1 h-full will-change-transform"/>
            </div>
          </div>
    </div>
  )
}