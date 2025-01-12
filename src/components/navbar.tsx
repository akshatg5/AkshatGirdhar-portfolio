"use client";
import React from "react";
import { IconBrandGithub, IconHome } from "@tabler/icons-react";
import {
  CoffeeIcon,
  LinkedinIcon,
  LucideLaptop,
  PaperclipIcon,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";

export function Appbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="text-black dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <LucideLaptop className="text-black dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Resume",
      icon: <PaperclipIcon className="text-black dark:text-neutral-300" />,
      href: "/resume",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="text-black dark:text-neutral-300" />,
      href: "/github",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinIcon className="text-black dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/akshat-girdhar-56a848206/",
    },
    {
      title: "Twitter",
      icon: <Twitter className="text-black dark:text-neutral-300" />,
      href: "https://x.com/AkshatGirdhar2",
    },
    {
      title: "Buy me a Cofee",
      icon: <CoffeeIcon className="text-black dark:text-neutral-300" />,
      href: "https://www.buymeacoffee.com/akshatg5",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 sm:p-6">
      <FloatingDock mobileClassName="sm:translate-y-0" items={links} />
    </div>
  );
}