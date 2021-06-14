import React, { useContext } from 'react';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp';
import { TextField } from '@material-ui/core';
import { apiKabit } from '../../utils/apis';
import { TokenContext } from '../../providers/UserToken';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateActivitiesForm = () => {
    const { userToken } = useContext(TokenContext);

    const schema = yup.object().shape({
        title: yup
                .string()
                .required('Campo obrigatório'),
        realization_time: yup
                        .date()
                        .required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = ({ title, realization_time }) => {
        apiKabit
        .post(`/activities/`, {
            title: title,
            realization_time: realization_time,
            group: group_id
        }, {
            headers: {
                Authorization: `Bearer ${userToken}`,
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

        <TextField
            id="datetime-local"
            label="Realization Time"
            {...register('realization_time')}
            type="datetime-local"
            defaultValue="2021-06-15T10:30"
            InputLabelProps={{
            shrink: true,
            }}
        />

        {errors.realization_time?.message}

        <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>Criar Meta</ButtonComp>        
    </FormStyled>
    );
}

export default CreateActivitiesForm;