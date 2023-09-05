import React from "react";
import { HeaderStyled } from "./styled";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Icons } from "../utils";

//Components
import Stat from "./Stat";

//Icons
import SvgIcon from "@material-ui/icons/BatteryChargingFull";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Nav from "./Nav";

const Header = ({ isLogged, setIsLogged, stats, teamHero }) => {
  const history = useHistory();

  return (
    <HeaderStyled>
      <DivStyled>
        {isLogged ? (
          <>
            <div className="button-backward">
              <button
                onClick={() => {
                  history.goBack();
                  console.log(history.location);
                }}
              >
                <SvgIcon component={ChevronLeftIcon} />
                back
              </button>
            </div>
            <section>
              <div className="stat-heading">
                <p>My team stats</p>
              </div>
              <div className="stats">
                {Object.keys(Icons).map((keyName) => (
                  <Stat
                    className={stats[keyName]}
                    icon={Icons[keyName]}
                    key={keyName}
                  >
                    <small>{stats[keyName]}</small>
                  </Stat>
                ))}
              </div>
            </section>
          </>
        ) : (
          ""
        )}
      </DivStyled>
      <Nav
        className="nav-in-header"
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        teamHero={teamHero}
      ></Nav>
    </HeaderStyled>
  );
};

const DivStyled = styled.div`
  position: relative;
  width: 80%;
  padding-left: 5vw;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 650px) {
    width: 100%;
    padding: 0;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    background-color: #e2e2e2;
    height: 85%;
    width: 80%;
    border-radius: 0.4rem;
    border: solid 1px #d3d3d3;
    padding: 0% 10%;
    div.stat-heading {
      p {
        width: 100%;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: left;
      }
    }
    div.stats {
      display: flex;
      justify-content: space-between;

      width: 100%;
      div.stat-rate {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      svg {
        color: #f3826f;
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }
    }

    @media (max-width: 650px) {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding: 0 0.5rem;
    }
  }
  div.button-backward {
    position: absolute;
    left: -2rem;
    button {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      color: tomato;
      cursor: pointer;
      svg {
        color: tomato;
        font-size: 1rem;
      }
    }
    @media (max-width: 800px) {
      left: -1.5rem;
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
  @media (max-width: 650px) {
    section {
      height: 80%;
      border-radius: 4rem;
      div.stat-rate {
        margin: 0 0.2rem;
      }
    }
  }
`;

export default Header;
