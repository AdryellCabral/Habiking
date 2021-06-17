import React from "react";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { FormStyled } from "./styles";
import ButtonComp from "../ButtonComp";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useToken } from "../../providers/UserToken";

import { apiKabit } from "../../utils/apis";
import { category } from "../../utils/category";

import SelectField from "../SelectField";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";

const CreateGroupForm = () => {
  const { userToken } = useToken();
  const { newRequestGroupsSubscription, setEditGroupId } = useGroupsSubscriptions();
  const history = useHistory();
  
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().min(12).required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = ({ name, description, category }) => {
    apiKabit
      .post(
        "/groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) =>{ 
          newRequestGroupsSubscription();
          setEditGroupId(response.data.id)
          history.push('/edit-group/')
      })
      .catch((err) => console.log(err));
  };

  return (
      <FormStyled>
        <TextField 
          {...register("name")} 
          helperText={errors.name?.message} 
          label='Nome do Grupo'
          variant='outlined'
        />

        <TextField
          {...register("description")}
          helperText={errors.description?.message}
          label='Descrição do Grupo'
          variant='outlined'
        />

        <SelectField 
          register={register} 
          name={"category"} 
          options={category}
          label='Categoria' 
        />
        {errors.category?.message}

        <ButtonComp type="submit" PropFunction={handleSubmit(submitFunction)}>
          Criar Grupo
        </ButtonComp>
      </FormStyled>
  );
};

export default CreateGroupForm;
