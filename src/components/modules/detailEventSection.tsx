import React from 'react';
import Image from "next/image"
import { YogaIcon } from '../../../public/assets/icons/YogaIcon';

interface DetailEventSectionProps {
    scrollToForm: () => void;
}


const DetailEventSection = ({ scrollToForm }: DetailEventSectionProps) => {
    return (
        <div className="bg-[#FEF6EB] w-full mx-auto min-h-screen md:pt-36 pt-32 flex flex-col gap-12">
            {/* atas */}
            <div className="flex min-[1070px]:flex-row flex-col items-center justify-between w-full overflow-x-hidden">

                {/* KIRI */}
                <div className="relative hidden md:block w-full max-w-[377px] h-[400px] md:h-[618px] shrink-1">
                    <Image
                        src="/assets/images/left-img.svg"
                        alt="Yoga Session Left"
                        fill
                        className="object-contain object-left"
                    />
                </div>

                {/* TENGAH */}
                <div className="flex flex-col gap-4 items-center text-center z-10 px-4">
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                        About the Event
                    </p>

                    <h1 className="text-[34px] md:text-5xl text-[#EF3187] leading-tight font-lostaMastaThin">
                        A morning <span className="font-lostaMasta">to reconnect</span><br />
                        and own your next <span className="font-lostaMasta">tech</span><br />
                        <span className="font-lostaMasta">career move</span>
                    </h1>

                    <div className="flex flex-col gap-4 mt-6 w-fit mx-auto">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:mb-8 items-center justify-center flex-nowrap">
                            <div className="bg-[#E2F1AE] rounded-2xl w-full px-5 py-3 whitespace-nowrap">
                                <p className="text-lg md:text-2xl font-medium">🗓️ Saturday, 6 December 2025</p>
                            </div>
                            <div className="bg-[#E2F1AE] rounded-2xl w-full px-5 py-3 whitespace-nowrap">
                                <p className="text-lg md:text-2xl font-medium">📍Gripa Studio, Jkt</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center relative">

                            {/* Price Box */}
                            <div className="bg-[#EF3187] text-white rounded-xl border-[3px] border-dashed border-[#FFFFFF] ring-2 ring-white outline outline-4 outline-[#EF3187] py-3 w-full text-center shadow-lg z-0">
                                <p className="text-xl md:text-3xl tracking-wide text-center md:text-left md:pl-5 text-[#E2F1AE]">
                                    Only for <b>Rp179,000</b>
                                </p>
                            </div>

                            <div className="w-[315px] h-[75px] md:w-[630px] md:h-[150px] -mt-3 md:-mt-18 md:-mr-150 relative z-10">
                                <Image
                                    src="/assets/images/bring-you-own-matt.svg"
                                    alt="Bring Your Own Matt"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* KANAN */}
                <div className="relative hidden md:block w-full max-w-[377px] h-[400px] md:h-[618px] shrink-1">
                    <Image
                        src="/assets/images/right-img.svg"
                        alt="Yoga Session Right"
                        fill
                        className="object-contain object-right"
                    />
                </div>

            </div>
            {/* BAWAH */}
            <div
                className="flex flex-col gap-8 py-12 px-4 items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-detail-event.png')" }}
            >
                <div className="max-w-5xl text-center">
                    <p className="text-[#4F5E31] text-base md:text-lg leading-relaxed font-medium">
                        We&apos;re kicking things off with a “<span className="font-bold">Step in Her Morning</span>”, is one of the sub-events under Her Side Project, designed to start the day with Yoga which wellness-focused activities that promote mindfulness and connection among participants, followed by an interactive sharing session from various technology fields (<span className="font-bold">e.g., Product Design, Product Management, Software Engineering, Mobile Development, Data Engineering, and more</span>).
                    </p>
                </div>

                <h2 className="font-lostaMasta text-[40px] md:text-6xl text-[#4F5E31] mt-4">
                    What You&apos;ll Get
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-4">
                    {[
                        {
                            icon: <YogaIcon />,
                            title: "Yoga Session",
                            desc: "There's will be 1-hour Yoga Session with our certified instructor"
                        },
                        {
                            icon: <Image
                                src="/assets/images/icon-chit-chat.svg"
                                alt="Chit Chat Icon"
                                width={60}
                                height={60}
                                className="object-contain"
                            />,
                            title: "Top-Tier Career Chit-Chat",
                            desc: "Sharing session with tech speaker in relevant expertise"
                        },
                        {
                            icon: <Image
                                src="/assets/images/icon-light-snack.svg"
                                alt="Chit Chat Icon"
                                width={60}
                                height={60}
                                className="object-contain"
                            />,
                            title: "Light Snacks",
                            desc: "Get tasty bites & refreshments to keep you energized"
                        },
                        {
                            icon: <Image
                                src="/assets/images/icon-goodie-bag.svg"
                                alt="Chit Chat Icon"
                                width={60}
                                height={60}
                                className="object-contain"
                            />,
                            title: "Goodie Bag",
                            desc: "Take home exclusive merch, cute stickers & surprise treats"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative w-[260px] h-[260px] flex items-center justify-center">
                            <Image
                                src="/assets/images/bg-benefit.svg"
                                alt="Benefit"
                                fill
                                className="object-contain"
                            />
                            <div className="relative z-10 flex flex-col items-center text-center px-6 gap-2">
                                <span className="text-3xl mb-1">{item.icon}</span>
                                <p className="font-lostaMasta text-2xl text-[#1C1719] leading-none">{item.title}</p>
                                <p className="text-16px text-[#1C1719] font-medium leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* regis open */}
                <div className="flex md:justify-end justify-center">
                    <div onClick={scrollToForm} className="bg-[#EF3187] text-[#FEF6EB] rounded-[10px] px-6 py-5 w-fit hover:bg-[#1C1719] cursor-pointer">
                        <p className="font-bold">Regist Now ↓</p>
                    </div>
                </div>
                {/* regis close */}
                <div className="hidden md:hidden flex md:justify-end justify-center">
                    <div className="bg-gray-400 text-white rounded-[10px] px-6 py-5 w-fit cursor-not-allowed">
                        <p className="font-bold">Registration Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailEventSection;
