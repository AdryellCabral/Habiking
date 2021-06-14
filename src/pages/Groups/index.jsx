import { useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import CardGoal from "../../components/CardGoal";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { DivContainer, DivGroup } from "./styles";
import CardActivities from "../../components/CardActivities";
import { Link } from "react-router-dom";

const GroupsPages = () => {
  const { groups, setEditGroupId } = useGroupsSubscriptions();
  const [showGroup, setShowGroup] = useState([]);
  const {
    name,
    category,
    description,
    creator,
    users_on_group,
    goals,
    activities,
    id,
  } = showGroup;

  return (
    <>
      <NavMenu />
      <DivContainer>
        <ButtonComp>
          <Link to="/create-group"> Criar Novo Grupo </Link>
        </ButtonComp>

        <ButtonComp>
          <Link to="searchgroup"> Buscar Novo Grupo </Link>
        </ButtonComp>

        <GroupList setShowGroup={setShowGroup} groups={groups} />
        <DivGroup>
          <div id="group-info">
            <h1>Grupo</h1>
            <h2>Nome: {name}</h2>
            <h2>Categoria: {category}</h2>
            <p>Descrição: {description}</p>
          </div>

          <div className="infos" id="users">
            <h3>Usuários</h3>
            <ul>
              <li id="creator">Criador: {creator?.username}</li>
              {users_on_group?.map((user, index) => (
                index > 0 && <li key={index}>{user.username}</li>
              ))}
            </ul>
          </div>

          <div className="infos">
            <h3>Metas</h3>
            <ul>
              {goals?.map((goal, index) => (
                <CardGoal goal={goal} key={index}></CardGoal>
              ))}
            </ul>
          </div>

          <div className="infos">
            <h3>Atividades</h3>
            <ul>
              {activities?.map((activity, index) => (
                <CardActivities
                  activity={activity}
                  key={index}
                ></CardActivities>
              ))}
            </ul>
          </div>

          <ButtonComp onCLick={() => setEditGroupId(id)}><Link to="editgroup"> Editar </Link></ButtonComp>
        </DivGroup>
      </DivContainer>
    </>
  );
};

export default GroupsPages;
