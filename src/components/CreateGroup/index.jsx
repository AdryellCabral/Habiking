import React from 'react';
import { Container, TextField } from '@material-ui/core';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp'

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// import SelectField from '../selectfield'

const CreateGroupForm = () => {
  const schema = yup.object().shape({
    name: yup
          .string()
          .required('Campo obrigatório'),
    description:  yup
                  .string()
                  .min(12)
                  .required('Campo obrigatório'),                  
    category:  yup
              .string()
              .required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const name = 'category';
  const options = ['Saúde', 'Educação', 'Jogos', 'Social', 'Livros', 'Filmes e Séries', 'Esportes', 'Outros'];

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

        {/* <SelectField register={register} name={name} options={options}/> */}

        <ButtonComp type='submit' PropFunction={handleSubmit(submitFunction)}>Criar Grupo</ButtonComp>

      </FormStyled>
    </Container>
  );
}

export default CreateGroupForm;
