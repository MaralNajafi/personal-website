import React from "react";
import { Link } from "react-router-dom";

export default function NavListItem({ children, path, active }) {
  return (
    <Link to={path} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </Link>
  );
}
