import { Icons } from "@/components/icons";
import { HomeIcon, Music, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshat Girdhar",
  initials: "AG",
  url: "https://akshatgirdhar-portfolio.vercel.app/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Software Engineer.If i'm not coding, I'm either playing or watching some sport.",
  summary:
    "Graduated in 2024, have been working with startups since the past 2 years as a full stack developer.I've completed B.Tech in electronics and communications engineering.",
  avatarUrl: "/AkshatGirdhar_img.jpg",
  work: [
    {
      company: "Grid-OS",
      href: "https://www.grid-os.com/",
      badges: [],
      location: "On-Site",
      title: "SDE-1",
      logoUrl: "/GridOS.png",
      start: "February 2025",
      end: "Present",
      description: [
        "Architected and implemented a scalable IoT infrastructure with TCP/HTTP servers and Docker containerization.",
        "Developed an Electron-based dashboard application for real-time data visualization and device management, improving operational efficiency over 50%",
        "Engineered automated in-line quality control testing using serial protocols, achieving 80%+ reliability, and integrated dynamic label generation to streamline production and eliminate manual work.",
        "Contributed to GPS device firmware development using C. ",
        "Leveraged diverse technology stack including Node.js, React.js, Tailwind CSS, AWS, Docker, C, Python, and Electron"
      ],
    },
    {
      company: "Koshiqa",
      href: "https://koshiqa.com/",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/logo-mini.svg",
      start: "April 2024",
      end: "January 2025",
      description: [
        "Developed the main website for the company",
        "Designed and Developed multiple internal tools and interactive dashboards using React, Typescript, NodeJs, Talwind CSS",
        "Built tools to analyze real-time data, leading to a considerable increase in the team's efficiency",
        "Leveraged AWS's S3 and Cloudfront services to host the website and tools"
      ],
    },
    {
      company: "Team Promotions Private Limited",
      href: "https://www.teampromotions.in/",
      badges: [],
      location: "Noida, India ",
      title: "Backend development Intern",
      logoUrl: "/teampromotions.png",
      start: "October 2023",
      end: "March 2024",
      description: [
        "Worked on enhancing the website's blog section",
        "Developed a user-friendly Content Management System (CMS) using Django",
        "Integrated a newsletter feature for regular updates",
        "Built a streamlined CMS for Admins to create, edit, and publish blogs efficiently"
      ],
    },
  ],
} as const;
