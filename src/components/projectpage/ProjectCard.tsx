"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  links: Array<{
    type: string
    href: string
    icon: React.ReactNode
  }>
  onClick: () => void
}

export function ProjectCard({ title, description, image, technologies, links, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-muted-foreground/50 overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Project Image */}
        <div className="relative w-full sm:w-48 h-40 sm:h-32 flex-shrink-0 rounded-md overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Project Title */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Project Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
          </div>

          {/* Technologies and Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{technologies.length - 3}
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Button
                  key={link.type}
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(link.href, "_blank")
                  }}
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  <span className="text-xs">{link.type}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <div className="flex items-center">
          <Button
            onClick={onClick}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <ExternalLink className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
