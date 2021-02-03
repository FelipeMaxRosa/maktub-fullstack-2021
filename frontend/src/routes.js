import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Character";
import OtherPage from "./pages/CharactersList";

function Routes() {
  return (
      <Switch>
        <Route path="/character" component={Home} />
        <Route path="/characters" component={OtherPage} />
      </Switch>
  );
}

export default Routes;