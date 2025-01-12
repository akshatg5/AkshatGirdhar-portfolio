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
      company: "Koshiqa",
      href: "https://koshiqa.com/",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/logo-mini.svg",
      start: "April 2024",
      end: "Present",
      description:
        "Developed the main website for the company. Designed and Developed multiple internal tools and interactive dashboards using React,Typescript,NodeJs,Talwind CSS to analyze real-time data,leading to a considerable increase in the team's efficiency.Leveraged AWS's S3 and Cloudfront services to host the website and the tools mentioned.",
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
      description:
        "As part of the Tech Team at Team Promotions, worked on enhancing the website's blog section. Working on this feature to help Admins to easily update company activities. We developed a user-friendly Content Management System (CMS) using Django and integrated a newsletter feature for regular updates.We built a streamlined CMS for Admins to create, edit, and publish blogs efficiently.",
    },
  ],
} as const;
