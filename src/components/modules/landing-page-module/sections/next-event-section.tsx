import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { NextEventTitle } from '../../../../../public/assets/icons/next-event/next-event-title'
import { LearnMoreArrow } from '../../../../../public/assets/icons/LearnMoreArrow'

export const NextEventSection = () => {
  return (
    <section className="relative bg-[#FEF6EB] bg-cover bg-center border border-[#669C46] rounded-3xl text-white overflow-hidden" style={{ backgroundImage: "url('/assets/images/bg-next-event.png')" }}>
    <div className="flex rounded-[20px]">
        <div className="flex flex-col w-full">
            <div>
                <NextEventTitle className="min-[1062px]:mt-10 min-[1291px]:w-[560px] min-[1062px]:w-[460px] min-[524px]:w-[400px] min-[899px]:mb-5 min-[700px]:mb-24 min-[524px]:mb-32 -mt-10 w-[322px] mb-14"/>
            </div>
            <div className="w-full min-[524px]:h-[349px] h-[200px] relative flex z-20 bottom-0 ">
                <div className="absolute w-full h-full left-1/2 -translate-x-1/2">
                    <Image
                        src={"/assets/images/next-event-image.png"}
                        alt={"Foto Bersama"}
                        width={1358}
                        height={349}
                        className="w-full h-full object-cover object-center"
                        priority
                    />
                </div>
            </div>
            <div className="absolute right-0 min-[524px]:bottom-[175px] bottom-28 min-[1291px]:w-[684px] min-[1062px]:w-[584px] min-[524px]:w-[484px] w-[300px]">
                <div className="relative w-full h-full">
                    <Image
                        src={"/assets/images/text-background.png"}
                        alt={"Foto Bersama"}
                        width={795}
                        height={458}
                        className="w-full h-auto object-contain"
                        priority
                    />
                    <p className="text-[#475516] absolute inset-0 justify-end rotate-[1.64deg] text-right min-[1291px]:text-2xl min-[1062px]:text-xl min-[524px]:text-base text-xs min-[1291px]:leading-[37px] min-[524px]:leading-8 min-[524px]:px-7 px-3 min-[1291px]:pt-32 min-[1062px]:pt-28 min-[524px]:pt-20 pt-14">We're kicking things off with a "Step in Her Morning", designed to <span className="font-bold">start the day with Yoga</span> which wellness-focused activities that promote mindfulness and connection among participants, followed by an interactive <span className="font-bold">sharing session from various technology fields</span></p>
                </div>
            </div>
            <Link
                href="/register"
                className="absolute flex gap-2 w-fit mt-4 bg-[#EF3187] text-[#FEF6EB] font-semibold px-5 py-3 min-[876px]:px-7 min-[876px]:py-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#EF3187]/50 group bottom-0 right-0 min-[524px]:mb-16 mb-10 mr-8 min-[524px]:mr-16 z-20">
                <p className="text-sm min-[876px]:text-base font-bold">Learn More</p>
                <LearnMoreArrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    </div>
    </section>
  )
}
