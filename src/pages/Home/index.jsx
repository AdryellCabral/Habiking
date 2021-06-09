import {
  DivContainerStyled,
  DivContainer2Styled,
  DivContainer3Styled,
  DivContainer4Styled,
  PStyled,
  ButtonStyled,
  TitleStyled,
} from "./styles";
import { Link } from "react-router-dom";

const HomePage = () => (
  <DivContainerStyled>
    <DivContainer2Styled>
      <DivContainer4Styled color="#c8bfc7">
        <TitleStyled>Gestor de Hábitos</TitleStyled>
        <PStyled>
          Gestor de hábitos é uma aplicação onde você pode gerir seu lifestyle,
          tanto sozinho quanto em grupos que você pode entrar ou criar novos.
        </PStyled>
      </DivContainer4Styled>
      <DivContainer3Styled color="#18206F">
        <ButtonStyled>Cadastre-se</ButtonStyled>
        <div>
          <PStyled color="white">Já possui uma conta?</PStyled>
          <Link to="/login">
            <ButtonStyled>Login</ButtonStyled>
          </Link>
        </div>
      </DivContainer3Styled>
    </DivContainer2Styled>
  </DivContainerStyled>
);
export default HomePage;
