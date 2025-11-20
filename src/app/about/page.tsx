import { AboutUsModule } from "@/modules/about-us-module/about-us";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Her Side Project - our mission, vision, and commitment to empowering women in the community.',
  openGraph: {
    title: 'About Us | Her Side Project',
    description: 'Learn more about Her Side Project - our mission, vision, and commitment to empowering women in the community.',
    url: '/about',
    type: 'website',
  },
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6EB] z-10">
      <AboutUsModule />
    </div>
  )
}