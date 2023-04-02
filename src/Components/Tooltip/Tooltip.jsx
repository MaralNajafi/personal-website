import React from "react";
import "./Tooltip.css";

export default function Tooltip({ text, children }) {
  return (
    <span data-tooltip={text} data-flow="bottom">
      {children}
    </span>
  );
}
