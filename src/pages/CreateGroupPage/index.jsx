import React from "react";
import { Redirect } from "react-router-dom";
import CreateGroupForm from "../../components/CreateGroupForm";
import { useToken } from "../../providers/UserToken";
import { ContainerStyled } from "./styles";

const CreateGroupPage = () => {
  const { userToken } = useToken();

  if (!userToken) {
    return <Redirect to="/login" />;
  }
  return (
    <ContainerStyled>
      <CreateGroupForm />
    </ContainerStyled>
  );
};

export default CreateGroupPage;
