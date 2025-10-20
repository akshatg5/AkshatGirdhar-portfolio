"use client"

import type React from "react"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    links: Array<{
      type: string
      href: string
      icon: React.ReactNode
    }>
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-full pr-4">
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
              <p className="text-base leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Links</h3>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button
                    key={link.type}
                    variant="outline"
                    onClick={() => window.open(link.href, "_blank")}
                    className="flex items-center gap-2"
                  >
                    {link.icon}
                    {link.type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}