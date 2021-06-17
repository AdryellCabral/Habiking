import React from "react";
import { FormStyled, StyledTextField } from "./styles";
import ButtonComp from "../ButtonComp";
import { apiKabit } from "../../utils/apis";
import { useToken } from "../../providers/UserToken";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CreateActivitiesForm = () => {
  const { userToken } = useToken();
  const { editGroupId, newRequestGroupsSubscription } =
    useGroupsSubscriptions();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.date().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ title, realization_time }) => {
    apiKabit
      .post(
        `/activities/`,
        {
          title: title,
          realization_time: realization_time,
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
        toast.success("Categoria alterada com sucesso.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocorreu algum erro, tente novamente depois.");
      });
  };

  return (
    <FormStyled>
      <StyledTextField
        label="Nome da Atividade"
        {...register("title")}
        helperText={errors.title?.message}
        variant="outlined"
      />

      <StyledTextField
        id="datetime-local"
        variant="outlined"
        label="Horário"
        {...register("realization_time")}
        type="datetime-local"
        defaultValue="2021-06-15T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />

      {errors.realization_time?.message}

      <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>
        Criar Meta
      </ButtonComp>
      <ToastContainer />
    </FormStyled>
  );
};

export default CreateActivitiesForm;
