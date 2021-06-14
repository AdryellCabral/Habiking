import { Route, Switch } from "react-router";
import SearchGroup from "../pages/SearchGroup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/searchGroup">
        <SearchGroup />
      </Route>
    </Switch>
  );
};

export default Routes;
