import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 my-6">
      <HeroSection />
    </div>
  )
}