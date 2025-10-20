"use client"

import { useState } from "react"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import projects from "@/data/projects"
import { ProjectModal } from "@/components/projectpage/ProjectModal"
import { ProjectCard } from "@/components/projectpage/ProjectCard"

const BLUR_FADE_DELAY = 0.05

export function ProjectsPageClient() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mt-6 sm:mt-10 mb-8 sm:mb-12">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter"
          yOffset={8}
          text="projects"
        />
      </div>

      <div className="flex flex-col gap-4 mb-12">
        {projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              links={project.links}
              onClick={() => handleProjectClick(project)}
            />
          </BlurFade>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="text-center py-12 sm:py-16">
            <p className="text-muted-foreground text-sm sm:text-base">No projects yet.</p>
          </div>
        </BlurFade>
      )}

      {/* Project Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>
  )
}
