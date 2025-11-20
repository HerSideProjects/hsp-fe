import { LandingPageModule } from "@/modules/landing-page-module/landing-page";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Her Side Project - Empowering women through community, events, and networking opportunities.',
  openGraph: {
    title: 'Her Side Project - Home',
    description: 'Welcome to Her Side Project - Empowering women through community, events, and networking opportunities.',
    url: '/',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <LandingPageModule />
    </div>
  )
}