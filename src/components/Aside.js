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
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  return (
    <AsideStyled className={`${!isLogged || toggleAside ? "hidden" : ""}`}>
      <div className="aside-header">
        {isLogged && teamHero.length !== 0 && (
          <div
            onClick={() => setToggleAside(!toggleAside)}
            className={`${
              !toggleAside ? "toggle-aside on" : "toggle-aside off"
            }`}
          >
            {toggleAside ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </div>
        )}
        <div className="header-title">
          <p className="title">My team</p>
        </div>
      </div>

      {teamHero.length > 0 && (
        <DivImageContainer>
          {teamHero.map((hero) => {
            return (
              <DivHero key={hero.id}>
                <div className="hero-field">
                  <Link to={`/hero-detail/${hero.id}`}>
                    <img src={hero.image.url} alt={hero.name} />
                  </Link>
                  <ButtonAddRemoveHero
                    className="selected-breathe"
                    hero={hero}
                    iconSecondary="fas fa-heart"
                    isFull={isFull}
                    setIsFull={setIsFull}
                    rating={rating}
                    setRating={setRating}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                  <div className="hero-info">
                    <p>{hero.name}</p>
                    <i>
                      <small>pts:</small>
                      {hero.points}
                    </i>
                  </div>
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

  @media (max-width: 650px) {
    &.hidden {
      transform: translateX(-105%);
    }
  }
  box-shadow: 2px 0px 10px #acacac;

  padding: 0 0.5rem;
  position: fixed;
  bottom: 0;
  height: 85vh;
  left: 0;
  top: 10vh;
  bottom: 5vh;
  width: 12vw;
  min-width: 150px;
  background-color: rgba(44, 44, 44, 0.952) !important;
  transition: all 0.5s ease-in-out;
  z-index: 3;
  div.aside-header {
    position: relative;
    div.header-title {
      p.title {
        padding-top: 1.5rem;
        color: white;
      }
    }
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
      right: -3.5rem;
      z-index: 200;
      cursor: pointer;
      transition: right width 1s ease-in-out;

      &.on {
        right: 0rem;
        width: 1.5rem;
        height: 1.5rem;
        transition: right width 1s ease-in-out;
        transform: rotate(180deg);
        box-shadow: 1px 1px 6px tomato, -1px -1px 6px #dae905;
        z-index: 200;
      }
      &.off {
        transition: right width 1s ease-in-out;
        animation: shadow-spin 2s infinite ease-in-out;
      }
      i {
        color: tomato;
      }
      ${shadowSpin}
    }
  }
  @media (max-height: 500px) {
    display: none;
  }
`;
const DivHero = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px #6d6d6d;
  div.hero-field {
    width: 100%;
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-height: 650px) {
      height: 1.5rem;
    }

    div.hero-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-right: 0.5rem;
      p {
        font-size: 0.7rem;
        color: white;
        padding-right: 0.5rem;
      }
      i {
        margin-top: 0.3rem;
        font-size: 0.7rem;
        color: #a0a0a0;
        font-weight: bold;
        small {
        }
      }
    }
    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      @media (max-height: 650px) {
        width: 30px;
        height: 30px;
      }
    }
    .selected-breathe {
      ${breathe};
      i svg {
        animation: shadow-spin 3s ease-in-out;
        ${shadowSpin}
      }
    }
    button {
      width: 10px;
      height: 10px;
      border: none;
      border-radius: 20px;
      z-index: 10;
      position: absolute;
      top: -10px;
      right: 0.5rem;
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
