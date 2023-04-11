import React from "react";
import MeBox from "../MeBox/MeBox";
import CopyrightBox from "../Boxes/CopyrightBox";
import PageMapBox from "../Boxes/PageMapBox";
import SocialMediaBox from "../Boxes/SocialMediaBox";
import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__data d-flex jc-center ai-center flex-wrap">
        <div className="d-flex flex-col gap-10px white-space-nw">
          <MeBox name={"maral najafi"} position={"front end developer"} />
          <SocialMediaBox />
        </div>
        <PageMapBox />
        <CopyrightBox />
      </div>
    </footer>
  );
}
