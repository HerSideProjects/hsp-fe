import type { Metadata } from 'next'
import '@/styles/globals.css'
import localFont from "next/font/local";
import { Manrope } from 'next/font/google'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Her Side Project Frontend',
  description: 'Her Side Project Application',
}

const lostaMasta = localFont({
  src: "./fonts/LostaMasta-Regular.ttf",
  variable: "--font-losta-masta",
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope', // penting kalau mau pakai Tailwind
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${lostaMasta.variable} ${manrope.variable} ${manrope.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}