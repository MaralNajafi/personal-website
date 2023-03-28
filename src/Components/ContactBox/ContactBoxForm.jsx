import React from "react";

export default function ContactBoxForm({title}) {
  return (
    <div className="contact-box__form d-flex flex-col">
      <h3>{title}</h3>
      <form className="d-flex flex-col flex-grow-1">
        <input type="text" className="stack-input" placeholder="Full Name" />
        <input type="email" className="stack-input" placeholder="email" />

        <div className="message-box d-flex flex-col flex-grow-1">
          <div className="d-flex message-box__subject">
            <input type="text" className="flex-grow-1" placeholder="subject" />
          </div>
          <div className="d-flex flex-grow-1 message-box__message">
            <textarea name="message"></textarea>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
