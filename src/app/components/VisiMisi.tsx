export default function VisiMisi() {
  return (
    <section
      className="relative mt-12 text-white text-center px-8 py-16 rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/bg-vismis.png')" }}
    >
      <p className="text-lg text-[#000000] pt-5 md:text-2xl mb-10 font-light">Core Values</p>
      <h2 className="text-4xl md:text-6xl font-semibold mb-2" style={{ fontFamily: 'Losta Masta Medium, sans-serif' }}>
        <span className="text-[#000000]">Vision </span>
        <span className="text-[#EF3187]">Mision</span>
      </h2>
      <p className="text-sm text-[#7A7878] pt-3 px-auto md:px-50 md:text-xl mb-10 font-light">To create an inclusive and empowering space where women in STEM can explore their passions, build side projects, and grow creatively together.</p>

    </section>
  );
}