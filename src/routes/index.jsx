import { Route, Switch } from "react-router";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
