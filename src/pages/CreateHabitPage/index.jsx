import {  useState } from "react"
import NavMenu from "../../components/NavMenu"
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import './styles.css'
import { category } from '../../utils/category';
import SelectField from '../../components/SelectField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonComp from "../../components/ButtonComp";
import { FormStyled, TextFieldStyled } from "../../components/CreateGroupForm/styles";

const CreateHabit = () =>{
    const { userToken, userId } = useToken();

  const handleForm = ({title,frequency,category,difficulty}) => {

    const config = { headers: { Authorization: "Bearer " + userToken } }; 

    const data = {
        title:title,
        frequency:frequency,
        category:category,
        difficulty:difficulty,
        achieved:false,
        how_much_achieved:0,
        user:userId
    }
    console.log('oi')
    apiKabit.post('/habits/',data,config).then((response) => console.log(response)).catch((err) => console.log(err))
  

}
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

    const difficulties = ['Muito fácil','Fácil','Intermediário','Difícil','Muito difícil']
    const frequencies =['Diario','Semanal','Mensal']
    
    return(<>
        <NavMenu/>
        <div className="criacao">
        <form>
        <TextFieldStyled
        {...register("title")}
        helperText={errors.name?.message}
        label="Nome do Habito"
        variant="outlined"
      />
        <SelectField register={register} name='category' options={category} label='Categoria'/>
        <SelectField register={register} name='difficulty' options={difficulties} label='Dificuldades'/>
        <SelectField register={register} name='frequency' options={frequencies} label='Frequencia'/>
        <ButtonComp type='submit' PropFunction={handleSubmit(handleForm)}>Criar</ButtonComp>
        </form>
        </div>
    </>)
}

export default CreateHabit