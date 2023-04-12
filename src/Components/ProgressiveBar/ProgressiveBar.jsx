import React from "react";
import "./ProgressiveBar.css";

export default function ProgressiveBar({title, percentage }) {
  return (
    <div className="progress-wrapper d-flex flex-col">
      <div className="d-flex flex-row jc-space-between gap-5px">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <progress value={percentage} max="100"></progress>
    </div>
  );
}
