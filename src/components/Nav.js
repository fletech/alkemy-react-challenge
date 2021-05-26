import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ isLogged, setIsLogged, teamHero, className }) => {
  return (
    isLogged && (
      <NavStyled className={className}>
        <ul>
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
        </ul>
      </NavStyled>
    )
  );
};
const NavStyled = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  &.nav-as-footer {
    display: none;
  }
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
  @media (max-width: 650px) {
    &.nav-in-header {
      position: absolute;
      display: none;
    }
    &.nav-as-footer {
      z-index: 1000;
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 7vh;
      background-color: white;
      ul {
        width: 100%;
        background-color: #474747;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 33%;
          margin-left: 0;
          i {
            color: white;
          }
          a {
            color: white;
          }
          div.bubble {
            right: 50%;
            transform: translateX(150%);
          }
        }
      }
    }
  }
`;
export default Nav;
