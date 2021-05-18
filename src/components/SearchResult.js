import React, { useEffect } from "react";

import styled from "styled-components";

import HeroCard from "./HeroCard";

const SearchResult = ({
  isFull,
  setIsFull,
  resultSearching,
  teamHero,
  setTeamHero,
  resultNull,
}) => {
  //USE EFFECT
  useEffect(() => {
    localStorage.setItem("teamHero", JSON.stringify(teamHero));
    teamHero.length === 6 ? setIsFull(true) : setIsFull(false);
  }, [teamHero, setIsFull]);

  return (
    <SearchResultStyled>
      {resultSearching === undefined ? (
        <>
          {resultNull ? (
            <h3 className="search-heading">Keep on searching</h3>
          ) : (
            <h3 className="search-heading">Search your next Team Hero</h3>
          )}
        </>
      ) : (
        resultSearching.map((heroResult) => {
          return teamHero
            .map((heroTeam) => {
              return heroTeam.id === heroResult.id;
            })
            .indexOf(true) === -1 ? (
            <HeroCard
              hero={heroResult}
              key={heroResult.id}
              className="hero-to-add"
              teamHero={teamHero}
              setTeamHero={setTeamHero}
              icon="far fa-heart"
              isFull={isFull}
              setIsFull={setIsFull}
              iconInfo="fas fa-info-circle"
            />
          ) : (
            <HeroCard
              hero={heroResult}
              key={heroResult.id}
              className="hero-added"
              teamHero={teamHero}
              setTeamHero={setTeamHero}
              icon="fas fa-trash"
              isFull={isFull}
              setIsFull={setIsFull}
              iconInfo="fas fa-info-circle"
            />
          );
        })
      )}
    </SearchResultStyled>
  );
};

const SearchResultStyled = styled.section`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  h3.search-heading {
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
`;

export default SearchResult;
