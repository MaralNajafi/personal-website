import React from "react";
import "./Showcase.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import PrimaryOutlineButton from "../Buttons/PrimaryOutlineButton/PrimaryOutlineButton";
import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <div className="showcase-wrapper d-flex ai-center">
      <div className="showcase d-flex flex-row">
        <div className="showcase-description d-flex flex-col gap-20px">
          <p>
            I'm a <b>self-taught Front-end developer</b> fueled by my desire to
            create and develop. I'm constantly learning and improving my skills,
            in order to be a more contributive developer. If you need a
            self-motivated developer,{" "}
            <b>
              I'll be glad to join your team and contribute to your projects.{" "}
            </b>
          </p>
          <div className="buttons d-flex flex-row gap-10px">
            <Link to={"/personal-website/contact"}>
              <PrimaryOutlineButton>Contact me</PrimaryOutlineButton>
            </Link>
            <Link to={"/personal-website/about"}>
              <PrimaryButton>About me</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
