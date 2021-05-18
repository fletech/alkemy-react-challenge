import React, { useEffect, useState } from "react";
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
}) => {
  //handlers
  const resultHandler = (e) => {
    setSearchValue(e.target.value);
  };
  //useState
  const [inputFocused, setFocus] = useState(false);
  //Use effect
  useEffect(() => {
    axios
      .get(`${url}/search/${searchValue}`)
      .then((response) => {
        if (response.data.results === undefined) {
          setResultNull(true);
        }
        setResultNull(false);
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
  }, [searchValue, setResultSearching, setResultNull]);
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

      <InputStyled className={inputFocused ? "focus" : ""}>
        <i className="fas fa-search "></i>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => resultHandler(e)}
          onFocus={() => {
            setFocus(true);
          }}
          onEmptied={() => setSearchValue("")}
          onPointerCancel={() => {
            setFocus(false);
          }}

          // onSelect={(e) =>
          //   searchValue.length !== 0
          //     ? setSearchValue(e.target.value)
          //     : setSearchValue("")
          // }
        />
      </InputStyled>
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
  &.focus {
    border-bottom: solid 2px tomato;
  }
  i {
    color: #474747;
  }
  input {
    border: none;
    flex: 1;
    height: 100%;
    outline: none;
    padding-left: 1rem;
  }
`;
export default InputSearch;
