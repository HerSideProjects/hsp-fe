import Image from 'next/image'

export default function VisiMisi() {
  const missionBlock = (src: string, w: number, h: number, label: string) => (
    <div className="flex flex-col bg-[#EF3187] text-white px-6 py-6 rounded-xl shadow-md w-full md:w-[300px]">
        <Image
        src={src}
        alt="Mission Icon"
        width={w}
        height={h}
        className="mb-4 object-contain"
        />
        <p className="text-sm md:text-base font-light leading-relaxed text-left">
        {label}
        </p>
    </div>
  );

  return (
    <section className="relative w-full text-white text-center py-12">
      <Image
        src="/assets/images/quote-left.png"
        alt="Left Quote"
        width={178}
        height={249}
        className="absolute top-20 left-0 z-0"
      />      
      <Image
        src="/assets/images/quote-right.png"
        alt="Right Quote"
        width={178}
        height={249}
        className="absolute top-0 right-0 z-0"
      />
      <p className="text-lg text-[#000000] md:text-3xl mb-10 font-light">Core Values</p>
      <h2 className="text-4xl md:text-6xl font-semibold mb-2" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>
        <span className="text-[#000000]">Vision </span>
        <span className="text-[#EF3187]">Mision</span>
      </h2>
      <p className="text-sm text-[#7A7878] pt-3 px-10 md:px-50 md:text-xl mb-10 font-light">To create an inclusive and empowering space where women in STEM can explore their passions, build side projects, and grow creatively together.</p>
      <div className="flex flex-col md:flex-row justify-center px-20 gap-6 md:gap-10 pb-5 md:pb-5">
        {missionBlock("/assets/images/tinker.png", 72, 68, "Cultivate a creative STEM community where women feel safe to tinker, build, and share their side projects.")}
        {missionBlock("/assets/images/workshops.png", 72, 68, "Bridge STEM and hobbies through workshops, events, and online content that integrate technology, science, and creative expression.")}
        {missionBlock("/assets/images/mentor.png", 72, 68, "Support peer learning and mentorship among women in various STEM fields, from students to professionals.")}
      </div>
    </section>
  );
}