import { Route, Switch } from "react-router";
import LoginPage from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
