import ButtonComp from "../ButtonComp";
import { Container, GroupContainer } from "./styles";

const CardGroup = ({ group }) => {
  return (
    <Container>
      <GroupContainer>
        <h1>Título</h1>
        <p>{group?.name}</p>
        <h1>Categoria</h1>
        <p>{group?.category}</p>
        <h1>Descrição</h1>
        <p>{group?.description}</p>
      </GroupContainer>
      <ButtonComp>Inscrever-se</ButtonComp>
    </Container>
  );
};

export default CardGroup;
