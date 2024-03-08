import React from "react";

import { AppBar } from "./components/Youtube-components/AppBar";
import { SideBar } from "./components/Youtube-components/SideBar";
import { VideoGrid } from "./components/Youtube-components/VideoGrid";

export const YoutubeClone = () => {
  return (
    <div className="bg-zinc-950 text-white">
      <AppBar />
      <div className="flex">
        <SideBar />
        <VideoGrid />
      </div>
    </div>
  );
};
