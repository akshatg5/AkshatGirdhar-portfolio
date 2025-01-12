import { Icons } from "@/components/icons";
import { CircleDollarSignIcon, Music } from "lucide-react";

const projects = [
    {
      title: "VoteTube",
      href: "https://votetube.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Effortlessly curate the perfect shared experience with friends. Votetube empowers groups to collaboratively build personalized playlists of songs or videos. Track individual contributions, vote on favorites, and generate an ordered list that reflects the group's collective taste. Enjoy seamless entertainment together, effortlessly.",
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
          href: "https://votetube.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Votetube1.png",
      video : ""
      },
    {
      title: "LiteKite",
      href: "https://litekite.vercel.app/",
      dates: "",
      active: true,
      description:
        "A mock stock exchange application supporting American and Indian markets along with AI supports, with tools like comprehensive portfolio analysis, stock suggestions by AI, price prediction and much more!",
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
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/akshatg5/LiteKite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/litekite.png",
      video: "",
    },
    {
      title: "Learn-Lens",
      href: "https://learn-lens.vercel.app/",
      dates: "",
      active: true,
      description:
        "Educational Platform allowing users to compare couses/cohorts and get a quantitative comparsion in between courses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
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
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    ];
  
  export default projects;