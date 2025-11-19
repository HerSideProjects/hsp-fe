import Hero from "@/components/modules/landing-page-module/sections/hero";
import TeamSection from "@/components/modules/about-us-module/teamSection";
import VisiMisi from "@/components/modules/about-us-module/VisiMisi";



export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <main className="flex-1 pt-32 pb-24 w-full mx-auto flex flex-col gap-12">
        <div className="px-8">
          <Hero />
        </div>
        <VisiMisi />
        <div className="px-8 overflow-scroll scroll-hidden">
          <TeamSection />
        </div>
      </main>
    </div>
  )
}