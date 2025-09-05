
export const DATA = {
  name: "Hi,I'm Akshat Girdhar",
  initials: "AG",
  url: "https://akshatgirdhar-portfolio.vercel.app/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "Software Engineer.If i'm not coding, I'm either playing or watching some sport.",
  avatarUrl: "/AkshatGirdhar_img.jpg",
  work : [
  {
    company: "Grid-OS",
    href: "https://www.grid-os.com/",
    badges: ["IoT", "Full-Stack", "DevOps"],
    location: "On-Site",
    title: "SDE-1",
    logoUrl: "/GridOS.png",
    start: "February 2025",
    end: "Present",
    description: [
      {
        text: "Architected and implemented a scalable IoT infrastructure with TCP/HTTP servers and Docker containerization, serving 10,000+ connected devices with 99.9% uptime.",
        highlights: [
          {
            text: "scalable IoT infrastructure",
            type: "tooltip" as const,
            tooltip: {
              title: "IoT Infrastructure Architecture",
              description:
                "Real-time IoT Device Management System with multi-layered architecture including TCP/HTTP servers, data parsing, and MongoDB integration for seamless device communication.",
              image: "/iotarch.png",
            },
          },
          {
            text: "Docker containerization",
            type: "link" as const,
            href: "https://www.docker.com/",
          },
        ],
      },
      {
        text: "Developed an Electron-based dashboard application for real-time data visualization and device management, improving operational efficiency by 50% and reducing manual monitoring tasks.",
      },
      "Engineered automated in-line quality control testing using serial protocols, achieving 80%+ reliability, and integrated dynamic label generation to streamline production workflows.",
      {
        text: "Contributed to GPS device firmware development using C, implementing power optimization algorithms that extended battery life by 30%.",
        highlights: [
          {
            text: "GPS device firmware",
            type: "tooltip" as const,
            tooltip: {
              title: "Embedded Systems Development",
              description:
                "Low-level firmware programming for GPS tracking devices"
            },
          },
        ],
      },
      "Leveraged diverse technology stack including Node.js, React.js, Tailwind CSS, AWS, Docker, C, Python, and Electron to deliver end-to-end solutions.",
    ],
  },
  {
    company: "Koshiqa",
    href: "https://koshiqa.com/",
    badges: ["React", "Node.js", "AWS", "TypeScript"],
    location: "Hybrid",
    title: "Full Stack Developer",
    logoUrl: "/logo-mini.svg",
    start: "April 2024",
    end: "January 2025",
    description: [
      "Developed and launched the main company website with modern responsive design, resulting in 40% increase in user engagement and improved conversion rates.",
      {
        text: "Designed and developed multiple internal tools and interactive dashboards using React, TypeScript, Node.js, and Tailwind CSS, streamlining team workflows and data analysis.",
      },
      "Built comprehensive tools for real-time data analysis and visualization, leading to a 60% increase in team efficiency and faster decision-making processes.",
      {
        text: "Leveraged AWS S3 and CloudFront services for scalable web hosting and content delivery, achieving 99.9% uptime and improved global performance.",
        highlights: [
          {
            text: "AWS S3 and CloudFront",
            type: "tooltip" as const,
            tooltip: {
              title: "AWS Cloud Infrastructure",
              description:
                "Amazon S3 for secure object storage and CloudFront CDN for fast global content delivery with edge caching and SSL termination.",
            },
          },
        ],
      },
    ],
  },
  {
    company: "Team Promotions Private Limited",
    href: "https://www.teampromotions.in/",
    badges: ["Django", "Python", "CMS"],
    location: "Noida, India",
    title: "Backend Development Intern",
    logoUrl: "/teampromotions.png",
    start: "October 2023",
    end: "March 2024",
    description: [
      "Enhanced the company website's blog section with improved SEO optimization and user experience, resulting in 25% increase in organic traffic.",
      {
        text: "Developed a comprehensive Content Management System (CMS) using Django framework with intuitive admin interface and role-based access control.",
        highlights: [
          {
            text: "Django framework",
            type: "link" as const,
            href: "https://www.djangoproject.com/",
          },
          {
            text: "Content Management System",
            type: "tooltip" as const,
            tooltip: {
              title: "Custom CMS Development",
              description:
                "Built from scratch using Django with features like WYSIWYG editor, media management, SEO optimization, and automated publishing workflows.",
            },
          },
        ],
      },
      "Integrated automated newsletter feature with subscriber management and email templates, increasing subscriber engagement by 35%.",
      "Built streamlined administrative tools enabling efficient content creation, editing, and publishing workflows with version control and approval systems.",
    ],
  },
],
} as const;
