import React, { useContext } from 'react';
import SelectField from '../SelectField';
import ButtonComp from '../ButtonComp';
import { FormStyled } from './styles'
import { apiKabit } from '../../utils/apis'
import { TokenContext } from '../../providers/UserToken';
import { category } from '../../utils/category';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const GroupUpdateForm = ({ group_id }) => {
    const { userToken } = useContext(TokenContext);

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
        <SelectField register={register} name='category' options={category} />

        <ButtonComp type='submit' PropFunction={handleSubmit(onSubmitFunction)}>Alterar Categoria</ButtonComp>
    </FormStyled>
  );
}

export default GroupUpdateForm;
