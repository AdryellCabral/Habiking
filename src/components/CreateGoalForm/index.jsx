import React from "react";
import { FormStyled, StyledTextField } from "./styles";
import ButtonComp from "../ButtonComp";
import SelectField from "../SelectField";
import { apiKabit } from "../../utils/apis";
import { useToken } from "../../providers/UserToken";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CreateGoalForm = () => {
  const { userToken } = useToken();
  const { editGroupId, newRequestGroupsSubscription } =
    useGroupsSubscriptions();
  const difficulty = [
    "Muito fácil",
    "Fácil",
    "Intermediário",
    "Difícil",
    "Muito difícil",
  ];

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmitFunction = ({ title, difficulty }) => {
        apiKabit
        .post(`/goals/`, {
            title: title,
            difficulty: difficulty,
            how_much_achieved: 0,
            group: editGroupId,
        }, {
            headers: {
                Authorization: `Bearer ${userToken}`,
              },
        })
        .then((response) => {
            newRequestGroupsSubscription();
            toast.success('Categoria alterada com sucesso.')
        })
        .catch((error) => {
            console.log(error);
            toast.error('Ocorreu algum erro, tente novamente depois.')
        })
    }

  return (
    <FormStyled>
      <StyledTextField
        label="Nome da Meta"
        {...register("title")}
        helperText={errors.title?.message}
        variant="outlined"
      />

      <SelectField
        register={register}
        name="difficulty"
        options={difficulty}
        label="Dificuldade"
      />
      {errors.difficulty?.message}

<<<<<<< HEAD
      <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>
        Criar Meta
      </ButtonComp>
=======
        <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>Criar Meta</ButtonComp>
        <ToastContainer />        
>>>>>>> 2719c4936ed9ed3decf647cb958bad0f0ab99aa6
    </FormStyled>
  );
};

export default CreateGoalForm;
