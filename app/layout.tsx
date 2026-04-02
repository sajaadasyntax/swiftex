import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Swiftfix Plumbing Ltd | Plumbing, Heating & Gas Engineers',
  description: 'Professional plumbing, heating and gas services in London. Gas Safe registered engineers providing boiler installations, repairs, emergency callouts and more.',
  icons: {
    icon: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
