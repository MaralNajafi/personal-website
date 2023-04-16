import React from "react";
import { Link } from "react-router-dom";
import SVGListItem from "../../ListItems/SVGListItem";

export default function ContactBoxInfoBody({ isToggled }) {
  return (
    <ul
      className={`contact-box__info__body flex-grow-1 d-flex flex-col ${
        !isToggled ? "contact-box__info__body_toggle" : ""
      }`}
    >
      <SVGListItem gap={10} svgID={"envelop"}>
        Marawlnajafi@gmail.com
      </SVGListItem>
      <SVGListItem gap={10} svgID={"linked-in"}>
        <Link
          to="https://www.linkedin.com/in/maral-najafi-4a2ba5270/"
          className="td-underline"
        >
          My LinkedIn
        </Link>
      </SVGListItem>
      <SVGListItem gap={10} svgID={"github"}>
        <Link to="https://github.com/MaralNajafi" className="td-underline">
          Maral Najafi
        </Link>
      </SVGListItem>
    </ul>
  );
}
