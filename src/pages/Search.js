import React from "react";
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
}) => {
  return (
    <>
      <InputSearch
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setResultSearching={setResultSearching}
        setResultNull={setResultNull}
      />
      <SearchResult
        isFull={isFull}
        setIsFull={setIsFull}
        resultSearching={resultSearching}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
        resultNull={resultNull}
      />
    </>
  );
};

export default Search;
