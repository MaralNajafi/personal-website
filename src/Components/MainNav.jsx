import React, { useState } from "react";
import NavListItem from "./NavListItem";

export default function MainNav() {
  const [navListItems, setNavListItems] = useState([
    {
      text: "home",
      id: 1,
    },
    {
      text: "about",
      id: 2,
    },
    {
      text: "contact",
      id: 3,
    },
  ]);

  const navListItem = navListItems.map((navListItem) => {
    return (
      <NavListItem
        text={navListItem.text}
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
