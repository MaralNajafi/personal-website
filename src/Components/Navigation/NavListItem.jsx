import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListItem({ text, path }) {
  return (
      <NavLink to={`${path}`}>{text}</NavLink>
  );
}
