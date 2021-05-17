import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../utils";
import HeroCard from "../components/HeroCard";

const HeroDetail = ({ isFull, setIsFull, teamHero, setTeamHero }) => {
  const [currentHero, setCurrentHero] = useState();
  let params = useParams();
  useEffect(() => {
    axios
      .get(`${url}/${params.id}`)
      .then((response) => {
        setCurrentHero(response.data);
        //console.log(currentHero);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {currentHero !== undefined && (
        <>
          <HeroCard
            hero={currentHero}
            teamHero={teamHero}
            setTeamHero={setTeamHero}
            className="hero-to-add"
            icon="far fa-heart"
            isFull={isFull}
            setIsFull={setIsFull}
          >
            <p>children</p>
          </HeroCard>
        </>
      )}
    </>
  );
};
export default HeroDetail;
