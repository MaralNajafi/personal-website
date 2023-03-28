import React from "react";
import Background from "../Components/Background";
import ContactBox from "../Components/ContactBox/ContactBox";

export default function Contact() {
  return (
    <Background waveMode={"contact"}>
      <ContactBox />
    </Background>
  );
}
