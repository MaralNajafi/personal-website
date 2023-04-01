import React from "react";
import wave from "../../style/media/wave.svg";
import wave2 from "../../style/media/wave-2.svg";


export default function Container({ children, path }) {
  return (
    <div
      className="container d-flex flex-col background"
      style={{
        backgroundImage: `url(${
          path === "/" ? wave : path === "/contact" ? wave2 : ""
        })`,
      }}
    >
      {children}
    </div>
  );
}
