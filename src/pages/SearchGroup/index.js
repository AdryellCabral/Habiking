import NavMenu from "../../components/NavMenu";
import CardGroup from "../../components/CardGroup";

import {
  Breaker,
  TextField,
  SearchButton,
  Container,
  GroupContainer,
} from "./styles";
import { useState } from "react";

import { useGroupsSubscriptions } from "../../providers/groupsSubscriptions";
import { useToken } from "../../providers/UserToken";
import { useUnsubscribedGroups } from "../../providers/unsubscribedGroups";
import ButtonComp from "../../components/ButtonComp";

const SearchGroup = () => {
  const { groups } = useGroupsSubscriptions();
  const { userToken } = useToken();
  const { unsubscribedGroups, URL, setURL, nextPag, previousPag } =
    useUnsubscribedGroups();
  const [userSearch, setUserSearch] = useState("");
  const handleGroupSearch = (name) => {};

  const handleChangePag = (url) => {
    const index = url.indexOf("?");
    const endPoint = url.slice(index);
    if (index === -1) {
      setURL("/groups/");
    } else {
      setURL(`/groups/${endPoint}`);
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
      <div id="buttons-container">
        <ButtonComp
          disabled={previousPag === null}
          onClick={() => handleChangePag(previousPag)}
        >
          Página anterior
        </ButtonComp>
        <ButtonComp
          disabled={nextPag === null}
          onClick={() => handleChangePag(nextPag)}
        >
          Proxima Página
        </ButtonComp>
      </div>
      <GroupContainer>
        {unsubscribedGroups?.map((elem) => (
          <CardGroup key={elem.id} group={elem} />
        ))}
      </GroupContainer>
    </Container>
  );
};

export default SearchGroup;
