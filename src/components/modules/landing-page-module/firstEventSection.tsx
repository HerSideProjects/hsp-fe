import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { LearnMoreArrow } from '../../../../public/assets/icons/LearnMoreArrow';

const FirstEventSection = () => {
  return (
    <section className="relative bg-[#FEF6EB] bg-cover bg-center border border-[#EF3187] rounded-3xl text-white overflow-hidden" style={{ backgroundImage: "url('/assets/images/bg-firstevent.png')" }}>
      <div className="flex rounded-[20px] overflow-hidden">
        <div className="flex flex-col min-[1096px]:p-12 justify-center min-[876px]:max-w-[375px] min-[934px]:max-w-full p-8 min-[876px]:py-11 min-[876px]:pl-8 min-[876px]:pr-0 min-[876px]:-mb-7 min-[876px]:-mt-7">
            <div className="mt-12 shadow-title">
              <p className="text-[#EF3187] font-lostaMasta text-6xl min-[876px]:text-6xl min-[1076px]:text-7xl min-[1256px]:text-8xl min-[1462px]:text-9xl min-[1256px]:-ml-24 min-[1563px]:text-[151px] min-[1076px]:-ml-16 -ml-14 min-[876px]:-ml-14 ">
                <span className="font-desirableCalligraphy">F</span>irst
              </p>
              <p className="text-[#EF3187] font-lostaMasta text-6xl min-[876px]:text-6xl min-[1076px]:text-7xl min-[1256px]:text-8xl min-[1462px]:text-9xl min-[1563px]:text-[151px] min-[876px]:-mt-5 -mt-5">
                event
              </p>
            </div>
            <p className="text-[#000000] max-w-6xl leading-relaxed md:pr-10 text-sm min-[966px]:text-base">We&apos;re kicking things off with <span className="font-bold">a flower pipecleaner workshop</span> – a refreshing escape where you can get creative with your hands. Beyond the crafting, it&apos;s also a chance to connect with other women who share your interests.</p>
            <Link
              href="/register"
              className="flex gap-2 w-fit mt-4 bg-[#EF3187] text-[#FEF6EB] font-semibold px-5 py-3 min-[876px]:px-7 min-[876px]:py-5 rounded-xl transition"
            >
              <p className="text-sm min-[876px]:text-base font-bold">Learn More</p>
              <LearnMoreArrow />
            </Link>
        </div>
        <div className="w-full min-[876px]:flex justify-center hidden">
            <Image
            src={"/assets/images/foto-bersama.png"}
            alt={"Foto Bersama"}
            width={782}
            height={772}
            className="w-full h-auto object-contain"
            priority
            />
        </div>
      </div>
    </section>
    );
};

export default FirstEventSection;
