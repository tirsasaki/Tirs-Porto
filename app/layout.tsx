import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tirsasaki | Portfolio",
  description: "Personal portfolio website showcasing projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0d1117] text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main> 
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}