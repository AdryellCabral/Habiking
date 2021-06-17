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

import { useUnsubscribedGroups } from "../../providers/unsubscribedGroups";
import ButtonComp from "../../components/ButtonComp";

const SearchGroup = () => {
  const { unsubscribedGroups, setURL, nextPag, previousPag } =
    useUnsubscribedGroups();
  const [userSearch, setUserSearch] = useState("");

  const [groupsFiltred, setGroupsFiltred] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const handleChangePag = (url) => {
    const index = url.indexOf("?");
    const endPoint = url.slice(index);
    if (index === -1) {
      setURL("/groups/");
    } else {
      setURL(`/groups/${endPoint}`);
    }
  };

  const handleGroupSearch = (name) => {
    const newList = unsubscribedGroups.filter(
      (group) => group.name.toUpperCase() === name.toUpperCase()
    );
    setGroupsFiltred(newList);
    setFiltered(true);
  };

  const handleChange = (e) => {
    setUserSearch(e.target.value);
    if (e.target.value === "") {
      setGroupsFiltred([]);
      setFiltered(false);
    }
  };

  return (
    <Container>
      <NavMenu />
      <Breaker>
        <TextField value={userSearch} onChange={(e) => handleChange(e)} />
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
          Próxima Página
        </ButtonComp>
      </div>
      <GroupContainer>
        {filtered ? (
          groupsFiltred.length > 0 ? (
            groupsFiltred.map((elem) => (
              <CardGroup key={elem.id} group={elem} />
            ))
          ) : (
            <h5>Nenhum grupo encontrado</h5> // gambiarra
          )
        ) : (
          unsubscribedGroups?.map((elem) => (
            <CardGroup key={elem.id} group={elem} />
          ))
        )}
      </GroupContainer>
    </Container>
  );
};

export default SearchGroup;
