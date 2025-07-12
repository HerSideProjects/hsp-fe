import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-[#EF3187] bg-cover bg-center overflow-hidden rounded-3xl shadow-xl px-8 pt-8 md:px-12 md:pt-8 text-white" style={{ backgroundImage: "url('/assets/images/bg-hero.png')" }}>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5 pt-4">
                    <span className="inline-block bg-lime-100 text-gray-900 font-semibold px-3 py-1 rounded-full mb-3">
                        Girls Community
                    </span>
                    <h1 className="text-[64px] md:text-[120px] pt-8 leading-none mb-4 text-white" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>
                        Her Side <br /> Project
                    </h1>
                    <p className="text-base md:text-2xl text-white mb-6">
                        A space for women in STEM to slow down, create with their hands, and connect with kindred spirits. We know the grind—labs, codes, deadlines. But there&rsquo;s another side of us that&rsquo;s just as powerful: the one that crafts, blooms, and breathes.
                    </p>
                </div>

                <div className="md:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0">
                    <Image
                        src="/assets/images/magnifier.png"
                        alt="Magnifier"
                        width={443}
                        height={611}
                        className="hidden md:block w-[71%] max-w-sm md:max-w-full h-auto object-contain self-center"
                    />
                </div>
            </div>
        </section>
    )
}