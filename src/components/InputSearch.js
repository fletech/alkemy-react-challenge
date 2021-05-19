import React, { useState } from "react";
import axios from "axios";
import { url } from "../utils";
import styled from "styled-components";

// import { Formik, Form } from "formik";

// import InputField from "./InputField";

const InputSearch = ({
  setSearchValue,
  searchValue,
  setResultSearching,
  setResultNull,
  inputFocused,
  setFocus,
}) => {
  //handlers

  const resultHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${url}/search/${searchValue}`)
      .then((response) => {
        setResultNull(false);
        console.log(response.data.results);
        if (response.data.results === undefined) {
          setResultNull(true);
        }
        setResultSearching(response.data.results);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  //useState

  return (
    <>
      {/* <Formik>
        {(formik) => {
          <Form>
            <InputField
              label="Search"
              type={"text"}
              name={"search"}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>;
        }}
      </Formik> */}
      <form onSubmit={resultHandler}>
        <InputStyled className={inputFocused ? "focus" : ""}>
          <input
            type="text"
            value={searchValue}
            className="input-search"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => {
              setResultNull(false);
              setFocus(true);
            }}
            onEmptied={() => setSearchValue("")}
            onPointerCancel={() => {
              setFocus(false);
            }}
          />
          {searchValue.length !== 0 && (
            <button
              type="reset"
              onClick={() => {
                setSearchValue("");
                setResultSearching();
                setResultNull(false);
              }}
            >
              <i className="far fa-times-circle "></i>
            </button>
          )}

          <button type="submit">
            <i className="fas fa-search "></i>
          </button>
        </InputStyled>
      </form>
    </>
  );
};

const InputStyled = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #181818;
  width: 350px;
  height: 2rem;
  min-width: 300px;
  position: relative;
  &.focus {
    border-bottom: solid 2px tomato;
  }
  button {
    border: none;
    background: none;
    margin: 0 0.5rem;
    i {
      color: #474747;
    }
    &:hover {
      cursor: pointer;
    }
  }
  input {
    border: none;
    flex: 1;
    height: 100%;
    outline: none;
    padding-left: 0.3rem;
    padding-right: 1rem;
  }
`;
export default InputSearch;
