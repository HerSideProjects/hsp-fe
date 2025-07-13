'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";

const targetDate = new Date('2025-08-01T00:00:00');

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlock = (value: number, label: string) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute top-1 left-1 bg-lime-200 w-full h-full rounded-sm z-0 rotate-[2deg]" />
        <div className="bg-[#FFF4EC] shadow-lg text-[#520521] text-[32px] font-bold px-6 py-4 rounded-sm rotate-[1.5deg] z-10" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <p className="text-white text-sm mt-2 font-medium" style={{ fontFamily: 'Losta Masta Regular, sans-serif' }}>{label}</p>
    </div>
  );

  return (
    <section
      className="relative mt-12 bg-[#EF3187] text-white text-center px-8 py-16 rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/pattern.png')" }}
    >
      <Image
        src="/assets/images/top-decor.png"
        alt="Top Decoration"
        width={1335}
        height={50}
        className="absolute top-0 left-0 w-full h-auto pointer-events-none"
      />
      <h2 className="text-4xl md:text-6xl pt-5 md:pt-40 font-semibold mb-2" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>Registration Closed</h2>
      <p className="text-sm text-[#E2F1AE] pt-3 md:text-xl mb-10 font-light">Limited seats available, get yours now!</p>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 pb-5 md:pb-40">
        {timeBlock(timeLeft?.days ?? 0, 'Days')}
        <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
        {timeBlock(timeLeft?.hours ?? 0, 'Hours')}
        <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
        {timeBlock(timeLeft?.minutes ?? 0, 'Minutes')}
        <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
        {timeBlock(timeLeft?.seconds ?? 0, 'Seconds')}
      </div>
      <Image
        src="/assets/images/bottom-decor.png"
        alt="Bottom Decoration"
        width={1335}
        height={50}
        className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
      />
    </section>
  );
}