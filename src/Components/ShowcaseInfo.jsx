import React from "react";
import { Link } from "react-router-dom";

export default function ShowcaseInfo({ name, position, explanation }) {
  return (
    <div className="showcase__info">
      <span>This is me</span>
      <h2>{name}</h2>
      <p className="my-position">{position}</p>
      <p className="my-explanation">{explanation}</p>
      <Link to={"/about"}>
        <button className="btn-primary">about me</button>
      </Link>
    </div>
  );
}
