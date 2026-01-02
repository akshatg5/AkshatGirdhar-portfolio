import { Icons } from "@/components/icons";
import { CircleDollarSignIcon, Music } from "lucide-react";

const projects = [
  {
    title: "VoteTube",
    href: "https://votetube.in",
    dates: "",
    active: true,
    description:
      "Group Playlist Platform - A collaborative platform for creating and managing group playlists.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://votetube.in",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/Votetube1.png",
    video: "",
  },
  {
    title: "LiteKite",
    href: "https://litekite.vercel.app/",
    dates: "",
    active: true,
    description:
      "Financial Management Platform - A mock stock exchange application supporting American and Indian markets along with AI supports.",
    technologies: [
      "React.js",
      "Typescript",
      "PostgreSQL",
      "Flask",
      "Python",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://litekite.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/litekite.png",
    video: "",
  },
  {
    title: "LeetRank",
    href: "https://leet-rank.vercel.app/",
    dates: "",
    active: true,
    description:
      "Leetcode Ranking Platform for colleges - A platform to track and compare coding progress.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://leet-rank.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/leetrank.png",
    video: "",
  },
  {
    title: "SupportBot AI",
    href: "https://ai-customer-support-agent-frontend.vercel.app/",
    dates: "",
    active: true,
    description:
      "Minimal AI Customer Support Agent with Openrouter LLM Integration.",
    technologies: [
      "Node.js",
      "Typescript",
      "React.js",
      "Openrouter",
      "MongoDB",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://ai-customer-support-agent-frontend.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/CustomerApp.png",
    video: "",
  },
  {
    title: "Reorganised",
    href: "https://www.reorganised.in/",
    dates: "",
    active: true,
    description:
      "A product for real-estate brokers - Streamline your property business with our all-in-one platform. Manage listings, nurture leads, and close deals faster than ever.",
    technologies: ["Supabase", "Typescript", "React.js", "SQL"],
    links: [
      {
        type: "Website",
        href: "https://ai-customer-support-agent-frontend.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/Reorganised.png",
    video: "",
  },
  {
    title: "WebRtc-Demo",
    href: "https://web-rtc-basics.vercel.app",
    dates: "",
    active: true,
    description:
      "A simple implementation showcasing how webrtc works at a p2p level.",
    technologies: ["HTML", "Javascript", "WebRtc", "CSS"],
    links: [
      {
        type: "Website",
        href: "https://web-rtc-basics.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/WebRtc.png",
    video: "",
  },
  {
    title: "Learn-Lens",
    href: "https://learn-lens.vercel.app/",
    dates: "",
    active: true,
    description:
      "Educational Platform allowing users to compare courses/cohorts and get a quantitative comparison between courses.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://learn-lens.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/learnlens.png",
    video: "",
  },
  {
    title: "MediaByte",
    href: "https://mediabyte.vercel.app/",
    dates: "",
    active: true,
    description:
      "Media handling service that uses cloudinary AI services to trim videos and re-size images.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Cloudinary",
    ],
    links: [
      {
        type: "Website",
        href: "https://mediabyte.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/mediabyte.png",
    video: "",
  },
  {
    title: "CodeReceipt",
    href: "https://codereceipt.vercel.app/",
    dates: "",
    active: true,
    description:
      "Developer Tool for generating and managing code snippets and documentation.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://codereceipt.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/codereceipt.png",
    video: "",
  },
  {
    title: "Pen Point",
    href: "https://penpoint.vercel.app/",
    dates: "",
    active: true,
    description: "Blogging Platform for creating and sharing written content.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://penpoint.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/penpoint.png",
    video: "",
  },
  {
    title: "Real time-2WayDatabaseSync",
    href: "https://www.youtube.com/watch?v=QF8fAHYLglo",
    dates: "",
    active: true,
    description:
      "A real-time database to Google Sheet data sync project. Created a NodeJS server connected to Google Sheets webhook and PostgresDB for bidirectional synchronization.",
    technologies: ["Node.js", "PostgreSQL", "Google Sheets API"],
    links: [
      {
        type: "Video",
        href: "https://www.youtube.com/watch?v=QF8fAHYLglo",
        icon: <Icons.youtube className="size-3" />,
      },
    ],
    image: "/DBsync.png",
    video: "",
  },
  {
    title: "Team Promotions Pvt Ltd. Website",
    href: "https://www.teampromotions.in/",
    dates: "",
    active: true,
    description:
      "Enhanced website interface, developed blog feature, and implemented a user-friendly CMS using Django with an integrated newsletter feature.",
    technologies: ["Django", "Python", "PostgreSQL", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://www.teampromotions.in/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/teampromotions.png",
    video: "",
  },
  {
    title: "Temflo Pvt Ltd. Website",
    href: "https://www.temflo.co.in/",
    dates: "",
    active: true,
    description:
      "Freelance project developing a company website with modern features and design.",
    technologies: ["Next.js", "Typescript", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://www.temflo.co.in/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/temflo.png",
    video: "",
  },
  {
    title: "Cash Flow",
    href: "https://penpoint.vercel.app/",
    dates: "",
    active: true,
    description:
      "Secure P2P app built with ReactJS, ExpressJS, MongoDB & TailwindCSS. Facilitates easy and secure financial transactions between users.",
    technologies: ["React.js", "Express.js", "MongoDB", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://penpoint.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/CashFlow.png",
    video: "",
  },
  {
    title: "CS-50 Web Projects",
    href: "https://www.youtube.com/playlist?list=PLqv3LXavHm2t1BZtwKnypAAqc8KFl2F64",
    dates: "",
    active: true,
    description:
      "A collection of web development projects built as a part of the course CS50. Technologies used include frameworks like Flask and Django.",
    technologies: ["Flask", "Django", "Python", "JavaScript"],
    links: [
      {
        type: "Video",
        href: "https://www.youtube.com/playlist?list=PLqv3LXavHm2t1BZtwKnypAAqc8KFl2F64",
        icon: <Icons.youtube className="size-3" />,
      },
    ],
    image: "/cs50-projects.png",
    video: "",
  },
  {
    title: "Old Portfolio",
    href: "https://old-portfolio-flame.vercel.app/",
    dates: "",
    active: true,
    description:
      "First portfolio made using React and Tailwind CSS. Includes simple projects and clones like a YouTube clone and Dukaan Assignment.",
    technologies: ["React.js", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://old-portfolio-flame.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/oldportfolio.png",
    video: "",
  },
  {
    title: "Current Portfolio",
    href: "https://akshatgirdhar-portfolio.vercel.app/",
    dates: "",
    active: true,
    description: "Current portfolio is made using Next.js and Tailwind CSS.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "MagicUI",
      "AceternityUI",
    ],
    links: [
      {
        type: "Website",
        href: "https://akshatgirdhar-portfolio.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/akshatg5/AkshatGirdhar-portfolio",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/Screenshot 2025-01-14 010518.png",
    video: "",
  },
];

export default projects;
