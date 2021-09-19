import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function Routes() {
  // const profile = useQuery().get("profile");

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/test">
        <Test />
      </Route>
      {/* <Route exact path="/posts/:id">
        <PostContainer />
      </Route>
      <Route exact path="/user/:id">
        <UserProfile />
      </Route>
      <PrivateRoute exact path="/new">
        <NewPost />
      </PrivateRoute>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route>
        <NotFound />
      </Route> */}
    </Switch>
  );
}

export default Routes;
