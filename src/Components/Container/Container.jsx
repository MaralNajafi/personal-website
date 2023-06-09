import React from "react";
import "./Container.css";

export default function Container({ children }) {
  return (
    <div className="container d-flex flex-col jc-start background">
      {children}
    </div>
  );
}
