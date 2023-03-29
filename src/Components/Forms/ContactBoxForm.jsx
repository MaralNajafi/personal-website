import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import PrimaryButton from "../Buttons/PrimaryButton";
import StackInput from "../Inputs/StackInput";
import NonStackInput from "../Inputs/NonStackInput";

export default function ContactBoxForm({ title }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(30, "too long*")
        .min(10, "too short*")
        .required("required*"),
      email: Yup.string().email("invalid email address").required("required*"),
      subject: Yup.string().required("required*"),
      message: Yup.string().required("required*"),
    }),
    onSubmit: async (values) => {
      setIsPending(true);
      const postAPI = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then(() => {
          setIsSubmit(true);
          setTimeout(() => {
            setIsSubmit(false);
          }, 500);
          setIsPending(false);
          setIsFailed(false);
          formik.handleReset();
        })
        .catch(() => {
          setIsPending(false);
          setIsFailed(true);
        });
    },
  });
  return (
    <div className="contact-box__form d-flex flex-col">
      <h3>{title}</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-col flex-grow-1"
      >
        <StackInput
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          errorMessage={
            formik.touched.fullName && formik.errors.fullName ? (
              formik.errors.fullName
            ) : (
              <br />
            )
          }
        />
        <StackInput
          name="email"
          type="text"
          className="stack-input"
          placeholder="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          errorMessage={
            formik.touched.email && formik.errors.email ? (
              formik.errors.email
            ) : (
              <br />
            )
          }
        />

        <div className="message-box d-flex flex-col flex-grow-1">
          <div className="d-flex message-box__subject">
            <NonStackInput
              name="subject"
              type="text"
              className={`"flex-grow-1" ${
                formik.touched.subject && formik.errors.subject
                  ? "error-style"
                  : ""
              }`}
              placeholder={
                formik.touched.subject && formik.errors.subject
                  ? "subject*"
                  : "subject"
              }
              value={formik.values.subject}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="d-flex flex-grow-1 message-box__message">
            <textarea
              name="message"
              placeholder={
                formik.touched.message && formik.errors.message
                  ? "message*"
                  : "message"
              }
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={
                formik.touched.message && formik.errors.subject
                  ? "error-style"
                  : ""
              }
            ></textarea>
          </div>
        </div>
        <PrimaryButton
          type={"submit"}
          disabled={isSubmit || isPending ? true : false}
          id={"submitBtn"}
        >
          {isPending
            ? "sending"
            : isFailed
            ? "try again"
            : isSubmit
            ? "sent"
            : "send"}
        </PrimaryButton>
      </form>
    </div>
  );
}
