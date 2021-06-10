import React from 'react';
import { Button, Container, MenuItem, Select, TextField } from '@material-ui/core';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp'

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateGroup = () => {
  const schema = yup.object().shape({
    name: yup
          .string()
          .required('Campo obrigatório'),
    description:  yup
                  .string()
                  .min(12)
                  .required('Campo obrigatório'),                  
    // category:  yup
    //           .string()
    //           .required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitFunction = (data) => {
    console.log(data)
  }

  return (
    <Container fixed>
      <FormStyled>

        <TextField 
          {...register('name')}
          helperText={errors.name?.message} 
        />        

        <TextField 
          {...register('description')}
          helperText={errors.description?.message} 
        />        

        {/* <Select>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </Select> */}


        <ButtonComp type='submit' PropFunction={handleSubmit(submitFunction)}>Criar Grupo</ButtonComp>

      </FormStyled>
    </Container>
  );
}

export default CreateGroup;
