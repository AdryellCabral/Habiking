import React from "react";
import { ContainerStyled, Breaker } from "./styles";
import GroupUpdateForm from "../../components/GroupUpdateForm";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivitiesForm from "../../components/CreateActivitiesForm";
import NavMenu from "../../components/NavMenu";
import { useToken } from "../../providers/UserToken";
import { Redirect } from "react-router-dom";

const EditGroupPage = () => {
  const { userToken, setUserToken } = useToken();

  const localToken = JSON.parse(localStorage.getItem("@tokenKabit")) || "";

  if (localToken === "") {
    return <Redirect to="/login" />;
  } else {
    setUserToken(localToken);
  }
  return (
    <>
      <NavMenu />
      <Breaker>
        <ContainerStyled>
          <h2>Alterar Categoria</h2>
          <GroupUpdateForm />
          <h2>Criar Nova Meta</h2>
          <CreateGoalForm />
          <h2>Criar Novo Evento</h2>
          <CreateActivitiesForm />
        </ContainerStyled>
      </Breaker>
    </>
  );
};

export default EditGroupPage;
