import { Route, Switch } from "react-router";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import HabitCard from "../components/HabitCard/HabitCard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/user">
        <HabitCard/>
      </Route>
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
