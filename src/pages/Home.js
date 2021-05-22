import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import HeroCard from "../components/HeroCard";

const Home = ({ stats, teamHero, setTeamHero, isFull, setIsFull }) => {
  return (
    <HomeStyled>
      {teamHero.length === 0 ? (
        <h3 className="home-heading">
          You have not added any hero yet. To seek for one{" "}
          <Link to="/search">click here!</Link>
        </h3>
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
          <div className="home-info">
            {/* {Object.values(stats).map((stat) => (
              <p>{stat}</p>
            ))} */}
          </div>
        </>
      )}
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85vw;
  margin-bottom: 3rem;
  h3 {
    justify-self: center;

    a {
      text-decoration: none;
      color: tomato;
    }
  }
  h3.home-heading {
    text-align: center;
    width: 100%;
  }
  div.home-cards {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
  }
  div.home-info {
    width: 0%;
    height: 100%;
    min-height: 50vh;
  }
`;
export default Home;
