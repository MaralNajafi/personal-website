import React from "react";
import MessageBoxSubject from "./MessageBoxSubject";
import MessageBoxInfo from "./MessageBoxInfo";

export default function MessageBox() {
  return (
    <div className="message-box d-flex flex-col flex-grow-1">
      <MessageBoxSubject />
      <MessageBoxInfo />
    </div>
  );
}
