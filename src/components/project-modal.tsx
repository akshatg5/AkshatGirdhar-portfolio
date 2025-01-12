"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

import Link from "next/link"
import Image from "next/image"
import { Project } from "./project-card"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
            {project.dates}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            <Link href={project.href || '#'}>
            {(project.image || project.video) && (
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover object-center"
                    />
                  ) : project.image ? (
                    <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    />
                  ) : null}
              </div>
            )}
            </Link>
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech:string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-2 py-1 text-xs font-normal bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Links</h3>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link : any, idx:any) => (
                    <Link
                      href={link.href}
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 text-xs font-normal bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {link.icon}
                        <span>{link.type}</span>
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

