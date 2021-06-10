import { Route, Switch } from "react-router";
import RegisterPage from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default Routes;
