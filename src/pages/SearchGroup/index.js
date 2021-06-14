import NavMenu from "../../components/NavMenu";
import axios from "axios";
import CardGroup from "../../components/CardGroup";

import {
  Breaker,
  TextField,
  SearchButton,
  GroupsDisplay,
  Container,
} from "./styles";
import { useState } from "react";

const SearchGroup = () => {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0);

  axios
    .get("https://kabit-api.herokuapp.com/groups/")
    .then((response) => setGroups(response.data.results));

  const handleGroupView = (action) =>
    action
      ? setCurrentGroup(currentGroup + 1)
      : setCurrentGroup(currentGroup - 1);

  return (
    <Container>
      <NavMenu />
      <Breaker>
        <TextField variant="outlined" label="Procurar Grupo" />
        <SearchButton>Procurar!</SearchButton>
      </Breaker>

      <Breaker>
        <SearchButton PropFunction={() => handleGroupView(false)}>
          Anterior
        </SearchButton>
        <SearchButton PropFunction={() => handleGroupView(true)}>
          Próximo
        </SearchButton>
      </Breaker>

      <GroupsDisplay>
        <CardGroup group={groups[currentGroup]} />
      </GroupsDisplay>
    </Container>
  );
};

export default SearchGroup;
