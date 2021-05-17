import { useState, useEffect } from "react";

//Custom hook to use when App.js renders.
export const useStateWithLocalStorage = (localStorageKey) => {
  const [teamHero, setTeamHero] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(teamHero));
  }, [teamHero, localStorageKey]);

  return [teamHero, setTeamHero];
};

//addRemoveHeroHanderl
export const addRemove = ({ e, teamHero, setTeamHero }) => {
  let idClicked = e.target.dataset.id;
  console.log(idClicked);
  let heroData = e.target.dataset.hero;
  console.log(e.target.dataset);
  let heroAdded =
    typeof heroData !== "string" ? heroData : JSON.parse(heroData);

  if (teamHero.length === 0) {
    setTeamHero([...teamHero, heroAdded]);
  }
  if (teamHero.length <= 5) {
    teamHero.filter((hero) => hero.id === idClicked).length > 0
      ? console.log("It already exists")
      : setTeamHero([...teamHero, heroAdded]);
  }
  if (teamHero.length <= 6) {
    teamHero.filter((hero) => hero.id === idClicked).length > 0
      ? setTeamHero(teamHero.filter((hero) => hero.id !== idClicked))
      : console.log("Added");
  }
};

//Base URL
export const url = `https://www.superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_TOKEN_API}/`;
