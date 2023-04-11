import React from "react";
import MeBox from "../MeBox/MeBox";
import MainNav from "../MainNav/MainNav";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header>
      <div className="main-header d-flex jc-space-between ai-center">
        <MeBox name={"maral najafi"} position={"front end developer"} />
        <MainNav />
      </div>
    </header>
  );
}
