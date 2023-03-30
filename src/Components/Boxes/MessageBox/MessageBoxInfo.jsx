import React from "react";

export default function MessageBoxInfo({info}) {
  return (
    <div className="d-flex flex-grow-1 message-box__message">
      <textarea
       {...info}
      ></textarea>
    </div>
  );
}
