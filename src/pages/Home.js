import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import HeroCard from "../components/HeroCard";

const Home = ({ stats, teamHero, setTeamHero, isFull, setIsFull }) => {
  return (
    <HomeStyled>
      {teamHero.length === 0 ? (
        <p>
          You have not added any hero yet. To seek for one{" "}
          <Link to="/search">click here!</Link>
        </p>
      ) : (
        <>
          <div className="home-cards">
            {teamHero.map((hero) => (
              <HeroCard
                hero={hero}
                teamHero={teamHero}
                setTeamHero={setTeamHero}
                className="hero-added"
                iconInfo="fas fa-info-circle"
                isFull={isFull}
                setIsFull={setIsFull}
              />
            ))}
          </div>
          <div className="home-info"></div>
        </>
      )}
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  margin-bottom: 3rem;
  p {
    justify-self: center;
    a {
      text-decoration: none;
      color: tomato;
    }
  }
  div.home-cards {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
  }
  div.home-info {
    width: 40%;
    height: 100%;
    background-color: yellow;
  }
`;
export default Home;
