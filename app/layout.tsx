import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Sarthak Jaiswal | MERN Stack Developer Portfolio",
  description: "MERN Stack Developer specializing in React, Node.js, Express.js, MongoDB, and modern web technologies. View my projects, skills, and certifications.",
  keywords: ["MERN Stack Developer", "React Developer", "Node.js", "Portfolio", "Web Developer", "Full Stack"],
  authors: [{ name: "Sarthak Jaiswal" }],
  openGraph: {
    title: "Sarthak Jaiswal | MERN Stack Developer Portfolio",
    description: "MERN Stack Developer specializing in React, Node.js, Express.js, MongoDB, and modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Jaiswal | MERN Stack Developer Portfolio",
    description: "MERN Stack Developer specializing in React, Node.js, Express.js, MongoDB, and modern web technologies.",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
