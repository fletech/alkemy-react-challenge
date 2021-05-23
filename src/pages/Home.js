import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import HeroCard from "../components/HeroCard";

const Home = ({
  stats,
  teamHero,
  setTeamHero,
  isFull,
  setIsFull,
  rating,
  setRating,
}) => {
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
            <div className="header-highest">
              <h3 className="heading-highest">Highest heroes</h3>
              {rating.highest !== 0 && (
                <button
                  onClick={() => {
                    setTeamHero(teamHero.filter((hero) => hero.points <= 300));
                    setRating({ highest: 0, lowest: rating.lowest });
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="highest-cards">
              {rating.highest === 0 && (
                <small>
                  You have not added any highest-rating hero yet. To seek for
                  one <Link to="/search">click here!</Link>
                </small>
              )}
              {teamHero.map((hero) =>
                hero.points > 300 ? (
                  <HeroCard
                    hero={hero}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    className="hero-added"
                    iconInfo="fas fa-info-circle"
                    isFull={isFull}
                    setIsFull={setIsFull}
                    rating={rating}
                    setRating={setRating}
                  />
                ) : (
                  ""
                )
              )}
            </div>
            <div className="header-lowest">
              <h3 className="heading-lowest">Lowest heroes</h3>
              {rating.lowest !== 0 && (
                <button
                  onClick={() => {
                    setTeamHero(teamHero.filter((hero) => hero.points > 300));
                    setRating({ highest: rating.highest, lowest: 0 });
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="lowest-cards">
              {rating.lowest === 0 && (
                <small>
                  You have not added any lowest-rating hero yet. To seek for one{" "}
                  <Link to="/search">click here!</Link>
                </small>
              )}
              {teamHero.map((hero) =>
                hero.points <= 300 ? (
                  <HeroCard
                    hero={hero}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    className="hero-added"
                    iconInfo="fas fa-info-circle"
                    isFull={isFull}
                    setIsFull={setIsFull}
                    rating={rating}
                    setRating={setRating}
                  />
                ) : (
                  ""
                )
              )}
            </div>

            {/* {teamHero.map((hero) =>
              hero.points > 300 ? (
                <HeroCard
                  hero={hero}
                  teamHero={teamHero}
                  setTeamHero={setTeamHero}
                  className="hero-added"
                  iconInfo="fas fa-info-circle"
                  isFull={isFull}
                  setIsFull={setIsFull}
                  rating={rating}
                  setRating={setRating}
                />
              ) : (
                ""
              )
            )} */}
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
  div.header-highest,
  div.header-lowest {
    display: flex;
    align-items: center;

    h3.heading-lowest,
    h3.heading-highest {
      text-align: center;
      width: 100%;
    }

    button {
      border: none;
      height: 2rem;
      background: none;
      cursor: pointer;
    }
    &.header-lowest {
      border-top: solid 1px #dbdbdb;
    }
  }

  div.home-cards {
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h3 {
      display: flex;
      align-items: center;
      height: 4rem;
    }
    div.lowest-cards,
    div.highest-cards {
      background-color: #f8e8d1;
      border-radius: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      small {
        margin: 2rem 0;
        width: 100%;
        text-align: center;
        a {
          color: tomato;
          text-decoration: none;
        }
      }
    }
  }
  div.home-info {
    width: 0%;
    height: 100%;
    min-height: 50vh;
  }
`;
export default Home;
