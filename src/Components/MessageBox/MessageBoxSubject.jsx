import React, { useContext } from "react";
import NonStackInput from "../../Inputs/NonStackInput";
import MessageBoxContext from "../../../context/MessageBoxContext";

export default function MessageBoxSubject() {
  const messageBoxData = useContext(MessageBoxContext);
  return (
    <div className="d-flex message-box__subject">
      <NonStackInput {...messageBoxData.subject}/>
    </div>
  );
}
