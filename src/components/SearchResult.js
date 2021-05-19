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
      {resultSearching !== undefined &&
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
        })}
    </SearchResultStyled>
  );
};

const SearchResultStyled = styled.section`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
`;

export default SearchResult;
