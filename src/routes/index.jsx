import { Route, Switch } from "react-router";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
