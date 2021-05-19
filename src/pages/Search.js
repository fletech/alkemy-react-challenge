import React from "react";
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
}) => {
  console.log(resultSearching);
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
        setIsFull={setIsFull}
        resultSearching={resultSearching}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
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
      border: solid 0.1rem #474747;
      color: #474747;
      height: 2rem;
      width: 350px;
      min-width: 300px;
      border-radius: 1rem;
      padding: 0.3rem 0.5rem;
    }
    p.search-message {
      color: tomato;
    }
  }
`;
export default Search;
