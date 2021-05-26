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
  z-index: 10;
  box-shadow: 1px 1px 10px #f7f7f7;
  @media (max-height: 600px) {
    height: 10vh;
    margin-bottom: 3rem;
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 85vh;
  padding-top: 15vh;
  width: 100%;
  background-color: #fff;
  @media (max-width: 600px) {
    min-height: 95vh;
  }
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
  z-index: 10;
  a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: #fc5639;
    font-weight: bold;
  }
  @media (max-width: 650px) {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin-bottom: 7vh;
    a {
      margin: 0.2rem 0rem;
    }
  }
`;
