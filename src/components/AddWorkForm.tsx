import { Card } from "element";
import styled from "styled-components";
import { Button } from "element";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Box } from "@material-ui/core";
const AddWorkForm = () => {
  return (
    <>
      <FormCard height={25} elevation={12}>
        <FormTitle>Add work here</FormTitle>
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
              <FormGroup column>
                <label>Decide Your Work </label>
                <Field
                  name="work_name"
                  type="text"
                  placeholder="Enter your work"
                  component={StyledTextField}
                />
              </FormGroup>
              <FormGroup>
                <label>Choose Color </label>
                <Field name="work_color" type="color" />
              </FormGroup>
              <FormGroup column>
                <label>Finsh Work Date</label>
                <Field
                  name="work_complete_date"
                  // type="date"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  component={StyledTextField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
            </Box>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        </Formik>
      </FormCard>
    </>
  );
};

export default AddWorkForm;

type FormGroupProps = {
  column?: boolean;
};

const StyledTextField = styled(TextField)``;
const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.mainD};
`;

const FormGroup = styled(Box)<FormGroupProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const FormCard = styled(Card)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
`;
