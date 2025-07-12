import Hero from "@/app/components/Hero"
import VisiMisi from "@/app/components/VisiMisi"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <main className="flex-1 pt-28 pb-96 max-w-8xl mx-auto">
        <div className="px-8">
          <Hero />
        </div>
        <VisiMisi />
      </main>
    </div>
  )
}