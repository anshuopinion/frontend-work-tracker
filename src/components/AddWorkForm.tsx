import { Form, Formik } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { Card } from "elements";

const AddWorkForm = () => {
  return (
    <>
      <Flex flexDirection="column">
        <Card pb={14}>
          <Heading textAlign="center" fontSize="3xl" mb={2}>
            Add your work
          </Heading>
          <Formik
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={{
              work_name: "",
              work_color: "",
              work_complete_date: "",
            }}
          >
            <Form>
              <Stack>
                <FormControl>
                  <FormLabel>Decide Your Work:</FormLabel>
                  <InputControl
                    name="work_name"
                    inputProps={{ type: "text" }}
                    placeholder="Enter your work"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Choose Color:</FormLabel>
                  <InputControl
                    name="work_color"
                    inputProps={{ type: "color" }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Finsh Work Date:</FormLabel>
                  <InputControl
                    name="work_complete_date"
                    inputProps={{ type: "date" }}
                  />
                </FormControl>
              </Stack>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </Card>
      </Flex>
    </>
  );
};

export default AddWorkForm;
