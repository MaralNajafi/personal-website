import React from "react";
import { Link } from "react-router-dom";

export default function ShowcaseInfo({ explanation }) {
  return (
    <div className="showcase__info">
      <span>This is me</span>
      <p className="my-explanation">{explanation}</p>
      <Link to={"/about"}>
        <button className="btn-primary">about me</button>
      </Link>
    </div>
  );
}
