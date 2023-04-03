import React from "react";
import InnerContainer from "../Containers/InnerContainer";
import MeBox from "../Boxes/MeBox";
import CopyrightBox from "../Boxes/CopyrightBox";
import PageMapBox from "../Boxes/PageMapBox";
import SocialMediaBox from "../Boxes/SocialMediaBox";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <InnerContainer>
        <div className="main-footer__data d-flex jc-center ai-center">
          <div className="d-flex flex-col gap-10px">
            <MeBox name={"maral najafi"} position={"front end developer"} />
            <SocialMediaBox />
          </div>
          <PageMapBox />
          <CopyrightBox />
        </div>
      </InnerContainer>
    </footer>
  );
}
