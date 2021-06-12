import { DivContainerLarge } from "./styles";
import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { apiKabit } from "../../utils/apis";

const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 dígitos!")
    .required("Campo obrigatório!"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    apiKabit
      .post("/sessions/", data)
      .then((response) =>
        localStorage.setItem(
          "@tokenKabit",
          JSON.stringify(response.data.access)
        )
      )
      .then(console.log("Logado com sucesso"))
      .then(history.push("/user"))
      .catch((err) => console.log("usuário ou senha inválidos!", err));
  };

  return (
    <DivContainerLarge>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="username"
            placeholder="Nome de usuário"
            autoComplete="on"
            {...register("username")}
          />
          <span>{errors.name?.message}</span>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="off"
          />
          <span>{errors.password?.message}</span>

          <button type="submit">Login</button>
        </form>
        <p>
          Não possui uma conta? <Link to="/register">cadastre-se</Link>
        </p>
      </div>
    </DivContainerLarge>
  );
};
export default LoginPage;
