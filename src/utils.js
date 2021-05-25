import { useState, useEffect } from "react";

//Custom hook to use when App.js renders.
export const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, setState];
};

//addRemoveHeroHandlers
export const addRemove = ({
  e,
  teamHero,
  setTeamHero,
  rating,
  setRating,
  toast,
  setToast,
  toastType,
  setToastType,
}) => {
  const toastHandler = (type, message) => {
    setToast(true);
    setToastType({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setToast(false);
      setToastType({});
    }, 1000);
  };
  let idClicked = e.target.dataset.id;
  let heroData = e.target.dataset.hero;

  //normalize data since might be an string or an object, depending on if it is coming from
  //a searching or from the conformed team stored at teamHero
  let heroClicked =
    typeof heroData !== "string" ? heroData : JSON.parse(heroData);
  //
  //console.log(rating);
  let newRating = { highest: rating.highest, lowest: rating.lowest };

  let points = loopAnObject(heroClicked.powerstats);

  // if hero clicked is already in the team then delete it.
  if (teamHero.filter((hero) => hero.id === idClicked).length > 0) {
    console.log("deleted");
    points > 300 ? (newRating.highest -= 1) : (newRating.lowest -= 1);
    setRating(newRating);
    toastHandler("deleted", "Hero deleted", "tomato");
    return setTeamHero(teamHero.filter((hero) => hero.id !== idClicked));
  }
  //

  // a new key created (.points) to be manipulated at < Home /> where there are 2 divs,
  //one for the highest ones, another for the lowest ones.
  heroClicked.points = points;
  //

  if (teamHero.length < 6) {
    if (points > 300) {
      if (rating.highest < 3) {
        newRating.highest += 1;

        toastHandler("success", `Hero added to the highest-team`, "green");
        setRating(newRating);
        return setTeamHero([...teamHero, heroClicked]);
      } else {
        toastHandler("aware", `The highest-team is full 😕.`, "gold");
      }
    } else {
      if (rating.lowest < 3) {
        newRating.lowest += 1;
        toastHandler("success", `Hero added to the lowest-team`, "green");
        setRating(newRating);
        return setTeamHero([...teamHero, heroClicked]);
      } else {
        toastHandler("aware", `The lowest-team is full 😕.`, "gold");
      }
    }
  }
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
