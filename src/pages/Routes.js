import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";


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
