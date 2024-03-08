import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { YoutubeClone } from "./YoutubeClone";
import { LandingPage } from "./LandingPage";
import { DukaanAssignment } from "./DukaanAssignment";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={LandingPage} />
        <Route path="/youtubeClone" Component={YoutubeClone} />
        <Route path="/dukaanAssignment" Component={DukaanAssignment} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
