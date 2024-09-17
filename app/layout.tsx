import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Footer } from "./components/footer"
import { Appbar } from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Portfolio website showcasing my web development projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <main className="flex-grow bg-gradient-to-br from-slate-950 via-blue-700 to-neutral-300 text-white pb-20">{children}</main>
        <div className="fixed bottom-8 left-0 right-0 z-50">
          <Appbar />
        </div>
      </body>
    </html>
  )
}