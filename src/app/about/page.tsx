import Hero from "@/components/Hero";
import TeamSection from "@/components/modules/teamSection";
import VisiMisi from "@/components/VisiMisi";



export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <main className="flex-1 pt-28 pb-24 max-w-8xl mx-auto max-w-screen flex flex-col gap-12">
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