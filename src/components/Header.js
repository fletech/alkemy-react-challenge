import React from "react";
import { HeaderStyled } from "./styled";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { shadowSpin } from "../utils";

const Header = ({ toggleAside, setToggleAside, isLogged, setIsLogged }) => {
  return (
    <HeaderStyled>
      <DivStyled>
        {isLogged ? (
          <div
            onClick={() => setToggleAside(!toggleAside)}
            className={`${
              !toggleAside ? "toggle-aside on" : "toggle-aside off"
            }`}
          >
            <i className="fas fa-angle-double-right"></i>
          </div>
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
                  <i className="fas fa-suitcase"></i>
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
  div.toggle-aside {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    top: 1.3rem;
    left: -2rem;
    z-index: 100;
    cursor: pointer;

    @media (max-width: 500px) {
      left: -0.2rem;
      &.on {
        left: 6rem !important;
      }
    }
    &.on {
      left: 3rem;
      transition: left 1s ease-in-out;
      transform: rotate(180deg);
      box-shadow: 1px 1px 6px tomato, -1px -1px 6px #dae905;
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
