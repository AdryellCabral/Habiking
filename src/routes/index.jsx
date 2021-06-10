import { Route, Switch } from "react-router";
import GroupsPages from "../pages/Groups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/groups">
        <GroupsPages />
      </Route>
    </Switch>
  );
};

export default Routes;
