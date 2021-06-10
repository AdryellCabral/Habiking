import React from 'react';
import { Container, MenuItem, Select, TextField } from '@material-ui/core';
import { FormStyled } from './styles';

const CreateGroup = () => {
  return (
    <Container fixed>
      <FormStyled>
        <TextField/>
        <TextField />
        <Select>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </Select>
      </FormStyled>
    </Container>
  );
}

export default CreateGroup;
