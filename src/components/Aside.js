import React from "react";
import styled from "styled-components";

const Aside = ({ toggleAside, isLogged, addRemove, teamHero, setTeamHero }) => {
  return (
    <AsideStyled className={`${!isLogged || toggleAside ? "hidden" : ""}`}>
      {teamHero.length > 0 && (
        <DivImageContainer>
          {teamHero.map((hero) => {
            return (
              <DivHero>
                <div>
                  <img src={hero.image.url} alt={hero.name} />
                  <button
                    onClick={(e) => addRemove({ e, teamHero, setTeamHero })}
                    data-id={hero.id}
                    data-hero={JSON.stringify(hero)}
                  >
                    <i class="fas fa-heart"></i>
                  </button>
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
