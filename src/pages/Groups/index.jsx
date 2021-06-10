import { useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { DivContainer } from "./styles";

const GroupsPages = () => {

  const {groups} = useGroupsSubscriptions()
  const [showGroup, setShowGroup] = useState([])
  return (
    <>
      <NavMenu />
      <DivContainer>
          <ButtonComp>Criar Novo Grupo</ButtonComp>
          <ButtonComp>Buscar Novo Grupo</ButtonComp>

          <GroupList setShowGroup={setShowGroup} groups={groups} />
      </DivContainer>
    </>
  );
};

export default GroupsPages;
