import { useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { DivContainer, DivGroup } from "./styles";

const GroupsPages = () => {
  const { groups } = useGroupsSubscriptions();
  const [showGroup, setShowGroup] = useState([]);
  const { name, category, description, creator, users_on_group } = showGroup;
  return (
    <>
      <NavMenu />
      <DivContainer>
        <ButtonComp>Criar Novo Grupo</ButtonComp>
        <ButtonComp>Buscar Novo Grupo</ButtonComp>

        <GroupList setShowGroup={setShowGroup} groups={groups} />
        <DivGroup>
          <div id="group-info">
            <h1>Grupo</h1>
            <h2>Nome: {name}</h2>
            <h2>Categoria: {category}</h2>
            <p>Descrição: {description}</p>
          </div>

          <div id="users">
            <h3>Usuários</h3>
            <ul>
              <li id="creator">{creator?.username}</li>
              {users_on_group?.map((user, index) => (
                <li key={index}>{user.username}</li>
              ))}
            </ul>
          </div>
        </DivGroup>
      </DivContainer>
    </>
  );
};

export default GroupsPages;
