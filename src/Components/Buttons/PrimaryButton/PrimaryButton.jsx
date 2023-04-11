import React from "react";
import "./PrimaryButton.css";

export default function PrimaryButton({
  id,
  type,
  disabled,
  children,
  onClick,
}) {
  return (
    <button
      className="btn-primary"
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
