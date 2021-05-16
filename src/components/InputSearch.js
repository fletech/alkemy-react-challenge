import React, { useEffect } from "react";
import axios from "axios";
import { url } from "../utils";
import { Formik, Form } from "formik";

import InputField from "./InputField";

const InputSearch = ({ setSearchValue, searchValue, setResultSearching }) => {
  //Use effect
  useEffect(() => {
    axios
      .get(`${url}/search/${searchValue}`)
      .then((response) => {
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
  }, [searchValue, setResultSearching]);
  return (
    <>
      <Formik>
        {(formik) => {
          <Form>
            <InputField
              label="Search"
              type={"text"}
              name={"search"}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>;
        }}
      </Formik>

      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
    </>
  );
};
export default InputSearch;
