import React from "react";
import MeBox from "../Boxes/MeBox";
import MainNav from "../Navigation/MainNav";
import InnerContainer from "../Containers/InnerContainer";

export default function MainHeader() {
  return (
    <header>
      <InnerContainer>
        <div className="main-header d-flex jc-space-between ai-center">
          <MeBox name={"maral najafi"} position={"front end developer"} />
          <MainNav />
        </div>
      </InnerContainer>
    </header>
  );
}
