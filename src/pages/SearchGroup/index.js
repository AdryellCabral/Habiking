import NavMenu from "../../components/NavMenu";

import { Breaker, TextField, SearchBreaker, SearchButton } from "./styles";

const SearchGroup = () => {
  return (
    <div>
      <NavMenu />
      <SearchBreaker>
        <TextField variant="outlined" label="Procurar Grupo" />
        <SearchButton>Procurar!</SearchButton>
      </SearchBreaker>

      <Breaker>
        <SearchButton>Anterior</SearchButton>
        <SearchButton>Próximo</SearchButton>
      </Breaker>

      <div></div>
    </div>
  );
};

export default SearchGroup;
