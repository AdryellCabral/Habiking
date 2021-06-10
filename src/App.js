import NavMenu from "./components/NavMenu";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import CreateGroup from "./components/CreateGroup"

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes />
      <GlobalStyle />
      <CreateGroup />
    </div>
  );
}

export default App;
