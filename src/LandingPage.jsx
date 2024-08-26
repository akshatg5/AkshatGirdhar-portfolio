import React from "react";
import { Link } from "react-router-dom";
import { DisplayCard } from "./LandingPageDisplayCard";

export const LandingPage = () => {
  // Array of objects containing details for each DisplayCard
  const projects = [
    {
      link: "/youtubeClone",
      displayImg: "/youtube-logo.jpg",
      category : "Frontend",
      projectTitle: "Youtube Clone",
      projectDescription: "Youtube Clone made using ReactJS and Tailwind CSS",
      githubLink: "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Youtube-components"
    },
    {
      link: "/dukaanAssignment",
      displayImg: "/dukaanImg.png",
      category : "Frontend",
      projectTitle: "Dukaan Assignment",
      projectDescription: "Dukaan Assignment given by Dukaan App : https://twitter.com/mydukaanapp. Made using ReactJS and Tailwind",
      githubLink: "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Dukaan-components"
    },
    {
      link: "https://artoflearninginstitute.com/",
      displayImg: "/yogaWebsite.png",
      category : "Full Stack",
      projectTitle: "Art of Learning Institute",
      projectDescription: "A website made for art of learning institute, Mumbai. For the frontend we used ReactJS and for the backend we used the headless Sanity CMS"
    },
    {
      link: "https://www.youtube.com/playlist?list=PLqv3LXavHm2t1BZtwKnypAAqc8KFl2F64",
      displayImg: "/CS50Projects.png",
      category : "Full Stack",
      projectTitle: "CS50 Projects",
      projectDescription: "A collection of web development projects built as a part of the course CS50.Technologies used include frameworks like Flask and Django.",
      githubLink : "https://github.com/akshatg5/FootballClubz-Django/tree/master"
    },
    {
      link: "https://cash-flow-alpha.vercel.app/",
      displayImg: "/CashFlow.png",
      category : "Full Stack",
      projectTitle: "CashFlow",
      projectDescription: "CashFlow: Send & receive money instantly with friends & family. Secure P2P app built with ReactJS, ExpressJS, MongoDB & TailwindCSS. Deployed on Vercel.",
      githubLink:"https://github.com/akshatg5/CashFlow"
    },
    {
      link: "https://buildershub.vercel.app/",
      displayImg: "/buildersHub.png",
      category : "Full Stack",
      projectTitle: "Builders Hub",
      projectDescription: "Builders Hub is a collaborative community where builders come together to work on projects from start to finish, fostering innovation and teamwork.",
      githubLink:"https://github.com/khardikk/Builders_hub"
    },
    {
      link: "https://temflo.vercel.app/",
      displayImg: "/temflo.png",
      category : "Full Stack",
      projectTitle: "Temflo Website",
      projectDescription: "A website made for Temflo Systems Pvt. Ltd. as a freelance project. For the frontend we used React + typescript, for the backend we used Sanity CMS."
    },
    {
      link: "https://penpoint.vercel.app/",
      displayImg: "/penpoint.png",
      category : "Full Stack",
      projectTitle: "Pen Point",
      projectDescription: "A blogging platform for budding creators. Tech stack used is cloudflare workers,Hono,React+typescript,PostgreSQL",
      githubLink : "https://github.com/akshatg5/Pen-Point"
    },
    {
      link: "https://mediabyte.vercel.app/",
      displayImg: "/MediabyteSS.png",
      category : "Full Stack",
      projectTitle: "MediaByte",
      projectDescription: "A NextJs web app, connected with cloudinary APIs giving the users the ability to play with their images and videos. Go check it out! Uses PostgreSQL as a database and deployed on Vercel, frontend is Nextjs and Tailwind CSS.",
      githubLink : "https://github.com/akshatg5/MediaByte"
    },
  ];

  return (
    <div className="bg-black h-auto w-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center align-middle p-4">
      {/* Mapping over the projects array to render DisplayCard for each project */}
      {projects.map((project, index) => (
        <DisplayCard
          key={index}
          link={project.link}
          displayImg={project.displayImg}
          category={project.category}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  </div>
  );
};
