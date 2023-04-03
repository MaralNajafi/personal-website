import React from "react";
import SVG from "../SVG/SVG";

export default function SVGListItem({ svgID, gap, children }) {
  return (
    <li className={`d-flex ai-center gap-${gap}px`}>
      <SVG id={svgID}/>
      <div>{children}</div>
    </li>
  );
}
