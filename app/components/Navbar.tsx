"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
} from "@tabler/icons-react";
import { LinkedinIcon, LucideLaptop, PaperclipIcon } from "lucide-react";

export function Appbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="text-black dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <LucideLaptop className="text-black dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Resume",
      icon: (
        <PaperclipIcon className=" text-black dark:text-neutral-300" />
      ),
      href: "/resume",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className=" text-black dark:text-neutral-300" />
      ),
      href: "/github",
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkedinIcon className=" text-black dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/akshat-girdhar-56a848206/",
    },
  ];
  return (
      <div className="flex flex-col justify-end">
      <FloatingDock
        mobileClassName="translate-y-80" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
