import NavMenu from "./components/NavMenu";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import CreateActivitiesForm from "./components/CreateActivitiesForm"
import CreateGoalForm from "./components/CreateGoalForm";
import GroupUpdateForm from "./components/GroupUpdateForm";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes />
      <GlobalStyle />
      <GroupUpdateForm group_id={}/>
      <CreateGoalForm group_id={}/>
      <CreateActivitiesForm group_id={}/>
    </div>
  );
}

export default App;
