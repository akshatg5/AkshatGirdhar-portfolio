import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCarousel } from "@/components/project-carousel";
import { ResumeCard } from "@/components/resume-card";
import { Themebutton } from "@/components/theme-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import projects from "@/data/projects";
import { DATA } from "@/data/resume";
import { PaperclipIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.05;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero">
        <div className="my-6">
          <Themebutton />
        </div>
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-2 sm:justify-between">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl sm:text-3xl lg:text-4xl mt-4 sm:mt-10 mb-1 font-bold tracking-tighter"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="text-base sm:text-lg lg:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <Link
                href="/blog"
                className="text-primary text-sm sm:text-base my-2 hover:underline transition-all duration-200 hover:text-primary/80 inline-block"
              >
                I write about my work, sometimes! Check it out here!
              </Link>

              <div className="mt-6 sm:mt-8">
                <h2 className="mb-3 text-lg sm:text-xl font-semibold">
                  About Me:
                </h2>
                <BlurFadeText
                  className="py-2 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.about}
                />
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex justify-center sm:justify-end">
                <Avatar className="size-24 sm:size-28 lg:size-32 border-2 shadow-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-lg sm:text-xl font-semibold">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="work" className="my-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                Work Experience
              </h2>
            </BlurFade>
            <div className="space-y-3 sm:space-y-4">
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
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-12 sm:py-16 lg:py-20 mx-4 sm:mx-6 lg:mx-8 bg-gradient-to-b from-white dark:from-background via-neutral-200 dark:via-neutral-600 to-black/50 dark:to-white rounded-xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-xs sm:text-sm font-medium">
                  Proof of Work
                </div>
                <Link href="/projects">
                  <h2 className="text-2xl hover:underline sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter leading-tight">
                    Check out my Projects
                  </h2>
                </Link>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="w-full">
              <ProjectCarousel projects={projects} />
            </div>
          </BlurFade>
        </div>
      </section>

      <Link
        href="/resume"
        className="text-primary flex space-x-2 text-sm sm:text-base my-2 hover:underline transition-all duration-200 hover:text-primary/80 inline-block"
      >
        <PaperclipIcon className="text-black  dark:text-neutral-300" />
        <span className="underline cursor-pointer text-black dark:text-white">
          My Resume!
        </span>
      </Link>

      <footer className="w-full mx-4 sm:mx-6 lg:mx-8 rounded-xl dark:bg-gray-800 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2">
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
              © {new Date().getFullYear()} Akshat Girdhar
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
              Crafted with passion and code
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
