import React from "react";
import SVGListItem from "../../ListItems/SVGListItem";

export default function ContactBoxInfoBody({ isToggled }) {
  return (
    <ul
      className={`contact-box__info__body flex-grow-1 d-flex flex-col ${
        !isToggled ? "contact-box__info__body_toggle" : ""
      }`}
    >
      <SVGListItem svgID={"envelop"}>Marawlnajafi@gmail.com</SVGListItem>
      <SVGListItem svgID={"telephone"}>+98 917 28 33 171</SVGListItem>
      <SVGListItem svgID={"github"}>
        <a href="https://github.com/MaralNajafi" className="td-underline">
          Maral Najafi
        </a>
      </SVGListItem>
    </ul>
  );
}
