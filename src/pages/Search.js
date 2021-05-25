import React, { useRef } from "react";
import styled from "styled-components";
import InputSearch from "../components/InputSearch";
import SearchResult from "../components/SearchResult";

const Search = ({
  isFull,
  setIsFull,
  resultSearching,
  setResultSearching,
  searchValue,
  setSearchValue,
  teamHero,
  setTeamHero,
  resultNull,
  setResultNull,
  inputFocused,
  setFocus,
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  return (
    <SearchStyled>
      {/* {!resultNull ? (
      <p className="search-heading">
        Nothing matched on your searching. Try again
      </p>
      ) :} */}
      <div className="input-container">
        <p className="search-heading">Search your next Team Hero</p>
        <InputSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setResultSearching={setResultSearching}
          setResultNull={setResultNull}
          inputFocused={inputFocused}
          setFocus={setFocus}
          resultNull={resultNull}
        />

        {searchValue.length !== 0 ? (
          resultNull ? (
            <p className="search-message">No founds</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>

      <SearchResult
        isFull={isFull}
        rating={rating}
        setRating={setRating}
        setIsFull={setIsFull}
        resultSearching={resultSearching}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
        toast={toast}
        setToast={setToast}
        toastType={toastType}
        setToastType={setToastType}
      />
    </SearchStyled>
  );
};
const SearchStyled = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 1rem 0rem;
    }
    p.search-heading {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #474747;
      color: #ffffff;
      height: 3rem;
      width: 350px;
      min-width: 300px;
      border-radius: 2rem;
      padding: 0.3rem 0.5rem;
      margin: 2rem 0;
    }
    p.search-message {
      color: tomato;
    }
  }
`;
export default Search;
