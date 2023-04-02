import ContactBoxInfoBody from "./ContactBoxInfoBody";
import ContactBoxInfoHeader from "./ContactBoxInfoHeader";
import MeBox from "../../Boxes/MeBox";
import { useState } from "react";

export default function ContactBoxInfo() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div className="contact-box__info d-flex flex-col">
      <ContactBoxInfoHeader isToggled={isToggled} handleToggle={handleToggle}>
        <h3>contact info</h3>
      </ContactBoxInfoHeader>
      <ContactBoxInfoBody isToggled={isToggled} />
    </div>
  );
}
