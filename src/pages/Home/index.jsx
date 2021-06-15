import {
  DivContainer,
  DivButtons,
  DivDescription,
  DivBackground,
} from "./styles";
import ButtonComp from "../../components/ButtonComp";

import { Link } from "react-router-dom";

const HomePage = () => (
  <DivBackground>
    <DivContainer>
      <DivDescription>
        <h3>Gestor de Hábitos</h3>
        <h4>
          Gestor de hábitos é uma aplicação onde você pode gerir seu lifestyle,
          tanto sozinho quanto em grupos que você pode entrar ou criar novos.
        </h4>
      </DivDescription>
      <DivButtons>
        <div>
          <p>Não tem uma conta ainda?</p>
          <Link to="/register">
            <ButtonComp>Cadastre-se</ButtonComp>
          </Link>
        </div>
        <div>
          <p>Já possui uma conta?</p>
          <Link to="/login">
            <ButtonComp>Login</ButtonComp>
          </Link>
        </div>
      </DivButtons>
    </DivContainer>
  </DivBackground>
);
export default HomePage;
