import { DivBackground, DivContainer } from "./styles";
import { Link, useHistory } from "react-router-dom";
import ButtonComp from "../../components/ButtonComp";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { apiKabit } from "../../utils/apis";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Mínimo de 6 dígitos!"),
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
      .then(() => history.push("/user"))
      .catch(() => toast.error("Usuário ou senha incorretos."));
  };

  return (
    <DivBackground>
      <DivContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="username"
            placeholder="Nome de usuário"
            autoComplete="on"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="off"
          />
          <p>{errors.password?.message}</p>

          <ButtonComp type="submit">Login</ButtonComp>
        </form>
        <p>
          Não possui uma conta? <Link to="/register">cadastre-se</Link>
        </p>
      </DivContainer>
      <ToastContainer />
    </DivBackground>
  );
};
export default LoginPage;
