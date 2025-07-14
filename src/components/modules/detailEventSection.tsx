import React from 'react';
import Image from "next/image"
import { RingIcon } from '../../../public/assets/icons/RingIcon';

interface DetailEventSectionProps {
    scrollToForm: () => void;
}


const DetailEventSection = ({scrollToForm} : DetailEventSectionProps) => {
  return (
    <div className="bg-[#FEF6EB] min-h-screen md:pt-36 pt-32 md:px-16 px-8 flex flex-col gap-12 pb-40 md:pb-20 scroll-hidden">
        <div className="flex min-[1070px]:flex-row flex-col md:gap-12">
            <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:items-center md:gap-6">
                <div>
                <RingIcon/>
                </div>
                <div className="flex flex-col text-[56px] md:text-6xl font-lostaMasta">
                <p className="text-[#1C1719]">About</p>
                <p className="text-[#EF3187] md:-mt-0 -mt-3 -mb-3 md:-mb-0">The Event</p>
                </div>
            </div>
            <div>
                <p className="md:text-2xl text-xl max-w-5/6">We&apos;re kicking things off with a flower pipecleaner workshop – a refreshing escape where you can get creative with your hands. Beyond the crafting, it&apos;s also a chance to connect with other women who share your interests.</p>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
                <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="md:text-2xl text-xl">🗓️ Sunday, 3 August 2025</p>
                </div>
                <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="md:text-2xl text-xl">📍Kopi Nako Depok</p>
                </div>
            </div>
            </div>
            <div className="relative md:min-w-[500px] h-[350px]">
            <Image
                src="/assets/images/bersama-details.png"
                alt="foto bersama"
                fill
                className="object-contain"
            />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <p className="font-lostaMasta text-[32px]">Benefits You&apos;ll Love:</p>
            <div className="flex md:flex-row flex-col gap-6">
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
                <p className="text-2xl font-lostaMasta">Hands-On Creative Escape</p>
                <p>Refresh your mind as our dedicated mentor guides you through crafting charming flower pipe cleaners.</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
                <p className="text-2xl font-lostaMasta">Connect with STEM Stars</p>
                <p>Open conversations with inspiring mentors from diverse STEM fields. Ask your questions, share your journey, and gain insights</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
                <p className="text-2xl font-lostaMasta">Build Your Supportive Circle</p>
                <p>Expand your network, share experiences, and find encouragement in a friendly, low-pressure environment.</p>
            </div>
            </div>
        </div>
        <div className="flex md:justify-end justify-center">
            <div onClick={scrollToForm} className="bg-[#1C1719] text-[#FEF6EB] rounded-[10px] px-6 py-5 w-fit cursor-pointer">
            <p className="font-bold">Regist Now ↓</p>
            </div>
        </div>
    </div>
    );
};

export default DetailEventSection;
