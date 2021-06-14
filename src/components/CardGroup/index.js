import ButtonComp from "../ButtonComp";
import { Container, GroupContainer } from "./styles";

const CardGroup = ({ group, action, loaded, isIn }) => {
  return (
    <Container>
      {loaded && (
        <>
          <GroupContainer>
            <h1>Título</h1>
            <p>{group?.name}</p>
            <h1>Categoria</h1>
            <p>{group?.category}</p>
            <h1>Descrição</h1>
            <p>{group?.description}</p>
          </GroupContainer>

          {isIn ? (
            <h1>Já inscrito!</h1>
          ) : (
            <ButtonComp PropFunction={action}>Inscrever-se</ButtonComp>
          )}
        </>
      )}
    </Container>
  );
};

export default CardGroup;
