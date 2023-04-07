import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import PrimaryButton from "../../Buttons/PrimaryButton";
import StackInput from "../../Inputs/StackInput";
import MessageBox from "../../Boxes/MessageBox/MessageBox";
import MessageBoxContext from "../../../context/MessageBoxContext";
import { toast } from "react-toastify";

export default function ContactBoxForm({ title }) {
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

      try {
        const postAPI = await fetch("http://localhost:3004/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (postAPI.ok) {
          toast.success("Your message was sent!");
          setIsPending(false);
          setIsFailed(false);
          formik.handleReset();
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error("There was an error. Please, try again.");
        setIsPending(false);
        setIsFailed(true);
      }
    },
  });
  return (
    <>
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
          <MessageBoxContext.Provider
            value={{
              subject: {
                name: "subject",
                type: "text",
                className: `"flex-grow-1" ${
                  formik.touched.subject && formik.errors.subject
                    ? "error-style"
                    : ""
                }`,
                placeholder:
                  formik.touched.subject && formik.errors.subject
                    ? "subject*"
                    : "subject",
                value: formik.values.subject,
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
              },
              message: {
                name: "message",
                type: "text",
                className:
                  formik.touched.message && formik.errors.message
                    ? "error-style"
                    : "",
                placeholder:
                  formik.touched.message && formik.errors.message
                    ? "message*"
                    : "message",
                value: formik.values.message,
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
              },
            }}
          >
            <MessageBox />
          </MessageBoxContext.Provider>
          <PrimaryButton
            type={"submit"}
            disabled={isPending ? true : false}
            id={"submitBtn"}
          >
            {isPending ? "sending" : isFailed ? "try again" : "send"}
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
