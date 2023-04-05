import React from "react";
import "./KeyValueTypeBox.scss";

export default function KeyValueTypeBox({ keyName, valueContent }) {
  return (
    <div className="key-value-type-box d-flex gap-10px">
      <span>{keyName}:</span>
      <span>{valueContent}</span>
    </div>
  );
}
