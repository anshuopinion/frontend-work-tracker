import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Form, Field } from "formik";
import { Button } from "element";
import { useHttpClient } from "hooks/http-hooks";
import ErrorModal from "components/ui/ErrorModal";
import Spinner from "components/ui/Spinner";
import { useAuth } from "hooks/auth-hooks";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const { sendRequest, loading, error, clearError } = useHttpClient();
  const { login } = useAuth();
  const history = useHistory();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ErrorModal error={error} onClose={clearError}></ErrorModal>
      <h1>Login</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          const LoginData = { email: values.email, password: values.password };
          const { data } = await sendRequest("/user/signin", "post", LoginData);
          login(data.userId, data.token);
          history.replace("/");
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().min(6, "password is too short").required(),
        })}
      >
        <Form>
          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter Email" />
          <br /> <br />
          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter Password" />
          <br /> <br />
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
