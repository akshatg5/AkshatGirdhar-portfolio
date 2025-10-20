import type { Metadata } from "next"
import { ProjectsPageClient } from "./ProjectsPage"
import { DATA } from "@/data/resume"

export const metadata: Metadata = {
   title: {
       default: "Projects",
       template: `%s | ${DATA.name}`,
    },
  description:
    "Explore my portfolio of projects showcasing web development, design, and technical expertise. View detailed case studies and live demos.",
  keywords: ["projects", "portfolio", "web development", "case studies", "portfolio projects","akshat girdhar work","akshat girdhar projects"],
  openGraph: {
    title: "Akshat Girdhar | Projects",
    description: "Explore my portfolio of projects showcasing web development, design, and technical expertise.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/projects.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Girdhar | Projects",
    description: "Explore my portfolio of projects showcasing web development, design, and technical expertise.",
    images: ["/projects.png"],
  },
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
