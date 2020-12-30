import { Card } from "element";
import styled from "styled-components";
import { Button } from "element";
import { Form, Formik, Field } from "formik";

const AddWorkForm = () => {
  return (
    <>
      <FormCard height={25} width={20}>
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
            <FormGroup column>
              <label>Decide Your Work </label>
              <Field
                name="work_name"
                type="text"
                placeholder="Enter your work"
              />
            </FormGroup>
            <FormGroup>
              <label>Choose Color </label>
              <Field name="work_color" type="color" />
            </FormGroup>
            <FormGroup column>
              <label>Finsh Work Date</label>
              <Field name="work_complete_date" type="date" />
            </FormGroup>
            <Button>Submit</Button>
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
const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")}; ;
`;

const FormCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
