import React from 'react';
import SelectField from '../SelectField';
import ButtonComp from '../ButtonComp';
import { FormStyled } from './styles'
import { apiKabit } from '../../utils/apis'

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const GroupUpdateForm = ({ group_id }) => {
    const category = ['Saúde', 'Educação', 'Jogos', 'Social', 'Livros', 'Filmes e Séries', 'Esportes', 'Outros'];

    const schema = yup.object().shape({
        category: yup
                .string()
                .required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = ({ category }) => {
        apiKabit
        .patch(`/groups/${group_id}/`, {
            category: category
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
    <FormStyled>
        <SelectField register={register} name='category' options={category} />

        <ButtonComp type='submit' PropFunction={handleSubmit(onSubmitFunction)}>Alterar Categoria</ButtonComp>
    </FormStyled>
  );
}

export default GroupUpdateForm;
