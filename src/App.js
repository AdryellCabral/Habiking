import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}

export default App;
