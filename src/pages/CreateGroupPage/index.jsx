import React from "react";
import { Redirect } from "react-router-dom";
import CreateGroupForm from "../../components/CreateGroupForm";
import NavMenu from "../../components/NavMenu";
import { useToken } from "../../providers/UserToken";
import { ContainerStyled } from "./styles";

const CreateGroupPage = () => {
  const { userToken } = useToken();

  if (!userToken) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavMenu />
      <ContainerStyled>
        <CreateGroupForm />
      </ContainerStyled>
    </>
  );
};

export default CreateGroupPage;
