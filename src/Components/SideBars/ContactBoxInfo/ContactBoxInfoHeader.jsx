import React from "react";

export default function ContactBoxInfoHeader({
  title,
  isToggled,
  handleToggle,
}) {
  return (
    <div className="d-flex jc-space-between">
      <h3>{title}</h3>
      <div
        className="d-none responsive-d-flex ai-center flex-grow-1 jc-end cursor-pointer"
        onClick={handleToggle}
      >
        <div className="d-flex ai-center cursor-pointer ">
          <svg width="16" height="16" fill="currentColor">
            <use href={isToggled ? "#caret-up" : "#caret-down"}></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
