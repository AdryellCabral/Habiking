import NavMenu from "./components/NavMenu";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      {/* <NavMenu /> */}
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
