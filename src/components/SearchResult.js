import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addRemove } from "../utils";

const SearchResult = ({
  isFull,
  setIsFull,
  resultSearching,
  teamHero,
  setTeamHero,
}) => {
  //USE EFFECT
  useEffect(() => {
    localStorage.setItem("teamHero", JSON.stringify(teamHero));
    teamHero.length === 6 ? setIsFull(true) : setIsFull(false);
  }, [teamHero, setIsFull]);

  return (
    <SearchResultStyled>
      {resultSearching === undefined ? (
        <p>Search your next Team Hero</p>
      ) : (
        resultSearching.map((heroResult) => {
          return teamHero
            .map((heroTeam) => {
              return heroTeam.id === heroResult.id;
            })
            .indexOf(true) === -1 ? (
            <Hero key={heroResult.id} className="hero-to-add">
              <div>
                <img src={heroResult.image.url} alt={heroResult.name} />
              </div>
              <p>{heroResult.name}</p>
              {/* <p>Intelligence: {heroResult.powerstats.intelligence}</p> */}

              <button
                onClick={(e) => addRemove({ e, teamHero, setTeamHero })}
                data-id={heroResult.id}
                data-hero={JSON.stringify(heroResult)}
                className={isFull ? "disabled" : "active"}
              >
                <i className="far fa-heart"></i>
              </button>
              <Link to={`/hero-detail/${heroResult.id}`}>
                <i className="fas fa-info-circle"></i>
              </Link>
            </Hero>
          ) : (
            <Hero key={heroResult.id} className="hero-added">
              <div>
                <img src={heroResult.image.url} alt={heroResult.name} />
              </div>
              <p>{heroResult.name}</p>
              {/* <p>Intelligence: {heroResult.powerstats.intelligence}</p> */}

              <button
                onClick={(e) => addRemove({ e, teamHero, setTeamHero })}
                data-id={heroResult.id}
                data-hero={JSON.stringify(heroResult)}
              >
                <i className="fas fa-trash"></i>
              </button>
              <Link to={`/hero-detail/${heroResult.id}`}>
                <i className="fas fa-info-circle"></i>
              </Link>
            </Hero>
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
`;
const Hero = styled.div`
  padding: 1rem;
  height: 200px;
  width: 200px;
  border: solid 1px #d6d4d4;
  border-radius: 10px;
  margin: 1rem;
  div {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 40px;
    object-fit: cover;

    img {
      width: 100%;
    }
  }
  &.hero-added {
    box-shadow: 2px 2px 8px #f7c3b9, -2px -2px 8px #f7c3b9;
    background-color: tomato;
    i,
    p {
      color: white;
    }
    button {
      cursor: pointer;
    }
  }
  &.hero-to-add {
    cursor: pointer;
    p {
      pointer-events: none;
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: #474747;
  }
  p {
    font-weight: bold;
  }
  button {
    background: none;
    border: none;
    i.fa-heart,
    i.fa-trash {
      pointer-events: none;
    }
    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
    &.active {
      color: tomato;
      cursor: pointer;
    }
  }
  //Link as "a"
  a {
    margin-left: 10px;
    i {
      color: #474747;
    }
  }
`;
export default SearchResult;
