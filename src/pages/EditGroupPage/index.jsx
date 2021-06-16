import React from "react";
import { ContainerStyled } from "./styles";
import GroupUpdateForm from "../../components/GroupUpdateForm";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivitiesForm from "../../components/CreateActivitiesForm";
import { useToken } from "../../providers/UserToken";
import { Redirect } from "react-router-dom";

const EditGroupPage = () => {
  const { userToken } = useToken();

  if (!userToken) {
    return <Redirect to="/login" />;
  }
  return (
    <ContainerStyled>
      <h2>Alterar Categoria</h2>
      <GroupUpdateForm />
      <hr />
      <h2>Criar Nova Meta</h2>
      <CreateGoalForm />
      <hr />
      <h2>Criar Novo Evento</h2>
      <CreateActivitiesForm />
    </ContainerStyled>
  );
};

export default EditGroupPage;
