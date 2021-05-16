import React from "react";
import { HeaderStyled } from "./styled";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Header = ({ isLogged, setIsLogged }) => {
  return (
    <HeaderStyled>
      <DivStyled>Hola</DivStyled>
      <NavStyled>
        <ul>
          {!isLogged && (
            <li>
              <i class="fas fa-sign-in-alt"></i>
            </li>
          )}

          {isLogged && (
            <>
              <li>
                <i class="fas fa-search"></i>
              </li>
              <li>
                <i class="fas fa-suitcase"></i>
              </li>
              <li
                onClick={() => {
                  setIsLogged(false);
                  localStorage.removeItem("TOKEN_LOGIN");
                  return <Redirect to="/" />;
                }}
              >
                <i class="fas fa-sign-out-alt"></i>
              </li>
            </>
          )}
        </ul>
      </NavStyled>
    </HeaderStyled>
  );
};

const DivStyled = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    }
  }
`;
export default Header;
