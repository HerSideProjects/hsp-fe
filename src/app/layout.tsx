import type { Metadata } from 'next'
import '@/styles/globals.css'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Her Side Project Frontend',
  description: 'Her Side Project Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}