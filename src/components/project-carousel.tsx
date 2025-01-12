"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Project, ProjectCard } from "./project-card"

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= projects.length ? 0 : prevIndex + itemsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? Math.max(projects.length - itemsPerPage, 0) : prevIndex - itemsPerPage
    )
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className={`w-full md:w-1/2 flex-shrink-0 p-4`}>
              <ProjectCard
                title={project.title}
                href={project.href}
                description={project.description}
                dates={project.dates}
                technologies={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" size="icon" className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 transform bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={prevSlide} aria-label="Previous project" >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 transform bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={nextSlide}
        aria-label="Next project"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

