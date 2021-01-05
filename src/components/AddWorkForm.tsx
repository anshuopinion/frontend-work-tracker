import { Form, Formik, Field } from "formik";
import { Box } from "@chakra-ui/react";
const AddWorkForm = () => {
  return (
    <>
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <label>Decide Your Work </label>
              <Field
                name="work_name"
                type="text"
                placeholder="Enter your work"
              />
            </Box>
            <Box>
              <label>Choose Color </label>
              <Field name="work_color" type="color" />
            </Box>
            <Box>
              <label>Finsh Work Date</label>
              <Field
                name="work_complete_date"
                // type="date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Box>
          {/* <Button variant="contained" color="primary">
            Submit
          </Button> */}
        </Form>
      </Formik>
    </>
  );
};

export default AddWorkForm;
