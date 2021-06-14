import ButtonComp from "../ButtonComp";
import { Container, GroupContainer } from "./styles";

const CardGroup = ({ group }) => {
  return (
    <Container>
      <GroupContainer>
        <h2>Título: {group?.name}</h2>
        <span>Tema: {group?.category}</span>
        <p>Descrição: {group?.description}</p>
      </GroupContainer>
      <ButtonComp>Inscrever-se</ButtonComp>
    </Container>
  );
};

export default CardGroup;
