import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import FirstEventSection from "@/components/modules/firstEventSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <main className="flex-1 pt-32 px-8 pb-24">
        <div className="max-w-8xl mx-auto flex flex-col gap-12">
          <Hero />
          <FirstEventSection />
          <Countdown />
        </div>
      </main>
    </div>
  )
}