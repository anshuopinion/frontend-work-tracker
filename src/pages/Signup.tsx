import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Form } from "formik";

import * as yup from "yup";
import ErrorModal from "components/ui/ErrorModal";
import { useAuth } from "hooks/auth-hooks";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "hooks/http-hooks";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import LSCard from "components/ui/LSCard";
import { StyledInputText } from "elements";
const Signup: React.FC = () => {
  const { sendRequest, loading, error, clearError } = useHttpClient();
  const { login } = useAuth();
  const history = useHistory();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ErrorModal error={error} onClose={clearError}></ErrorModal>

      <LSCard>
        <Heading textAlign="center" as="h2">
          SignUp
        </Heading>
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
            <Flex flexDirection="column">
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <StyledInputText
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                />
                <Text pl="1rem" color="#fc0324" textTransform="capitalize">
                  <ErrorMessage name="name" />
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Email:</FormLabel>
                <StyledInputText
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />{" "}
                <Text pl="1rem" color="#fc0324" textTransform="capitalize">
                  <ErrorMessage name="email" />
                </Text>
              </FormControl>

              <FormControl>
                {" "}
                <FormLabel>Password:</FormLabel>
                <StyledInputText
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <Text pl="1rem" color="#fc0324" textTransform="capitalize">
                  <ErrorMessage name="password" />
                </Text>
              </FormControl>

              <Button mt="1rem" type="submit">
                SignUp
              </Button>
            </Flex>
          </Form>
        </Formik>
      </LSCard>
    </>
  );
};

export default Signup;
