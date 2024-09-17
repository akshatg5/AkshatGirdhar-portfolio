"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-8 max-sm:pt-8 max-sm:pb-0">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl font-bold text-white dark:text-neutral-200 font-sans">
          What I've built: 
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
const ResponsiveContent = ({ children } : {children:any}) => (
  <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const ResponsiveLink = ({ href, children } : {href :any,children:any}) => (
  <Link href={href} className="text-blue-500 hover:underline block text-center sm:text-left mb-4">
    {children}
  </Link>
);

const ResponsiveTweet = ({ tweetId }:{tweetId:string}) => (
  <div className="w-full max-w-md mx-auto">
    <TwitterTweetEmbed tweetId={tweetId} />
  </div>
);

const ResponsiveIframe = ({ src, height, width, title } : {src:any,height:any,width:any,title:string}) => (
  <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto">
    <iframe
      src={src}
      height={height}
      width={width}
      frameBorder="0"
      allowFullScreen
      title={title}
      className="w-full h-full"
    />
  </div>
);

export const data = [
  {
    category: "Built a platform for group playlists!",
    title: "VoteTube",
    link: "https://votetube.vercel.app/",
    src: "/Votetube1.png",
    content: (
      <ResponsiveContent>
        <ResponsiveLink href="https://votetube.vercel.app/">
          <h2 className="text-xl font-bold mb-4">VoteTube Demo</h2>
        </ResponsiveLink>
        <ResponsiveTweet tweetId="1834593052633301184" />
      </ResponsiveContent>
    ),
  },
  {
    title: "MediaByte",
    category: "Media handling service with UI generator using Gemini.",
    link: "https://mediabyte.vercel.app/",
    src: "/Mediabyte1.png",
    content: (
      <ResponsiveContent>
        <ResponsiveLink href="https://mediabyte.vercel.app/">
          <h2 className="text-xl font-bold mb-4">Mediabyte Demo</h2>
        </ResponsiveLink>
        <ResponsiveTweet tweetId="1827613215502823494" />
      </ResponsiveContent>
    ),
  },
  {
    title: "Pen Point",
    category: "Blogging app made using Hono,React,Postgres,Tailwind",
    link: "https://penpoint.vercel.app/",
    src: "/Penpoint1.png",
    content: (
      <ResponsiveContent>
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Penpoint Demo</h2>
        <ResponsiveTweet tweetId="1816554728760959140" />
      </ResponsiveContent>
    ),
  },
  {
    title: "Team Promotions Pvt Ltd. Website",
    link: "https://www.teampromotions.in/",
    category: "Internship project",
    src: "/TeamPromotions1.png",
    content: (
      <ResponsiveContent >
        <h1 className="text-2xl text-black font-bold mb-2 text-center sm:text-left">Internship Project</h1>
        <h2 className="text-xl mb-4 text-black text-center sm:text-left">Oct 2023 - Mar 2024 · 6 months</h2>
        <div className="space-y-4">
          <h2 className="text-lg text-black font-semibold">Project Overview:</h2>
          <p className="text-sm sm:text-base text-black">
            As part of the Tech Team at Team Promotions, we enhanced the
            website's interface. Worked on the UI as well as on the blog feature
            to help Admins to easily update company activities. We've developed
            a user-friendly Content Management System (CMS) using Django and
            integrated a newsletter feature for regular updates.
          </p>
          <h2 className="text-lg font-semibold text-black">Key Features:</h2>
          <ul className="list-disc text-black list-inside text-sm sm:text-base">
            <li>HTML,CSS,Javascript</li>
            <li>Django CMS</li>
          </ul>
        </div>
      </ResponsiveContent>
    ),
  },
  {
    title: "Builders Hub",
    category: "Collaborative project-building community fostering innovation and teamwork",
    link: "https://buildershub.vercel.app/",
    src: "/buildersHub.png",
    content: (
      <ResponsiveContent>
        <ResponsiveIframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7194200424168472577"
          height="684"
          width="504"
          title="Builders Hub LinkedIn Post"
        />
      </ResponsiveContent>
    ),
  },
  {
    title: "Temflo Pvt Ltd. Website",
    link: "https://www.temflo.co.in/",
    category: "Freelance project for Temflo Pvt. Ltd.",
    src: "/Temflo1.png",
    content: (
      <ResponsiveContent>
        <ResponsiveIframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230140304245317633"
          height="961"
          width="504"
          title="Temflo Pvt Ltd Website LinkedIn Post"
        />
      </ResponsiveContent>
    ),
  },
  {
    title: "Cash Flow",
    category: "Secure P2P app built with ReactJS, ExpressJS, MongoDB & TailwindCSS.",
    link: "https://penpoint.vercel.app/",
    src: "/CashFlow.png",
    content: (
      <ResponsiveContent>
        <div className="flex justify-center">
          <Image 
            src='/CashFlow.png' 
            alt="Screenshot" 
            width={200} 
            height={220} 
            layout="responsive"
            className="max-w-full h-auto"
          />
        </div>
      </ResponsiveContent>
    ),
  },
];