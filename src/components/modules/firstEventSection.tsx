import React from 'react';
import Image from "next/image"
import Link from "next/link"

const FirstEventSection = () => {
  return (
    <section className="relative bg-[#FEF6EB] bg-cover bg-center border border-[#EF3187] rounded-3xl text-white overflow-hidden" style={{ backgroundImage: "url('/assets/images/bg-firstevent.png')" }}>
            <div className="flex rounded-[20px] overflow-hidden">
              <div className="flex flex-col p-12 justify-center">
                  <div className="ml-16 shadow-title">
                    <p className="text-[#EF3187] font-lostaMasta text-[151px] -ml-36"><span className="font-desirableCalligraphy">F</span>irst</p>
                    <p className="text-[#EF3187] font-lostaMasta text-[151px] -mt-28">event</p>
                  </div>
                  <p className="text-[#000000] max-w-6xl leading-relaxed pr-10">A space for women in STEM to slow down, create with their hands, and connect with kindred spirits. We know <span className="font-bold">the grind—labs, codes, deadlines</span>. But there’s another side of us that’s just as powerful: the one that crafts, blooms, and breathes.</p>
                  <Link
                    href="/register"
                    className="inline-block w-fit mt-8 bg-[#EF3187] text-[#FEF6EB] text-base md:text-2xl font-semibold px-5 py-3 md:px-7 md:py-5 rounded-xl  transition"
                  >
                    Register First Event! ↗
                  </Link>
              </div>
              <div className="w-full flex justify-center">
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
