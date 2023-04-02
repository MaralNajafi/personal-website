import React from "react";
import InnerContainer from "../Containers/InnerContainer";
import MeBox from "../Boxes/MeBox";
import Tooltip from "../Tooltip/Tooltip";
import SVG from "../SVG/SVG";
import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <InnerContainer>
        <div className="main-footer__data d-flex">
          <div className="d-flex flex-col gap-10px">
            <MeBox name={"maral najafi"} position={"front end developer"} />
            <ul className="d-flex jc-space-between">
              <Tooltip text={"github"}>
                <Link to={"https://github.com/MaralNajafi"}>
                  <SVG id={"github"} />
                </Link>
              </Tooltip>
              <Tooltip text={"LinkedIn"}>
                <SVG id={"linked-in"} />
              </Tooltip>
              <Tooltip text={"telegram"}>
                <SVG id={"telegram"} />
              </Tooltip>
              <Tooltip text={"instagram"}>
                <SVG id={"instagram"} />
              </Tooltip>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </InnerContainer>
    </footer>
  );
}
