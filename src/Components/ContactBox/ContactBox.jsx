import React from "react";
import "./ContactBox.css";
import ContactBoxForm from "../Forms/ContactBoxForm/ContactBoxForm";
import ContactBoxInfo from "../ContactBoxInfo/ContactBoxInfo";

export default function ContactBox() {
  return (
    <div className="contact-box d-flex jc-center">
      <ContactBoxInfo title={"contact info"} />
      <ContactBoxForm title={"Send a Message"} />
    </div>
  );
}
