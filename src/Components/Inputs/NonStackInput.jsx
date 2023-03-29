import React from "react";

export default function NonStackInput({
  name,
  type,
  className,
  placeholder,
  value,
  onBlur,
  onChange,
}) {
  return (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
}
