import { Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { Card } from "elements";
import { Form, Formik } from "formik";
import { InputControl } from "formik-chakra-ui";
import React from "react";

const TodoCard = () => {
  return (
    <Card>
      <Formik
        initialValues={{ task: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Flex justify="baseline" width="50rem">
            <FormControl>
              <FormLabel>Add New Task</FormLabel>
              <InputControl name="task" inputProps={{ type: "text" }} />
            </FormControl>
            <Button type="submit">Add Task</Button>
          </Flex>
        </Form>
      </Formik>
    </Card>
  );
};

export default TodoCard;
