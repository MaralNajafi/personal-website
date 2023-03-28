import React from "react";
import InnerContainer from "../InnerContainer";
import ContactBoxForm from "./ContactBoxForm";
import ContactBoxInfo from "./ContactBoxInfo";

export default function ContactBox() {
  return (
    <InnerContainer>
      <div className="contact-box d-flex jc-center">
        <ContactBoxInfo title={"contact info"} />
        <ContactBoxForm title={"Send a Message"} />
      </div>
    </InnerContainer>
  );
}
