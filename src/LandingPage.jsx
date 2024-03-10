import React from "react";
import { Link } from "react-router-dom";
import { DisplayCard } from "./LandingPageDisplayCard";

export const LandingPage = () => {
  return (
    <div className="bg-black h-screen w-screen justify-center">
      <div className="flex justify-center items-center align-middle">
        <DisplayCard
          link={"/youtubeClone"}
          displayImg={"/youtube-logo.jpg"}
          projectTitle={"Youtube Clone"}
          projectDescription={
            "Youtube Clone made using ReactJS and Tailwind CSS"
          }
          githubLink={
            "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Youtube-components"
          }
        />
        <DisplayCard
          link={"/dukaanAssignment"}
          displayImg={"/dukaanImg.png"}
          projectTitle={"Dukaan Assignment"}
          projectDescription={
            "Dukaan Assignment given by Dukaan App : https://twitter.com/mydukaanapp. Made using ReactJS and Tailwind "
          }
          githubLink={
            "https://github.com/akshatg5/Frontend-projects/tree/main/src/components/Dukaan-components"
          }
        />
      </div>
    </div>
  );
};
