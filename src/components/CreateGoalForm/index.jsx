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
      .post(
        `/goals/`,
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: 0,
          group: editGroupId,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        newRequestGroupsSubscription();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>
        Criar Meta
      </ButtonComp>
    </FormStyled>
  );
};

export default CreateGoalForm;
