import React from 'react';
import { ContainerStyled } from './styles';
import GroupUpdateForm from '../../components/GroupUpdateForm';
import CreateGoalForm from '../../components/CreateGoalForm';
import CreateActivitiesForm from '../../components/CreateActivitiesForm';

const EditGroupPage = () => {
  return (
    <ContainerStyled>
      <GroupUpdateForm />
      <CreateGoalForm />
      <CreateActivitiesForm />
    </ContainerStyled>
  );
}

export default EditGroupPage;
