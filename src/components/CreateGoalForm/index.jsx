import React from 'react';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp';
import SelectField from "../SelectField";
import { TextField } from '@material-ui/core';
import { apiKabit } from '../../utils/apis';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateGoalForm = ({ group_id }) => {
    const schema = yup.object().shape({
        title: yup
                .string()
                .required('Campo obrigatório'),
        difficulty: yup
                .string()
                .required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = ({ title, difficulty }) => {
        apiKabit
        .post(`/goals/`, {
            title: title,
            difficulty: difficulty,
            how_much_achieved: 0,
            group: group_id,
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
        <TextField
            label='title' 
            {...register('title')}
            helperText={errors.title?.message} 
        />

        <SelectField 
            register={register} 
            name='difficulty' 
            options={['Muito fácil', 'Fácil', 'Intermediário', 'Difícil', 'Muito difícil']}
        />
        {errors.difficulty?.message}

        <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>Criar Meta</ButtonComp>        
    </FormStyled>
    );
}

export default CreateGoalForm;
