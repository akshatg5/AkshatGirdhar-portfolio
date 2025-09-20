import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCarousel } from "@/components/project-carousel";
import { ResumeCard } from "@/components/resume-card";
import { Themebutton } from "@/components/theme-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import projects from "@/data/projects";
import { DATA } from "@/data/resume";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.05;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero">
        <div className="my-6">
          <Themebutton />
        </div>
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <div className="gap-2 flex justify-between space-y-2">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-md mt-10 mb-1 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <Link href="/blog" className="text-primary my-2 hover:underline">I write about my work,sometimes! Check it out here!</Link>

              <div className="mt-8">
                <h2 className="mb-2">About Me: </h2>
                <BlurFadeText
                  className="max-w-[600px] py-2 text-md"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.about}
                />
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="work" className="my-2">
        <div className="flex min-h-0 flex-col gap-y-1">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={id}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end}`}
                location={work.location}
                //@ts-ignore
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="py-16 bg-gradient-to-b from-white dark:from-background via-neutral-200 dark:via-neutral-600 to-black/50 dark:to-white rounded-xl"
      >
        <div className="container mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  Proof of Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my Projects
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <ProjectCarousel projects={projects} />
          </BlurFade>
        </div>
      </section>
      <footer className="w-full rounded-xl dark:bg-gray-800 py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Akshat Girdhar
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Crafted with passion and code
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
