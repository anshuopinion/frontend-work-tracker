import { Field, Form, Formik } from "formik";

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
          work_date: "",
        }}
      >
        <Form></Form>
      </Formik>
    </>
  );
};

export default AddWorkForm;
