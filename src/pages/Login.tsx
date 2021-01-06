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
  Flex,
  Spinner,
  Button,
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Card } from "elements";

const Login: React.FC = () => {
  const { sendRequest, loading, error, clearError } = useHttpClient();
  const { login } = useAuth();
  const history = useHistory();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ErrorModal error={error} onClose={clearError}></ErrorModal>

      <Flex
        mx="auto"
        flexDirection="column"
        color="mainD"
        maxWidth="30rem"
        my="2rem"
      >
        {" "}
        <Card
          rounded={{ base: "none", md: "lg" }}
          shadow={{ base: "none", md: "md" }}
        >
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
                  <StyledInput
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
                  <StyledInput
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
        </Card>
      </Flex>
    </>
  );
};

export default Login;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 0.2rem 1rem;
  &:focus {
    outline-color: red;
    transition: 0.2s ease-in-out;
  }
`;
