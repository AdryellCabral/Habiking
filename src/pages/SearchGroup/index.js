import NavMenu from "../../components/NavMenu";
import axios from "axios";
import CardGroup from "../../components/CardGroup";
import ButtonComp from "../../components/ButtonComp";

import { Breaker, TextField, SearchButton, Container } from "./styles";
import { useState } from "react";

const SearchGroup = () => {
  const [groups, setGroups] = useState(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => setGroups(response.data.results));
  });
  const [currentGroup, setCurrentGroup] = useState(0);
  const [userSearch, setUserSearch] = useState("");

  const handleGroupNav = (action) =>
    action
      ? currentGroup < groups.length - 1 && setCurrentGroup(currentGroup + 1)
      : currentGroup > 0 && setCurrentGroup(currentGroup - 1);

  const handleGroupSearch = (name) =>
    setCurrentGroup(groups.indexOf(groups.find((elem) => elem.name === name)));

  return (
    <Container>
      <NavMenu />
      <Breaker>
        <TextField
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <SearchButton onClick={() => handleGroupSearch(userSearch)}>
          Procurar!
        </SearchButton>
      </Breaker>

      <Breaker>
        <ButtonComp PropFunction={() => handleGroupNav(false)}>
          Anterior
        </ButtonComp>
        <ButtonComp PropFunction={() => handleGroupNav(true)}>
          Próximo
        </ButtonComp>
      </Breaker>
      <CardGroup group={groups && groups[currentGroup]} />
    </Container>
  );
};

export default SearchGroup;
