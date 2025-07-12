import FirstEventSection from "@/components/modules/firstEventSection"
import TeamSection from "@/components/modules/teamSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10 scroll-hidden">
      <main className="flex-1 pt-28 px-8 pb-36">
        <div className="max-w-8xl mx-auto flex flex-col gap-24">
          <section className="relative bg-[#EF3187] bg-cover bg-center rounded-3xl shadow-xl p-8 md:p-12 text-white" style={{ backgroundImage: "url('/assets/images/bg-hero.png')" }}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 pt-4">
                <span className="inline-block bg-lime-100 text-gray-900 font-semibold px-3 py-1 rounded-full mb-3">
                  Girls Community
                </span>
                <h1 className="text-[64px] md:text-[120px] leading-none mb-4 text-white" style={{ fontFamily: 'Losta Masta, sans-serif' }}>
                  Her Side   <br /> Project
                </h1>
                <p className="text-base md:text-2xl text-white mb-6">
                  A space for women in STEM to slow down, create with their hands, and connect with kindred spirits.
                  We know the grind—labs, codes, deadlines. But there&rsquo;s another side of us that&rsquo;s just as powerful.
                </p>
                <a
                  href="/register"
                  className="inline-block bg-white text-pink-700 text-base md:text-2xl font-semibold px-5 py-3 md:px-7 md:py-5 rounded-xl hover:bg-pink-200 transition"
                >
                  Register First Event! ↗
                </a>
              </div>

              <div className="md:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0">
                <img
                  src="/assets/images/magnifier.png"
                  alt="Magnifier"
                  className="hidden md:block w-[71%] max-w-sm md:max-w-full h-auto object-contain self-center"
                />
              </div>
            </div>
          </section>
          <TeamSection/>
          <FirstEventSection />
        </div>
      </main>
    </div>
  )
}