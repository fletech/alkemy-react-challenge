import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HeroCard from "../components/HeroCard";
import Stat from "../components/Stat";
import { Icons, loopAnObject } from "../utils";

const Home = ({
  stats,
  teamHero,
  setTeamHero,
  isFull,
  setIsFull,
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  //functions

  //get average either of weight or height
  const getSum = (array, value, measure) => {
    let sumValue = 0;
    array
      .map((element) => element.appearance[value][1])
      .map((element2) => (sumValue += parseInt(element2.replace(measure, ""))));
    return Math.floor(sumValue / array.length);
  };

  //states
  const [maxStat, setMaxStat] = useState([]);
  let maxValue = Math.max(...Object.values(stats).map((value) => value));

  //Turning stats into an array in order to iterate it
  let statsArray = Object.keys(stats).map((keyName) => ({
    [keyName]: stats[keyName],
  }));

  let higherStat = statsArray.filter(
    (value) =>
      Object.values(value)[0] === maxValue && Object.values(value)[0] !== 0
  );

  useEffect(() => {
    setMaxStat(higherStat);
  }, [stats]);

  return (
    <HomeStyled>
      {teamHero.length === 0 ? (
        <h3 className="home-heading">
          You have not added any hero yet. To find one{" "}
          <Link to="/search">click here!</Link>
        </h3>
      ) : (
        <>
          <div className="resume">
            <div className="averages">
              <div className="kind-of-team">
                <div className="title">
                  <p>Team profile</p>
                </div>
                <div className="team-profile">
                  {maxStat.map((stat) =>
                    Object.keys(stat).map((keyName) => (
                      <Stat
                        className={keyName}
                        icon={Icons[keyName]}
                        key={keyName}
                      >
                        <small>{keyName}</small>
                        <small className="points">{stat[keyName]} points</small>
                      </Stat>
                    ))
                  )}

                  {/* <i className="fas fa-balance-scale"></i>
                  <p>veremos</p> */}
                </div>
              </div>
              <div className="points-total">
                <div className="sum">
                  <p className="bold">Total points</p>
                  <p className="highlight">{loopAnObject(stats)}</p>
                </div>
                <div className="weight-average">
                  <p className="bold">Average weight</p>
                  <p className="highlight">
                    {`${getSum(teamHero, "weight", " kg")} `}
                    kg
                  </p>
                </div>
                <div className="height-average">
                  <p className="bold">Average height</p>
                  <p className="highlight">
                    {getSum(teamHero, "height", " cm")}
                    cm
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
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
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                ) : (
                  ""
                )
              )}
            </div>
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
  flex-direction: column;
  width: 85vw;
  height: 100%;
  h3 {
    width: 60%;
    text-align: center;
    a {
      text-decoration: none;
      color: tomato;
    }
  }

  div.resume {
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 3rem 0;
    border-radius: 10px;
    border: solid 2px #c0bfbf;
    overflow: hidden;

    p {
      font-size: 0.7rem;
    }
    div.averages {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 0.3rem;
      height: 25vh;
      div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }
      div.kind-of-team {
        background-color: #dfdfdf;
        border-radius: 6px;
        border-bottom: solid 1px #e0e0e0;
        display: flex;
        flex-direction: row;
        height: 50%;
        justify-content: space-evenly;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        div.title {
          width: 33%;
          padding-left: 2rem;
          p {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        div.team-profile {
          width: 67%;
          display: flex;
          flex-direction: row;
          div {
            svg {
              color: tomato !important;
              font-size: 1.3rem;
              margin-bottom: 0.3em;
            }
            small {
              font-size: 0.9rem !important;
            }
            small.points {
              font-size: 0.6rem !important;
              margin-top: 0.5rem;
            }
          }
        }
      }
      div.points-total {
        width: 100%;
        height: 60%;

        padding: 0.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        div {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          justify-content: space-evenly;
          p {
            text-align: center;
          }
          p.bold {
            font-weight: bold;
          }
          p.highlight {
            color: tomato;
            font-size: 1.2rem;
          }
        }
        div.weight-average {
          border-right: solid 1px #e0e0e0;
          border-left: solid 1px #e0e0e0;
        }
      }
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
    margin-bottom: 5rem;
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
      flex-wrap: wrap;
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
  @media (max-width: 500px) {
    width: 95vw;
    h3.home-heading {
      color: #474747;
      width: 60%;
      text-align: center;
    }
    div.resume {
      width: 80%;
    }
    div.home-cards {
      width: 80%;
    }
  }
  /* div.home-info {
    width: 0%;
    height: 100%;
    min-height: 50vh;
  } */
`;
export default Home;
