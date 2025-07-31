'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { CountdownUpperBorder } from '../../public/assets/icons/CountdownUpperBorder';
import { CountdownLowerBorder } from '../../public/assets/icons/CountdownLowerBorder';

const targetDate = new Date('2025-08-03T09:00:00');

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const router = useRouter();

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
      className="relative mt-12 bg-[#EF3187] text-white text-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/pattern.png')" }}
    >
        <CountdownUpperBorder/>
      <div className="px-8 py-16">
        <h2 className="text-4xl md:text-6xl pt-5 md:pt-15 font-semibold mb-2" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>Our First Event Kicks Off In...</h2>
        <p className="text-sm text-[#E2F1AE] pt-3 md:text-xl mb-10 font-light">The Countdown Begins! Our First Event Starts In...</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 pb-10 md:pb-20">
          {timeBlock(timeLeft?.days ?? 0, 'Days')}
          <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
          {timeBlock(timeLeft?.hours ?? 0, 'Hours')}
          <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
          {timeBlock(timeLeft?.minutes ?? 0, 'Minutes')}
          <div className="hidden md:flex items-center justify-center text-white text-3xl font-bold">:</div>
          {timeBlock(timeLeft?.seconds ?? 0, 'Seconds')}
        </div>
        <div className="flex justify-center pb-3 md:pb-5">
          {/* regis open */}
          <div
            onClick={() => router.push('/register')}
            className="flex bg-[#1C1719] text-[#FEF6EB] rounded-[10px] px-6 py-5 w-fit cursor-pointer justify-center items-center"
          >
            <p className="font-bold">Learn More About the Event</p>
          </div>
          {/* regis close */}
          <div className="hidden bg-gray-400 text-white rounded-[10px] px-6 py-5 w-fit cursor-not-allowed">
              <p className="font-bold">Registration Closed</p>
          </div>
        </div>
      </div>
      <CountdownLowerBorder/>
    </section>
  );
}