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
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
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
              rating={rating}
              setRating={setRating}
              teamHero={teamHero}
              setTeamHero={setTeamHero}
              icon="far fa-heart"
              isFull={isFull}
              setIsFull={setIsFull}
              iconInfo="fas fa-info-circle"
              toast={toast}
              setToast={setToast}
              toastType={toastType}
              setToastType={setToastType}
            />
          ) : (
            <HeroCard
              hero={heroResult}
              key={heroResult.id}
              className="hero-added"
              rating={rating}
              setRating={setRating}
              teamHero={teamHero}
              setTeamHero={setTeamHero}
              icon="fas fa-trash"
              isFull={isFull}
              setIsFull={setIsFull}
              iconInfo="fas fa-info-circle"
              toast={toast}
              setToast={setToast}
              toastType={toastType}
              setToastType={setToastType}
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
  margin: 3rem 0;
  position: relative;
`;

export default SearchResult;
