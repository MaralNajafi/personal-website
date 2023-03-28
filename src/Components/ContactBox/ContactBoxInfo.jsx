import React from "react";

export default function ContactBoxInfo({ title }) {
  return (
    <div className="contact-box__info d-flex flex-col">
      <h3>{title}</h3>
      <ul className="flex-grow-1 d-flex flex-col">
        <li className="d-flex ai-center gap-10px">
          <div className="d-flex ai-center">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
            >
              <use href="#envelop"></use>
            </svg>
          </div>
          <div>Marawlnajafi@gmail.com</div>
        </li>
        <li className="d-flex ai-center gap-10px">
          <div className="d-flex ai-center">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
            >
              <use href="#telephone"></use>
            </svg>
          </div>
          <div>+98 917 28 33 171</div>
        </li>
        <li className="d-flex ai-center gap-10px">
          <div className="d-flex ai-center">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
            >
              <use href="#github"></use>
            </svg>
          </div>
          <div>
            <a href="https://github.com/MaralNajafi" className="td-underline">
              MaralNajafi
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
