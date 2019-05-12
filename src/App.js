import React from "react";
import { Route, Switch } from "react-router";

import ToDoListPage from "./pages/ToDoListPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={ToDoListPage} />
  </Switch>
);

export default App;
