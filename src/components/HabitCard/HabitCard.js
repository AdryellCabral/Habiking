import { Link } from "react-router-dom";
import { CardContainer, Breaker } from "./styles";
import ButtonComp from "../ButtonComp";

const HabitCard = ({ setHabitos, habitos }) => {
  return (
    <>
      {habitos.map((habit) => (
        <CardContainer>
          <h1>{habit.title}</h1>
          <h2>{habit.category}</h2>
          <p>{habit.difficulty}</p>
          <p>{habit.frequency}</p>

          <Breaker>
            <ButtonComp
              onClick={() =>
                setHabitos(habitos.filter((habito) => habito.id !== habit.id))
              }
            >
              Deletar
            </ButtonComp>
            <div>
              <label>Completado?</label>
              <input type="checkbox" />
            </div>
          </Breaker>
        </CardContainer>
      ))}
    </>
  );
};

export default HabitCard;
