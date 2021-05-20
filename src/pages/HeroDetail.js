import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Utils
import { url } from "../utils";
//Components
import HeroCard from "../components/HeroCard";
import styled from "styled-components";

const HeroDetail = ({ isFull, setIsFull, teamHero, setTeamHero }) => {
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
          >
            <ChildrenStyled>
              <div className="hero-info">
                <small>
                  Weight:{" "}
                  {currentHero.appearance.weight !== "null"
                    ? currentHero.appearance.weight
                    : // .replace(
                      //     currentHero.appearance.weight.indexOf("lb", "lb /")
                      //   )
                      "0"}
                </small>
                <small>
                  Height:{" "}
                  {currentHero.appearance.height !== "null"
                    ? currentHero.appearance.height
                    : "0"}
                </small>
              </div>

              <div className="powerstats">
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
                            ? `${parseInt(currentHero.powerstats.durability)}%`
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

  border: double 1px #202020;
  box-shadow: 1px 1px 8px #eeab5e;
  i {
    color: #fdfafd;
    font-size: 0.8rem;
    background-color: #474747;
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
        width: 100px;
        height: 100px;
        border-radius: 10%;
      }
      &.average {
        text-align: center;
      }
    }
  }
`;
const ChildrenStyled = styled.div`
  div.powerstats,
  div.hero-info {
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    small {
      font-size: 0.8rem;
    }
  }
  div.powerstats {
    background-color: rgba(54, 54, 54, 0.185);
    border-radius: 1rem;
    padding: 0.3rem 0.4rem;
    div.stat-field {
      width: 100%;
      overflow: hidden;
      margin: 0.2rem 0;
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
`;
export default HeroDetail;
