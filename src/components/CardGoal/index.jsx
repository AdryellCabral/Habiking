import { useState } from "react";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";

const CardGoal = ({ goal }) => {
  const { title, difficulty, achieved, id } = goal;
  const [isCompleted, setIsCompleted] = useState(achieved);

  const {userToken} = useToken()

  const handleClick = () => {
    apiKabit
      .post(
        `/goals/${id}/`,
        { achieved: true },
        {
          Authorization: `Bearer ${userToken}`,
        }
      )
      .then((response) => {
        console.log(isCompleted);
        setIsCompleted(true);
      });
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>Dificuldade: {difficulty}</h3>
      {isCompleted ? (
        <h3>Completado</h3>
      ) : (
        <ButtonComp PropFunction={handleClick}>Completar</ButtonComp>
      )}
    </div>
  );
};

export default CardGoal;
