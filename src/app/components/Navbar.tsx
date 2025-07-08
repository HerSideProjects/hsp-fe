"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/people", label: "People Behind" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <div className="flex items-stretch gap-2">
            {/* Navbar Hitam */}
            <div className="flex flex-1 items-center justify-between bg-black/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-14 h-14 relative -my-1">
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
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/90 hover:text-white text-sm font-medium transition"
                >
                    {link.label}
                </Link>
                ))}
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
            <button className="h-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 rounded-2xl flex items-center transition shadow-lg hover:shadow-pink-500/30">
                Register First Event!
                <ArrowUpRight className="ml-2 h-4 w-4" />
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
              <Link href="/" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>
                Her Side Project
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-lg font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Mobile */}
            <button
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg w-full flex items-center justify-center"
              onClick={() => setIsOpen(false)}
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