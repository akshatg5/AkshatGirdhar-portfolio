import React from "react";
import { Link } from "react-router-dom";
import { DisplayCard } from "./LandingPageDisplayCard";

export const LandingPage = () => {
  // Array of objects containing details for each DisplayCard
  const projects = [
    {
      link: "/youtubeClone",
      displayImg: "/youtube-logo.jpg",
      projectTitle: "Youtube Clone",
      projectDescription: "Youtube Clone made using ReactJS and Tailwind CSS",
      githubLink: "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Youtube-components"
    },
    {
      link: "/dukaanAssignment",
      displayImg: "/dukaanImg.png",
      projectTitle: "Dukaan Assignment",
      projectDescription: "Dukaan Assignment given by Dukaan App : https://twitter.com/mydukaanapp. Made using ReactJS and Tailwind",
      githubLink: "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Dukaan-components"
    }
  ];

  return (
    <div className="bg-black h-screen w-screen justify-center">
      <div className="flex justify-center items-center align-middle">
        {/* Mapping over the projects array to render DisplayCard for each project */}
        {projects.map((project, index) => (
          <DisplayCard
            key={index}
            link={project.link}
            displayImg={project.displayImg}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};
