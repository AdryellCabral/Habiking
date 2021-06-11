import { DivContainerLarge } from "./styles";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <DivContainerLarge>
      <div>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="username"
            placeholder="Nome de usuário"
            autoComplete="on"
            {...register("username")}
          />
          <span>{errors.name?.message}</span>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            autoComplete="on"
          />
          <span>{errors.email?.message}</span>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            autoComplete="new-password"
          />
          <span>{errors.password?.message}</span>
          <input type="password" placeholder="Confirmar senha" />
          <span>{errors.passwordConfirm?.message}</span>
          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Já possui uma conta? Faça <Link to="/login">login</Link>
        </p>
      </div>
    </DivContainerLarge>
  );
};
export default RegisterPage;
