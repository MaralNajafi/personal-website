import React, { useState } from "react";
import NavListItem from "./NavListItem";

export default function MainNav() {
  const navListItems = [
    {
      text: "home",
      path: "/",
      id: 1,
    },
    {
      text: "about",
      path: "about",
      id: 2,
    },
    {
      text: "contact",
      path: "contact",
      id: 3,
    },
  ];

  const navListItem = navListItems.map((navListItem) => {
    return (
      <NavListItem
        text={navListItem.text}
        path={navListItem.path}
        isActive={navListItem.isActive}
        id={navListItem.id}
        key={navListItem.id}
      />
    );
  });

  return (
    <nav className="main-nav">
      <ul className="d-flex ai-center">{navListItem}</ul>
    </nav>
  );
}
