import ButtonComp from "../ButtonComp";
import { Container, GroupContainer } from "./styles";

const CardGroup = ({ group }) => {
  return (
    <Container>
      <GroupContainer>
        <h1>Título</h1>
        <h2>{group?.name}</h2>
        <span>Categoria</span>
        <p>{group?.category}</p>
        <span>Descrição</span>
        <p>{group?.description}</p>
      </GroupContainer>
      <ButtonComp>Inscrever-se</ButtonComp>
    </Container>
  );
};

export default CardGroup;
