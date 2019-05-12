import React from "react";
import { Route, Switch } from "react-router";

import StartPage from "./pages/StartPage";
import ToDoListPage from "./pages/ToDoListPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={StartPage} />
    <Route path="/to-do-list" component={ToDoListPage} />
  </Switch>
);

export default App;
