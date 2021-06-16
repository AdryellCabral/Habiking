import { Route, Switch } from "react-router";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import GroupsPages from "../pages/Groups"
import CreateGroupPage from "../pages/CreateGroupPage";
import HabitCard from "../components/HabitCard/HabitCard";
import Users from "../pages/Users";
import CreateHabit from "../pages/CreateHabit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/user">
        <Users/>
      </Route>
      <Route exact path="/criarHabito">
        <CreateHabit/>
      </Route>
      <Route path="/groups">
        <GroupsPages />
      </Route>
      <Route path="/create-group">
        <CreateGroupPage />
      </Route>
    </Switch>
  );
};

export default Routes;
