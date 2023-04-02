import ContactBoxInfoBody from "./ContactBoxInfoBody";
import ContactBoxInfoHeader from "./ContactBoxInfoHeader";
import { useState } from "react";

export default function ContactBoxInfo() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div className="contact-box__info d-flex flex-col">
      <ContactBoxInfoHeader
        isToggled={isToggled}
        title={"contact info"}
        handleToggle={handleToggle}
      />
      <ContactBoxInfoBody isToggled={isToggled} />
    </div>
  );
}
