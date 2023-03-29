import React from "react";
import Background from "../Components/Background";
import ShowcaseBox from "../Components/Boxes/ShowcaseBox";
export default function Home() {
  return (
    <Background waveMode={"home"}>
      <ShowcaseBox />
    </Background>
  );
}
