import React from "react";
import { ErrorMessage, useField } from "formik";
import styled from "styled-components";

const InputField = ({ label, value, ...props }) => {
  //const [field, meta] = useField(props);
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{label}</label>

      <input
        className="input-field"
        {...field}
        {...props}
        autoComplete="on"
        value={value}
      />
      <ErrorStyled>
        <ErrorMessage name={field.name} className="error-message" />
      </ErrorStyled>
    </>
  );
};

const ErrorStyled = styled.div`
  margin-top: 1rem;
  color: tomato;
  font-size: 12px;
`;
export default InputField;
