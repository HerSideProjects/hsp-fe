'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface CarouselProps {
  images: string[]
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const checkWidth = () => setIsMd(window.innerWidth >= 768)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((newIndex + images.length) % images.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  const getCardPosition = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length

    if (offset === 0) return 'center'
    if (offset === 1) return 'next'
    if (offset === images.length - 1) return 'prev'
    return 'hidden'
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1)
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].screenX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].screenX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1)
      } else {
        updateCarousel(currentIndex - 1)
      }
    }
  }

  return (
    <div
      className="px-4 md:px-16 md:mt-12 mt-8 relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-full h-[300px] md:h-[450px] relative"
        style={{ perspective: '1000px' }}
      >

        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer z-30 transition-all duration-300 hover:scale-110 text-xl md:text-2xl border-none outline-none "
        >
          <ArrowLeft />
        </button>

        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {images.map((src, index) => {
            const position = getCardPosition(index)

            return (
              <div
                key={index}
                onClick={() => updateCarousel(index)}
                className={`absolute md:w-[520px] w-[320px] h-[280px] md:h-[450px] ${
                  position === 'hidden' ? 'opacity-0 pointer-events-none transition-none' : 'transition-all duration-600'
                }`}
                style={{
                  transform: position === 'center'
                    ? 'scale(1.1) translateZ(0)'
                    : position === 'prev'
                    ? isMd
                      ? 'translateX(-250px) scale(0.85) translateZ(-150px)'
                      : 'translateX(-150px) scale(0.85) translateZ(-150px)'
                    : position === 'next'
                    ? isMd
                      ? 'translateX(250px) scale(0.85) translateZ(-150px)'
                      : 'translateX(150px) scale(0.85) translateZ(-150px)'
                    : undefined,
                  zIndex: position === 'center' ? 20 : 10,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Event photo ${index + 1}`}
                    fill
                    className={`object-cover transition-all duration-300`}
                    priority={position === 'center'}
                    loading={position === 'center' ? undefined : 'lazy'}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer z-30 transition-all duration-300 hover:scale-110 text-xl md:text-2xl border-none outline-none"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
