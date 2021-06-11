import { useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import CardGoal from "../../components/CardGoal"
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { DivContainer, DivGroup } from "./styles";

const GroupsPages = () => {
  const { groups } = useGroupsSubscriptions();
  const [showGroup, setShowGroup] = useState([]);
  const { name, category, description, creator, users_on_group, goals } = showGroup;
  console.log(showGroup)
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

          <div className={"infos"} id="users">
            <h3>Usuários</h3>
            <ul>
              <li id="creator">{creator?.username}</li>
              {users_on_group?.map((user, index) => (
                <li key={index}>{user.username}</li>
              ))}
            </ul>
          </div>

          <div className={"infos"}>
            <h3>Metas</h3>
            <ul>
              {goals?.map((goal, index) => <CardGoal goal={goal} index={index}></CardGoal>)}
            </ul>

          </div>
        </DivGroup>
      </DivContainer>
    </>
  );
};

export default GroupsPages;
