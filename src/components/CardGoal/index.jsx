import { useState } from "react";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";

const CardGoal = ({ goal }) => {
  const { title, difficulty, achieved, id } = goal;
  const [isCompleted, setIsCompleted] = useState(achieved);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzY5MjA1LCJqdGkiOiI3NGFkYjk5NmUyYzM0MzM2OWM2MzIwMjIyNjg1MjUyNCIsInVzZXJfaWQiOjY4MX0.CYFmrpSSwhVJo9FScQis_LJAxKE1vxTmeK-PfmOxbSM";

  const handleClick = () => {
    apiKabit
      .post(
        `/goals/${id}/`,
        { achieved: true },
        {
          Authorization: `Bearer ${token}`,
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
