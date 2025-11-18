import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-[#EF3187] bg-cover bg-center overflow-hidden rounded-3xl shadow-xl px-8 pt-8 md:px-12 md:pt-8 text-white" style={{ backgroundImage: "url('/assets/images/bg-hero.png')" }}>
            <div className="flex flex-col md:flex-row">
                <div className="order-1 md:order-2 md:w-2/5 flex md:justify-center md:justify-end mt-4 md:mt-0">
                    <Image
                        src="/assets/images/magnifier.png"
                        alt="Magnifier"
                        width={443}
                        height={611}
                        className="w-[30%] md:block md:w-[71%] max-w-sm md:max-w-full h-auto object-contain self-center"
                    />
                </div>
                <div className="order-2 md:order-1 md:w-3/5 pt-4">
                    <span className="inline-block bg-lime-100 text-gray-900 font-semibold px-3 py-1 rounded-full mb-3">
                        Girls Community
                    </span>
                    <h1 className="text-[64px] shadow-title md:text-[120px] pt-8 leading-none mb-4 text-[#FEF6EB]" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>
                        Her Side <br /> Project
                    </h1>
                    <p className="text-base md:text-2xl text-[#FEF6EB] mb-6">
                        A space for women in STEM to explore their passions beyond the classroom or workplace — a creative playground where ideas turn into action.
                    </p>
                </div>
            </div>
        </section>
    )
}