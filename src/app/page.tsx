import Countdown from "@/app/components/Countdown"
import Hero from "@/app/components/Hero"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <main className="flex-1 pt-32 px-8 pb-24">
        <div className="max-w-8xl mx-auto">
          <Hero />
          <Countdown />
        </div>
      </main>
    </div>
  )
}