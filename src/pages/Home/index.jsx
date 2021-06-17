import {
  DivContainer,
  DivButtons,
  DivDescription,
  DivBackground,
  LogoContainer,
} from "./styles";
import ButtonComp from "../../components/ButtonComp";

import { Link, Redirect } from "react-router-dom";

import Logo from "../../assets/imgs/logo.png";
import { useToken } from "../../providers/UserToken";

const HomePage = () => {
  const { userToken } = useToken();

  if (userToken) {
    return <Redirect to="/user" />;
  }
  return (
    <DivBackground>
      <DivContainer>
        <DivDescription>
          <LogoContainer>
            <img src={Logo} alt="siteLogo" />
            <h3>Habiking</h3>
          </LogoContainer>
          <h4>
            Uma aplicação onde você pode gerir seu lifestyle, tanto sozinho
            quanto em grupos que você pode entrar ou criar novos.
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
};
export default HomePage;
