import { DivBackground, DivContainer } from "./styles";
import { Link, useHistory } from "react-router-dom";
import ButtonComp from "../../components/ButtonComp";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { apiKabit } from "../../utils/apis";

const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  email: yup.string().required("Campo obrigatório!").email("Email inválido!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Mínimo de 6 dígitos!"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password")], "As senhas estão diferentes."),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ username, email, password }) => {
    const user = { username, email, password };

    apiKabit
      .post("/users/", user)
      .then(() => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <DivBackground>
      <DivContainer>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="username"
            placeholder="Nome de usuário"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
          <input type="email" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="new-password"
          />
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
          <ButtonComp type="submit">Cadastrar</ButtonComp>
          <p>
            Já possui uma conta? Faça <Link to="/login">login</Link>
          </p>
        </form>
      </DivContainer>
    </DivBackground>
  );
};

export default RegisterPage;
