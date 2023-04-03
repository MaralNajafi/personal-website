import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListItem({ children, path }) {
  return (
      <NavLink to={path}>{children}</NavLink>
  );
}
