"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
} from "@tabler/icons-react";
import { LucideLaptop, PaperclipIcon } from "lucide-react";

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
