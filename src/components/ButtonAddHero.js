import React, { useEffect } from "react";
import { addRemove } from "../utils";

const ButtonAddRemoveHero = ({
  isFull,
  setIsFull,
  hero,
  teamHero,
  setTeamHero,
  icon,
  iconCustom,
  ...props
}) => {
  useEffect(() => {
    localStorage.setItem("teamHero", JSON.stringify(teamHero));
    teamHero.length === 6 ? setIsFull(true) : setIsFull(false);
  }, [teamHero, setIsFull]);
  return (
    <>
      {teamHero
        .map((heroTeam) => {
          return heroTeam.id === hero.id;
        })
        .indexOf(true) === -1 ? (
        <button
          onClick={(e) => addRemove({ e, teamHero, setTeamHero })}
          data-id={hero.id}
          data-hero={JSON.stringify(hero)}
          className={isFull ? "disabled" : "active"}
        >
          <i className={icon || iconCustom}></i>
        </button>
      ) : (
        <button
          onClick={(e) => addRemove({ e, teamHero, setTeamHero })}
          data-id={hero.id}
          data-hero={JSON.stringify(hero)}
          className={"active"}
        >
          <i className={props.iconSecondary || "fas fa-trash"}></i>
        </button>
      )}
    </>
  );
};
export default ButtonAddRemoveHero;
