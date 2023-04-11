import React from "react";
import MessageBoxSubject from "./MessageBoxSubject";
import MessageBoxMessage from "./MessageBoxMessage";
import "./MessageBox.css";

export default function MessageBox() {
  return (
    <div className="message-box d-flex flex-col flex-grow-1">
      <MessageBoxSubject />
      <MessageBoxMessage />
    </div>
  );
}
