import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breathe, shadowSpin } from "../utils";
import ButtonAddRemoveHero from "./ButtonAddHero";

const Aside = ({
  isFull,
  setIsFull,
  toggleAside,
  isLogged,
  setToggleAside,
  setTeamHero,
  teamHero,
}) => {
  return (
    <AsideStyled className={`${!isLogged || toggleAside ? "hidden" : ""}`}>
      <div className="aside-header">
        <div
          onClick={() => setToggleAside(!toggleAside)}
          className={`${!toggleAside ? "toggle-aside on" : "toggle-aside off"}`}
        >
          {toggleAside ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </div>
      </div>

      {teamHero.length > 0 && (
        <DivImageContainer>
          {teamHero.map((hero) => {
            return (
              <DivHero key={hero.id}>
                <div>
                  <Link to={`/hero-detail/${hero.id}`}>
                    <img src={hero.image.url} alt={hero.name} />
                  </Link>
                  <ButtonAddRemoveHero
                    className="selected-breathe"
                    setIsFull={setIsFull}
                    hero={hero}
                    isFull={isFull}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    iconSecondary="fas fa-heart"
                  />
                </div>
                {/* <p>{hero.name}</p> */}
              </DivHero>
            );
          })}
        </DivImageContainer>
      )}
    </AsideStyled>
  );
};
const AsideStyled = styled.aside`
  &.hidden,
  &.toggle-hidden {
    transform: translateX(-100%);
  }
  box-shadow: 2px 0px 10px #acacac;

  padding-left: 1rem;
  position: fixed;
  bottom: 0;
  height: 85vh;
  left: 0;
  top: 10vh;
  bottom: 5vh;
  width: 10vw;
  min-width: 150px;
  background-color: rgba(66, 66, 66, 0.911) !important;
  transition: all 0.5s ease-in-out;
  z-index: 3;
  div.aside-header {
    position: relative;
    div.toggle-aside {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      position: absolute;
      top: 0.5rem;
      right: -3rem;
      z-index: 200;
      cursor: pointer;
      transition: right 1s ease-in-out;
      @media (max-width: 500px) {
      }
      &.on {
        right: 0.5rem;
        transition: right 1s ease-in-out;
        transform: rotate(180deg);
        box-shadow: 1px 1px 6px tomato, -1px -1px 6px #dae905;
        z-index: 200;
      }
      &.off {
        transition: right 1s ease-in-out;
        animation: shadow-spin 2s infinite ease-in-out;
      }
      i {
        color: tomato;
      }
      ${shadowSpin}
    }
  }
`;
const DivHero = styled.div`
  height: 100%;
  display: flex;
  margin-top: 3rem;
  align-items: center;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .selected-breathe {
      ${breathe};
      i svg {
        animation: shadow-spin 3s ease-in-out;
        ${shadowSpin}
      }
    }
    button {
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 20px;
      z-index: 10;
      position: absolute;
      top: -5px;
      right: -10px;
      background: none;
      animation: breathe 3s ease-in-out;
      i {
        color: tomato;
        cursor: pointer;
        pointer-events: none;
      }
      &:hover {
      }
    }
  }
  p {
    margin-left: 1rem;
    font-weight: bold;
  }
`;

const DivImageContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  width: 100%;
  flex-direction: column;
`;
export default Aside;
