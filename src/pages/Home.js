import React from "react";
import Background from "../Components/Background";
import Showcase from "../Components/Showcase";
export default function Home() {
  return (
    <Background waveMode={"home"}>
      <Showcase />
    </Background>
  );
}
