import React from "react";
import KeyValueTypeBox from "../KeyValueTypeBox/KeyValueTypeBox";
import "./AboutMeSidebar.css";
import Tag from "../Tags/Tag";
import { Link } from "react-router-dom";
import MY_AGE from "../../utils/getMyAge";
import ProgressiveBar from "../ProgressiveBar/ProgressiveBar";

export default function GeneralAboutMeBox() {
  return (
    <div className="about-me-sidebar d-flex flex-col">
      <div className="d-flex flex-col gap-5px">
        <h3 id="personal-info">Personal info</h3>
        <KeyValueTypeBox keyName={"age"} valueContent={MY_AGE} />
        <KeyValueTypeBox keyName={"born"} valueContent={"1999 July 1"} />
        <KeyValueTypeBox keyName={"location"} valueContent={"Tehran/Iran"} />
        <KeyValueTypeBox
          keyName={"position"}
          valueContent={"Front-end web developer"}
        />
        <KeyValueTypeBox
          keyName={"education"}
          valueContent={"Bachelor of business management"}
        />
      </div>

      <div>
        <h3 id="projects">Products</h3>
        <div className="d-flex flex-col gap-10px white-space-nw">
          <Link
            target="_blank"
            to={"https://yourtodotask.netlify.app/"}
            className="td-underline"
          >
            yourtodotask.netlify.app
          </Link>
        </div>
      </div>
      <div>
        <h3 id="projects">Projects</h3>
        <div className="d-flex flex-col gap-10px white-space-nw">
          <Link
            target="_blank"
            to={"https://github.com/MaralNajafi/editable-todo-app"}
            className="td-underline"
          >
            editable-todo-app
          </Link>
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
      <div className="d-flex flex-col gap-5px">
        <h3 id="programming-skills">Programming skills</h3>
        <div className="d-flex flex-row flex-wrap gap-10px">
          <Tag>JavaScript</Tag>
          <Tag>React.js</Tag>
          <Tag>Next.js</Tag>
          <Tag>REST API</Tag>
          <Tag>Git & Github</Tag>
          <Tag>Bootstrap</Tag>
          <Tag>Tailwind</Tag>
          <Tag>HTML5</Tag>
          <Tag>CSS3</Tag>
          <Tag>SASS</Tag>
          <Tag>To be continued...</Tag>
        </div>
      </div>

      <div>
        <h3 id="languages">Languages</h3>
        <div className="d-flex flex-col gap-10px white-space-nw">
          <ProgressiveBar title={"persian"} percentage={100} />
          <ProgressiveBar title={"English"} percentage={95} />
          <ProgressiveBar title={"French"} percentage={40} />
        </div>
      </div>
    </div>
  );
}
