import React from "react";
import MeBox from "../Boxes/MeBox";
import MainNav from "../MainNav/MainNav";

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
