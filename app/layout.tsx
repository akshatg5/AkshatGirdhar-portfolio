import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react';
import Link from "next/link"
import { Footer } from "./components/footer"
import { Appbar } from "./components/Navbar"
import StarryBackground from "./components/StarryBg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akshat Girdhar",
  description: "Portfolio of Akshat Girdhar - A collection of all the projects I've worked on and more stuff about me!",
  openGraph: {
    title: "Akshat Girdhar",
    description: "Portfolio of Akshat Girdhar - A collection of all the projects I've worked on and more stuff about me!",
    images: [
      {
        url: "https://akshatgirdhar-portfolio.vercel.app/PortfolioOG.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeReceipt",
    description: "Get receipt-like images for your LeetCode profile!",
    images: ["https://akshatgirdhar-portfolio.vercel.app/PortfolioOG.png"],
    creator: "@AkshatGirdhar2",
  },
};


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
          <Analytics />
        </main>
        <div className="fixed bottom-0 left-0 right-0 z-50 pb-2 sm:pb-4 px-2 sm:px-4">
          <Appbar />
        </div>
      </body>
    </html>
  )
}