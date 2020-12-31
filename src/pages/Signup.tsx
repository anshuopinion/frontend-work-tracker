import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Form, Field } from "formik";
import { Button } from "element";
import * as yup from "yup";
import ErrorModal from "components/ui/ErrorModal";
import Spinner from "components/ui/Spinner";
import { useAuth } from "hooks/auth-hooks";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "hooks/http-hooks";
const Signup: React.FC = () => {
  const { sendRequest, loading, error, clearError } = useHttpClient();
  const { login } = useAuth();
  const history = useHistory();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ErrorModal error={error} onClose={clearError}></ErrorModal>
      <h1>SignUp</h1>
      <br />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values) => {
          const signupData = {
            name: values.name,
            email: values.email,
            password: values.password,
          };
          const { data } = await sendRequest(
            "/user/signup",
            "post",
            signupData
          );
          login(data.userId, data.token);
          history.replace("/");
        }}
        validationSchema={yup.object().shape({
          name: yup.string().min(4).required(),
          email: yup.string().email().required(),
          password: yup.string().min(6, "password is too short").required(),
        })}
      >
        <Form>
          <label>Name:</label>
          <Field type="name" name="name" placeholder="Enter Name" />
          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter Email" />
          <br /> <br />
          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter Password" />
          <br /> <br />
          <Button type="submit">SignUp</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;
