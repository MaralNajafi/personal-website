import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import GeneralAboutMeBox from "../components/AboutMeSidebar/AboutMeSidebar";

export default function About() {
  return (
    <div className="about-wrapper d-flex flex-row">
      <GeneralAboutMeBox />
      <AboutMe />
    </div>
  );
}
