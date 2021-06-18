import { DivContainer } from "./style";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png";

const NotFound = () => {
  return (
    <DivContainer>
      <h2>Página Não Encontrada.</h2>
      <img src={Logo} alt="logo"></img>
      <p>
        Que tal ir para nossa <Link to="/">Página Inicial.</Link>
      </p>
    </DivContainer>
  );
};

export default NotFound;
