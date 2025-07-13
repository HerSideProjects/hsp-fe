"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollContent = scrollContainer.firstElementChild
    if (!scrollContent) return

    scrollContainer.appendChild(scrollContent.cloneNode(true))

    const animate = () => {
      if (!scrollContainer) return
      
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const animation = setInterval(animate, 30)
    return () => clearInterval(animation)
  }, [])

  return (
    <footer className="relative bottom-0 left-0 right-0 bg-white overflow-hidden z-5">
      <div ref={scrollRef} className="flex whitespace-nowrap overflow-x-hidden py-2 bg-pink-500">
        <div className="flex items-center space-x-4 text-white font-medium px-4 font-lostaMasta">
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
          <span>✿ Her Side Project</span>
        </div>
      </div>
      <div className="relative bg-[#aec4ff] text-[#1e0c2b] px-10 py-6 md:py-4">
        <div className="absolute bottom-0 right-0 w-48 md:w-48 opacity-30 pointer-events-none">
          <Image
            src="/assets/images/Mask-Flower.png"
            alt="flower"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="z-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 max-w-4xl">
            <div className="mb-2">
              <Image src="/assets/images/Icon-Black.png" alt="HerSideProject Logo" width={80} height={60} />
            </div>
            <p className="mb-1 hidden md:block">
              A space for women in STEM to slow down, create with their hands, and connect with kindred spirits.
              We know <strong>the grind—labs, codes, deadlines.</strong> But there&rsquo;s another side of us that&rsquo;s just as powerful:
              the one that crafts, blooms, and breathes.
            </p>
            <p className="mt-2 text-sm font-medium">© 2025 HerSideProject</p>
          </div>

          <div className="flex flex-col gap-2 md:mt-auto md:items-end">
            <div className="flex items-center gap-4 text-lg">
              <a href="https://instagram.com/hersideproject.id" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a href="https://whatsapp.com" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
            <div className="text-sm mt-2">
              Instagram &nbsp;&nbsp;|&nbsp;&nbsp; TikTok
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}