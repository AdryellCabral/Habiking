import NavMenu from "../../components/NavMenu";
import CardGroup from "../../components/CardGroup";
import ButtonComp from "../../components/ButtonComp";

import {
  Breaker,
  TextField,
  SearchButton,
  Container,
  GroupContainer,
} from "./styles";
import { useEffect, useState } from "react";

import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { apiKabit } from "../../utils/apis";
import { useToken } from "../../providers/UserToken";

const SearchGroup = () => {
  const { groups } = useGroupsSubscriptions();
  const { userToken } = useToken();

  const [loaded, setLoaded] = useState(false);
  const [allGroups, setAllGroups] = useState(() => {
    apiKabit
      .get("/groups/")
      .then((response) => response.data.results)
      .then((response) =>
        setAllGroups(
          response.filter(
            (elem) => !groups.find((elem2) => elem2.id === elem.id)
          )
        )
      )
      .then((response) => setLoaded(true));
  });
  const [searching, setSearching] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  const handleGroupSearch = (name) => {
    setAllGroups([allGroups.find((elem) => elem.name === name)]);
    setSearching(true);
  };

  const handleGoBack = () => {
    apiKabit
      .get("/groups/")
      .then((response) => response.data.results)
      .then((response) =>
        setAllGroups(
          response.filter(
            (elem) => !groups.find((elem2) => elem2.id === elem.id)
          )
        )
      );
    setSearching(false);
    setUserSearch("");
  };

  const handleSubs = (group) => {
    const config = {
      headers: {
        null: "",
        Authorization: `Bearer ${userToken}`,
      },
    };

    apiKabit
      .post(`/groups/${group.id}/subscribe/`, config)
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <NavMenu />
      <Breaker>
        <TextField
          value={userSearch}
          placeholder="Nome do Grupo"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        {searching ? (
          <SearchButton onClick={() => handleGoBack()}>Voltar</SearchButton>
        ) : (
          <SearchButton onClick={() => handleGroupSearch(userSearch)}>
            Procurar!
          </SearchButton>
        )}
      </Breaker>

      <GroupContainer>
        {allGroups?.map((elem) => (
          <CardGroup
            key={elem.id}
            action={() => handleSubs(elem)}
            group={elem}
          />
        ))}
      </GroupContainer>
    </Container>
  );
};

export default SearchGroup;
