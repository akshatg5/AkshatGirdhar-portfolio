import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Footer } from "./components/footer"
import { Appbar } from "./components/Navbar"
import StarryBackground from "./components/StarryBg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akshat Girdhar",
  description: "Portfolio website showcasing Akshat Girdhar's work!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full bg-black  `}>
        <StarryBackground />
        <main className="flex-grow  text-white pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <div className="fixed bottom-0 left-0 right-0 z-50 pb-2 sm:pb-4 px-2 sm:px-4">
          <Appbar />
        </div>
      </body>
    </html>
  )
}