import type { Metadata } from 'next'
import '@/styles/globals.css'
import localFont from "next/font/local";
import { Manrope } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Provider from './Provider';

export const metadata: Metadata = {
  title: 'Her Side Project',
  description: 'Her Side Project Website',
  icons: {
    icon: '/assets/images/logo/logo-pink.png',
  },
}

const lostaMasta = localFont({
  src: "./fonts/LostaMasta-Regular.ttf",
  variable: "--font-losta-masta",
});

const desirableCalligraphy = localFont({
  src: "./fonts/DesirableCalligraphy.ttf",
  variable: "--font-desirable-calligraphy",
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
      <body className={`antialiased ${lostaMasta.variable} ${manrope.variable} ${manrope.className} ${desirableCalligraphy.variable}`} >
        <Provider>
          <Navbar />
            {children}
          <Footer />
        </Provider>
    </body>
    </html>
  )
}