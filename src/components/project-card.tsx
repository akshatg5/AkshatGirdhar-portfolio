"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ProjectModal } from "./project-modal"

export interface Project {
  title: string
  href?: string
  description: string
  dates: string
  technologies: string[]
  image?: string
  video?: string
  links?: {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
}

export function ProjectCard(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden border-none transition-all duration-300 ease-out hover:shadow-lg bg-gray-100 dark:bg-gray-800 cursor-pointer",
          project.className
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          {project.video && (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center"
            />
          )}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="relative z-20 flex flex-col p-4">
          <h3 className="mb-1 text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          {project.links && project.links.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2">
              {project.links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="z-20"
                >
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-4 py-2 text-xs font-normal bg-gray-600 dark:bg-gray-700 text-white dark:text-gray-200"
                  >
                    {link.icon}
                    <span>{link.type}</span>
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Card>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  )
}

