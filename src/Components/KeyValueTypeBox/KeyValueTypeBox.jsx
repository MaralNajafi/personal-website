import React from "react";
import "./KeyValueTypeBox.css";

export default function KeyValueTypeBox({ keyName, valueContent }) {
  return (
    <div className="key-value-type-box d-flex gap-10px flex-wrap">
      <span>{keyName}:</span>
      <span>{valueContent}</span>
    </div>
  );
}
