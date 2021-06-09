import Button from "./components/Button";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Button>Click Me</Button>
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
