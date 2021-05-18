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
  addRemove,
  teamHero,
  setTeamHero,
}) => {
  return (
    <AsideStyled className={`${!isLogged || toggleAside ? "hidden" : ""}`}>
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
    left: -20rem;
  }
  box-shadow: 4px 0px 20px #acacac;
  padding-top: 5rem;
  padding-left: 1rem;
  position: fixed;
  bottom: 0;
  height: 100vh;
  left: 0vw;
  width: 10vw;
  min-width: 150px;
  background-color: rgba(12, 12, 12, 0.411) !important;
  transition: all 0.5s ease-in-out;
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
