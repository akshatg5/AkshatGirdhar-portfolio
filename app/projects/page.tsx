import Image from 'next/image'
import { AppleCardsCarouselDemo } from '../components/Carousel'

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce website built with Next.js and Stripe.',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://example.com/ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A React-based task management application with drag-and-drop functionality.',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://example.com/task-app'
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div>
      <div>
        <AppleCardsCarouselDemo />
      </div>
    </div>
  )
}