import React from 'react'
import { TitleBackground } from '../../../../../public/assets/images/hero/bg-title'

export const AboutUsHero = () => {
  return (
    <section className="md:mx-8 min-h-[706px] relative bg-[#EF3187] bg-cover bg-center overflow-hidden rounded-3xl px-8 md:px-12 flex items-center justify-center" style={{ backgroundImage: "url('/assets/images/hero/bg-about-us.png')" }}>
        <div className="relative flex items-center justify-center">
            <TitleBackground className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[706px] h-[300px] "/>
            <div className="z-20 text-center">
            <p className="font-lostaMasta lg:text-[77px] md:text-[57px] text-2xl lg:-mb-2 text-[#EF3187]">Hi! <span className="text-black">We are</span></p>
            <p className="font-lostaMasta text-[#EF3187] lg:text-[111px] md:text-[80px] text-4xl font-medium">Her Side Project</p>
            <p className="min-[768px]:px-1 min-[1039px]:px-20 min-[1200px]:px-56 min-[1440px]:px-80 min-[1640px]:px-96 min-[507px]:px-12 min-[585px]:px-20 min-[643px]:px-28 px-2 text-[#EF3187] md:text-2xl text-xs">A space for women in STEM to explore their passions beyond the classroom or workplace — a creative playground where ideas turn into action.</p>
            </div>
        </div>
    </section>
  )
}
