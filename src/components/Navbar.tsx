"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[100%] max-w-8xl z-50 px-8">
        <div className="flex items-stretch gap-2">
            {/* Navbar Hitam */}
            <div className="flex flex-1 items-center justify-between bg-black/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 px-8 h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-16 h-16 relative -my-1 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                    src="/assets/images/Icon.png"
                    alt="Her Side Project"
                    fill
                    className="object-contain rounded-full"
                />
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
                <Link
                    href="/"
                    className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                    About Us
                </Link>
                <Link
                  href="https://instagram.com/hersideproject.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(true)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition"
                >
                <Menu className="w-6 h-6" />
                </button>
            </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
            <button className="h-full bg-pink-500 text-white font-semibold px-6 rounded-2xl flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 shadow-lg cursor-pointer group"
            onClick={() => {
              router.push('/register')
            }}>
                Register Our Event!
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            </div>
        </div>
    </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 border-l border-white/10 p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/assets/images/Icon.png"
                  alt="Her Side Project Logo"
                  width={80}
                  height={48}
                  priority
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 mb-8">
                <Link
                    href="/"
                    className="text-white/90 hover:text-white text-lg font-medium transition"
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-white/90 hover:text-white text-lg font-medium transition"
                    onClick={() => setIsOpen(false)}
                >
                    About Us
                </Link>
                <Link
                  href="https://instagram.com/hersideproject.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-lg font-medium transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
            </div>

            {/* CTA Button - Mobile */}
            <button
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg w-full flex items-center justify-center"
              onClick={() => {setIsOpen(false)
                router.push('/register')
              }}
            >
              Register First Event!
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}