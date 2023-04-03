import React from "react";
import LinkListItem from "../ListItems/LinkListItem";

export default function PageMapBox() {
  return (
    <div>
      <ul className="d-flex flex-col gap-5px">
        <LinkListItem path={"contact"}>Contact Me</LinkListItem>
        <div>
          <LinkListItem path={"about"}>About Me</LinkListItem>
          <ul className="nested-ul d-flex flex-col gap-5px">
            <LinkListItem path={"about#personal-info"}>
              personal info
            </LinkListItem>
            <LinkListItem path={"about#education"}>Education</LinkListItem>
            <LinkListItem path={"about#skills"}>skills</LinkListItem>
            <LinkListItem path={"about#experiences"}>Experiences</LinkListItem>
          </ul>
        </div>
      </ul>
    </div>
  );
}
