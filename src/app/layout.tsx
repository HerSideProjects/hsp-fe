import type { Metadata } from 'next'
import '@/styles/globals.css'
import localFont from "next/font/local";
import { Manrope } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Provider from './Provider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Her Side Project',
    template: '%s | Her Side Project',
  },
  description: 'Her Side Project Website',
  keywords: ['Her Side Project', 'women empowerment', 'community', 'events', 'networking'],
  authors: [{ name: 'Her Side Project' }],
  creator: 'Her Side Project',
  publisher: 'Her Side Project',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/images/logo/logo-pink.png',
    apple: '/assets/images/logo/logo-pink.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Her Side Project',
    title: 'Her Side Project',
    description: 'Her Side Project Website',
    images: [
      {
        url: '/assets/images/logo/logo-pink.png',
        width: 1200,
        height: 630,
        alt: 'Her Side Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Her Side Project',
    description: 'Her Side Project Website',
    images: ['/assets/images/logo/logo-pink.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
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
  variable: '--font-manrope', 
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