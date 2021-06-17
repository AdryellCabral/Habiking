import { useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import GroupList from "../../components/GroupList";
import NavMenu from "../../components/NavMenu";
import CardGoal from "../../components/CardGoal";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { DivContainer, DivGroup, Li } from "./styles";
import CardActivities from "../../components/CardActivities";
import { Link } from "react-router-dom";
import { useToken } from "../../providers/UserToken";
import { Redirect } from "react-router";

const GroupsPages = () => {
  const { groups } = useGroupsSubscriptions();
  const { userId, userToken, setUserToken } = useToken();

  const [showGroup, setShowGroup] = useState([]);
  const {
    name,
    category,
    description,
    creator,
    users_on_group,
    goals,
    activities,
  } = showGroup;

  const isCreator = creator?.id === userId;

  const localToken = JSON.parse(localStorage.getItem("@tokenKabit")) || "";

  if (localToken === "") {
    return <Redirect to="/" />;
  } else {
    setUserToken(localToken);
  }
  return (
    <>
      <NavMenu />
      <DivContainer>
        <div id="buttons-container">
          <Link to="/create-group">
            <ButtonComp>Criar Novo Grupo</ButtonComp>
          </Link>

          <Link to="/search-group">
            <ButtonComp>Buscar Novo Grupo</ButtonComp>
          </Link>
        </div>

        <div id="group-container">
          <div id="group-list">
            <GroupList setShowGroup={setShowGroup} groups={groups} />
          </div>
          <DivGroup>
            <div id="group-info">
              <h1>{name}</h1>
              <h2>Categoria: {category}</h2>
              <p>Descrição: {description}</p>
            </div>

            <div id="cards-container">
              <div className="infos" id="users">
                <h3>Usuários</h3>
                <ul>
                  <li id="creator">Criador: {creator?.username}</li>
                  {users_on_group?.map(
                    (user, index) =>
                      index > 0 && (
                        <Li key={index} index={index}>
                          {user.username}
                        </Li>
                      )
                  )}
                </ul>
              </div>

              <div className="infos">
                <h3>Metas</h3>
                <ul>
                  {goals?.map((goal, index) => (
                    <CardGoal
                      goal={goal}
                      key={index}
                      isCreator={isCreator}
                    ></CardGoal>
                  ))}
                </ul>
              </div>

              <div className="infos">
                <h3>Atividades</h3>
                <ul>
                  {activities?.map((activity, index) => (
                    <CardActivities activity={activity} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            {isCreator && (
              <div id="edit-group">
                <Link to="/edit-group">
                  <ButtonComp>Editar</ButtonComp>
                </Link>
              </div>
            )}
          </DivGroup>
        </div>
      </DivContainer>
    </>
  );
};

export default GroupsPages;
