
import Countdown from "@/components/modules/landing-page-module/Countdown";
import Hero from "@/components/modules/landing-page-module/Hero";
import FirstEventSection from "@/components/modules/landing-page-module/firstEventSection";
import { LandingPageModule } from "@/components/modules/landing-page-module/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <LandingPageModule />
    </div>
  )
}