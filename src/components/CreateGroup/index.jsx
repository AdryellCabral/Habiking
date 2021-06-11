import React from 'react';
import { Container, TextField } from '@material-ui/core';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp'

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { apiKabit } from '../../utils/apis'

import SelectField from '../SelectField';

const CreateGroupForm = () => {
  const category = ['Saúde', 'Educação', 'Jogos', 'Social', 'Livros', 'Filmes e Séries', 'Esportes', 'Outros'];
  

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


  const submitFunction = ({ name, description, category }) => {
    apiKabit
    .post('/groups', {
      name: name,
      description: description,
      category: category,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch(
      err => console.log(err)
    )
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

        <SelectField 
          register={register} 
          name={'category'} 
          options={category}
        />

        <ButtonComp type='submit' PropFunction={handleSubmit(submitFunction)}>Criar Grupo</ButtonComp>

      </FormStyled>
    </Container>
  );
}

export default CreateGroupForm;
