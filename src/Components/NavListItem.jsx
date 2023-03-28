import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListItem({ text, isActive, id, path }) {
  return (
    <li className={isActive ? "active" : ""} key={id}>
      <NavLink to={`${path}`}>{text}</NavLink>
    </li>
  );
}
