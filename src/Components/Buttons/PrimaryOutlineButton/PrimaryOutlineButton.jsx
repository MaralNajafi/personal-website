import React from "react";
import "./PrimaryOutlineButton.css";

export default function PrimaryOutlineButton({
  id,
  type,
  disabled,
  children,
  onClick,
}) {
  return (
    <button
      className="btn-primary-outline"
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
