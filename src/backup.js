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

//addRemoveHeroHandlers
export const addRemove = ({ e, teamHero, setTeamHero, rating, setRating }) => {
  let idClicked = e.target.dataset.id;
  //console.log(idClicked);
  let heroData = e.target.dataset.hero;
  //console.log(e.target.dataset);
  let heroAdded =
    typeof heroData !== "string" ? heroData : JSON.parse(heroData);

  let points = loopAnObject(heroAdded.powerstats);
  if (points > 300) {
    heroAdded.highest = true;
    heroAdded.lowest = false;
  } else {
    heroAdded.lowest = true;
    heroAdded.highest = false;
  }
  console.log(heroAdded);
  console.log(rating);

  let newRating = { highest: rating.highest, lowest: rating.lowest };
  if (teamHero.length === 0) {
    if (heroAdded.highest) {
      newRating.highest += newRating.highest + 1;
    }
    if (heroAdded.lowest) {
      newRating.lowest += newRating.lowest + 1;
    }
    setTeamHero([...teamHero, heroAdded]);
    setRating(newRating);
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
  console.log(rating);
};

//Base URL
export const url = `https://www.superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_TOKEN_API}/`;

//Animations
export const shadowSpin = `@keyframes shadow-spin {
      0% {
        box-shadow: -2px -2px 6px #eef77d;
      }
      25% {
        box-shadow: -1px -1px 8px #fa983c;
      }
      50% {
        box-shadow: 0px 0px 8px #ee4034;
      }
      75% {
        box-shadow: 1px 1px 8px #fa983c;
      }
      100% {
        box-shadow: 2px 2px 6px #eef77d;
      }
    }`;

export const breathe = `@keyframes breathe {
      10% {
        transform: scale(2);
      }
      25% {
        transform: scale(1.4);
      }
      50% {
       transform: scale(1.8);
      }
      75% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1.3);
      }
    }`;

//Loop
export const loopAnObject = (object) => {
  let sum = 0;

  for (const key in object) {
    if (object[key] === (null || "null")) {
      object[key] = 0;
    }

    sum += parseInt(object[key]);
  }
  return sum;
};
