import { useFormik } from "formik";
import React from "react";

export default function ContactBoxForm({ title }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="contact-box__form d-flex flex-col">
      <h3>{title}</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-col flex-grow-1"
      >
        <input
          name="fullName"
          type="text"
          className="stack-input"
          placeholder="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <input
          name="email"
          type="email"
          className="stack-input"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <div className="message-box d-flex flex-col flex-grow-1">
          <div className="d-flex message-box__subject">
            <input
              name="subject"
              type="text"
              className="flex-grow-1"
              placeholder="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
          </div>
          <div className="d-flex flex-grow-1 message-box__message">
            <textarea
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
