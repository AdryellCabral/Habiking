import NavMenu from "../../components/NavMenu";
import CardGroup from "../../components/CardGroup";

import {
  Breaker,
  TextField,
  SearchButton,
  Container,
  GroupContainer,
} from "./styles";
import { useEffect, useState } from "react";

import { useUnsubscribedGroups } from "../../providers/unsubscribedGroups";
import ButtonComp from "../../components/ButtonComp";
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";
import { useToken } from "../../providers/UserToken";

const SearchGroup = () => {
  const { unsubscribedGroups, setURL, nextPag, previousPag } =
    useUnsubscribedGroups();
    const {setUserToken} = useToken()
  const [userSearch, setUserSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [groupsFiltred, setGroupsFiltred] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const handleChangePag = (url) => {
    setIsLoading(true);
    const index = url.indexOf("?");
    const endPoint = url.slice(index);
    if (index === -1) {
      setURL("/groups/");
    } else {
      setURL(`/groups/${endPoint}`);
    }
  };

  const GroupSearch = (name) => {
    const newList = unsubscribedGroups.filter(
      (group) => group.name.toUpperCase() === name.toUpperCase()
    );
    setGroupsFiltred(newList);
    setFiltered(true);
  };

  const handleChange = (value) => {
    setUserSearch(value);
    if (value === "") {
      setGroupsFiltred([]);
      setFiltered(false);
    } else {
      GroupSearch(value);
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [unsubscribedGroups]);

  const localToken = JSON.parse(localStorage.getItem("@tokenKabit")) || "";

  if (localToken === "") {
    return <Redirect to="/" />;
  } else {
    setUserToken(localToken);
  }

  return (
    <Container>
      <NavMenu />
      <Breaker>
        <TextField value={userSearch} onChange={(e) => handleChange(e.target.value)} placeholder="Filtrar grupos por nome"/>
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
        {isLoading ? (
          <Loader />
        ) : filtered ? (
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
