import React from "react";

export default function Container({ children }) {
  return <div className="container d-flex flex-col">{children}</div>;
}
