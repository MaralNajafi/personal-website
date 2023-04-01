import React, { useContext } from "react";
import wave from "../../style/media/wave.svg";
import wave2 from "../../style/media/wave-2.svg";
import ThemeContext from "../../context/ThemeContext";

export default function Background({ children, waveMode }) {
  const themeData = useContext(ThemeContext);
  return (
    <div
      className="background flex-grow-1"
      style={{
        backgroundImage: `url(${
          waveMode === "home" ? wave : waveMode === "contact" ? wave2 : ""
        })`,
        backgroundColor: themeData.theme === "light" ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}
