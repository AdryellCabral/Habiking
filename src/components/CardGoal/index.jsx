import { useState } from "react";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";
import { DivContainer } from "./styles";

const CardGoal = ({ goal, isCreator }) => {
  const { title, difficulty, achieved, id } = goal;
  const [isCompleted, setIsCompleted] = useState(achieved);

  const { userToken } = useToken();
  const handleClick = () => {
    apiKabit
      .patch(
        `/goals/${id}/`,
        { achieved: true },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        setIsCompleted(true);
      });
  };
  return (
    <DivContainer>
      <h2>Titulo: {title}</h2>
      <h3>Dificuldade: {difficulty}</h3>
      {isCreator ? (
        isCompleted ? (
          <h3 className="completed">Completado</h3>
        ) : (
          <ButtonComp PropFunction={handleClick}>Completar</ButtonComp>
        )
      ) : isCompleted ? (
        <h3 className="completed">Completado</h3>
      ) : (
        <h3>Incompleto</h3>
      )}
    </DivContainer>
  );
};

export default CardGoal;
