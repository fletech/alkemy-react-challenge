import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #f7f7f7;
  display: flex;
  padding: 0 5vw;
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  padding-top: 15vh;
  width: 100%;
  background-color: #fff;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0;
  a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: orange;
  }
`;
