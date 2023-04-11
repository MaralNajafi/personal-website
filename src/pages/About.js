import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import GeneralAboutMeBox from "../Components/AboutMeSidebar/AboutMeSidebar";

export default function About() {
  return (
    <div className="about-wrapper d-flex flex-row">
      <GeneralAboutMeBox />
      <AboutMe />
    </div>
  );
}
