import React from "react";
import { HeaderStyled } from "./styled";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { shadowSpin } from "../utils";

//Icons
import SvgIcon from "@material-ui/core/SvgIcon";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import SpeedIcon from "@material-ui/icons/Speed";
import { ReactComponent as BrainIcon } from "../images/brain.svg";
import { ReactComponent as AxeIcon } from "../images/axe.svg";
import { ReactComponent as HeartIcon } from "../images/heartbeat.svg";

const Header = ({ toggleAside, setToggleAside, isLogged, setIsLogged }) => {
  return (
    <HeaderStyled>
      <DivStyled>
        {isLogged ? (
          <>
            <div
              onClick={() => setToggleAside(!toggleAside)}
              className={`${
                !toggleAside ? "toggle-aside on" : "toggle-aside off"
              }`}
            >
              {toggleAside ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-angle-double-right"></i>
              )}
            </div>
            <section>
              <div className="stat-heading">
                <p>My team stats</p>
              </div>
              <div className="stat-rate intelligence">
                <SvgIcon>
                  <BrainIcon />
                </SvgIcon>
              </div>
              <div className="stat-rate combat">
                <SvgIcon>
                  <AxeIcon />
                </SvgIcon>
              </div>
              <div className="stat-rate power">
                <BatteryChargingFullIcon />
              </div>
              <div className="stat-rate speed">
                <SpeedIcon />
              </div>
              <div className="stat-rate strength">
                <FitnessCenterIcon />
              </div>
              <div className="stat-rate durability">
                <SvgIcon>
                  <HeartIcon />
                </SvgIcon>
              </div>
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
              <li key="wallet">
                <Link to="/">
                  <i className="fas fa-folder"></i>
                </Link>
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
    background-color: #e2e2e2;
    height: 3rem;
    align-items: center;
    border-radius: 2rem;
    div.stat-heading {
      margin-left: 1rem;
      p {
        font-size: 0.7rem;
        padding-bottom: 0.2rem;
      }
    }
    svg {
      color: tomato;
      margin: 0 1rem;
      font-size: 1.3rem;
    }
  }
  div.toggle-aside {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: fixed;
    top: 1.3rem;
    left: 0.1rem;
    z-index: 200;
    cursor: pointer;

    @media (max-width: 500px) {
      left: -0.2rem;
      &.on {
        left: 6rem !important;
      }
    }
    &.on {
      left: 10rem;
      transition: left 1s ease-in-out;
      transform: rotate(180deg);
      box-shadow: 1px 1px 6px tomato, -1px -1px 6px #dae905;
      z-index: 200;
    }
    &.off {
      transition: left 1s ease-in-out;
      animation: shadow-spin 2s infinite ease-in-out;
    }
    i {
      color: tomato;
    }
    ${shadowSpin}
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
    }
  }
`;
export default Header;
