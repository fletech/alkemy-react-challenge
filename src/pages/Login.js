import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({
  isLogged,
  setIsLogged,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  let history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const validate = Yup.object({
    email: Yup.string().email("challenge@alkemy.org").required("Required"),
    password: Yup.string().min(5, "react").required("Required"),
  });
  //states

  //handlers
  const loginHandler = async (values) => {
    setSubmitted(true);
    try {
      const body = { email: values.email, password: values.password };
      const result = await axios.post(
        "https://fletapi.herokuapp.com/facundo/api/users",
        body
      );

      console.log(result);
      //.post("http://challenge-react.alkemy.org/", body)
      setToast(false);
      setToastType({});
      setToast(true);
      setToastType({
        type: "success",
        message: "Logged-in. Have fun 🎉",
      });
      setTimeout(() => {
        setToast(false);
        setToastType({});
      }, 3000);

      localStorage.setItem("TOKEN_LOGIN", result.data.token);
      setSubmitted(false);
      setIsLogged(true);
      history.push("/");
      return result.status;
    } catch (err) {
      console.log(err);
      setToast(true);
      setToastType({
        type: "info",
        message: "Try again",
      });
      setTimeout(() => {
        setToast(false);
        setToastType({});
      }, 3000);
    }
    //
  };

  useEffect(() => {
    if (submitted) {
      setToast(true);
      setToastType({
        type: "info",
        message: "Logging-in",
      });
    }
  }, [submitted]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => loginHandler(values)}
    >
      {(formik) => (
        <>
          <FormContainer>
            <h1>Log in</h1>
            <Form className="form-login">
              <div>
                <InputField
                  type={"text"}
                  label={"Email"}
                  name={"email"}
                ></InputField>
                <InputField
                  type={"password"}
                  label={"Password"}
                  name={"password"}
                ></InputField>
                <div className="buttons">
                  <button type="submit" className="btn-login">
                    Log in
                  </button>
                  <button type="reset" className="btn-clear">
                    Clear
                  </button>
                </div>
              </div>
            </Form>
          </FormContainer>
        </>
      )}
    </Formik>
  );
};

const FormContainer = styled.div`
  border: solid 1px #ececec;
  border-radius: 2rem;
  width: 30%;
  padding: 2rem;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  &:focus {
    box-shadow: 2px 2px 8px #474747;
  }
  h1 {
    color: #474747;
  }
  form div {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 3rem;
      margin-bottom: 1rem;
      color: #474747;
      font-weight: 500;
    }
    input {
      color: grey;
      height: 2rem;
      font-size: 1rem;
      border: none;
      border-bottom: solid 1px grey;
      &:focus {
        outline: none;
        border-bottom: solid 2px tomato;
      }
    }

    div.buttons {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      button {
        width: 45%;
        margin: 1rem 0rem;
        background: none;
        border: none;
        height: 2rem;
        border-radius: 2rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        &.btn-login {
          background-color: tomato;
        }
        &.btn-clear {
          background-color: grey;
        }
      }
    }
  }
`;
export default Login;
