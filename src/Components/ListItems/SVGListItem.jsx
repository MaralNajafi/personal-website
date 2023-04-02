import React from "react";

export default function SVGListItem({ svgID, gap, children }) {
  return (
    <li className={`d-flex ai-center gap-${gap}px`}>
      <div className="d-flex ai-center">
        <svg width="16" height="16" fill="currentColor">
          <use href={`#${svgID}`}></use>
        </svg>
      </div>
      <div>{children}</div>
    </li>
  );
}
