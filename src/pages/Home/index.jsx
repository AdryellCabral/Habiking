import { DivContainer, DivButtons, DivDescription } from "./styles";
import { Link } from "react-router-dom";

const HomePage = () => (
  <DivContainer>
    <div>
      <DivDescription>
        <h3>Gestor de Hábitos</h3>
        <h4>
          Gestor de hábitos é uma aplicação onde você pode gerir seu lifestyle,
          tanto sozinho quanto em grupos que você pode entrar ou criar novos.
        </h4>
      </DivDescription>
      <DivButtons>
        <Link to="/register">
          <button>Cadastre-se</button>
        </Link>
        <div>
          <p>Já possui uma conta?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </DivButtons>
    </div>
  </DivContainer>
);
export default HomePage;
