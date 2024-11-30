import React, { useState, useEffect } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-2">
    <div className="h-4 bg-gray-200 rounded"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
  </div>
)

const TweetWithSkeleton = ({ tweetId }: { tweetId: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-64 overflow-hidden">
      {!isLoaded && <SkeletonLoader />}
      <div className={isLoaded ? 'block' : 'hidden'}>
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
    </div>
  )
}

const LinkedInEmbedWithSkeleton = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-64 overflow-hidden">
      {!isLoaded && <SkeletonLoader />}
      <iframe
        src={src}
        height="400"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Embed"
        className={isLoaded ? 'block' : 'hidden'}
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  )
}

export const data = [
  {
    category: "Group Playlist Platform",
    title: "VoteTube",
    link: "https://votetube.vercel.app/",
    src: "/Votetube1.png",
    content: (
      <TweetWithSkeleton tweetId="1834593052633301184" />
    ),
  },
  {
    title: "MediaByte",
    category: "Media Handling Service",
    link: "https://mediabyte.vercel.app/",
    src: "/Mediabyte1.png",
    content: (
      <TweetWithSkeleton tweetId="1827613215502823494" />
    ),
  },
  {
    title: "LiteKite",
    category: "Financial Management Platform",
    link: "https://litekite.vercel.app/",
    src: "/Litekite.png",
    content: (
      <TweetWithSkeleton tweetId="1838964058340684195" />
    ),
  },
  {
    title: "LeetRank",
    category: "Leetcode Ranking Platform for colleges",
    link: "https://leet-rank.vercel.app/",
    src: "/LeetRank.png",
    content: (
      <TweetWithSkeleton tweetId="1861798361868943505" />
    ),
  },
  {
    title: "CodeReceipt",
    category: "Developer Tool",
    link: "https://codereceipt.vercel.app/",
    src: "/image.png",
    content: (
      <TweetWithSkeleton tweetId="1859689580867485763" />
    ),
  },
  {
    title: "Pen Point",
    category: "Blogging Platform",
    link: "https://penpoint.vercel.app/",
    src: "/Penpoint1.png",
    content: (
      <TweetWithSkeleton tweetId="1816554728760959140" />
    ),
  },
  {
    title: "Real time-2WayDatabaseSync",
    category: "Database Synchronization",
    link: "https://www.youtube.com/watch?v=QF8fAHYLglo",
    src: "/DBsync.png",
    content: (
      <p>
        A real-time database to Google Sheet data sync project. Created a NodeJS server 
        connected to Google Sheets webhook and PostgresDB for bidirectional synchronization.
      </p>
    ),
  },
  {
    title: "Team Promotions Pvt Ltd. Website",
    link: "https://www.teampromotions.in/",
    category: "Internship Project",
    src: "/TeamPromotions1.png",
    content: (
      <p>
        Enhanced website interface, developed blog feature, and implemented a user-friendly 
        CMS using Django with an integrated newsletter feature.
      </p>
    ),
  },
  {
    title: "Builders Hub",
    category: "Collaborative Platform",
    link: "https://buildershub.vercel.app/",
    src: "/buildersHub.png",
    content: (
      <LinkedInEmbedWithSkeleton src="https://www.linkedin.com/embed/feed/update/urn:li:share:7194200424168472577" />
    ),
  },
  {
    title: "Temflo Pvt Ltd. Website",
    link: "https://www.temflo.co.in/",
    category: "Freelance Project",
    src: "/Temflo1.png",
    content: (
      <LinkedInEmbedWithSkeleton src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230140304245317633" />
    ),
  },
  {
    title: "Cash Flow",
    category: "Financial Application",
    link: "https://penpoint.vercel.app/",
    src: "/CashFlow.png",
    content: (
      <p>
        Secure P2P app built with ReactJS, ExpressJS, MongoDB & TailwindCSS. 
        Facilitates easy and secure financial transactions between users.
      </p>
    ),
  },
  {
    title: "Old Portfolio",
    category: "Personal Website",
    link: "https://old-portfolio-flame.vercel.app/",
    src: "/oldportfolio.png",
    content: (
      <p>
        First portfolio made using React and Tailwind CSS. Includes simple projects 
        and clones like a YouTube clone and Dukaan Assignment.
      </p>
    ),
  },
]

