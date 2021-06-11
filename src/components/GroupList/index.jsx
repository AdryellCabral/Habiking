import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { useState } from "react";
import { DivContainer, DivGroups } from "./styles";

const GroupList = ({ setShowGroup, groups }) => {
  const categorys = [
    {
      value: "Todos",
    },
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
      value: "Book Happy",
    },
  ];
  const [category, setCategory] = useState(categorys[0].value);
  const [groupsFiltred, setGroupsFiltred] = useState([]);
  const handleChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "todos") {
      setGroupsFiltred(groups);
    } else {
      const newList = groups.filter(
        (group) => group.category === e.target.value
      );

      setGroupsFiltred(newList);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (groupsFiltred.length === 0) {
      setGroupsFiltred(groups);
    }
  });
  return (
    <DivContainer>
      <TextField
        select
        label="Categorys"
        variant="outlined"
        onChange={handleChange}
        value={category}
      >
        {categorys.map((category) => (
          <MenuItem value={category.value} key={category.value}>
            {category.value}
          </MenuItem>
        ))}
      </TextField>

      <DivGroups>
        <ul>
          {groupsFiltred.map((group, index) => {
            return <Button variant="contained" onClick={() => setShowGroup(group)} key={index}>{group.name}</Button>;
          })}
        </ul>
      </DivGroups>
    </DivContainer>
  );
};

export default GroupList;
