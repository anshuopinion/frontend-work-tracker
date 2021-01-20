import { Form, Formik } from "formik";
import * as yup from "yup";
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
import { FC } from "react";
import { IWork } from "Types";

interface Props {
  addWorkHandler: (workData: IWork) => void;
}

const AddWorkForm: FC<Props> = ({ addWorkHandler }) => {
  return (
    <>
      <Flex flexDirection="column">
        <Card pb={20}>
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

              addWorkHandler(workData);
            }}
            initialValues={{
              work_name: "",
              work_color: "",
              work_complete_date: "",
            }}
            validationSchema={yup.object().shape({
              work_name: yup.string().min(4).required(),
              work_color: yup.string().required(),
              work_complete_date: yup.date().required(),
            })}
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
                    inputProps={{
                      type: "date",
                      min: "2000/01/02",
                      max: "2021/01/02",
                    }}
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
