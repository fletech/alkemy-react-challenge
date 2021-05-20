import { styled } from "@material-ui/core";
import React from "react";
import { FooterStyled } from "./styled";

const Footer = () => {
  return (
    <FooterStyled>
      <span>Developed by</span>{" "}
      <a href="https://facundo.ar"> Facundo Garcia </a>{" "}
      <span>to Alkemy React Challenge.</span>
    </FooterStyled>
  );
};

export default Footer;
