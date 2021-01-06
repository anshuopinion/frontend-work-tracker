import styled from "@emotion/styled";
import { Field } from "formik";

export const StyledInputText = styled(Field)`
  width: 100%;
  padding: 0.2rem 1rem;
  &:focus {
    outline-color: red;
    transition: 0.2s ease-in-out;
  }
`;
