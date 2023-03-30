import React from "react";
import NonStackInput from "../../Inputs/NonStackInput";

export default function MessageBoxSubject({ subject }) {
  return (
    <div className="d-flex message-box__subject">
      <NonStackInput
        {...subject}
      />
    </div>
  );
}
