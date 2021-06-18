import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ButtonComp from "../ButtonComp";
import { useEffect } from "react";
import { useState } from "react";
import { DivContainer, DivGroups } from "./styles";
import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { FormControl, InputLabel } from "@material-ui/core";

const GroupList = ({ setShowGroup, groups }) => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        backgroundColor: "var(--colorThree)",
        color: "var(--colorTwo)",
      },
    },
  };
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
  ];
  const { setEditGroupId } = useGroupsSubscriptions();

  const [category, setCategory] = useState(categorys[0].value);
  const [groupsFiltred, setGroupsFiltred] = useState([]);
  const handleChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "Todos") {
      setGroupsFiltred(groups);
    } else {
      const newList = groups.filter(
        (group) => group.category === e.target.value
      );
      console.log(newList);
      setGroupsFiltred(newList);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (groupsFiltred.length === 0) {
      setGroupsFiltred(groups);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  const handleClick = (group) => {
    setEditGroupId(group.id);
    setShowGroup(group);
  };
  return (
    <DivContainer>
      <FormControl>
        <InputLabel>Categorias</InputLabel>
        <Select
          MenuProps={MenuProps}
          labelId="Categorys"
          id={"Categoria"}
          // variant="outlined"
          onChange={handleChange}
          value={category}
        >
          {categorys.map((category) => (
            <MenuItem value={category.value} key={category.value}>
              {category.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <DivGroups>
        {groupsFiltred.length === 0 ? (
          <p>Nenhum grupo encontrado.</p>
        ) : (
          <ul>
            {groupsFiltred.map((group, index) => (
              <ButtonComp
                variant="contained"
                onClick={() => handleClick(group)}
                key={index}
              >
                {group.name}
              </ButtonComp>
            ))}
          </ul>
        )}
      </DivGroups>
    </DivContainer>
  );
};

export default GroupList;
