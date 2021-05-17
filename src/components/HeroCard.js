import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonAddRemoveHero from "./ButtonAddHero";

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
}) => {
  console.log(hero);
  return (
    //classNames: "hero-to-add" || "hero-added"
    <Hero key={hero.id} className={className}>
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <p>{hero.name}</p>

      {children}

      <ButtonAddRemoveHero
        setIsFull={setIsFull}
        hero={hero}
        isFull={isFull}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
        icon={icon}
      />
      {iconInfo && (
        <Link to={`/hero-detail/${hero.id}`}>
          <i className={iconInfo}></i>
        </Link>
      )}
    </Hero>
  );
};

const Hero = styled.div`
  padding: 1rem;
  height: 200px;
  width: 200px;
  border: solid 1px #d6d4d4;
  border-radius: 10px;
  margin: 1rem;
  div {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 40px;
    object-fit: cover;

    img {
      width: 100%;
    }
  }
  &.hero-added {
    box-shadow: 2px 2px 8px #f7c3b9, -2px -2px 8px #f7c3b9;
    background-color: tomato;
    i,
    p {
      color: white;
    }
    button {
      cursor: pointer;
    }
  }
  &.hero-to-add {
    p {
      pointer-events: none;
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: #474747;
  }
  p {
    font-weight: bold;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    i.fa-heart,
    i.fa-trash {
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
