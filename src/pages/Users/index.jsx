import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import HabitCard from "../../components/HabitCard/HabitCard";
import NavMenu from "../../components/NavMenu";
import Loader from "../../components/Loader";
import { GeneralContainer, HabitList } from "./styles";
import ButtonComp from "../../components/ButtonComp";

const Users = (props) => {
  const { userToken, setUserToken, username, userId } = useToken();
  const [habitos, setHabitos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("@tokenKabit") || "";

    if (localToken !== "") {
      setUserToken(JSON.parse(localToken));
    }
  });

  useEffect(() => {
    if (userToken !== "") {
      const config = { headers: { Authorization: "Bearer " + userToken } };

      apiKabit.get("/habits/personal/", config).then((response) => {
        setHabitos(response.data);
        setLoading(true);
      });
    }
  }, [userToken]);

  return (
    <>
      <NavMenu />
      <GeneralContainer>
        <h1>{username}</h1>
        <h1>Habitos</h1>
        <Link to="/create-habit">
          <ButtonComp>Criar Habito</ButtonComp>
        </Link>

        <HabitList>
          <h1>Lista de Habitos</h1>
          {habitos[0] === undefined ? <h1>Sem habitos</h1> : null}
          {loading ? (
            <div className="caixaHabitos">
              {habitos.map((habit) => (
                <HabitCard
                  habit={habit}
                  achieved={habit.achieved}
                  setHabitos={setHabitos}
                  habitos={habitos}
                />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </HabitList>
      </GeneralContainer>
    </>
  );
};

export default Users;
