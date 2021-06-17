import { useState } from "react";
import { useToken } from "../../providers/UserToken";
import { apiKabit } from "../../utils/apis";
import ButtonComp from "../ButtonComp";
import { Breaker, CardContainer } from "./styles";

const HabitCard = ({ achieved, habit, setHabitos, habitos }) => {
  const { userToken } = useToken();
  const [isCompleted, setIsCompleted] = useState(achieved);
  const handleClick = () => {
    const config = { headers: { Authorization: "Bearer " + userToken } };

    apiKabit.delete(`/habits/${habit.id}/`, config);

    setHabitos(habitos.filter((habito) => habito.id !== habit.id));
  };

  const handleComplete = () => {
    apiKabit
      .patch(
        `/habits/${habit.id}/`,
        { achieved: true },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        setIsCompleted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardContainer>
      <h1>{habit.title}</h1>
      <h2>{habit.category}</h2>
      <p>{habit.difficulty}</p>
      <p>{habit.frequency}</p>

      <Breaker>
        <ButtonComp onClick={handleClick}>Deletar</ButtonComp>
        {isCompleted ? (
          <h1>Completado ✔</h1>
        ) : (
          <ButtonComp PropFunction={handleComplete}>✔</ButtonComp>
        )}
      </Breaker>
    </CardContainer>
  );
};

export default HabitCard;
