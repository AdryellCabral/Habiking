import { useState } from "react";
import NavMenu from "../../components/NavMenu";
import { ContainerHab, Breaker } from "./styles";
import ButtomComp from "../../components/ButtonComp";

const CreateHabit = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [frequency, setFrequency] = useState();

  return (
    <>
      <NavMenu />
      <Breaker>
        <ContainerHab>
          <h1>Criar Hábito</h1>
          <input
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          ></input>
          <input
            placeholder="Dificuldade"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          ></input>
          <input
            placeholder="Frequencia"
            value={frequency}
            onChange={(event) => setFrequency(event.target.value)}
          ></input>
          <ButtomComp>Criar</ButtomComp>
        </ContainerHab>
      </Breaker>
    </>
  );
};

export default CreateHabit;
