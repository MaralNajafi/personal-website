import React from "react";

export default function SVG({ fill = "currentColor", id }) {
  return (
    <div className="d-flex ai-center">
      <svg width="16" height="16" fill={fill}>
        <use href={`#${id}`}></use>
      </svg>
    </div>
  );
}
