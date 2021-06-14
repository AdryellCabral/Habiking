import NavMenu from "./components/NavMenu";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import SearchGroup from "./pages/SearchGroup";

function App() {
  return (
    <div className="App">
      <SearchGroup />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
