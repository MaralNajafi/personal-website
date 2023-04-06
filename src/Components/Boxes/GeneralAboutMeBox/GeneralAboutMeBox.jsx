import React from "react";
import KeyValueTypeBox from "../KeyValueTypeBox/KeyValueTypeBox";
import "./GeneralAboutMeBox.scss";
import Tag from "../../Tags/Tag";
import { Link } from "react-router-dom";
import MY_AGE from "../../../Functions/getMyAge";

export default function GeneralAboutMeBox() {
  return (
    <>
      <div className="general-about-me-box d-flex flex-col">
        <div className="general-about-me-box__image"></div>
        <div className="general-about-me-box__info d-flex flex-col flex-grow-1">
          <div className="d-flex flex-col gap-5px white-space-nw">
            <h3>General info</h3>
            <KeyValueTypeBox keyName={"age"} valueContent={MY_AGE} />
            <KeyValueTypeBox keyName={"born"} valueContent={"1999 July 1"} />
            <KeyValueTypeBox
              keyName={"location"}
              valueContent={"Tehran/Iran"}
            />
            <KeyValueTypeBox
              keyName={"position"}
              valueContent={"front-end web developer"}
            />
          </div>
          <div className="d-flex flex-col gap-5px">
            <h3>Programming skills</h3>
            <div className="d-flex flex-row flex-wrap gap-10px">
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Sass</Tag>
              <Tag>JavaScript</Tag>
              <Tag>React.js</Tag>
              <Tag>Bootstrap</Tag>
              <Tag>Git & Github</Tag>
              <Tag>To be continued...</Tag>
            </div>
          </div>

          <div>
            <h3>Projects</h3>
            <div className="d-flex flex-col gap-10px white-space-nw">
              <Link
                target="_blank"
                to={"https://github.com/MaralNajafi/crypto-currency-website"}
                className="td-underline"
              >
                crypto-currency-website
              </Link>
              <Link
                target="_blank"
                to={"https://github.com/MaralNajafi/news-website"}
                className="td-underline"
              >
                news-website
              </Link>
              <Link
                target="_blank"
                to={"https://github.com/MaralNajafi/make-flash-cards"}
                className="td-underline"
              >
                make-flash-cards
              </Link>
              <Link
                target="_blank"
                to={"https://github.com/MaralNajafi/rock-paper-scissors-game"}
                className="td-underline"
              >
                rock-paper-scissors-game
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/MaralNajafi/countdown-timer"}
                className="td-underline"
              >
                countdown-timer
              </Link>
            </div>
          </div>
          <div>
            <h3>Languages</h3>
            <div className="d-flex flex-col gap-10px white-space-nw"></div>
          </div>
        </div>
      </div>
    </>
  );
}
