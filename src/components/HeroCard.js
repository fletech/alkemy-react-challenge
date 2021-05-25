import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonAddRemoveHero from "./ButtonAddHero";
import { loopAnObject, shadowSpin } from "../utils";

const HeroCard = ({
  hero,
  teamHero,
  setTeamHero,
  isFull,
  iconInfo,
  className,
  children,
  setIsFull,
  icon,
  iconCustom,
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  let average = loopAnObject(hero.powerstats);
  return (
    //classNames: "hero-to-add" || "hero-added"
    <Hero key={hero.id} className={className}>
      <div className="header">
        <div className="image">
          <img src={hero.image.url} alt={hero.name} />
        </div>
        <div className="average">
          <small>Points: </small>
          <h2>{average}</h2>
        </div>
      </div>
      <h4 className="name">{hero.name}</h4>

      {children}

      <div className="buttons">
        <ButtonAddRemoveHero
          setIsFull={setIsFull}
          hero={hero}
          isFull={isFull}
          rating={rating}
          setRating={setRating}
          teamHero={teamHero}
          setTeamHero={setTeamHero}
          icon={icon}
          iconCustom={iconCustom}
          toast={toast}
          setToast={setToast}
          toastType={toastType}
          setToastType={setToastType}
        />
        {iconInfo && (
          <Link to={`/hero-detail/${hero.id}`}>
            <i className={iconInfo}></i>
          </Link>
        )}
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  padding: 1rem;
  height: auto;
  min-width: 200px;
  border: solid 1px #d6d4d4;
  border-radius: 10px;
  margin: 1rem;
  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    div.image {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      object-fit: cover;

      img {
        width: 100%;
      }
    }
  }

  &.hero-added {
    animation: shadow-spin 1s infinite ease-in-out;
    ${shadowSpin}
    background-color: tomato;
    i,
    h3,
    h2,
    h4 {
      color: white;
    }
    button {
      cursor: pointer;
    }
  }
  &.hero-to-add {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #474747;
  }
  h3.name {
    font-weight: bold;
  }
  div.buttons {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  button {
    background: none;
    border: none;
    i {
      pointer-events: none;
    }
    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
    &.active {
      color: tomato;
      cursor: pointer;
    }
  }
  //Link as "a"
  a {
    margin-left: 10px;
    i {
      color: #474747;
    }
  }
`;
export default HeroCard;
