import { Route, Switch } from "react-router";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import GroupsPages from "../pages/Groups";
import CreateGroupPage from "../pages/CreateGroupPage";
import EditGroupPage from "../pages/EditGroupPage";
import SearchGroup from "../pages/SearchGroup";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import CreateHabit from "../pages/CreateHabitPage";

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
      <Route exact path="/create-habit">
        <CreateHabit/>
      </Route>
      <Route path="/groups">
        <GroupsPages />
      </Route>
      <Route path="/search-group">
        <SearchGroup />
      </Route>
      <Route path="/create-group">
        <CreateGroupPage />
      </Route>
      <Route exact path="/edit-group">
        <EditGroupPage />
      </Route>
      
      <Route >
        <NotFound />
      </Route>

    </Switch>
  );
};

export default Routes;
