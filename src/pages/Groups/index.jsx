import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import { DivContainer } from "./styles";

const GroupsPages = () => {
  return (
    <>
      <NavMenu />
      <DivContainer>
          <ButtonComp>Criar Novo Grupo</ButtonComp>
          <ButtonComp>Buscar Novo Grupo</ButtonComp>

          <GroupList> </GroupList>
      </DivContainer>
    </>
  );
};

export default GroupsPages;
