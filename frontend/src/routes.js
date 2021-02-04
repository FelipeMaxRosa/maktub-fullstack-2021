import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Character";
import CharacterList from "./pages/CharactersList";
import CharacterDetails from "./pages/CharacterDetails";

function Routes() {
  return (
      <Switch>
        <Route path="/character" component={Home} />
        <Route exact path="/characters" component={CharacterList} />
        <Route path="/characters/:id" component={CharacterDetails} />
      </Switch>
  );
}

export default Routes;