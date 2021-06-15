import { DivContainerLarge } from "./styles";
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
    .min(6, "Mínimo de 6 dígitos!")
    .required("Campo obrigatório!"),
  passwordConfirm: yup
    .string()
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
      .then(console.log("Cadastro efetuado com sucesso!"))
      .then(history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <DivContainerLarge>
      <div>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="username"
            placeholder="Nome de usuário"
            {...register("username")}
          />
          <span>{errors.name?.message}</span>
          <input type="email" placeholder="Email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="new-password"
          />
          <span>{errors.password?.message}</span>
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("passwordConfirm")}
          />
          <span>{errors.passwordConfirm?.message}</span>
          <ButtonComp type="submit">Cadastrar</ButtonComp>
        </form>
        <p>
          Já possui uma conta? Faça <Link to="/login">login</Link>
        </p>
      </div>
    </DivContainerLarge>
  );
};

export default RegisterPage;
