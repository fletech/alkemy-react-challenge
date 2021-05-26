import React, { useEffect, useRef } from "react";
import axios from "axios";
import { url } from "../utils";
import styled from "styled-components";

// import { Formik, Form } from "formik";

// import InputField from "./InputField";

const InputSearch = ({
  setSearchValue,
  searchValue,
  setResultSearching,
  resultNull,
  setResultNull,
  inputFocused,
  setFocus,
}) => {
  //states
  //const [prediction, setPrediction] = useState();
  //handlers
  // const predictSearchingHandler = (e) => {
  //   axios
  //     .get(`${url}/search/${searchValue}`)
  //     .then((response) => {
  //       console.log(response.data.results);
  //       // if (response.data.results === undefined) {
  //       //   setResultNull(true);
  //       // }
  //       setPrediction(response.data.results);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response);
  //       } else if (error.request) {
  //         console.log(error.request);
  //       } else {
  //         console.log("Error", error.message);
  //       }
  //       console.log(error.config);
  //     });
  // };

  //Handlers
  const resultHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${url}/search/${searchValue}`)
      .then((response) => {
        setResultNull(false);
        //console.log(response.data.results);
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

  useEffect(() => {
    let elem = document.querySelector(".input-search");
    elem.click();
  }, []);
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
            //ref={inputRef}
            autoFocus
            type="text"
            value={searchValue}
            onClick={() => console.log("triggered")}
            className="input-search"
            onChange={(e) => {
              setSearchValue(e.target.value);
              //predictSearchingHandler();
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
          {/* <div className="predictions">
            {prediction !== undefined &&
              prediction.map((result) => (
                <div>
                  <i className="fas fa-chevron-right"></i>
                  <p>{result.name}</p>
                </div>
              ))}
          </div> */}
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
  position: relative;
  @media (max-width: 650px) {
    width: auto;
  }
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
  div.predictions {
    position: absolute;
    top: 3rem;
    width: 350px;
    height: auto;
    max-height: 10rem;
    background-color: white;
    z-index: 100;
    border: solid 1px #dddddd;
    box-shadow: 1px 1px 8px #b8b8b8;
    padding: 1rem;
    border-radius: 10px;
    overflow: hidden;
    overflow-y: scroll;

    div {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      font-size: 0.7rem;
      height: 1rem;
      i {
        color: grey;
        font-size: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }
`;
export default InputSearch;
