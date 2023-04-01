import React, { useContext } from "react";
import MessageBoxContext from "../../../context/MessageBoxContext";

export default function MessageBoxInfo() {
    const messageBoxData = useContext(MessageBoxContext)
  return (
    <div className="d-flex flex-grow-1 message-box__message">
      <textarea
       {...messageBoxData.info}
      ></textarea>
    </div>
  );
}
