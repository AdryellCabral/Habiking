import CreateGroup from "./components/CreateGroup";
import  Routes  from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <CreateGroup />
    </div>
  );
}

export default App;
