import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import SVG from "../SVG/SVG";
import { Link } from "react-router-dom";

export default function SocialMediaBox() {
  return (
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
  );
}
