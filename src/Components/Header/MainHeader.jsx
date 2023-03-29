import React from "react";
import MeBox from "../Boxes/MeBox";
import MainNav from "../Navigation/MainNav";

export default function MainHeader() {
  return (
    <header className="main-header d-flex jc-space-between ai-center">
      <MeBox name={"maral najafi"} position={"front end developer"} />
      <MainNav />
    </header>
  );
}
