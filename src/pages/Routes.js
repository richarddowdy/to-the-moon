//React
import React from "react";

//Components
import Home from "../pages/Home";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
