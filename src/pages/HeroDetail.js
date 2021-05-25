import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Utils
import { url } from "../utils";
//Components
import HeroCard from "../components/HeroCard";
import styled from "styled-components";

const HeroDetail = ({
  isFull,
  setIsFull,
  teamHero,
  setTeamHero,
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  const [currentHero, setCurrentHero] = useState();
  let params = useParams();
  useEffect(() => {
    axios
      .get(`${url}/${params.id}`)
      .then((response) => {
        setCurrentHero(response.data);
        //console.log(currentHero);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <>
      {currentHero !== undefined && (
        <>
          <HeroCardStyled
            hero={currentHero}
            teamHero={teamHero}
            setTeamHero={setTeamHero}
            className="hero-to-add"
            iconCustom="fas fa-user-plus"
            isFull={isFull}
            setIsFull={setIsFull}
            rating={rating}
            setRating={setRating}
            toast={toast}
            setToast={setToast}
            toastType={toastType}
            setToastType={setToastType}
          >
            <ChildrenStyled>
              <div className="hero-info">
                <div className="aliases">
                  <small>
                    <i>
                      <span>a.k.a: </span>
                      {currentHero.biography.aliases !== "null"
                        ? currentHero.biography.aliases.map(
                            (alias) => `"${alias}", `
                          )
                        : "-"}
                    </i>
                  </small>
                </div>

                <div className="appearance">
                  <div className="w-h">
                    <small>
                      <span>Weight: </span>
                      {currentHero.appearance.weight !== "null"
                        ? currentHero.appearance.weight[1]
                        : "-"}
                    </small>

                    <small>
                      <span>Height: </span>
                      {currentHero.appearance.height !== "null"
                        ? currentHero.appearance.height[1]
                        : "-"}
                    </small>
                  </div>

                  <div className="hair-eyes">
                    <small>
                      <span>Hair color: </span>
                      {currentHero.appearance["hair-color"] !== "null"
                        ? currentHero.appearance["hair-color"]
                        : "-"}
                    </small>
                    <small>
                      <span>Eyes color: </span>
                      {currentHero.appearance["eye-color"] !== "null"
                        ? currentHero.appearance["eye-color"]
                        : "-"}
                    </small>
                  </div>
                </div>
                <div className="work-place">
                  <small>
                    <i>
                      <span>Working at: </span>
                      {currentHero.biography.aliases !== "null"
                        ? currentHero.work.base
                        : "-"}
                    </i>
                  </small>
                </div>
              </div>

              <div className="powerstats">
                <div className="left">
                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.intelligence !== "null"
                              ? `${parseInt(
                                  currentHero.powerstats.intelligence
                                )}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Intelligence:
                      {currentHero.powerstats.intelligence !== "null"
                        ? parseInt(currentHero.powerstats.intelligence)
                        : "0"}
                    </small>
                  </div>

                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.combat !== "null"
                              ? `${parseInt(currentHero.powerstats.combat)}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Combat:
                      {currentHero.powerstats.combat !== "null"
                        ? parseInt(currentHero.powerstats.combat)
                        : "0"}
                    </small>
                  </div>
                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.power !== "null"
                              ? `${parseInt(currentHero.powerstats.power)}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Power:
                      {currentHero.powerstats.power !== "null"
                        ? parseInt(currentHero.powerstats.power)
                        : "0"}
                    </small>
                  </div>
                </div>
                <div className="right">
                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.speed !== "null"
                              ? `${parseInt(currentHero.powerstats.speed)}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Speed:
                      {currentHero.powerstats.speed !== "null"
                        ? parseInt(currentHero.powerstats.speed)
                        : "0"}
                    </small>
                  </div>
                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.strength !== "null"
                              ? `${parseInt(currentHero.powerstats.strength)}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Strength:
                      {currentHero.powerstats.strength !== "null"
                        ? parseInt(currentHero.powerstats.strength)
                        : "0"}
                    </small>
                  </div>
                  {/* Field */}
                  <div className="stat-field">
                    <div className="range">
                      <div
                        className="value"
                        style={{
                          width:
                            currentHero.powerstats.durability !== "null"
                              ? `${parseInt(
                                  currentHero.powerstats.durability
                                )}%`
                              : "0",
                        }}
                      ></div>
                    </div>
                    <small>
                      Durability:
                      {currentHero.powerstats.durability !== "null"
                        ? parseInt(currentHero.powerstats.durability)
                        : "0"}
                    </small>
                  </div>
                </div>
              </div>
            </ChildrenStyled>
          </HeroCardStyled>
        </>
      )}
    </>
  );
};
const HeroCardStyled = styled(HeroCard)`
  background: linear-gradient(100deg, #ce7a65, #eeab5e);
  padding: 2rem;
  width: 400px;
  color: white;
  margin-bottom: 10rem;
  border: double 1px #202020;
  box-shadow: 1px 1px 8px #eeab5e;

  i.fas,
  i.far {
    color: #fdfafd;
    font-size: 0.8rem;
    background-color: #eeab5e;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  div.header {
    div {
      width: 50%;
      &.image {
        width: 120px;
        height: 120px;
        border-radius: 10%;
      }
      &.average {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 6rem;
        height: 6rem;
        border: solid 2px #faf766;
        border-radius: 50%;
        margin-right: 1rem;
        font-weight: bold;
      }
    }
  }
  h4 {
    font-size: 1.3rem;
    background-color: #eeab5e;
    width: auto;
    height: auto;
    display: flex;
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;
const ChildrenStyled = styled.div`
  div.powerstats,
  div.hero-info {
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    div.appearance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 0.1rem #eeab5e;
      div.hair-eyes,
      div.w-h {
        width: 47%;
        display: flex;
        flex-direction: column;

        small {
          font-size: 0.8rem;

          padding: 0.5rem 0;
          span {
            font-weight: bold;
          }
        }
      }
    }
    div.aliases,
    div.work-place {
      border-bottom: solid 0.1rem #eeab5e;
      padding: 0.4rem 0;
      small {
        font-size: 0.8rem;
        padding: 0.5rem 0;
        span {
          font-weight: bold;
        }
      }
    }
  }
  div.powerstats {
    background-color: rgba(54, 54, 54, 0.185);
    border-radius: 1rem;
    padding: 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    div.right,
    div.left {
      width: 47%;
      div.stat-field {
        width: 100%;
        overflow: hidden;
        margin: 0.4rem 0;
        small {
          font-size: 0.6rem;
        }
        div.range {
          position: relative;
          width: 100%;
          height: 5px;
          border-radius: 1rem;
          overflow: hidden;
          background-color: rgba(44, 44, 44, 0.295);
          div.value {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;

            background-color: #faf766;
          }
        }
      }
    }
  }
`;
export default HeroDetail;
