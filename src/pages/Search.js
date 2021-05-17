import React from "react";
import { useHistory } from "react-router";
import InputSearch from "../components/InputSearch";
import SearchResult from "../components/SearchResult";

const Search = ({
  isLogged,
  isFull,
  setIsFull,
  resultSearching,
  setResultSearching,
  searchValue,
  setSearchValue,
  teamHero,
  setTeamHero,
}) => {
  let history = useHistory();
  if (!isLogged) {
    return history.push("/login");
  }
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
