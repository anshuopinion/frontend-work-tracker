import { Form, Formik } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { Card } from "elements";

import { addNewWork } from "api";
import { useStateValue } from "store";
import { QueryClient, useMutation, useQueryClient } from "react-query";

const AddWorkForm = () => {
  const queryClient = useQueryClient();
  const [{ userId }] = useStateValue();
  const { mutateAsync, isLoading } = useMutation(addNewWork);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex flexDirection="column">
          <Card pb={14}>
            <Heading
              textAlign="center"
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={2}
            >
              Add your work
            </Heading>
            <Formik
              onSubmit={async (values) => {
                const workData = {
                  work_name: values.work_name,
                  work_color: values.work_color,
                  work_complete_date: new Date(values.work_complete_date),
                };

                await mutateAsync({ userId, workData });
                queryClient.invalidateQueries("works");
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
      )}
    </>
  );
};

export default AddWorkForm;
