"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  PenTool,
  User,
  Mail,
  MapPin,
  Laptop,
  Twitter,
  Github,
} from "lucide-react";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { PortfolioCard } from "./HeroSection";

export default function MobileHeroSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      ></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PortfolioCard
          icon={User}
          title="Hey, I'm Akshat Girdhar"
          description=""
          link="/"
          className="md:col-start-2 md:row-start-1 md:row-span-2"
        >
          <div className="space-y-4">
            <div className="text-muted-foreground flex items-center">
              <span>Full Stack Dev</span>
              <a
                href="https://koshiqa.com/"
                className="text-primary font-semibold ml-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Koshiqa
              </a>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2" /> New Delhi
            </div>
            <div className="space-y-2">
              <p>For more updates about me and my work!</p>
              <p>Find me on:</p>
              <div className="space-y-2">
                <a
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  href="https://x.com/AkshatGirdhar2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2" /> @AkshatGirdhar2
                </a>
                <a
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/akshat-girdhar-56a848206/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogoIcon width={24} height={24} className="mr-2" />{" "}
                  Akshat Girdhar
                </a>
                <a
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  href="https://github.com/akshatg5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github width={24} height={24} className="mr-2" /> @akshatg5
                </a>
              </div>
            </div>
          </div>
        </PortfolioCard>
        <PortfolioCard
          icon={Code}
          title="Web Development"
          description="I can build full stack web applications. Check out my projects!"
          link="/projects"
          className="md:col-start-1 md:row-start-1"
        />
        <PortfolioCard
          icon={Laptop}
          title="Currently Learning and building"
          description="The articles, videos, and resources I've found useful in my learning journey."
          link="https://grateful-brisket-091.notion.site/Learning-and-Building-11e3953f062c80c19995c9590c4d63e2"
          className="md:col-start-3 md:row-start-1"
        />
        <PortfolioCard
          icon={PenTool}
          title="Tech Blogs"
          description="I try to write tech blogs,sometimes."
          link="https://medium.com/@akshatgirdhar05"
          className="md:col-start-1 md:row-start-2"
        />
        <PortfolioCard
          icon={Mail}
          title="Contact"
          description="Reach out for collaborations, inquiries, or just to say hello!"
          link="mailto:akshatgirdhar05@gmail.com"
          className="md:col-start-3 md:row-start-2"
        />
      </div>
    </div>
  );
}
