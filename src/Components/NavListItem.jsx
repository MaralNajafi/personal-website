import React from "react";
export default function NavListItem({ text, isActive, handleActive, id }) {
  return (
    <li
      className={isActive ? "active" : ""}
      key={id}
      onClick={() => {
        handleActive(id);
      }}
    >
      {text}
    </li>
  );
}
