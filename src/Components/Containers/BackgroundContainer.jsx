import React from "react";
import wave from "../../style/media/wave.svg";
import wave2 from "../../style/media/wave-2.svg";

export default function Background({ children, waveMode }) {
  return (
    <div
      className="background flex-grow-1"
      style={{
        backgroundImage: `url(${
          waveMode === "home" ? wave : waveMode === "contact" ? wave2 : ""
        })`,
      }}
    >
      {children}
    </div>
  );
}
