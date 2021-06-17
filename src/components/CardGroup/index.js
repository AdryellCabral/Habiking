import ButtonComp from "../ButtonComp";
import { GroupContainer, Infos } from "./styles";

const CardGroup = ({ group, action }) => {
  return (
    <Infos>
      <GroupContainer>
        <h1>Título</h1>
        <p>{group?.name}</p>
        <h1>Categoria</h1>
        <p>{group?.category}</p>
        <h1>Descrição</h1>
        <p>{group?.description}</p>
      </GroupContainer>
      <ButtonComp PropFunction={action}>Inscrever-se</ButtonComp>
    </Infos>
  );
};

export default CardGroup;
