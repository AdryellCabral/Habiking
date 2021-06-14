import { Route, Switch } from "react-router";
import HabitCard from "../components/HabitCard/HabitCard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/user"><HabitCard/></Route>
    </Switch>
  );
};

export default Routes;
