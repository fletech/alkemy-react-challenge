import React, { useEffect } from "react";
import axios from "axios";
import { url } from "../utils";
import styled from "styled-components";

const InputSearch = ({
  setSearchValue,
  searchValue,
  setResultSearching,
  setResultNull,
  inputFocused,
  setFocus,
}) => {
  //Handlers
  const resultHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${url}search/${searchValue}`)
      .then((response) => {
        setResultNull(false);
        //console.log(response.data.results);
        if (response.data.results === undefined) {
          setResultNull(true);
        }
        setResultSearching(response.data.results);
      })
      .catch(function(error) {
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

  useEffect(() => {
    let elem = document.querySelector(".input-search");
    elem.click();
  }, []);
  return (
    <FormStyled onSubmit={resultHandler}>
      <InputStyled className={inputFocused ? "focus" : ""}>
        <input
          //ref={inputRef}
          autoFocus
          type="text"
          value={searchValue}
          className="input-search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => {
            setResultNull(false);
            setFocus(true);
          }}
          onEmptied={() => setSearchValue("")}
          onPointerCancel={() => {
            setFocus(false);
          }}
        />

        <button type="submit">
          <i className="fas fa-search "></i>
        </button>
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
      </InputStyled>
    </FormStyled>
  );
};
const FormStyled = styled.form`
  width: 100%;
`;
const InputStyled = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #181818;
  height: 2rem;
  position: relative;

  &.focus {
    border-bottom: solid 2px tomato;
  }
  button {
    font-size: 1.2rem;
    border: none;
    background: none;
    width: 5%;
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
    width: 90%;
    outline: none;
    padding-left: 0.3rem;
    padding-right: 1rem;
    font-size: 16px;
    @media (max-width: 650px) {
      font-size: 16px !important;
    }
  }
`;
export default InputSearch;
