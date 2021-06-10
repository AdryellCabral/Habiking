import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { DivContainer } from "./styles";

const GroupList = () => {
  const categorys = [
    {
      value: "Saúde",
    },
    {
      value: "Jogos",
    },
    {
      value: "Educação",
    },
    {
      value: "Social",
    },
    {
      value: "Livros",
    },
    {
      value: "Filmes e Séries",
    },
    {
      value: "Esportes",
    },
    {
      value: "Outros",
    },
  ];
  const [category, setCategory] = useState(categorys[0].value);


  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <DivContainer>
      <TextField
        select
        label="Categorys"
        onChange={handleChange}
        value={category}
      >
        {categorys.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.value}
          </MenuItem>
        ))}
      </TextField>
    </DivContainer>
  );
};

export default GroupList;
