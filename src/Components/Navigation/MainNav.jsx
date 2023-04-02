import React, { useState } from "react";
import NavListItem from "./NavListItem";
import SVGListItem from "../ListItems/SVGListItem"

export default function MainNav() {
  const navListItems = [
    {
      name: "home",
      path: "/",
      id: 1,
    },
    {
      name: "about",
      path: "about",
      id: 2,
    },
    {
      name: "contact",
      path: "contact",
      id: 3,
    },
  ];

  const navListItem = navListItems.map((navListItem) => {
    return (
      <NavListItem
        path={navListItem.path}
        key={navListItem.id}
      >
        <SVGListItem svgID={navListItem.name} gap={5}><span className="responsive-d-none">{navListItem.name}</span></SVGListItem>
      </NavListItem>
    );
  });

  return (
    <nav className="main-nav">
      <ul className="d-flex ai-center">{navListItem}</ul>
    </nav>
  );
}
