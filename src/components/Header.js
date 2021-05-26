import React from "react";
import { HeaderStyled } from "./styled";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Icons } from "../utils";

//Components
import Stat from "./Stat";

//Icons
import SvgIcon from "@material-ui/icons/BatteryChargingFull";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

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

              {Object.keys(Icons).map((keyName) => (
                <Stat
                  className={stats[keyName]}
                  icon={Icons[keyName]}
                  key={keyName}
                >
                  <small>{stats[keyName]}</small>
                </Stat>
              ))}
            </section>
          </>
        ) : (
          ""
        )}
      </DivStyled>
      <NavStyled>
        <ul>
          {!isLogged && (
            <li key="sign-in">
              <i className="fas fa-sign-in-alt"></i>
            </li>
          )}

          {isLogged && (
            <>
              <li key="search">
                <Link to="/search">
                  <i className="fas fa-search"></i>
                </Link>
              </li>
              <li key="home-screen" className="home-screen">
                <Link to="/">
                  <i className="fas fa-th"></i>
                </Link>
                {teamHero.length !== 0 && (
                  <div className="bubble">
                    <p>{teamHero.length}</p>
                  </div>
                )}
              </li>
              <li
                key="logout"
                onClick={() => {
                  setIsLogged(false);
                  localStorage.removeItem("TOKEN_LOGIN");
                  return <Redirect to="/" />;
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
              </li>
            </>
          )}
        </ul>
      </NavStyled>
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
  section {
    display: flex;
    flex-wrap: wrap;
    background-color: #e2e2e2;
    height: 3rem;
    align-items: center;
    border-radius: 2rem;
    div.stat-heading {
      margin-left: 1rem;
      p {
        font-size: 0.7rem;
      }
    }
    div.stat-rate {
      display: flex;
      align-items: center;
      margin: 0 0.8rem;
    }
    svg {
      color: #f3826f;
      font-size: 1.2rem;
      margin-right: 0.5rem;
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
`;
const NavStyled = styled(DivStyled)`
  width: 20%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      margin-left: 5vw;
      list-style: none;
      color: #474747;
      font-weight: 500;
      cursor: pointer;
      a {
        color: #474747;
      }
      &.home-screen {
        position: relative;

        div.bubble {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: -0.8rem;
          right: -0.8rem;
          background-color: #f75454;
          width: 1.1rem;
          height: 1.1rem;
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: bold;
          padding-top: 1px;
          pointer-events: none;
        }
      }
    }
  }
`;
export default Header;
