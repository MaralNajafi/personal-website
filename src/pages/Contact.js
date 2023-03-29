import React from "react";
import BackgroundContainer from "../Components/Containers/BackgroundContainer";
import ContactBox from "../Components/Boxes/ContactBox";

export default function Contact() {
  return (
    <BackgroundContainer waveMode={"contact"}>
      <ContactBox />
    </BackgroundContainer>
  );
}
