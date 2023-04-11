import React from "react";
import "./StackInput.css";

export default function StackInput({
  name,
  type,
  placeholder,
  value,
  onBlur,
  onChange,
  errorMessage,
}) {
  return (
    <div className="d-flex flex-col">
      <input
        name={name}
        type={type}
        className="stack-input"
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      <p className="error-message"> {errorMessage}</p>
    </div>
  );
}
