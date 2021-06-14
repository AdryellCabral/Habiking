import NavMenu from "../../components/NavMenu";
import axios from "axios";
import CardGroup from "../../components/CardGroup";
import ButtonComp from "../../components/ButtonComp";

import { Breaker, TextField, SearchButton, Container } from "./styles";
import { useEffect, useState } from "react";

const SearchGroup = () => {
  const [loaded, setLoaded] = useState(false);

  const [groups, setGroups] = useState(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => setGroups(response.data.results));
  });
  const [userGroups, setUserGroups] = useState(() => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/subscriptions/")
      .then((response) => setUserGroups(response.data))
      .then((response) => setLoaded(true));
  });
  const [currentGroup, setCurrentGroup] = useState(0);
  const [userSearch, setUserSearch] = useState("");
  const [userIsIn, setUserIsIn] = useState(true);

  useEffect(() => {
    if (loaded) {
      if (userGroups.find((elem) => elem.id === groups[currentGroup]) === -1) {
        setUserIsIn(false);
      } else {
        setUserIsIn(true);
      }
    }
  }, [currentGroup]);

  const handleGroupNav = (action) =>
    action
      ? currentGroup < groups.length - 1 && setCurrentGroup(currentGroup + 1)
      : currentGroup > 0 && setCurrentGroup(currentGroup - 1);

  const handleGroupSearch = (name) =>
    setCurrentGroup(groups.indexOf(groups.find((elem) => elem.name === name)));

  const handleSubs = (group) => {
    if (userGroups.find((elem) => elem.id === group.id) === -1) {
      axios
        .post(`https://kabit-api.herokuapp.com/groups/${group.id}/subscribe/`)
        .catch((e) => console.log(e));
    }
  };

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

      <CardGroup
        loaded={loaded}
        isIn={userIsIn}
        action={() => handleSubs(groups[currentGroup])}
        group={groups && groups[currentGroup]}
      />
    </Container>
  );
};

export default SearchGroup;
