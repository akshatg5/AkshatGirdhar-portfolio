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
    <div className="w-full h-full py-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
        Proof of work:
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Built a platform for group playlists!",
    title: "VoteTube",
    link: "https://votetube.vercel.app/",
    src: "/Votetube1.png",
    content: (
      <div className="flex justify-center border border-black-2">
        <Link href={"https://votetube.vercel.app/"}>
          <h2>VoteTube Demo</h2>
        </Link>
        <TwitterTweetEmbed tweetId={"1834593052633301184"} />
      </div>
    ),
  },
  {
    title: "MediaByte",
    category: "Media handling service with UI generator using Gemini.",
    link: "https://mediabyte.vercel.app/",
    src: "/Mediabyte1.png",
    content: <DummyContent />,
  },
  {
    title: "Builders Hub",
    category: "Builders Hub is a collaborative community where builders come together to work on projects from start to finish, fostering innovation and teamwork.",
    link: "https://buildershub.vercel.app/",
    src: "/buildersHub.png",
    content: (
        <div>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7194200424168472577"
          height="444"
          width="504"
          frameBorder="0"
          allowFullScreen
          title="Embedded post"
          style={{ border: 'none', overflow: 'hidden' }}
        ></iframe>
      </div>
    ),
  },
  {
    title: "Pen Point",
    category: "Blogging app made using Hono,React,Postgres,Tailwind",
    link: "https://penpoint.vercel.app/",
    src: "/Penpoint1.png",
    content: (
      <div className="flex justify-center border border-black-2">
        <h2>Penpoint Demo</h2>
        <TwitterTweetEmbed tweetId={"1816554728760959140"} />
      </div>
    ),
  },
  {
    title: "Team Promotions Pvt Ltd. Website",
    link: "https://www.teampromotions.in/",
    category: "Internship project",
    src: "/TeamPromotions1.png",
    content: (
      <div>
        <h1>Internship Project</h1>
        <h2>Oct 2023 - Mar 2024 · 6 months</h2>
        <div>
          <h2>Project Overview:</h2>
          <p>
            As part of the Tech Team at Team Promotions, we enhanced the
            website's interface. Worked on the UI as well as on the blog feature
            to help Admins to easily update company activities. We've developed
            a user-friendly Content Management System (CMS) using Django and
            integrated a newsletter feature for regular updates.
          </p>
          <h2>Key Features:</h2>
          <ul>
            <li>HTML,CSS,Javascript</li>
            <li>Django CMS</li>
          </ul>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "Temflo Pvt Ltd. Website",
    link : "https://www.temflo.co.in/",
    category: "Freelance project for Temflo Pvt. Ltd.",
    src: "/Temflo1.png",
    content: <div>
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230140304245317633"
      height="961"
      width="504"
      allowFullScreen
      title="Embedded post"
      style={{ border: 'none', overflow: 'hidden' }}
    ></iframe>
  </div>,
  },
  {
    title: "Cash Flow",
    category: "Secure P2P app built with ReactJS, ExpressJS, MongoDB & TailwindCSS.",
    link: "https://penpoint.vercel.app/",
    src: "/CashFlow.png",
    content: (
      <div className="flex justify-center border border-black-2">
        <Image src={'/CashFlow.png'} alt="Screenshot" width={200} height={220} />
      </div>
    ),
  },
];
