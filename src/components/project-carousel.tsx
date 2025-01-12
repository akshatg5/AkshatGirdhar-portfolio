"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Project, ProjectCard } from "./project-card";

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= projects.length ? 0 : prevIndex + 2
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? projects.length - 2 : prevIndex - 2
    )
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-1/2 flex-shrink-0 p-4">
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
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 transform"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 transform"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

