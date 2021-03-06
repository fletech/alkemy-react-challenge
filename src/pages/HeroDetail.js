import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Utils
import { url } from "../utils";
//Components
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import StatField from "../components/StatField";

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
                  <div className="weight-height">
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
                {Object.keys(currentHero.powerstats).map((keyName) => (
                  <StatField
                    powerstats={currentHero.powerstats}
                    powerstatName={keyName}
                  />
                ))}
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
  width: 40%;
  min-width: 400px;
  color: white;
  margin-bottom: 10rem;
  border: double 1px #202020;
  box-shadow: 1px 1px 8px #eeab5e;

  button {
    width: 2rem;
    height: 2rem;
    background-color: #eeab5e;
    border-radius: 50%;
    i.fas,
    i.far {
      color: #fdfafd;
      font-size: 0.9rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2px;
    }
  }

  div.header {
    div {
      width: 50%;
      &.image {
        width: 120px;
        height: 120px;
        border-radius: 10%;
        @media (max-width: 500px) {
          width: 80px;
          height: 80px;
        }
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
        @media (max-width: 500px) {
          margin-right: 0;
        }
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
    width: 80%;
    min-width: 0;
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
      div.weight-height {
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
    flex-direction: column;
    height: auto;
    flex-wrap: np-wrap;
    justify-content: space-between;
    width: 100%;

    div.stat-field {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding: 0.8rem 0;

      small {
        width: 100%;
        display: block;
        margin-top: 0.5rem !important;
        font-size: 0.8rem;
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
