import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 my-6">
      <div className="max-w-4xl w-full space-y-6 text-center">
        <div className=" mx-auto mb-8">
        </div>
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">
          Akshat Girdhar
        </h1>
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Full Stack Web Developer
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I can build full stack web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="mailto:akshatgirdhar05@gmail.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </Link>
          <Link 
            href="/projects" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  )
}