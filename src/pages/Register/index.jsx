import { DivContainerLarge } from "./styles";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const handleSubmit = () => {};

  return (
    <DivContainerLarge>
      <div>
        <h1>Cadastro</h1>
        <form>
          <input placeholder="Nome de usuário" />
          <input placeholder="Email" />
          <input placeholder="Senha" />
          <input placeholder="Confirmar senha" />
          <button type="submit" onClick={() => handleSubmit}>
            Cadastrar
          </button>
        </form>
        <p>
          Já possui uma conta? Faça <Link to="/login">login</Link>
        </p>
      </div>
    </DivContainerLarge>
  );
};
export default RegisterPage;
