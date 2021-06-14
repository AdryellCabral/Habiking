import React from 'react';
import CreateGroupForm from '../../components/CreateGroupForm';
import { ContainerStyled } from './styles'

const CreateGroupPage = () => {
  return (
    <ContainerStyled>
      <CreateGroupForm />
    </ContainerStyled>
  );
}

export default CreateGroupPage;