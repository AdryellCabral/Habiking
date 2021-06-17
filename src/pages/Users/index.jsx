import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import HabitCard from "../../components/HabitCard/HabitCard";
import NavMenu from "../../components/NavMenu";

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
      let config = { headers: { Authorization: "Bearer " + userToken } };

      apiKabit.get("/habits/personal/", config).then((response) => {
        setHabitos(response.data);
        setLoading(true);
      });
    }
  }, [userToken]);

  console.log(habitos);
  return (
    <>
      <NavMenu />
      <div>
        {username}

        <div>
          <div>
            <h1>Habitos</h1>
            <Link to="/create-habit">
              <button>Criar Habito</button>
            </Link>
          </div>

          <div>
            <p>lista de habitos</p>
            {habitos[0] === undefined ? <h1>Sem habitos</h1> : null}
            {loading ? (
              <div>
                <HabitCard
                  habit={habitos}
                  setHabitos={setHabitos}
                  habitos={habitos}
                />{" "}
              </div>
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
