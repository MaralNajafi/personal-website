import React from "react";
import InnerContainer from "../../Containers/InnerContainer";
import ContactBoxForm from "../../Forms/ContactBoxForm/ContactBoxForm";
import ContactBoxInfo from "../../ContactBoxInfo/ContactBoxInfo";

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
