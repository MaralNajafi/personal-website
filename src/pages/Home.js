import React from "react";
import BackgroundContainer from "../Components/Containers/BackgroundContainer";
import ShowcaseBox from "../Components/Boxes/ShowcaseBox";
export default function Home() {
  return (
    <BackgroundContainer waveMode={"home"}>
      <ShowcaseBox />
    </BackgroundContainer>
  );
}
