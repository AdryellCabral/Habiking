import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../providers/UserToken";
import "./styles.css";
import { apiKabit } from "../../utils/apis";
import HabitCard from "../../components/HabitCard/HabitCard";
import NavMenu from "../../components/NavMenu";
import Loader from "../../components/Loader";

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
      <div className="container">
        {username}

        <div className="cardhabit">
          <div className="criacao">
            <h1>Habitos</h1>
            <Link to="/create-habit">
              <button>Criar Habito</button>
            </Link>
          </div>

          <div className="lista">
            <p>lista de habitos</p>
            {habitos[0] === undefined ? <h1>Sem habitos</h1> : null}
            {loading ? (
              <div className="caixaHabitos">
                {habitos.map(habit => <HabitCard
                  habit={habit}
                  achieved={habit.achieved}
                  setHabitos={setHabitos}
                  habitos={habitos}
                />)}
              </div>
            ) : (
              <Loader/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
