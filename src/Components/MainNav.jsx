import React, { useState } from "react";
import NavListItem from "./NavListItem";

export default function MainNav() {
  const [navListItems, setNavListItems] = useState([
    {
      text: "home",
      isActive: true,
      id: 1,
    },
    {
      text: "about",
      isActive: false,
      id: 2,
    },
    {
      text: "contact",
      isActive: false,
      id: 3,
    },
  ]);

  const navListItem = navListItems.map((navListItem) => {
    return (
      <NavListItem
        text={navListItem.text}
        isActive={navListItem.isActive}
        id={navListItem.id}
        handleActive={() => {
          handleActive(navListItem.id);
        }}
        key={navListItem.id}
      />
    );
  });

  function handleActive(id) {
    const activatedNavListItemIndex = navListItems.findIndex(
      (navListItem) => navListItem.id === id
    );
    setNavListItems(navListItems => {
      navListItems.forEach(navListItem=>{
        navListItem.isActive = false;
      })
      navListItems[activatedNavListItemIndex] = {
        ...navListItems[activatedNavListItemIndex],
        isActive: true,
      }
      return [...navListItems]
    })
    
  }

  return (
    <nav className="main-nav">
      <ul className="d-flex ai-center">{navListItem}</ul>
    </nav>
  );
}
