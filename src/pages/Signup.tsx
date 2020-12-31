import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Form, Field } from "formik";
import { Button } from "element";
import * as yup from "yup";
const Signup: React.FC = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().min(4).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6, "password is too short").required(),
  });
  return (
    <>
      <h1>Signup</h1>
      <br />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" placeholder="Enter Name" />
          <ErrorMessage name="name" />
          <br /> <br />
          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter Email" />
          <ErrorMessage name="email" />
          <br /> <br />
          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter Password" />
          <ErrorMessage name="password" />
          <br /> <br />
          <Button type="submit">Signup</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;
