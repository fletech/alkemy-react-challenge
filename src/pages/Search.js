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
}) => {
  return (
    <>
      <InputSearch
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setResultSearching={setResultSearching}
      />
      <SearchResult
        isFull={isFull}
        setIsFull={setIsFull}
        resultSearching={resultSearching}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
      />
    </>
  );
};

export default Search;
