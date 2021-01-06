import { ErrorMessage, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Form, Field } from "formik";
// import { InputControl } from "formik-chakra-ui";
import { useHttpClient } from "hooks/http-hooks";
import ErrorModal from "components/ui/ErrorModal";
import styled from "@emotion/styled";

import { useAuth } from "hooks/auth-hooks";
import { useHistory } from "react-router-dom";

import {
  Spinner,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { StyledInputText } from "elements";
import LSCard from "components/ui/LSCard";

const Login: React.FC = () => {
  const { sendRequest, loading, error, clearError } = useHttpClient();
  const { login } = useAuth();
  const history = useHistory();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ErrorModal error={error} onClose={clearError}></ErrorModal>
      <LSCard>
        <Heading as="h4" color={["red", "green"]} textAlign="center">
          Login
        </Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            const LoginData = {
              email: values.email,
              password: values.password,
            };
            const { data } = await sendRequest(
              "/user/signin",
              "post",
              LoginData
            );
            login(data.userId, data.token);
            history.replace("/");
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(6, "password is too short").required(),
          })}
        >
          <Form>
            <Flex mx="auto" p="1rem" flexDirection="column">
              <FormControl>
                <FormLabel>Email:</FormLabel>
                <StyledInputText
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />

                <Text pl="1rem" color="#fc0324" textTransform="capitalize">
                  <ErrorMessage name="email" />
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel>Password:</FormLabel>
                <StyledInputText
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <Text pl="1rem" color="#fc0324" textTransform="capitalize">
                  <ErrorMessage name="email" />
                </Text>
              </FormControl>

              <Button mt="1rem" type="submit">
                Login
              </Button>
            </Flex>
          </Form>
        </Formik>
      </LSCard>
    </>
  );
};

export default Login;
