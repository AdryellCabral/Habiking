import React from 'react';
import SelectField from '../SelectField';
import ButtonComp from '../ButtonComp';
import { FormStyled } from './styles'
import { apiKabit } from '../../utils/apis'
import { useToken } from '../../providers/UserToken';
import { category } from '../../utils/category';
import { useGroupsSubscriptions } from '../../providers/groupsSubscriptions';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const GroupUpdateForm = () => {
    const { userToken } = useToken();
    const { editGroupId, newRequestGroupsSubscription } = useGroupsSubscriptions();

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
        .patch(`/groups/${editGroupId}/`, {
            category: category
        }, {
            headers: {
                Authorization: `Bearer ${userToken}`,
              },
        })
        .then((response) => {
            newRequestGroupsSubscription()
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
    <FormStyled>
        <SelectField register={register} name='category' options={category} label='Categoria'/>

        <ButtonComp type='submit' PropFunction={handleSubmit(onSubmitFunction)}>Alterar</ButtonComp>
    </FormStyled>
  );
}

export default GroupUpdateForm;
